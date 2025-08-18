import React, { useState } from 'react';
import style from './TableofContentMob.module.css';

const TableofContentMob = () => {
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
    // State to track which categories are expanded
  const [expandedCategories, setExpandedCategories] = useState<Category[]>([
    Object.keys(contentData)[0] as Category, // Initially expand the first category
  ]);


  // Toggle the expansion state of a category
  const toggleCategory = (category: Category) => {
    setExpandedCategories((prev: Category[]) =>
      prev.includes(category)
        ? prev.filter((cat: Category) => cat !== category)
        : [...prev, category]
    );
  };

  return (
    <div className={style.TableofContentContainerMob} style={{ 
          backgroundColor: 'rgba(0, 80, 114, 1)'
             }}>
      {/* Left 1/3 for image */}

    <div className='grid grid-cols-1'>
        <div className={style.accordioncontent}>
       {Object.keys(contentData).map((category) => (
        <div key={category} className={style.accordionItem}>
          <button
            className={`${style.accordionHeader} ${
              expandedCategories.includes(category as Category)
                ? style.active
                : ''
            }`}
            onClick={() => toggleCategory(category as Category)}
          >
            {category}
            <span className={style.arrow}>
              {expandedCategories.includes(category as Category) ? '▼' : '▶'}
            </span>
          </button>
          {expandedCategories.includes(category as Category) && (
            <div className={style.accordionContent}>
              <ul>
                {contentData[category as Category].map((item, index) => (
                  <li key={index}>
                    <a href={item.pdf} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
      </div>
      </div>
      </div>
  );
};

export default TableofContentMob;
