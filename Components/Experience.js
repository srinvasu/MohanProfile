import React, { useState } from "react";
const Experience = () => {
    // Data for experiences
  const experiences = [
    {
      title: "Web Application Developer",
      company: "Inspire Software Solutions",
      location: "Jordan",
      duration: "April 2020 - Current",
      responsibilities: [
        "Implemented front-end development using HTML, CSS, and JavaScript to create visually appealing web pages.",
        "Implemented new features to enhance the usability of web applications.",
        "Maintained existing web application code base by fixing bugs and refactoring code as needed.",
        "Implemented custom UI components using React JS.",
        "Reviewed project requirements to identify customer expectations and resources needed to meet goals.",
      ],
    },
    {
      title: "Web Application Developer",
      company: "Miracle Software Sollutions",
      location: "Visakapatnam, India",
      duration: "April 2023 - June 2023",
      responsibilities: [
        "Implemented front-end development using HTML, CSS, and JavaScript to create visually appealing web pages.",
        "Implemented new features to enhance the usability of web applications.",
        "Maintained existing web application codebase by fixing bugs and refactoring code as needed.",
        "Optimized performance of existing React applications by utilizing best practices such as code splitting and lazy loading.",
        "Analysed code and corrected errors to optimize output.",
      ],
    },
    {
      title: "Web Application Developer",
      company: "Indian Institute of Oil Palm Research",
      location: "Pedhavegi, India",
      duration: "November 2018 - December 2019",
      responsibilities: [
        "Employed integrated development environments (IDEs).",
        "Optimized performance of existing React applications by utilizing best practices such as code splitting and lazy loading.",
        "Combined root-level authentication and authorization technologies with ongoing system design to harden finished solutions.",
      ],
    },
  ];

  // React state to manage the toggle of each experience
  const [activeIndex, setActiveIndex] = useState(null);

  // Handle the toggle logic
  const handleToggle = (index) => {
    console.log("Toggling index:", index); // Debugging log
    setActiveIndex(activeIndex === index ? null : index);
  };
    return(
        <div className="accordion" id="experienceAccordion">
            {experiences.map((experience, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className="accordion-button"
                    type="button"
                    onClick={() => handleToggle(index)}
                    aria-expanded={activeIndex === index ? "true" : "false"}
                  >
                    <strong>{experience.title}</strong> - {experience.company} (
                    {experience.duration})
                  </button>
                </h2>
                {activeIndex === index && (
                  <div className="accordion-body">
                    <p>
                      <strong>Location:</strong> {experience.location}
                    </p>
                    <ul>
                      {experience.responsibilities.map(
                        (responsibility, idx) => (
                          <li key={idx}>{responsibility}</li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
    );
}
export default Experience;