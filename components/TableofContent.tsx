import React, { useState } from 'react';
import style from './TableofContent.module.css';

const TableofContent = () => {
const contentData = {
  'Introduction': [
    { title: 'Strategic in Every Move, Boundless in Creating Impact', pdf: 'pdf/tbc/Strategic in Every Move, Boundless in Creating Impact.pdf' },
    { title: 'Our Approach to Reporting', pdf: 'pdf/tbc/Our Approach to Reporting.pdf' },
    { title: 'Performance Highlights', pdf: 'pdf/tbc/Performance Highlights.pdf' },
    { title: 'Haycarb at a Glance', pdf: 'pdf/tbc/Haycarb at a Glance.pdf' },
    { title: 'Milestones', pdf: 'pdf/tbc/Milestones.pdf' },
    { title: 'Our Products', pdf: 'pdf/tbc/Our Products.pdf' },
    { title: 'Awards and Recognitions', pdf: '/pdf/tbc/Awards and Recognitions.pdf' },
    { title: "Chairman's & Managing Director's Joint Statement", pdf: 'pdf/tbc/Chairmans & Managing Directors Joint Statement.pdf' },
    { title: 'Board of Directors', pdf: 'pdf/tbc/Board of Directors.pdf' },
    { title: 'Management Team', pdf: 'pdf/tbc/Management Team.pdf' },
  ],
  'Our Value Proposition on ESG': [
    { title: 'Our Value Creation Model', pdf: 'pdf/tbc/Our Value Creation Model.pdf' },
    { title: 'Our Socio-Economic Impact', pdf: 'pdf/tbc/Our Socio-Economic Impact.pdf' },
    { title: 'A Decade of Puritas Sath Diyawara', pdf: 'pdf/tbc/A Decade of Puritas Sath Diyawara.pdf' },
    { title: 'Progress Towards Adopting SLFRS Sustainability Reporting Standards', pdf: 'pdf/tbc/Progress Towards Adopting SLFRS Sustainability Reporting Standards.pdf' },
    { title: 'Activate - in Pursuit of a More Sustainable Future', pdf: 'pdf/tbc/Activate - in Pursuit of a More Sustainable Future.pdf' },
    { title: 'Consolidated Statement on ESG Performance', pdf: 'pdf/tbc/Consolidated Statement on ESG Performance.pdf' },
    { title: 'Managing Risks & Opportunities', pdf: 'pdf/tbc/Managing Risks & Opportunities.pdf' },
    { title: 'Assessing Climate Resilience', pdf: 'pdf/tbc/Assessing Climate Resilience.pdf' },
    { title: 'Our Contribution to the SDGs and UN Global Compact', pdf: 'pdf/tbc/Our Contribution to the SDGs and UN Global Compact.pdf' },
  ],
  'Understanding Value Creation and its Impact': [
    { title: 'Operating Environment', pdf: 'pdf/tbc/Operating Environment.pdf' },
    { title: 'Our Strategic Framework SWOT & TOWS Strategy in Motion', pdf: 'pdf/tbc/Our Strategic Framework SWOT & TOWS Strategy in Motion.pdf' },
    { title: 'Listening to Our Stakeholders', pdf: 'pdf/tbc/Listening to Our Stakeholders.pdf' },
    { title: 'Determining Material Issues', pdf: 'pdf/tbc/Determining Material Issues.pdf' },
    { title: 'Strategy and Resource Allocation', pdf: 'pdf/tbc/Strategy and Resource Allocation.pdf' },
    { title: 'Future Outlook', pdf: 'pdf/tbc/Future Outlook.pdf' },
  ],
  'Nurturing Our Resources': [
    { title: 'Financial Capital', pdf: 'pdf/tbc/Financial Capital.pdf' },
    { title: 'Natural Capital', pdf: 'pdf/tbc/Natural Capital.pdf' },
    { title: 'Intellectual Capital', pdf: 'pdf/tbc/Intellectual Capital.pdf' },
    { title: 'Human Capital', pdf: 'pdf/tbc/Human Capital.pdf' },
    { title: 'Social and Relationship Capital', pdf: 'pdf/tbc/Social and Relationship Capital.pdf' },
    { title: 'Manufactured Capital', pdf: 'pdf/tbc/Manufactured Capital.pdf' },
    { title: 'Digital Capital', pdf: 'pdf/tbc/Digital Capital.pdf' },
  ],
  'Mindful Governance': [
    { title: `Chairman's Message on Corporate Governance`, pdf: 'pdf/tbc/Chairmans Message on Corporate Governance.pdf' },
    { title: 'Corporate Governance', pdf: 'pdf/tbc/Corporate Governance.pdf' },
    { title: 'Annual Report of the Board of Directors on the Affairs of the Company', pdf: 'pdf/tbc/Annual Report of the Board of Directors on the Affairs of the Company.pdf' },
    { title: 'Statement of Directors Responsibility', pdf: 'pdf/tbc/Statement of Directors Responsibility.pdf' },
    { title: 'Related Party Transactions Review Committee Report', pdf: 'pdf/tbc/Related Party Transactions Review Committee Report.pdf' },
    { title: 'Audit Committee Report', pdf: 'pdf/tbc/Audit Committee Report.pdf' },
    { title: 'Remuneration Committee Report', pdf: 'pdf/tbc/Remuneration Committee Report.pdf' },
    { title: 'Nominations and Governance Committee Report', pdf: 'pdf/tbc/Nominations and Governance Committee Report.pdf' },
    { title: 'Statement by the Senior Independent Director', pdf: 'pdf/tbc/Statement by the Senior Independent Director.pdf' },
    { title: 'Independent Assurance Report for the GRI Standard', pdf: 'pdf/tbc/Independent Assurance Report for the GRI Standard.pdf' },
    { title: 'Independent Assurance Report for the Integrated Annual Report', pdf: 'pdf/tbc/Independent Assurance Report for the Integrated Annual Report.pdf' },
    { title: 'GRI Content Index', pdf: 'pdf/tbc/GRI Content Index.pdf' },
    { title: 'SASB Disclosure and Index', pdf: 'pdf/tbc/SASB Disclosure and Index.pdf' },
  ],
  'Financial Statements': [
    { title: 'Financial Calendar', pdf: 'pdf/tbc/Financial Calendar.pdf' },
    { title: 'Independent Auditors Report', pdf: 'pdf/tbc/Independent Auditors Report.pdf' },
    { title: 'Statement of Profit or Loss', pdf: 'pdf/tbc/Statement of Profit or Loss.pdf' },
    { title: 'Statement of Comprehensive Income', pdf: 'pdf/tbc/Statement of Comprehensive Income.pdf' },
    { title: 'Statement of Financial Position', pdf: 'pdf/tbc/Statement of Financial Position.pdf' },
    { title: 'Statement of Changes in Equity - Consolidated', pdf: 'pdf/tbc/Statement of Changes in Equity - Consolidated.pdf' },
    { title: 'Statement of Changes in Equity - Company', pdf: 'pdf/tbc/Statement of Changes in Equity - Company.pdf' },
    { title: 'Statement of Cash Flows', pdf: 'pdf/tbc/Statement of Cash Flows.pdf' },
    { title: 'Notes to the Consolidated Financial Statements', pdf: 'pdf/tbc/Notes to the Consolidated Financial Statements.pdf' },
  ],
  'Supplementary': [
    { title: 'Statement of Group Value Added', pdf: 'pdf/tbc/Statement of Group Value Added.pdf' },
    { title: 'History of Dividends and Scrip Issues', pdf: 'pdf/tbc/History of Dividends and Scrip Issues.pdf' },
    { title: 'Ten Year Financial Review', pdf: 'pdf/tbc/Ten Year Financial Review.pdf' },
    { title: 'Indicative US Dollar Financial Statements', pdf: 'pdf/tbc/Indicative US Dollar Financial Statements.pdf' },
    { title: 'Statement of Profit or Loss -Horizontal and Vertical Analysis', pdf: 'pdf/tbc/Statement of Profit or Loss -Horizontal and Vertical Analysis.pdf' },
    { title: 'Investor Information', pdf: 'pdf/tbc/Investor Information.pdf' },
    { title: 'Quarterly Analysis', pdf: 'pdf/tbc/Quarterly Analysis.pdf' },
    { title: 'Glossary of Financial Terms', pdf: 'pdf/tbc/Glossary of Financial Terms.pdf' },
    { title: 'Group Profile', pdf: 'pdf/tbc/Group Profile.pdf' },
    { title: 'Country Report', pdf: 'pdf/tbc/Country Report.pdf' },
    { title: 'Corporate Information', pdf: 'pdf/tbc/Corporate Information.pdf' },
  ],
} as const;

  type Category = keyof typeof contentData;
  const [activeCategory, setActiveCategory] = useState<Category>(
    Object.keys(contentData)[0] as Category
  );

  return (
    <div className={style.TableofContentContainer} style={{ 
          backgroundImage: `url('/images/strategybg-2.png')`, // Gradient then image
            backgroundSize: 'contain', 
            backgroundPosition: '-10% 20%',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            zIndex:0,
             }}>
      {/* Left 1/3 for image */}
      <div className={style.leftSection}>
        <img
          src="/images/book.png"
          alt="Table of Content"
          className={style.leftImage}
        />
      </div>

      {/* Right 2/3 for category + content */}
      <div className={style.rightSection}>
            <h2 className={style.title}> Navigation Summary</h2>
        {/* Inner split: category + content */}
        <div className={style.innerWrapper}>
          {/* Category List */}
          <div className={style.categoryColumn}>
            <ul className={style.categoryList}>
              {Object.keys(contentData).map((category, index) => (
                <li
                  key={index}
                  className={`${style.categoryItem} ${
                    activeCategory === category ? style.active : ''
                  }`}
                  onClick={() => setActiveCategory(category as Category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Content List */}
          <div className={style.contentColumn}>
            <div className={style.contentList}>
              {contentData[activeCategory].map((item, index) => (
                 <div
      key={index}
      className={style.card}
      onClick={() => window.open(item.pdf, '_blank')} // Open in new tab
    >
      {item.title}
    </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableofContent;
