import React, { useState, useRef } from 'react';
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
        message: 'Haycarb plc delivered resilient growth in 2024/25, powered by innovation, sustainability, and a diversified product portfolio across global markets.',
      },
      person2: {
        name: 'Rajitha Kariyawasan',
        position: 'Managing Director',
        message: 'Haycarb continues to invest in the advancement of its technology to be a cutting-edge innovative coconut shell based activated carbon company.',
      },
    },
    spanish: {
      person1: {
        name: 'Mohan Pandithage',
        position: 'Presidente',
        message: 'Haycarb plc logró un crecimiento sólido en 2024/25, impulsado por la innovación, la sostenibilidad y un portafolio de productos diversificado en los mercados globales.',
      },
      person2: {
        name: 'Rajitha Kariyawasan',
        position: 'Director General',
        message: 'Haycarb continúa la inversión en el dearrollo de su tecnología para convertirse en una empresa de carbón activado de cáscara de coco innovadora y de vanguardia.',
      },
    },
    french: {
      person1: {
        name: 'Mohan Pandithage',
        position: 'Président',
        message: `Haycarb plc a enregistré une croissance résiliente en 2024/25, portée par l'innovation, la durabilité et un portefeuille de produits diversifié sur les marchés mondiaux.`,
      },
      person2: {
        name: 'Rajitha Kariyawasan',
        position: 'Directeur Général',
        message: `Haycarb continue d’investir dans l’amélioration technologique afin d’être une entreprise de pointe et innovante spécialisée dans le charbon actif à base de coque de noix de coco.`,
      },
    },
     bahasa: {
      person1: {
        name: 'Mohan Pandithage',
        position: 'Ketua Dewan Direksi',
        message: 'Haycarb plc mencatat pertumbuhan yang kuat pada tahun 2024/25, didorong oleh inovasi, keberlanjutan, dan portofolio produk yang beragam di pasar global.',
      },
      person2: {
        name: 'Rajitha Kariyawasan',
        position: 'Direktur Utama',
        message: 'Haycarb terus berinvestasi dalam pengembangan teknologi untuk menjadi perusahaan karbon aktif berbasis tempurung kelapa yang inovatif dan terdepan.',
      },
    },
     chinese: {
      person1: {
        name: `莫汉·潘迪塔格`,
        position: `董事长`,
        message: `Haycarb plc 在2024/25年度实现了稳健增长，得益于创新、可持续发展以及在全球市场上多元化的产品组合。`,
      },
      person2: {
        name: `拉吉塔·卡里亚瓦桑`,
        position: `董事总经理`,
        message: 'Haycarb 持续投资于技术进步，致力于成为一家领先创新的椰壳活性炭公司。',
      },
    },
    german: {
      person1: {
        name: 'Mohan Pandithage',
        position: 'Vorsitzender des Vorstands',
        message: 'Haycarb plc erzielte im Geschäftsjahr 2024/25 ein widerstandsfähiges Wachstum, angetrieben durch Innovation, Nachhaltigkeit und ein diversifiziertes Produktportfolio auf globalen Märkten.',
      },
      person2: {
        name: 'Rajitha Kariyawasan',
        position: 'Geschäftsführer',
        message: 'Haycarb investiert weiterhin in die Weiterentwicklung seiner Technologie, um ein führendes, innovatives Unternehmen für Aktivkohle auf Basis von Kokosnussschalen zu werden.',
      },
    },
     sinhala: {
      person1: {
        name: `මොහාන් පණ්ඩිතගේ`,
        position: `සභාපති`,
        message: `නව්‍යකරණය, තිරසාරතාව සහ ගෝලීය වෙළඳපලවල විවිධීකෘත වූ නිෂ්පාදන කළඹ මත පදනම්ව ප්‍රතිසාධනශීලී වර්ධනයක් ලබා ගැනීමට හේකාබ් පීඑල්සී, 2024/25 වසරේදී සමත් විය.`,
      },
      person2: {
        name: `රාජිත කාරියවසන්`,
        position: `කළමනාකාර අධ්‍යක්ෂක`,
        message: `පොල් කටු පදනම් කරගත් නවෝත්පාදනශීලී සක්‍රීය කාබන් සමාගමක් ලෙස ඉදිරියට යාම සඳහා, හේකාබ්, එහි තාක්ෂණය වර්ධනය කිරීමට නිරන්තරයෙන් ආයෝජනය කරයි.`,
      },
    },
      thai: {
      person1: {
        name: 'โมฮัน พันดิทาเก',
        position: 'ประธานกรรมการ',
        message: `Haycarb plc มีการเติบโตอย่างแข็งแกร่งในปี 2024/25 โดยขับเคลื่อนด้วยนวัตกรรม ความยั่งยืน และการมีพอร์ตผลิตภัณฑ์ที่หลากหลายครอบคลุมตลาดทั่วโลก
`,
      },
      person2: {
        name: 'ราจิตะ กาลิยาวสัน',
        position: 'กรรมการผู้จัดการ',
        message: 'Haycarb ยังคงลงทุนในการพัฒนาเทคโนโลยีอย่างต่อเนื่อง เพื่อก้าวสู่การเป็นบริษัทผู้ผลิตถ่านกัมมันต์จากกะลามะพร้าวที่ล้ำสมัยและเปี่ยมด้วยนวัตกรรม',
      },
    },
      tamil: {
      person1: {
        name: 'மோகன் பண்டிதகே',
        position: 'தலைவர்',
        message: '2024/25 ஆம் ஆண்டில் ஹேகார்ப் பி எல் சி (Haycarb Plc ) உலக சந்தைகளில் புதுமை, நிலைத்தன்மை மற்றும் பல்வகை தயாரிப்பு வரிசை மூலம் உறுதியான வளர்ச்சியை எட்டியுள்ளது.',
      },
      person2: {
        name: 'ராஜித காரியவாசன்',
        position: 'முகாமைத்துவப் பணிப்பாளர்',
        message: 'ஹேகார்ப் பி எல் சி (Haycarb Plc ), முன்னணி புதுமையான தேங்காய் ஓட்டில் செயல்படுத்தப்பட்ட கார்பன் நிறுவனமாக உருவாகும் நோக்கில் தனது தொழில்நுட்ப முன்னேற்றத்தில் தொடர்ந்து முதலீடு செய்து வருகிறது.',
      },
    },
  };
