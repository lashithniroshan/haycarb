import React, { useState } from 'react';
import style from './TableofContent.module.css';

const TableofContent = () => {
const contentData = {
  introduction: [
    { title: 'Strategic in Every Move, Boundless in Creating Impact', pdf: '/dummy.pdf' },
    { title: 'Our Approach to Reporting', pdf: '/dummy.pdf' },
    { title: 'Performance Highlights', pdf: '/dummy.pdf' },
    { title: 'Haycarb at a Glance', pdf: '/dummy.pdf' },
    { title: 'Milestones', pdf: '/dummy.pdf' },
    { title: 'Our Products', pdf: '/dummy.pdf' },
    { title: 'Awards and Recognitions', pdf: '/dummy.pdf' },
    { title: "Chairman's & Managing Director's Joint Statement", pdf: '/dummy.pdf' },
    { title: 'Our Vision, Mission and Values', pdf: '/dummy.pdf' },
    { title: 'Our Business Model', pdf: '/dummy.pdf' },
    { title: 'Our Value Creation Process', pdf: '/dummy.pdf' },
    { title: 'Our Value Creation Story', pdf: '/dummy.pdf' },
  ],
  'Our value proposition on ESG': [
    { title: 'test 1', pdf: '/dummy.pdf' },
    { title: 'test 2', pdf: '/dummy.pdf' },
  ],
  'Understanding value creation and its impact': [
    { title: 'test 11', pdf: '/dummy.pdf' },
    { title: 'test 22', pdf: '/dummy.pdf' },
  ],
  'Nurturing our resources': [
    { title: 'test 4', pdf: '/dummy.pdf' },
    { title: 'test 5', pdf: '/dummy.pdf' },
  ],
  'Mindful governance': [
    { title: 'test 6', pdf: '/dummy.pdf' },
    { title: 'test 7', pdf: '/dummy.pdf' },
  ],
  'Financial statements': [
    { title: 'test 8', pdf: '/dummy.pdf' },
    { title: 'test 9', pdf: '/dummy.pdf' },
  ],
  Supplementary: [
    { title: 'test 10', pdf: '/dummy.pdf' },
    { title: 'test 12', pdf: '/dummy.pdf' },
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
            <h2 className={style.title}>Table of Contents</h2>
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
