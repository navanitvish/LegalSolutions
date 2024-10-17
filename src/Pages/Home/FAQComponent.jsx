import  { useState, useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

const FAQItem = ({ number, question, content, isOpen, onClick }) => (
  <div
    className={`bg-white  mb-4 overflow-hidden transition-all duration-300 hover:bg-black hover:text-white ${
      isOpen ? "shadow-lg" : ""
    }`}
    data-aos-duration="500"
  >
    <button
      className="w-full px-6 py-4 text-left flex justify-between items-center"
      onClick={onClick}
    >
      <span className="flex items-center">
        <span className="text-blue-600 mr-4">{number.padStart(2, "0")}</span>
        <span className="font-semibold">{question}</span>
      </span>
      <span className="text-xl">{isOpen ? "−" : "+"}</span>
    </button>
    {isOpen && (
      <div className="px-6 py-4 bg-gray-50 text-black">
        <p>{content}</p>
      </div>
    )}
  </div>
);

const FAQComponent = () => {
  const [openItem, setOpenItem] = useState(null);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//     });
//   }, []);

  const faqItems = [
    {
      question: "Choose Our Pricing List",
      content: `We have various list of pricing that you can choose based on your needs, or if you need don't see any plans that suit to you`,
    },
    {
      question: "Meet Up With Our Team",
      content: `Schedule a meeting with our team to discuss your specific needs and requirements.`,
    },
    {
      question: "Get A Deal",
      content: `Once we understand your needs, we'll offer you a customized deal that fits your budget.`,
    },
    {
      question: "Create Your Task",
      content: `After finalizing the deal, you can start creating and assigning tasks for our team to work on.`,
    },
    {
      question: "Done & Ready",
      content: `We'll complete the tasks and deliver the results to you. Your project will be done and ready for use.`,
    },
    {
      question: "Create Your Task",
      content: `After finalizing the deal, you can start creating and assigning tasks for our team to work on.`,
    },
    {
      question: "Done & Ready",
      content: `We'll complete the tasks and deliver the results to you. Your project will be done and ready for use.`,
    },
   
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4 ">
      <h2 className="text-6xl font-sans text-balance text-center p-10 font-semibold ">
        Frequently asked questions?
      </h2>
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8 ">
        <div className="md:w-1/2" data-aos="fade-right">
          <div className="bg-green-200 text-white p-6 rounded-[30px]">
            <div className="bg-gray-800 p-4 ">
              <img
                src="https://cdn.dribbble.com/userupload/16253505/file/original-38f3d3681aeb5e8ae370c8fce9001222.png?resize=752x"
                alt="Pricing graph"
                className="w-full h-auto rounded-xl "
              />
            </div>
            <h2 className="text-2xl font-bold mb-4">Choose Our Pricing List</h2>
            <p className="text-gray-300 mb-4">
              We have various list of pricing that you can choose based on your
              needs, or if you need don't see any plans that suit to you
            </p>
          </div>
        </div>
        <div className="md:w-1/2" data-aos="fade-left">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              number={`${index + 1}`}
              question={item.question}
              content={item.content}
              isOpen={openItem === index}
              onClick={() => setOpenItem(openItem === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
