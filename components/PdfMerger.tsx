import React, { useState } from 'react';
import { PDFDocument } from "pdf-lib";
import { saveAs } from "file-saver";
import styles from './PdfMerger.module.css';

const PdfMerger = () => {
  const [selectedFiles, setSelectedFiles] = useState<string[]>([
    "/pdf/Awards-and-Recognitions.pdf",
    "/pdf/full-Annual-Report-2024-2025.pdf",
    "/pdf/Haycarb-Glance.pdf",
    "/pdf/Milestones.pdf",
    "/pdf/Our-Approach-to-Reporting.pdf",
    "/pdf/Our-Products.pdf",
    "/pdf/Performance-Highlights.pdf",
  ]);

  const [checkedFiles, setCheckedFiles] = useState<string[]>([]);

  const toggleFile = (file: string) => {
    setCheckedFiles((prev) =>
      prev.includes(file) ? prev.filter((f) => f !== file) : [...prev, file]
    );
  };

  const mergeAndDownload = async () => {
    if (checkedFiles.length === 0) return alert("Select at least one PDF!");

    const mergedPdf = await PDFDocument.create();

    for (const file of checkedFiles) {
      const response = await fetch(file);
      const pdfBytes = await response.arrayBuffer();
      const pdf = await PDFDocument.load(pdfBytes);

      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach((page) => mergedPdf.addPage(page));
    }

    const mergedBytes = await mergedPdf.save();

    // Download merged PDF
    const blob = new Blob([mergedBytes], { type: "application/pdf" });
    saveAs(blob, "merged.pdf");
  };

  return (
    <div>
      <h2>Select PDFs to Merge:</h2>
      {selectedFiles.map((file) => (
        <div key={file}>
          <input
            type="checkbox"
            checked={checkedFiles.includes(file)}
            onChange={() => toggleFile(file)}
          />
          {file}
        </div>
      ))}
      <button
        onClick={mergeAndDownload}
        style={{ marginTop: "10px", padding: "10px 20px" }}
      >
        Download Merged PDF
      </button>
    </div>
  );
};

export default PdfMerger