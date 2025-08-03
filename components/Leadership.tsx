import React, { useState } from 'react';
import styles from './Leadership.module.css';

type Language = 'english' | 'spanish' | 'french';

type Person = {
  name: string;
  position: string;
  message: string;
};

type Messages = {
  [key in Language]: {
    person1: Person;
    person2: Person;
  };
};

const Leadership = () => {
  // Dataset for paragraph messages in three languages for two people
 const messages = {
    english: {
      person1: {
        name: 'Mohan Pandithage',
        position: 'Chairman',
        message: 'Haycarb PLC delivered resilient growth in 2024/25, powered by innovation, sustainability, and a diversified product portfolio across global markets.',
      },
      person2: {
        name: 'Rajitha Kariyawasan',
        position: 'Managing Director',
        message: 'Haycarb Continues to Invest in the Advancement of Its Technology to Be a Cutting-Edge Innovative Coconut Shell Based Activated Carbon Company',
      },
    },
    spanish: {
      person1: {
        name: 'Mohan Pandithage',
        position: 'Presidente',
        message: 'Haycarb Plc logró un crecimiento resiliente en 2024/25, impulsado por la innovación, la sostenibilidad y una cartera de productos diversificada en mercados globales.',
      },
      person2: {
        name: 'Rajitha Kariyawasan',
        position: 'Director General',
        message: 'Haycarb continues to invest in the advancement of its technology to be a cutting-edge innovative coconut shell based activated carbon company',
      },
    },
    french: {
      person1: {
        name: 'Mohan Pandithage',
        position: 'Président',
        message: 'Haycarb Plc a réalisé une croissance résiliente en 2024/25, propulsée par l’innovation, la durabilité et un portefeuille de produits diversifié sur les marchés mondiaux.',
      },
      person2: {
        name: 'Rajitha Kariyawasan',
        position: 'Directeur Général',
        message: 'Haycarb continue d’investir dans l’avancement de sa technologie pour devenir une entreprise innovante de pointe dans le charbon actif à base de coque de noix de coco.',
      },
    },
  };

  const [selectedLanguage, setSelectedLanguage] = useState<Language>('english');
  const { person1, person2 } = messages[selectedLanguage];

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value as Language);
  };

  const handleVideoClick = () => {
    // Placeholder for video loading; replace with your video URL or logic
    alert('Loading leadership video...');
  };

    // Split names into two lines
  const splitName = (fullName: string) => {
    const [firstName, lastName] = fullName.split(' ');
    return (
      <>
        {firstName} <br /> {lastName}
      </>
    );
  };

  return (
       <div className='container max-w-full mx-auto'>
    <div className={styles.leadershipContainer} 
     style={{ 
      backgroundImage: `radial-gradient(50% 50% at 50% 50%, rgba(9, 226, 255, 0.2) 0%, rgba(2, 39, 88, 0) 100%), url('/images/leaderpersonbg.png')`, // Gradient then image
        backgroundSize: 'auto', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        position: 'relative',
         }}
         >
      {/* Main title and paragraph */}
      <div className={styles.headerSection}>
        <h1 className={styles.mainTitle}>Our Leadership</h1>
        <p className={styles.mainParagraph}>
      Our leadership team steers Haycarb with vision, integrity, and a long-term commitment to innovation and sustainability. Shaped by experience and guided by purpose, they drive strategic growth, empower people, and ensure we deliver value to stakeholders.
</p>
      </div>

      {/* Combined people and content section */}
      <div className={styles.combinedSection}>
        <div className={styles.contentItem}>
          <div className={`${styles.textContent} ${styles.textContentleft}`}>
            <h2 className={styles.name}>{splitName(person1.name)}</h2>
            <p className={styles.position}>{person1.position}</p>
            <p className={styles.message}>{person1.message}</p>
          </div>
        </div>
        <div className={styles.peopleSection}>
          <div className={styles.peopleImages}>
            <div className={styles.imageWrapper1}>
              <img src="/images/person01.png" alt="Person 1" className={styles.personImage} />
            </div>
            <div className={styles.imageWrapper2}>
              <img src="/images/person02.png" alt="Person 2" className={styles.personImage} />
            </div>
          </div>
          <div className={styles.yellowCollarLine}></div>
        </div>
        <div className={styles.contentItem}>
          <div className={`${styles.textContent} ${styles.textContentright}`}>
            <h2 className={styles.name}>{splitName(person2.name)}</h2>
            <p className={styles.position}>{person2.position}</p>
            <p className={styles.message}>{person2.message}</p>
          </div>
        </div>
      </div>
      {/* Messages section for mobile view */}
      <div className={styles.messagesSection}>
         <h2 className={styles.name}>{person1.name}</h2>
            <p className={styles.position}>{person1.position}</p>
        <p className={styles.message}>{person1.message}</p>
         <h2 className={styles.name}>{person2.name}</h2>
            <p className={styles.position}>{person2.position}</p>
        <p className={styles.message}>{person2.message}</p>
      </div>

      {/* Buttons below the combined section */}
      <div className={styles.buttonSection}>
        <button className="mt-6 px-6 py-2 bg-white text-blue-500 rounded-full hover:bg-gray-200 transition btn-custom videoButton" onClick={handleVideoClick}>
           <img src="/icons/playicon.png" alt="Play Icon" className="mr-2 inline-block h-5 w-5" /> Load Video
        </button>
         <div className="mt-6 px-6 py-2 bg-white text-blue-500 rounded-full hover:bg-gray-200 transition btn-custom languageDropdown flex items-center relative">
          <img src="/icons/globeicon.png" alt="Globe Icon" className="mr-2 h-5 w-5" />
          <select value={selectedLanguage} onChange={handleLanguageChange} className="bg-transparent border-none outline-none appearance-none w-full pr-5">
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
          </select>
          <img src="/icons/downarrow.png" alt="Arrow Down" className="arrowIcon absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 pointer-events-none" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Leadership;