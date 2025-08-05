import React, { useState, useEffect } from 'react';
import styles from './Management.module.css';

function Management() {
  // Updated sample data for management staff
  const staff = [
    {
      // name: 'BRAHMAN BALARATNARAJAH',
       name:`<p class="${styles.name}">BRAHMAN <br />BALARATNARAJAH</p>`,
      // title: 'Deputy Managing Director',
        title: `<p class="${styles.title}">Deputy Managing Director</p>`,
      image: '/images/management/brahman.png',
    },
    {
      // name: 'SARATH GANEGODA',
        name:`<p class="${styles.name}">SARATH<br />GANEGODA</p>`,
      // title: 'Non-Executive Director',
       title: `<p class="${styles.title}">Non-Executive Director</p>`,
      image: '/images/management/sarath.png',
    },
    {
      // name: 'ARJUN SENARATNA',
      name:`<p class="${styles.name}">ARJUN<br />SENARATNA</p>`,
      // title: 'Non-Executive Director',
        title: `<p class="${styles.title}">Non-Executive Director</p>`,
      image: '/images/management/arjun.png',
    },
    {
      // name: 'MS. JEEVANI ABEYRATNE',
         name:`<p class="${styles.name}">MS. JEEVANI<br />ABEYRATNE</p>`,
      // title: 'Director – Finance & IT',
       title: `<p class="${styles.title}">Director – Finance & IT</p>`,
      image: '/images/management/jeevani.png',
    },
    {
      // name: 'PRASANNA UDAYA KUMARA',
      name:`<p class="${styles.name}">PRASANNA <br />UDAYA KUMARA</p>`,
      // title: 'Director – Research & Development and Technical',
       title: `<p class="${styles.title}">Director – Research & <br />Development and Technical</p>`,
      image: '/images/management/prasanna.png',
    },
    {
      // name: 'ALI ASGAR MUNAVER CADERBHOY',
   name:`<p class="${styles.name}">ALI ASGAR<br />MUNAVER CADERBHOY</p>`,
      // title: 'Director – Business Development',
        title: `<p class="${styles.title}">Director – Business Development</p>`,
         image: '/images/management/arjun.png',
    },
    {
      // name: 'Davdfid Ledffe',
       name:`<p class="${styles.name}">DAVID <br />NEON</p>`,
      // title: 'STO',
       title: `<p class="${styles.title}">STO</p>`,
        image: '/images/management/arjun.png',
    },
    {
      // name: 'devid Ldfdvdfdee',
        name:`<p class="${styles.name}">ARJUN<br />SENARATNA</p>`,
      // title: 'Manager',
       title: `<p class="${styles.title}">Manager</p>`,
        image: '/images/management/arjun.png',
    },
    {
      // name: 'dfd dfd',
        name:`<p class="${styles.name}">DAVID<br />JONE</p>`,
      // title: 'Director',
      title: `<p class="${styles.title}">Director</p>`,
         image: '/images/management/arjun.png',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 6; // Display 4 items at a time
  const totalSlides = staff.length - slidesToShow + 1; // Number of possible starting positions (6 for 9 items)
  const autoplayInterval = 3000; // 3 seconds

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Autoplay effect
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, autoplayInterval);

    // Clear interval on component unmount or when user interacts
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
     <div className='container max-w-full mx-auto' style={{
      backgroundColor: 'rgba(21, 120, 151, 1)',}}>
    <div className={styles.managementContainer}>
      <h1 className={styles.mainTitle}>Board of Directors</h1>
      <div className={styles.sliderContainer}>
        <button className={styles.arrow + ' ' + styles.prev} onClick={prevSlide}>
          &lt;
        </button>
        <div className={styles.slider}>
          <div
            className={styles.sliderTrack}
            style={{
              transform: `translateX(-${(currentSlide * 100) / slidesToShow}%)`,
              width: `${(staff.length / slidesToShow) * 100}%`, // Adjusted for full track
            }}
          >
            {staff.map((person, index) => (
              <div key={index} className={styles.slide}>
                <img
                  src={person.image}
                  alt={person.name}
                  className={styles.personImage}
                />
                <div className={styles.personInfo}>
                  {/* <p className={styles.name}>{person.name}</p>
                  <p className={styles.title}>{person.title}</p> */}
                 <div dangerouslySetInnerHTML={{ __html: person.name }}/>
                   <div dangerouslySetInnerHTML={{ __html: person.title }}/>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className={styles.arrow + ' ' + styles.next} onClick={nextSlide}>
          &gt;
        </button>
      </div>
      {/* Dots for mobile navigation */}
      <div className={styles.dots}>
        {Array.from({ length: totalSlides }).map((_, index) => (
          <span
            key={index}
            className={styles.dot + (index === currentSlide ? ' ' + styles.active : '')}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
       <button
          className="mt-6 px-6 py-2 bg-white text-blue-500 rounded-full transition btn-custom wave-btn"
          onClick={() =>
            window.open('https://www.haycarb.com/annual-report-2024-25', '_blank')
          }
        >
          Management Team
        </button>
        <div>
        < div className={`container w-full h-full flex mx-auto px-10 md:px-15 py-10 items-center justify-between items-end ${styles.customcol}`}>
        <div className={styles.governanceSection}>
            <h2 className={styles.governanceSectionh2}>The Corporate Governance</h2>
          <p className={styles.governanceSectionp}>We uphold strong corporate governance through transparency, accountability and ethical leadership,<br /> ensuring responsible decision making and long-term stakeholder trust.</p>
        </div>
        <div className={styles.btngov}>
           <button
          className="mt-6 px-6 py-2 bg-white text-blue-500 rounded-full transition btn-custom wave-btn"
          onClick={() =>
            window.open('https://www.haycarb.com/annual-report-2024-25', '_blank')
          }
        >
          View Our Governance
        </button>
        </div>
        </div>
        </div>
    </div>
       <div className='wave-wrapper' style={{
          position: 'absolute',
            // bottom: 0,
            display:'contents',
            left: 0,
            width: '100%',
            zIndex: 2, // Above iframe, below text section
    }}>
<svg className="waves"
viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g className="parallax">
<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(0, 80, 114, 0.7)" />
<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(0, 80, 114, 0.5)" />
<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(0, 80, 114, 0.3)" />
<use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(0, 80, 114, 1)" />
</g>
</svg>
</div>
    </div>
  );
}

export default Management;