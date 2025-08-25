import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import styles from "./GameWizard.module.css";

const datasets = [
  // Dataset 01
  [
    {
      question: "Which year was Haycarb PLC established?",
      answers: ["1970", "1973", "1976", "1980"],
      correctAnswer: "1973",
      pdf: "/tbc/Milestones.pdf",
    },
    {
      question:
        "The annual report 2024/25 is the __ th integrated report produced by Haycarb PLC",
      answers: ["5", "3", "2", "10"],
      correctAnswer: "5",
      pdf: "/tbc/Our Approach to Reporting.pdf",
    },
    {
      question:
        "What can be considered a brand new feature of the Haycarb's annual report 2024/25",
      answers: [
        "Availability of a microsite",
        "Increase in accessibility",
        "Reporting of SLFRS S1 and S2",
        "Obtaining limited assurance",
      ],
      correctAnswer: "Increase in accessibility",
      pdf: "/tbc/Our Approach to Reporting.pdf",
    },
    {
      question: "What is Haycarb’s main product?",
      answers: ["Rubber sheets", "Activated carbon", "Cement", "Tea"],
      correctAnswer: "Activated carbon",
      pdf: "/tbc/Haycarb at a Glance.pdf",
    },
    {
      question: "Which natural resource is key to Haycarb’s products?",
      answers: ["Coconut shells", "Palm shells", "Coal", "Wood"],
      correctAnswer: "Coconut shells",
      pdf: "/tbc/Haycarb at a Glance.pdf",
    },
    {
      question: "In 2024/25, how many countries did Haycarb operate in?",
      answers: ["3", "5", "7", "8"],
      correctAnswer: "7",
      pdf: "/tbc/Haycarb at a Glance.pdf",
    },
    {
      question:
        "Haycarb’s manufacturing plants are located in Sri Lanka, Thailand, and ___?",
      answers: ["India", "Indonesia", "Malaysia", "Australia"],
      correctAnswer: "Indonesia",
      pdf: "/tbc/Haycarb at a Glance.pdf",
    },
    {
      question: "What is Haycarb’s parent company?",
      answers: [
        "Hayleys PLC",
        "John Keells Holdings",
        "Aitken Spence",
        "Hemas Holdings",
      ],
      correctAnswer: "Hayleys PLC",
      pdf: "/bod and affairs of the company.pdf",
    },
    {
      question:
        "What percentage of Haycarb’s energy requirement is met through renewable sources in 2024/25?",
      answers: ["25%", "75%", "45%", "50%"],
      correctAnswer: "75%",
      pdf: "/Haycarb PLC Annual Report 2024_25 129.pdf",
    },
    {
      question: "What was the Group’s revenue for 2024/25?",
      answers: ["LKR 45.1 Bn", "LKR 43.2 Bn", "LKR 56.5 Bn", "LKR 60.2 Bn"],
      correctAnswer: "LKR 43.2 Bn",
      pdf: "/Haycarb PLC Annual Report 2024_25 122.pdf",
    },
  ],
  // Dataset 02
  [
    {
      question: "What was the Group’s operating profit for 2024/25?",
      answers: ["LKR 5.5 Bn", "LKR 6.1 Bn", "LKR 5.8Bn", "LKR 4.3 Bn"],
      correctAnswer: "LKR 5.8Bn",
      pdf: "/Haycarb PLC Annual Report 2024_25 122.pdf",
    },
    {
      question: "Which program focuses on protecting endangered turtles?",
      answers: ["Behold the turtles", "OceanLife", "EcoWave", "GreenReef"],
      correctAnswer: "Behold the turtles",
      pdf: "/Haycarb PLC Annual Report 2024_25 139.pdf",
    },
    {
      question:
        "What quality certification does Haycarb hold for its production processes?",
      answers: ["ISO 9001", "ISO 14001", "ISO 22000", "All of the above"],
      correctAnswer: "All of the above",
      pdf: "/Haycarb PLC Annual Report 2024_25 146.pdf",
    },
    {
      question:
        "How does Haycarb mainly contribute to clean water solutions globally?",
      answers: [
        "Activated carbon for water filtration systems",
        "Selling bottled water",
        "Building desalination plants",
        "Manufacturing plastic pipes",
      ],
      correctAnswer: "Activated carbon for water filtration systems",
      pdf: "/Our Products.pdf",
    },
    {
      question:
        "What % of raw material supplier payments are to local suppliers?",
      answers: ["61%", "65%", "91%", "80%"],
      correctAnswer: "91%",
      pdf: "/Haycarb PLC Annual Report 2024_25 169.pdf",
    },
    {
      question:
        "The company invested LKR ______ Mn for Solar power generation in 2024/25.",
      answers: ["800", "600", "1000", "750"],
      correctAnswer: "600",
      pdf: "/Haycarb PLC Annual Report 2024_25 133.pdf",
    },
    {
      question:
        "Haycarb’ s revenue in foreign currency reduces exposure to __________ risk.",
      answers: ["Inflation", "Credit", "Exchange rate", "Liquidity"],
      correctAnswer: "Exchange rate",
      pdf: "/exchange rate risk.pdf",
    },
    {
      question:
        "The water-saving initiative in Sri Lanka includes ________ harvesting systems.",
      answers: ["Groundwater", "Rainwater", "Fog", "Dew"],
      correctAnswer: "Rainwater",
      pdf: "/Haycarb PLC Annual Report 2024_25 136.pdf",
    },
    {
      question: "Who is the Chairman and Managing Director of Haycarb PLC?",
      answers: [
        "Mohan Pandithage & Rajitha Kariyawasan",
        "Rajitha Kariyawasan & Mohan Pandithage",
        "Brahman Balaratnarajah, Mohan Pandithage",
        "Brahman Balaratnarajah, Rajitha Kariyawasan",
      ],
      correctAnswer: "Mohan Pandithage & Rajitha Kariyawasan",
      pdf: "/tbc/Chairmans Managing Directors Joint Statement.pdf",
    },
    {
      question:
        "What is the approximate market share of Haycarb PLC in the global Activated Carbon market?",
      answers: ["8%", "16%", "25%", "27%"],
      correctAnswer: "16%",
      pdf: "/Our Products.pdf",
    },
  ],
  // Dataset 03
  [
    {
      question: "What is the name of ESG Framework of Haycarb group?",
      answers: ["Entwine", "Hayleys Lifecode", "Activate", "Activism"],
      correctAnswer: "Activate",
      pdf: "/tbc/Activate - in Pursuit of a More Sustainable Future.pdf",
    },
    {
      question: "What are the five elements of ESG framework of Haycarb?",
      answers: [
        "Restore, Inspire, Excite, Uplift, Innovate",
        "Restore, Inspire, Excite, Uplift, Recycle",
        "Reuse, Inspire, Excite, Uplift, Recycle",
        "Reuse, Inspire, Excite, Uplift, Destroy",
      ],
      correctAnswer: "Restore, Inspire, Excite, Uplift, Innovate",
      pdf: "/tbc/Activate - in Pursuit of a More Sustainable Future.pdf",
    },
    {
      question:
        "What is Haycarb PLC’s latest project, set to complete phase one by 2027?",
      answers: [
        "Haycarb Philippines Corporation",
        "Eurocarb Germany GmbH",
        "Haycarb Singapore Pte Ltd",
        "PT Haycarb Palu Mitra",
      ],
      correctAnswer: "Haycarb Philippines Corporation",
      pdf: "/tbc/Chairmans Managing Directors Joint Statement.pdf",
    },
    {
      question:
        "What is the key activated carbon export market of Haycarb group?",
      answers: ["America", "Asia", "Europe", "Australia"],
      correctAnswer: "Asia",
      pdf: "/tbc/Haycarb at a Glance.pdf",
    },
    {
      question:
        "What is Sri Lanka’s approximate activated carbon production capacity?",
      answers: [
        "Between 45% to 50%",
        "Between 50% to 55%",
        "Between 55% to 60%",
        "More than 60%",
      ],
      correctAnswer: "Between 55% to 60%",
      pdf: "/tbc/Haycarb at a Glance.pdf",
    },
    {
      question:
        "What is the programme implemented to promote green charcoaling practices by providing technical and financial assistance to small scale charcoal suppliers?",
      answers: [
        "Puritas Sath Diyawara",
        "Sisu Divi Pahana",
        "Behold the turtles",
        "Haritha Angara",
      ],
      correctAnswer: "Haritha Angara",
      pdf: "/tbc/Our Socio-Economic Impact.pdf",
    },
    {
      question:
        "What is the market capitalization of Haycarb PLC by 31st March 2025",
      answers: ["Rs 24.4 Bn", "RS 20.4 Bn", "Rs 20 Bn", "Rs 19.5 Bn"],
      correctAnswer: "Rs 24.4 Bn",
      pdf: "/Haycarb PLC Annual Report 2024_25 123.pdf",
    },
    {
      question:
        "What is the earnings per share at year end 2024/25 recorded by the Haycarb Group?",
      answers: ["Rs. 12.1", "Rs. 12.6", "Rs. 19.6", "Rs. 11.1"],
      correctAnswer: "Rs. 12.1",
      pdf: "/Haycarb PLC Annual Report 2024_25 123.pdf",
    },
    {
      question:
        "How many product and process related certifications are obtained by Haycarb as at 31st March 2025?",
      answers: ["29", "28", "32", "30"],
      correctAnswer: "32",
      pdf: "/Haycarb PLC Annual Report 2024_25 140.pdf",
    },
    {
      question:
        "ow many employees are currently being employed in the Haycarb group?",
      answers: ["2020", "2022", "2024", "2026"],
      correctAnswer: "2026",
      pdf: "/tbc/Haycarb at a Glance.pdf",
    },
  ],
  // Dataset 04
  [
    {
      question:
        "What is the country in which floating solar panel projects are established within the Haycarb Group?",
      answers: ["Thailand", "USA", "Sri Lanka", "Philippines"],
      correctAnswer: "Thailand",
      pdf: "/tbc/Managing Risks Opportunities.pdf",
    },
    {
      question:
        "What can be considered as a threat faced by the Haycarb group?",
      answers: [
        "Transition to low carbon economy",
        "Global economic volatility",
        "Strong demand",
        "Advancement in green manufacturing",
      ],
      correctAnswer: "Global economic volatility",
      pdf: "/tbc/Our Strategic Framework SWOT TOWS Strategy in Motion.pdf",
    },
    {
      question:
        "What are the ways that customer value is created within Haycarb group?",
      answers: [
        "Product quality",
        "Customer health & safety",
        "Innovation",
        "All of the above",
      ],
      correctAnswer: "All of the above",
      pdf: "/Haycarb PLC Annual Report 2024_25 167.pdf",
    },
    {
      question:
        "How many trees did the Haycarb group plant in 2024/25 as a decarbonization effort?",
      answers: [
        "50,000 to 60,000",
        "More than 75,000",
        "60,000 to 70,000",
        "70,000 to 75,000",
      ],
      correctAnswer: "More than 75,000",
      pdf: "/Haycarb PLC Annual Report 2024_25 128.pdf",
    },
    {
      question:
        "What are the ways that supplier value is created within Haycarb group?",
      answers: [
        "Timely payments",
        "Opportunity for growth",
        "Technical assistance",
        "All of the above",
      ],
      correctAnswer: "All of the above",
      pdf: "/Haycarb PLC Annual Report 2024_25 169.pdf",
    },
    {
      question:
        "How many instances were recorded in terms of non compliance to laws and regulations?",
      answers: ["Zero", "One", "Two", "Three"],
      correctAnswer: "Zero",
      pdf: "/tbc/Listening to Our Stakeholders.pdf",
    },
    {
      question: "What is the employee retention rate of Haycarb group?",
      answers: ["89%", "91%", "90%", "92%"],
      correctAnswer: "91%",
      pdf: "/tbc/Strategy and Resource Allocation.pdf",
    },
    {
      question:
        "What is the corporate sustainability project implemented to upgrade the health and nutrition of school children?",
      answers: [
        "Haritha Angara",
        "Puritas Sath Diyawara",
        "Sisu Divi Pahana",
        "None of the above",
      ],
      correctAnswer: "Sisu Divi Pahana",
      pdf: "/tbc/Activate - in Pursuit of a More Sustainable Future.pdf",
    },
    {
      question:
        "Which investment will increase Haycarb PLC’s electricity generation next year?",
      answers: [
        "Expansion of Indonesian kiln capacity",
        "Upgrade of Recogen system",
        "Floating solar panels in Sri Lanka",
        "New plant in India",
      ],
      correctAnswer: "Upgrade of Recogen system",
      pdf: "/recogen capacity enhancement.pdf",
    },
    {
      question:
        "What was the total asset base of the Haycarb Group as at 31st March 2025?",
      answers: ["Rs. 39.6Bn", "Rs. 40.2 Bn", "Rs. 45.9 Bn", "Rs. 43.5 Bn"],
      correctAnswer: "Rs. 45.9 Bn",
      pdf: "/asset base.pdf",
    },
  ],
];

