"use client";
import React from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const faqItems = [
    {
      question: "What is Insightify?",
      answer:
        "Insightify is an AI-powered optimization tool that analyzes your website's design, content, and user experience to uncover hidden opportunities and drive higher conversions.",
    },
    {
      question: "How does Insightify work?",
      answer:
        "Insightify works by using advanced algorithms to analyze various aspects of your website, including design elements, content quality, and user interaction patterns, to provide actionable insights and recommendations.",
    },
    {
      question: "Can I try Insightify for free?",
      answer:
        "Yes, Insightify offers free improvements for users. Each user gets 2 free improvements every 6 hours.",
    },
    {
      question: "Who can use?",
      answer:
        "Insightify is designed to work with a wide range of websites, including e-commerce sites, blogs, corporate websites, and more.",
    },
    {
      question: "How to get started?",
      answer:
        "To get started with Insightify, simply click on the 'Get Started' button and follow the instructions to set up your account and start optimizing your website.",
    },
  ];

  const toggleFAQ = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col p-6 items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-200 px-3 py-1 text-sm dark:bg-blue-700 text-blue-900 dark:text-blue-100">
              FAQ
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-50">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
              Here are some of the most common questions about Insightify.
            </p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`mb-4 p-6 rounded-lg shadow-md transition-transform transform ${
                activeIndex === index
                  ? "bg-blue-100 dark:bg-blue-800"
                  : "bg-white dark:bg-gray-800"
              }`}
            >
              <Button
                variant="ghost"
                className="w-full flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="flex items-center text-lg font-medium text-gray-900 dark:text-gray-50 break-words">
                  <FaQuestionCircle className="mr-2 text-blue-600 dark:text-blue-300" />
                  {item.question}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </Button>
              {activeIndex === index && (
                <div className="mt-4 text-gray-700 dark:text-gray-300 break-words">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
