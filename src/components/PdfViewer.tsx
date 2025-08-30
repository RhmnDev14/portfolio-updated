"use client";

import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

// ✅ worker pdf.js (local, kompatibel Turbopack)
if (typeof window !== "undefined" && pdfjs.GlobalWorkerOptions) {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
  ).toString();
}

interface PdfViewerProps {
  file: string;
}

export default function PdfViewer({ file }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [width, setWidth] = useState<number>(600);
  const containerRef = useRef<HTMLDivElement>(null);

  // 🔥 Auto resize PDF
  useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth - 20);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ⛔ jangan render di server
  if (typeof window === "undefined") return null;

  return (
    <div
      ref={containerRef}
      className="border-4 border-gray-300 rounded-lg shadow-lg p-4 bg-white w-full max-w-3xl mx-auto"
    >
      <Document
        file={file}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        className="flex flex-col items-center"
      >
        {Array.from({ length: numPages }, (_, i) => (
          <Page key={`page_${i + 1}`} pageNumber={i + 1} width={width} />
        ))}
      </Document>
    </div>
  );
}
