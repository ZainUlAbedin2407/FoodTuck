"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
  const faqData = [
    {
      question: "How we serve food?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "How can we get in touch with you?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "How is our food quality?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "What will be delivered? And when?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "How do we give home delivery?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "Is this restaurant 24 hours open?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
  ];

  // Initialize state with all items open

  const [openAccordions, setOpenAccordions] = useState<number[]>(
    Array.from({ length: faqData.length }, (_, i) => i) // All indexes open initially
  );

  const toggleFAQ = (index: number) => {
    setOpenAccordions(
      (prevState) =>
        prevState.includes(index)
          ? prevState.filter((i) => i !== index) // Remove if already open
          : [...prevState, index] // Add to open list if not already open
    );
  };

  return (
    <div className="max-w-[1320px] mx-auto px-4 py-10 lg:py-20">
      <h2 className="text-center text-[#333333] text-3xl lg:text-4xl font-semibold mb-2">
        Questions Looks Here
      </h2>
      <p className="text-center text-[16px] text-[#4f4f4f] mb-10">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-[#FAF7F2] p-4"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-bold text-[#333333]">
                {item.question}
              </h3>
              {openAccordions.includes(index) ? (
                <Minus size={20} className="text-[#333333]" />
              ) : (
                <Plus size={20} className="text-[#333333]" />
              )}
            </div>
            {openAccordions.includes(index) && (
              <p className="mt-4 text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