type Question = {
  question: string;
  answers: string[];
  correctAnswer: string;
  pdf: string;
};

function GameWizard() {
  const router = useRouter();
  const [currentDataset, setCurrentDataset] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});
  const [results, setResults] = useState<(boolean | null)[]>([]);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showFirstSlide, setShowFirstSlide] = useState(true); // New state for welcome slide
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  // Load random dataset on mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * datasets.length);
    setCurrentDataset(datasets[randomIndex]);
    setResults(new Array(datasets[randomIndex].length).fill(null));
  }, []);

  const handleAnswerClick = (answer: string) => {
    if (selectedAnswers[currentQuestionIndex]) return; // Prevent clicking if answer already selected

    // Store selected answer for the current question
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: answer,
    }));
    setShowMoreInfo(true);

    // Update results
    const isCorrect =
      answer === currentDataset[currentQuestionIndex].correctAnswer;
    const newResults = [...results];
    newResults[currentQuestionIndex] = isCorrect;
    setResults(newResults);

    // If wrong answer, delay showing the correct answer
    if (!isCorrect) {
      setShowCorrectAnswer(false); // Reset to ensure delay
      const timer = setTimeout(() => {
        setShowCorrectAnswer(true);
      }, 500); // 300ms delay for green box
      return () => clearTimeout(timer); // Cleanup timeout
    } else {
      setShowCorrectAnswer(true); // Immediate for correct answer
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < currentDataset.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowMoreInfo(!!selectedAnswers[currentQuestionIndex + 1]); // Show More Info if next question has answer
      setShowCorrectAnswer(!!selectedAnswers[currentQuestionIndex + 1]);
      setGameCompleted(false); // Ensure gameCompleted is false when navigating forward
    } else {
      setGameCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setShowMoreInfo(!!selectedAnswers[currentQuestionIndex - 1]); // Show More Info if prev question has answer
      setShowCorrectAnswer(!!selectedAnswers[currentQuestionIndex - 1]);
      setGameCompleted(false); // Ensure gameCompleted is false when navigating back
    }
  };

  const handleStartGame = () => {
    setShowFirstSlide(false); // Transition to first question
  };
  const handleExit = () => {
    //  localStorage.setItem("contentVisible", "true");
    //   router.push("/");
    router.push("/?contentVisible=true");
  };
  const openPdf = () => {
    window.open(`/pdf/${currentDataset[currentQuestionIndex].pdf}`, "_blank");
  };

  // Calculate score
  const score = results.filter((result) => result === true).length;
  const totalQuestions = currentDataset.length;

  if (!currentDataset.length) return <div>Loading...</div>;

  const currentQuestion = currentDataset[currentQuestionIndex];

  return (
    <section className="flex items-center justify-center min-h-screen text-[#606060] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/images/gamebg.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.gameWrapper}>
        <div className={styles.gamecontainer}>
          {showFirstSlide ? (
            <section className={styles.firtslide}>
              <h3>Welcome to FinQuest!</h3>
              <p>
                Get ready to dive into the story behind Haycarb PLC’s 2024/25
                journey through 10 engaging questions that spotlight our
                performance, strategy, and sustainability milestones.
              </p>
              <p>
                Let’s play, learn, and celebrate Haycarb’s impact one question
                at a time.
              </p>
              <button
                className={`mt-6 px-6 py-2 rounded-full transition btn-custom wave-btn`}
                onClick={handleStartGame}
              >
                Start the challenge now!
              </button>
            </section>
          ) : gameCompleted ? (
            <div className={styles.lastslide}>
              <h2 className="text-white text-center lg:text-[48px] text-[24px] font-normal">
                Your score is {score}/{totalQuestions}
              </h2>
              <h1 className="text-white text-center lg:text-[48px] text-[24px] font-normal">
                Well done, FinQuester!
              </h1>
              <h2 className="text-white text-center lg:text-[28px] sm:text-[18px] font-normal">
                You&apos;ve completed the challenge and unlocked your score!
              </h2>

              <h2 className="text-white text-center lg:text-[28px] sm:text-[18px] font-normal">
                Thank you for exploring Haycarb’s journey with us.
              </h2>
              <button
                className={`mt-5 px-6 py-2 text-center rounded-full transition btn-custom wave-btn`}
                onClick={handleExit}
              >
                Exit
              </button>
            </div>
          ) : (
            <>
              {/* Question */}
              <h1 className="text-white text-center text-[24px] font-normal mb-8">
                {currentQuestion.question}
              </h1>

              {/* Answer boxes */}
              <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
                {currentQuestion.answers.map((answer, index) => {
                  const selectedAnswer = selectedAnswers[currentQuestionIndex];
                  let bgColor = styles.blueBox;
                  if (selectedAnswer) {
                    if (
                      answer === currentQuestion.correctAnswer &&
                      showCorrectAnswer
                    ) {
                      bgColor = styles.greenBox; // Show correct answer in green after delay
                    } else if (answer === selectedAnswer) {
                      bgColor =
                        answer === currentQuestion.correctAnswer
                          ? styles.greenBox
                          : styles.redBox; // Immediate red for wrong selected answer
                    } else {
                      bgColor = styles.grayBox; // Gray out other answers
                    }
                  }

                  return (
                    <button
                      key={index}
                      className={`${bgColor} transition-colors`}
                      onClick={() => handleAnswerClick(answer)}
                      disabled={!!selectedAnswer} // Disable if an answer is selected for this question
                    >
                      {answer}
                    </button>
                  );
                })}
              </div>

              {/* More Info Button */}
              {showMoreInfo && (
                <button
                  className={`mt-6 px-6 py-2 rounded-full transition btn-custom wave-btn`}
                  onClick={openPdf}
                >
                  More Info
                </button>
              )}

              {/* Progress Bar */}
              <div className={styles.progressBarContainer}>
                {results.map((result, index) => (
                  <div
                    key={index}
                    className={`${styles.progressBarSegment} ${
                      result === null
                        ? styles.progressBarGray
                        : result
                        ? styles.progressBarGreen
                        : styles.progressBarRed
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Navigation Arrows (hidden on first slide) */}
        {!showFirstSlide && (
          <>
            <button
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              className={`${styles.navButton} ${styles.prev} ${
                currentQuestionIndex === 0 ? styles.navButtonDisabled : ""
              }`}
            >
              <Image
                src="/icons/gameleftarrow.png"
                alt="Left Arrow"
                width={16}
                height={16}
              />
            </button>
            <button
              onClick={handleNext}
              disabled={
                currentQuestionIndex === currentDataset.length - 1 &&
                gameCompleted
              }
              className={`${styles.navButton} ${styles.next} ${
                currentQuestionIndex === currentDataset.length - 1 &&
                gameCompleted
                  ? styles.navButtonDisabled
                  : ""
              }`}
            >
              <Image
                src="/icons/gamerightarrow.png"
                alt="Right Arrow"
                width={16}
                height={16}
              />
            </button>
          </>
        )}
      </div>
    </section>
  );
}

export default GameWizard;
