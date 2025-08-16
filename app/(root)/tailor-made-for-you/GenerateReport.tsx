import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";
import { saveAs } from "file-saver";
import WaveButton from "components/innerpage/WaveButton";

const GenerateReport = () => {
  const categories = {
    Introduction: [
      "pdf/tbc/Strategic in Every Move, Boundless in Creating Impact.pdf",
      "pdf/tbc/Our Approach to Reporting.pdf",
      "pdf/tbc/Performance Highlights.pdf",
      "pdf/tbc/Haycarb at a Glance.pdf",
      "pdf/tbc/Milestones.pdf",
      "pdf/tbc/Our Products.pdf",
      "/pdf/tbc/Awards and Recognitions.pdf",
      "pdf/tbc/Chairmans & Managing Directors Joint Statement.pdf",
      "pdf/tbc/Board of Directors.pdf",
      "pdf/tbc/Management Team.pdf",
    ],
    "Our value Proposition on ESG": [
      "pdf/tbc/Our Value Creation Model.pdf",
      "pdf/tbc/Our Socio-Economic Impact.pdf",
      "pdf/tbc/A Decade of Puritas Sath Diyawara.pdf",
      "pdf/tbc/Progress Towards Adopting SLFRS Sustainability Reporting Standards.pdf",
      "pdf/tbc/Activate - in Pursuit of a More Sustainable Future.pdf",
      "pdf/tbc/Consolidated Statement on ESG Performance.pdf",
      "pdf/tbc/Managing Risks & Opportunities.pdf",
      "pdf/tbc/Assessing Climate Resilience.pdf",
      "pdf/tbc/Our Contribution to the SDGs and UN Global Compact.pdf",
    ],
    "Understanding Value Creation and its Impact": [
      "pdf/tbc/Operating Environment.pdf",
      "pdf/tbc/Our Strategic Framework SWOT & TOWS Strategy in Motion.pdf",
      "pdf/tbc/Listening to Our Stakeholders.pdf",
      "pdf/tbc/Determining Material Issues.pdf",
      "pdf/tbc/Strategy and Resource Allocation.pdf",
      "pdf/tbc/Future Outlook.pdf",
    ],
    "Nurturing Our Resources": [
      "pdf/tbc/Financial Capital.pdf",
      "pdf/tbc/Natural Capital.pdf",
      "pdf/tbc/Intellectual Capital.pdf",
      "pdf/tbc/Human Capital.pdf",
      "pdf/tbc/Social and Relationship Capital.pdf",
      "pdf/tbc/Manufactured Capital.pdf",
      "pdf/tbc/Digital Capital.pdf",
    ],
    "Mindful Governance": [
      "pdf/tbc/Chairmans Message on Corporate Governance.pdf",
      "pdf/tbc/Corporate Governance.pdf",
      "pdf/tbc/Annual Report of the Board of Directors on the Affairs of the Company.pdf",
      "pdf/tbc/Statement of Directors Responsibility.pdf",
      "pdf/tbc/Related Party Transactions Review Committee Report.pdf",
      "pdf/tbc/Audit Committee Report.pdf",
      "pdf/tbc/Remuneration Committee Report.pdf",
      "pdf/tbc/Nominations and Governance Committee Report.pdf",
      "pdf/tbc/Statement by the Senior Independent Director.pdf",
      "pdf/tbc/Independent Assurance Report for the GRI Standard.pdf",
      "pdf/tbc/Independent Assurance Report for the Integrated Annual Report.pdf",
      "pdf/tbc/GRI Content Index.pdf",
      "pdf/tbc/SASB Disclosure and Index.pdf",
    ],
    "Financial Statements": [
      "pdf/tbc/Financial Calendar.pdf",
      "pdf/tbc/Independent Auditors Report.pdf",
      "pdf/tbc/Statement of Profit or Loss.pdf",
      "pdf/tbc/Statement of Comprehensive Income.pdf",
      "pdf/tbc/Statement of Financial Position.pdf",
      "pdf/tbc/Statement of Changes in Equity - Consolidated.pdf",
      "pdf/tbc/Statement of Changes in Equity - Company.pdf",
      "pdf/tbc/Statement of Cash Flows.pdf",
      "pdf/tbc/Notes to the Consolidated Financial Statements.pdf",
    ],
    Supplementary: [
      "pdf/tbc/Statement of Group Value Added.pdf",
      "pdf/tbc/History of Dividends and Scrip Issues.pdf",
      "pdf/tbc/Ten Year Financial Review.pdf",
      "pdf/tbc/Indicative US Dollar Financial Statements.pdf",
      "pdf/tbc/Statement of Profit or Loss -Horizontal and Vertical Analysis.pdf",
      "pdf/tbc/Investor Information.pdf",
      "pdf/tbc/Quarterly Analysis.pdf",
      "pdf/tbc/Glossary of Financial Terms.pdf",
      "pdf/tbc/Group Profile.pdf",
      "pdf/tbc/Country Report.pdf",
      "pdf/tbc/Corporate Information.pdf",
      "pdf/tbc/Notice of Annual General Meeting.pdf",
      "pdf/tbc/Form of Request for a Printed Copy of The Annual Report 2024_25.pdf",
      "pdf/tbc/Form of Proxy.pdf",
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
    setCheckedFiles([]);
  };
  return (
    <section className="relative bg-white text-[#606060] pt-16 pb-30 px-4 overflow-hidden">
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
          Enables users to create personalized summaries by selecting specific
          sections of interest from Haycarb PLC’s Annual Report. Whether
          you&apos;re focused on financials, sustainability, governance, or
          strategic highlights, this tool lets you tailor a report to your
          needs.
        </p>
        <p className="para text-center text-[#005881] text-lg font-semibold mt-10">
          Choose the relevant PDF sections to generate a customized report
        </p>
      </div>

      {/* Category Sections */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 lg:px-20 my-10 py-8">
        {Object.entries(categories).map(([category, files]) => (
          <div key={category} className="space-y-4">
            <h3
              className="text-xl text-[#005881] font-semibold mb-2"
              style={{
                fontFamily: "Brogadier",
                fontSize: "30px",
                fontWeight: "normal",
              }}
            >
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
                {file.split("/").pop()?.replace(".pdf", "")}
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
  );
};

export default GenerateReport;
