'use client';

import React, { useState, useRef } from 'react';
import { Upload, Download, ArrowLeft, Info, AlertTriangle, FileText } from 'lucide-react';
import WatermarkBrushCanvas from '@/components/tools/WatermarkBrushCanvas';
import { usePdfWatermarkRemover } from '@/hooks/usePdfWatermarkRemover';

export default function RemovePdfWatermarkClient() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [firstPagePreview, setFirstPagePreview] = useState<string | null>(null);
  const [isExtracting, setIsExtracting] = useState(false);
  const [showLargeFileWarning, setShowLargeFileWarning] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    isProcessing,
    progress,
    error,
    resultPdfUrl,
    processPdf,
    getFirstPageAsImage,
    setResultPdfUrl,
  } = usePdfWatermarkRemover();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      alert('Please select a PDF document.');
      return;
    }

    // Reset
    setSelectedFile(file);
    setFirstPagePreview(null);
    setResultPdfUrl(null);
    setShowLargeFileWarning(file.size > 5 * 1024 * 1024);
    setIsExtracting(true);

    try {
      const previewUrl = await getFirstPageAsImage(file);
      setFirstPagePreview(previewUrl);
    } catch (err) {
      console.error("Failed to read PDF:", err);
      alert("Failed to read the PDF document.");
      setSelectedFile(null);
    } finally {
      setIsExtracting(false);
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
       handleFileChange({ target: { files: dataTransfer.files } } as any);
    }
  };

  const handleProcess = async (originalImageData: ImageData, maskImageData: ImageData) => {
     if (!selectedFile) return;
     await processPdf(selectedFile, maskImageData, maskImageData.width, maskImageData.height);
  };

  const resetAll = () => {
    setSelectedFile(null);
    setFirstPagePreview(null);
    setResultPdfUrl(null);
    setShowLargeFileWarning(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative">
      
      {/* Processing Overlay */}
      {isProcessing && (
         <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Processing PDF...</h3>
            <div className="w-full max-w-md bg-gray-200 rounded-full h-4 mb-4 overflow-hidden">
               <div 
                 className="bg-indigo-600 h-4 rounded-full transition-all duration-300 ease-out" 
                 style={{ width: `${progress}%` }}
               ></div>
            </div>
            <p className="text-gray-600 font-medium">{progress}% Complete</p>
            <p className="text-sm text-gray-500 mt-6 max-w-sm text-center">
               Please don't close this tab. Processing happens entirely on your device, which may take some time for large documents.
            </p>
         </div>
      )}

      {/* Step 1: Upload */}
      {!firstPagePreview && !resultPdfUrl && (
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
            accept="application/pdf"
            onChange={handleFileChange}
          />
          
          <div className="bg-white p-4 rounded-full shadow-sm mb-4">
            {isExtracting ? (
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            ) : (
              <FileText className="w-8 h-8 text-indigo-600" />
            )}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {isExtracting ? 'Extracting Preview...' : 'Upload your PDF'}
          </h3>
          <p className="text-gray-500 mb-6 text-center">
            Drag and drop your document here, or click to browse. <br/> (Max recommended: 100 pages)
          </p>
          <button 
            disabled={isExtracting}
            className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors shadow-md disabled:opacity-50"
          >
            Select PDF
          </button>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="m-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center space-x-3">
          <AlertTriangle size={20} className="shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {/* Warning for large files */}
      {showLargeFileWarning && firstPagePreview && !resultPdfUrl && (
         <div className="mx-6 mt-6 bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-4 rounded-xl flex items-start space-x-3">
            <AlertTriangle size={24} className="shrink-0 mt-0.5 text-yellow-600" />
            <div>
               <h4 className="font-semibold text-yellow-900">Large File Detected</h4>
               <p className="text-sm mt-1">
                 Your PDF is larger than 5MB. Since we process everything safely in your browser without servers, this might cause your browser to feel slow during processing. We will process it in chunks to prevent crashes.
               </p>
            </div>
         </div>
      )}

      {/* Step 2: Draw Mask */}
      {firstPagePreview && !resultPdfUrl && (
        <div className="p-6 sm:p-8 flex flex-col space-y-6">
           <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <button 
                onClick={resetAll}
                className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 transition-colors font-medium shrink-0"
              >
                <ArrowLeft size={18} />
                <span>Choose different PDF</span>
              </button>
              
              <div className="flex items-center space-x-2 bg-indigo-50 px-4 py-2 rounded-lg border border-indigo-100">
                <Info size={16} className="text-indigo-600 shrink-0" />
                <span className="text-sm text-indigo-900">
                   Highlight the watermark on this page. We'll remove it from <strong>all pages</strong> automatically.
                </span>
              </div>
           </div>

           <WatermarkBrushCanvas 
             imageSrc={firstPagePreview} 
             onProcess={handleProcess} 
             isProcessing={isProcessing} 
           />
        </div>
      )}

      {/* Step 3: Result & Download */}
      {resultPdfUrl && (
        <div className="p-6 sm:p-8 flex flex-col items-center space-y-8">
           <div className="w-full flex justify-center mb-4">
              <div className="bg-green-100 text-green-800 p-4 rounded-full">
                 <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
           </div>
           
           <h3 className="text-2xl font-bold text-gray-900 text-center">Processing Complete!</h3>
           <p className="text-gray-600 text-center max-w-md">
              Your PDF has been successfully processed client-side. The watermark has been removed from all pages.
           </p>

           <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm mt-8">
             <a 
                href={resultPdfUrl}
                download={`watermark-removed-${selectedFile?.name || 'document'}.pdf`}
                className="flex-1 flex items-center justify-center space-x-2 bg-indigo-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
             >
                <Download size={20} />
                <span>Download Clean PDF</span>
             </a>
           </div>
           
           <button 
              onClick={resetAll}
              className="text-gray-500 hover:text-gray-900 font-medium underline underline-offset-4 mt-6"
           >
             Process another document
           </button>
        </div>
      )}

    </div>
  );
}
