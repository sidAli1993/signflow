// public/workers/opencvWorker.js

// Load OpenCV from CDN to avoid Next.js bundling issues
self.importScripts('https://docs.opencv.org/4.8.0/opencv.js');

self.onmessage = function (e) {
  const { originalImageData, maskImageData } = e.data;

  // We must wait for cv to be ready. 
  // OpenCV.js from the official CDN sets cv as a promise/object that resolves.
  if (self.cv.getBuildInformation) {
    processImage();
  } else {
    self.cv['onRuntimeInitialized'] = () => {
      processImage();
    };
  }

  function processImage() {
      // 1. Read image data into cv.Mat (RGBA by default)
      let src = self.cv.matFromImageData(originalImageData);
      let mask = self.cv.matFromImageData(maskImageData);
      
      // Convert src from RGBA to RGB (inpaint requires 1 or 3 channel image)
      let srcRgb = new self.cv.Mat();
      self.cv.cvtColor(src, srcRgb, self.cv.COLOR_RGBA2RGB, 0);

      // 2. Convert mask to Grayscale (single channel) as required by inpaint
      let maskGray = new self.cv.Mat();
      self.cv.cvtColor(mask, maskGray, self.cv.COLOR_RGBA2GRAY, 0);

      // We need the mask to be purely 0 (background) and 255 (watermark)
      self.cv.threshold(maskGray, maskGray, 10, 255, self.cv.THRESH_BINARY);

      // 3. Inpaint
      let dstRgb = new self.cv.Mat();
      self.cv.inpaint(srcRgb, maskGray, dstRgb, 3, self.cv.INPAINT_TELEA);

      // Convert back to RGBA so we can create an ImageData object
      let dstRgba = new self.cv.Mat();
      self.cv.cvtColor(dstRgb, dstRgba, self.cv.COLOR_RGB2RGBA, 0);

      // 4. Convert back to ImageData
      const resultImageData = new ImageData(
        new Uint8ClampedArray(dstRgba.data),
        dstRgba.cols,
        dstRgba.rows
      );

      // Cleanup memory (CRITICAL in WebAssembly)
      src.delete();
      mask.delete();
      srcRgb.delete();
      maskGray.delete();
      dstRgb.delete();
      dstRgba.delete();

      self.postMessage({ success: true, resultImageData });
    } catch (error) {
      console.error("OpenCV Worker Error:", error);
      self.postMessage({ success: false, error: error.message || "Unknown OpenCV error" });
    }
  }
};