const pdfUrls: Record<string, string> = {
  english: 'Pdf/ceomessages/english.pdf',
  spanish: 'Pdf/ceomessages/spanish.pdf',
  french: 'Pdf/ceomessages/French.pdf',
  bahasa: 'Pdf/ceomessages/bahasa.pdf',
  chinese: 'Pdf/ceomessages/chinese.pdf',
  german: 'Pdf/ceomessages/german.pdf',
  sinhala: 'Pdf/ceomessages/sinhala.pdf',
  tamil: 'Pdf/ceomessages/tamil.pdf',
  thai: 'Pdf/ceomessages/thai.pdf',
};
 
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('english');
  const { person1, person2 } = messages[selectedLanguage];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

 const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const newLang = e.target.value as Language;
  setSelectedLanguage(newLang);

  // Open the corresponding PDF in a new tab
  const pdfUrl = pdfUrls[newLang];
  if (pdfUrl) {
    window.open(pdfUrl, '_blank');
  }
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

   const handleVideoClick = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 100); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
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
        <button className="mt-6 px-6 py-2 bg-white text-blue-500 rounded-full flex transition btn-custom wave-btn videoButton" onClick={handleVideoClick}>
           <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 68 68" fill="none" style={{marginRight:'10px',marginTop:'-3px'}}>
<path d="M34.1098 0.759766C27.4643 0.759766 20.9681 2.73037 15.4426 6.42239C9.91713 10.1144 5.61053 15.362 3.06743 21.5016C0.524324 27.6412 -0.141068 34.397 1.1554 40.9148C2.45186 47.4326 5.65195 53.4195 10.351 58.1186C15.05 62.8176 21.037 66.0177 27.5547 67.3142C34.0725 68.6106 40.8283 67.9452 46.9679 65.4021C53.1075 62.859 58.3551 58.5524 62.0472 53.0269C65.7392 47.5014 67.7098 41.0052 67.7098 34.3598C67.7098 29.9474 66.8407 25.5781 65.1521 21.5016C63.4636 17.4251 60.9886 13.721 57.8686 10.601C54.7485 7.48093 51.0445 5.00597 46.9679 3.31741C42.8914 1.62886 38.5222 0.759766 34.1098 0.759766ZM27.3898 49.4798V19.2398L47.5498 34.3598L27.3898 49.4798Z" fill="white"/>
</svg>
           Watch the message
        </button>
         <div className="mt-6 px-6 py-2 bg-white text-blue-500 rounded-full transition btn-custom languageDropdown flex items-center relative">
         <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 65 65" fill="none" style={{marginRight:'10px',marginTop:'-3px'}}>
