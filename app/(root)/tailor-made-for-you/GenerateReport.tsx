import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { saveAs } from "file-saver";
import WaveButton from "components/innerpage/WaveButton";

const GenerateReport = () => {

    const categories = {
    "Category 01": [
      "/pdf/Awards-and-Recognitions.pdf",
      "/pdf/full-Annual-Report-2024-2025.pdf",
    ],
    "Category 02": [
      "/pdf/Haycarb-Glance.pdf",
      "/pdf/Milestones.pdf",
    ],
    "Category 03": ["/pdf/Our-Approach-to-Reporting.pdf"],
    "Category 04": [
      "/pdf/Our-Products.pdf",
      "/pdf/Performance-Highlights.pdf",
    ],
  };
  
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
  <section className="relative bg-white text-[#606060] pt-16 pb-20 px-4 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-0 -right-20 lg:w-150 lg:h-150 bg-no-repeat bg-contain"
        style={{
          backgroundImage: "url(/images/water-spread.svg)",
        }}
      ></div>

      <div
        aria-hidden="true"
        className="absolute
                  top-450 left-10 
                  lg:top-150 
                  xl:top-120 
                  2xl:top-100
                  w-96 h-96 
                  md:w-[600px] md:h-[600px] 
                  rotate-180 
                  transform 
                  -translate-y-1/3 -translate-x-1/3 
                  bg-no-repeat bg-contain"
        style={{
          backgroundImage: "url(/images/water-spread.svg)",
        }}
      ></div>

      <div
        aria-hidden="true"
        className="absolute
                  hidden 
                  sm:block 
                  left-15 
                  lg:top-295 lg:left-170
                  xl:top-270 xl:left-250
                  2xl:top-260 2xl:left-500
                  w-56 h-56 
                  md:w-72 md:h-72
                  lg:w-72 lg:h-72  
                  xl:w-90 xl:h-90
                  2xl:w-80 2xl:h-80
                  transform scale-y-[-1] rotate-35
                  -translate-x-1/2 -translate-y-9/10 
                  bg-no-repeat bg-contain opacity-25"
        style={{
          backgroundImage: "url(/images/innerpage/blue-whale.png)",
        }}
      ></div>

      {/* Description section */}
      <div className="lg:px-53 text-center">
        <h1 className="text-[#005881] text-[40px] font-normal">
          Generate Your Own Report
        </h1>
        <p className="para text-center text-[#005881] text-lg font-semibold mt-10">
         This report outlines how Haycarb creates and sustains value across capitals by integrating them.
        </p>
      </div>
       {/* {selectedFiles.map((file) => (
        <div key={file}>
          <input
            type="checkbox"
            checked={checkedFiles.includes(file)}
            onChange={() => toggleFile(file)}
          />
          {file}
        </div>
      ))} */}

        
    {/* Category Sections */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 lg:px-20 my-10 py-8">
        {Object.entries(categories).map(([category, files]) => (
          <div key={category} className="space-y-4">
            <h3 className="text-xl text-[#005881] font-semibold mb-2">
              {category}
            </h3>
            {files.map((file) => (
              <label key={file} className="block text-sm">
                <input
                  type="checkbox"
                  checked={checkedFiles.includes(file)}
                  onChange={() => toggleFile(file)}
                  className="mr-2"
                />
                {file.split("/").pop()}
              </label>
            ))}
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 lg:px-20 my-10 py-8">
        <div className="lg:col-span-12 text-center">
          <WaveButton
            onBtnClick={mergeAndDownload}
            title="Generate My Report"
            style={{ fontSize: "12px" }}
          />
        </div>
      </div>

    </section>
  )
};


export default GenerateReport;
