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
    try {
      // 1. Read image data into cv.Mat
      let src = self.cv.matFromImageData(originalImageData);
      let mask = self.cv.matFromImageData(maskImageData);
      let dst = new self.cv.Mat();

      // 2. Convert mask to Grayscale (single channel) as required by inpaint
      let maskGray = new self.cv.Mat();
      self.cv.cvtColor(mask, maskGray, self.cv.COLOR_RGBA2GRAY);

      // We need the mask to be purely 0 (background) and 255 (watermark)
      // The canvas mask we sent has white (255) for the brush strokes.
      // Threshold to ensure binary mask
      self.cv.threshold(maskGray, maskGray, 10, 255, self.cv.THRESH_BINARY);

      // 3. Inpaint
      // inpaint radius: 3 (standard), algorithm: cv.INPAINT_TELEA
      self.cv.inpaint(src, maskGray, dst, 3, self.cv.INPAINT_TELEA);

      // 4. Convert back to ImageData
      // In JS, we can create a new ImageData from dst.data
      const resultImageData = new ImageData(
        new Uint8ClampedArray(dst.data),
        dst.cols,
        dst.rows
      );

      // Cleanup memory (CRITICAL in WebAssembly)
      src.delete();
      mask.delete();
      maskGray.delete();
      dst.delete();

      self.postMessage({ success: true, resultImageData });
    } catch (error) {
      console.error("OpenCV Worker Error:", error);
      self.postMessage({ success: false, error: error.message || "Unknown OpenCV error" });
    }
  }
};