<path d="M31.9505 0.76762C7.57987 1.27629 -7.21735 28.4408 5.6648 49.3039C18.5242 70.1328 49.1747 69.6716 60.8661 48.0398C72.5689 26.3871 56.3363 0.257052 31.9505 0.76762ZM6.19191 26.9812C6.26776 26.6491 6.33602 26.2505 6.42893 25.9373C6.47443 25.7798 6.47823 25.5027 6.71524 25.7304C6.77592 25.7874 7.24805 26.9755 7.40353 27.2469C8.53361 29.2323 9.72436 31.191 10.8355 33.1896C12.5003 34.7327 15.2477 34.6986 16.5409 36.7143C18.0596 39.083 16.4442 42.192 17.6235 44.5816C18.3573 46.0696 20.0069 46.5422 21.1294 47.607C22.8625 49.2526 22.5819 51.7257 22.9213 53.9123C23.1545 55.4212 23.5185 56.9017 23.7518 58.4068C11.0554 54.0451 3.15625 40.2104 6.19191 26.9812ZM56.1828 23.6046C54.6545 23.6141 53.3538 20.9816 51.1979 20.7728C50.1588 20.6722 46.3951 21.3308 45.4318 21.7901C44.1482 22.4032 43.5907 23.7906 42.7659 24.8042C42.1383 25.5729 41.3135 26.2296 40.7788 27.0761C38.1451 31.248 42.3014 35.8621 46.6738 35.8279C48.0485 35.8184 50.3333 34.9169 51.5278 35.5033C52.4038 35.9323 52.4474 36.8927 52.5441 37.7544C52.8608 40.5843 53.3841 43.2492 53.6989 46.1171C53.7728 46.7966 54.336 49.078 54.2374 49.4899C54.1122 50.0099 51.7553 52.3787 51.2188 52.8702C45.0507 58.496 36.56 60.9274 28.2929 59.686C28.2834 57.9399 28.9262 56.0893 29.7946 54.5823C32.2065 50.3971 37.1307 49.3058 37.5232 43.8489C37.9233 38.2896 33.7708 37.9575 30.2042 35.5356C29.1102 34.7916 27.6445 33.0929 26.4196 32.7873C25.6099 32.5861 24.7946 32.7569 23.9793 32.6715C22.6672 32.5348 21.9049 31.7358 20.5265 32.233C19.5993 32.5671 18.8579 33.4819 17.7923 33.6262C15.3065 33.9621 12.0395 29.2266 14.878 27.9967C15.9398 27.5373 17.6368 27.3665 18.6873 27.8828C19.5272 28.2965 20.098 29.4885 21.1256 29.4335C22.5439 29.3556 21.4878 26.5902 21.4764 25.7893C21.4461 23.6654 24.7738 23.2307 24.7301 20.9816C24.7074 19.801 23.8428 19.2677 24.7681 18.0055C25.0866 17.5708 26.2755 16.7034 26.7779 16.4643C28.0881 15.8436 31.9657 15.5779 31.8519 13.7216C31.7912 12.7252 29.4003 10.1059 28.3536 9.95975C26.9258 9.76235 26.2812 11.3073 25.3047 12.0039C24.2675 12.7441 21.6812 13.6514 21.0214 12.0476C20.2648 10.2103 24.1689 9.93128 22.3373 7.6062C22.3467 7.48852 23.6077 6.97795 23.8257 6.98365C24.1613 6.99124 24.6145 7.37654 25.1056 7.40121C25.7503 7.43348 26.2831 7.14308 27.0529 7.28733C28.4996 7.55685 29.0912 9.75286 31.4765 9.37515C33.3385 9.07906 33.4541 6.86217 33.1166 5.40639C38.3461 5.49749 43.3272 7.06146 47.7356 9.8136L46.6681 10.235C44.9616 11.1156 43.4845 13.5356 46.3818 13.7957C47.8835 13.9304 49.408 13.7805 49.1198 11.9052C49.0932 11.7325 48.5585 10.6449 48.9415 10.6658C49.0762 10.6734 51.0083 12.3 50.8566 12.5069C49.5047 12.9757 48.7462 15.1831 47.728 15.8417C46.6453 16.5421 44.8535 16.1055 45.045 18.1042C45.2972 20.7576 48.5964 20.9265 50.1512 19.262C51.0765 18.2731 51.251 16.8097 53.0219 17.0887C55.0546 17.4095 54.3265 19.6454 54.9256 20.0496C55.6443 20.5355 56.3515 19.3208 56.6795 19.5353C56.7971 19.6131 57.9423 21.9325 57.9234 22.0729C57.8608 22.5057 56.7023 23.5913 56.1809 23.5951L56.1828 23.6046Z" fill="#FEFEFE"/>
</svg>
          <select value={selectedLanguage} onChange={handleLanguageChange} className="bg-transparent border-none outline-none appearance-none w-full pr-5">
           <option value="english">Select Your Language</option>
            <option value="english">English</option>
  <option value="spanish">Spanish</option>
  <option value="french">French</option>
  <option value="bahasa">Bahasa</option>
  <option value="chinese">Chinese</option>
  <option value="german">German</option>
  <option value="sinhala">Sinhala</option>
  <option value="tamil">Tamil</option>
  <option value="thai">Thai</option>
          </select>
          <img src="/icons/downarrow.png" alt="Arrow Down" className="arrowIcon absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 pointer-events-none" />
        </div>
      </div>

      {/* Modal for Video */}
        {isModalOpen && (
          <div className={styles.modalOverlay} onClick={handleCloseModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <video
                ref={videoRef}
                className={styles.modalVideo}
                controls
                src="/videos/ChairmananDirectorMessage.mp4"
              >
                Your browser does not support the video tag.
              </video>
              <button className={styles.closeButton} onClick={handleCloseModal}>
                ×
              </button>
            </div>
          </div>
        )}

    </div>
    </div>
  );
};

export default Leadership;