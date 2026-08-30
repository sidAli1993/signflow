'use client';

import React, { useState, useRef } from 'react';
import { Upload, Download, ArrowLeft, Info, AlertTriangle } from 'lucide-react';
import WatermarkBrushCanvas from '@/components/tools/WatermarkBrushCanvas';
import { useWatermarkRemover } from '@/hooks/useWatermarkRemover';

export default function RemoveImageWatermarkClient() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isCompressing, setIsCompressing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    isProcessing,
    error,
    resultImage,
    processImage,
    compressImageIfNeeded,
    setResultImage,
  } = useWatermarkRemover();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file (JPEG, PNG, WEBP).');
      return;
    }

    // Reset states
    setSelectedFile(null);
    setImagePreview(null);
    setResultImage(null);
    setIsCompressing(true);

    try {
      const processedFile = await compressImageIfNeeded(file);
      setSelectedFile(processedFile);
      
      const objectUrl = URL.createObjectURL(processedFile);
      setImagePreview(objectUrl);
    } catch (err) {
      console.error("Failed to process uploaded file:", err);
      alert("Failed to read image. Please try another one.");
    } finally {
      setIsCompressing(false);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && fileInputRef.current) {
       const dataTransfer = new DataTransfer();
       dataTransfer.items.add(file);
       fileInputRef.current.files = dataTransfer.files;
       // Manually trigger the change event logic
       handleFileChange({ target: { files: dataTransfer.files } } as any);
    }
  };

  const handleDownload = () => {
    if (!resultImage) return;
    const a = document.createElement('a');
    a.href = resultImage;
    a.download = `watermark-removed-${selectedFile?.name || 'image'}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const resetAll = () => {
    setSelectedFile(null);
    setImagePreview(null);
    setResultImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
      
      {/* Step 1: Upload */}
      {!imagePreview && !resultImage && (
        <div 
          className="p-12 sm:p-20 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-2xl m-6 bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <input 
            type="file" 
            ref={fileInputRef}
            className="hidden" 
            accept="image/jpeg, image/png, image/webp"
            onChange={handleFileChange}
          />
          
          <div className="bg-white p-4 rounded-full shadow-sm mb-4">
            {isCompressing ? (
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            ) : (
              <Upload className="w-8 h-8 text-indigo-600" />
            )}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {isCompressing ? 'Preparing Image...' : 'Upload your image'}
          </h3>
          <p className="text-gray-500 mb-6 text-center">
            Drag and drop your image here, or click to browse. <br/> (JPEG, PNG, WEBP)
          </p>
          <button 
            disabled={isCompressing}
            className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors shadow-md disabled:opacity-50"
          >
            Select Image
          </button>
          
          <div className="mt-8 flex items-center space-x-2 text-sm text-gray-500 bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">
            <Info size={16} className="text-blue-500" />
            <span>Files larger than 1MB are automatically compressed for faster browser processing.</span>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="m-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center space-x-3">
          <AlertTriangle size={20} className="shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {/* Step 2: Draw Mask (Processing) */}
      {imagePreview && !resultImage && (
        <div className="p-6 sm:p-8 flex flex-col space-y-6">
           <div className="flex items-center justify-between">
              <button 
                onClick={resetAll}
                className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 transition-colors font-medium"
              >
                <ArrowLeft size={18} />
                <span>Choose different image</span>
              </button>
              <span className="text-sm font-semibold bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">Step 2: Highlight</span>
           </div>

           <WatermarkBrushCanvas 
             imageSrc={imagePreview} 
             onProcess={processImage} 
             isProcessing={isProcessing} 
           />
        </div>
      )}

      {/* Step 3: Result & Download */}
      {resultImage && (
        <div className="p-6 sm:p-8 flex flex-col items-center space-y-8">
           <div className="w-full flex items-center justify-between">
              <button 
                onClick={() => setResultImage(null)}
                className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 transition-colors font-medium"
              >
                <ArrowLeft size={18} />
                <span>Back to editing</span>
              </button>
              <span className="text-sm font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-full">Step 3: Download</span>
           </div>

           <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-[url('https://transparenttextures.com/patterns/cubes.png')] bg-gray-100">
              <img src={resultImage} alt="Watermark Removed Result" className="w-full h-auto object-contain max-h-[60vh]" />
           </div>

           <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
             <button 
                onClick={handleDownload}
                className="flex-1 flex items-center justify-center space-x-2 bg-indigo-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
             >
                <Download size={20} />
                <span>Download Clean Image</span>
             </button>
           </div>
           
           <button 
              onClick={resetAll}
              className="text-gray-500 hover:text-gray-900 font-medium underline underline-offset-4"
           >
             Start over with a new image
           </button>
        </div>
      )}

    </div>
  );
}
