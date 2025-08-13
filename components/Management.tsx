import React, { useState, useEffect } from 'react';
import styles from './Management.module.css';

function Management() {
  // Updated sample data for management staff
  const staff = [
    {
      id:1,
       name:`<p class="${styles.name}">MOHAN<br />PANDITHAGE</p>`,
        title: `<p class="${styles.title}">Chairman</p>`,
      image: '/images/management/1.png',
    },
    {
     id:2,
        name:`<p class="${styles.name}">RAJITHA<br />KARIYAWASAN</p>`,
       title: `<p class="${styles.title}">Managing Director</p>`,
      image: '/images/management/2.png',
    },
    {
      id:3,
      name:`<p class="${styles.name}">BRAHMAN<br />BALARATNARAJAH</p>`,
        title: `<p class="${styles.title}">Deputy Managing Director</p>`,
      image: '/images/management/3.png',
    },
    {
      id:4,
         name:`<p class="${styles.name}">SARATH<br />GANEGODA</p>`,
       title: `<p class="${styles.title}">Non-Executive Director</p>`,
      image: '/images/management/4.png',
    },
      {
      id:5,
         name:`<p class="${styles.name}">ARJUN<br />SENARATNA</p>`,
       title: `<p class="${styles.title}">Non-Executive Director</p>`,
      image: '/images/management/5.png',
    },
    {
      id:6,
      name:`<p class="${styles.name}">MS.JEEVANI<br />ABEYRATNE</p>`,
       title: `<p class="${styles.title}">Director – Finance & IT</p>`,
      image: '/images/management/6.png',
    },
    {
      id:7,
   name:`<p class="${styles.name}">PRASANNA<br />UDAYA KUMARA</p>`,
        title: `<p class="${styles.title}">Director – Research &<br />Development and Technical</p>`,
         image: '/images/management/7.png',
    },
    {
      id:8,
       name:`<p class="${styles.name}">ALI ASGAR<br />MUNAVER CADERBHOY</p>`,
       title: `<p class="${styles.title}">Director – Business<br />Development</p>`,
        image: '/images/management/8.png',
    },
    {
      id:9,
        name:`<p class="${styles.name}">MS. SHAMALIE<br />GUNAWARDANA</p>`,
       title: `<p class="${styles.title}">Independent Non-Executive<br />Director</p>`,
        image: '/images/management/9.png',
    },
    {
     id:10,
        name:`<p class="${styles.name}">MS. BRINDHIINI<br />PERERA</p>`,
      title: `<p class="${styles.title}">Non-Executive Director</p>`,
         image: '/images/management/10.png',
    },
     {
      id:11,
        name:`<p class="${styles.name}">NANDA<br />FERNANDO</p>`,
      title: `<p class="${styles.title}">Independent Non-Executive<br />Director</p>`,
         image: '/images/management/11.png',
    },
     {
      id:12,
        name:`<p class="${styles.name}">MS. ANOMI<br />WANIGASEKERA</p>`,
      title: `<p class="${styles.title}">Independent Non-Executive<br />Director</p>`,
         image: '/images/management/12.png',
    },
     {
      id:13,
        name:`<p class="${styles.name}">YOHAN<br />PERERA</p>`,
      title: `<p class="${styles.title}">Independent Non-Executive<br />Director</p>`,
         image: '/images/management/13.png',
    },
     {
      id:14,
        name:`<p class="${styles.name}">TIMOTHY<br />SPELDEWINDE</p>`,
      title: `<p class="${styles.title}">Independent Non-Executive<br />Director</p>`,
         image: '/images/management/14.png',
    },
  ];

    const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(6); // Default to 6 for desktop
  const [totalSlides, setTotalSlides] = useState(staff.length - slidesToShow + 1);
  const autoplayInterval = 3000;

  // Function to determine slidesToShow based on window width
  const updateSlidesToShow = () => {
    if (window.innerWidth <= 768) {
      return 2; // 2 slides on mobile
    } else {
      return 6; // 6 slides on desktop
    }
  };

  // Update slidesToShow and reset currentSlide on resize
  useEffect(() => {
    const handleResize = () => {
      const newSlidesToShow = updateSlidesToShow();
      setSlidesToShow(newSlidesToShow);
      setTotalSlides(Math.max(1, staff.length - newSlidesToShow + 1));
      setCurrentSlide(0); // Reset to first slide on resize
    };

    // Debounce function to limit resize event frequency
    let resizeTimeout: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 100);
    };

    // Initial setup
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', debouncedResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

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

    return () => clearInterval(timer);
  }, [currentSlide, totalSlides]);

  return (
    <div className="container max-w-full mx-auto" style={{ backgroundColor: 'rgba(21, 120, 151, 1)' }}>
      <div className={styles.managementContainer}>
        <h1 className={styles.mainTitle}>Board of Directors</h1>
        <div className={styles.sliderContainer}>
          <button className={`${styles.arrow} ${styles.prev}`} onClick={prevSlide}>
            &lt;
          </button>
          <div className={styles.slider}>
            <div
              className={styles.sliderTrack}
              style={{
                transform: `translateX(-${(currentSlide * 100) / slidesToShow}%)`,
                width: `${(staff.length / slidesToShow) * 100}%`,
              }}
            >
              {staff.map((person) => (
                <div key={person.id} className={styles.slide}>
                  <img
                    src={person.image}
                    alt={person.name.replace(/<[^>]+>/g, '')} // Strip HTML for alt text
                    className={styles.personImage}
                  />
                  <div className={styles.personInfo}>
                    <div dangerouslySetInnerHTML={{ __html: person.name }} />
                    <div dangerouslySetInnerHTML={{ __html: person.title }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className={`${styles.arrow} ${styles.next}`} onClick={nextSlide}>
            &gt;
          </button>
        </div>
        <div className={styles.dots}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
        {/* Rest of the JSX (buttons, governance section, wave SVG) remains unchanged */}
      </div>
    </div>
  );
}

export default Management;