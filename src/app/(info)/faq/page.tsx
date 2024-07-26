"use client";
import React from "react";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/shared/Landing/Footer";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.02;
export default function FAQ() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const faqItems = [
    {
      question:
        "Koliko unapred treba da naručim proizvode iz vaše poslastičarnice?",
      answer:
        "Najbolje je da narudžbine izvršite najmanje dva dana unapred kako bismo mogli da osiguramo da svi proizvodi budu sveži i spremni na vreme.",
    },
    {
      question: "Koji su načini poručivanja proizvoda iz vaše poslastičarnice?",
      answer: (
        <div>
          Proizvode možete poručiti na sledeće načine:
          <ul className="list-disc ml-5">
            <li>Online: Preko našeg sajta.</li>
            <li>
              Telefonom: Pozivom na broj{" "}
              <Link href="tel:+381654274270" className="text-blue-500">
                +381 (65) 427-427-0
              </Link>
            </li>
            <li>
              Instagram: Slanjem poruke na naš profil{" "}
              <Link
                href="https://www.instagram.com/slatkakucatokos/"
                className="text-blue-500"
                target="_blank"
              >
                @slatkakucatokos
              </Link>
            </li>
            <li>
              Facebook: Slanjem poruke na naš profil{" "}
              <Link
                href="https://www.facebook.com/slatkakuca.tokos"
                className="text-blue-500"
                target="_blank"
              >
                Slatka Kuća Tokos
              </Link>
              .
            </li>
            <li>WhatsApp i Viber: Korišćenjem aplikacija WhatsApp i Viber.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Koji su načini plaćanja?",
      answer: "keš keš keš",
    },
    {
      question: "Koje je vaše radno vreme i kada mogu poručiti proizvode?",
      answer: (
        <div>
          Naše radno vreme je:
          <ul className="list-disc ml-5">
            <li>Radnim danima: od 09h do 21h</li>
            <li>Subotom: od 09h do 15h</li>
          </ul>
          Proizvode možete naručiti u bilo koje vreme tokom radnog vremena.
        </div>
      ),
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <BlurFade delay={BLUR_FADE_DELAY}>
      <section
        id="faq"
        className="w-full py-12 md:py-24 lg:py-32 bg-lightMode-surface dark:bg-darkMode-surface mt-12 sm:mt-0"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col p-6 items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-lightMode-primary px-3 py-1 text-sm dark:bg-darkMode-primary text-lightMode-text">
                FAQ
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-50">
                Često postavljana pitanja
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                Ovde su neka od najčešće postavljanih pitanja u vezi naše web
                stranice.
              </p>
            </div>
          </div>
          <div className="max-w-5xl mx-auto">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`mb-4 p-6 rounded-lg shadow-md transition-transform transform ${
                  activeIndex === index
                    ? "bg-lightMode-background dark:bg-darkMode-background"
                    : "bg-lightMode-background dark:bg-darkMode-background"
                }`}
              >
                <Button
                  variant="default"
                  className="w-full flex justify-between items-center text-left focus:outline-none focus:bg-none dark:hover:bg-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="flex items-center text-lg font-medium text-lightMode-text dark:text-gray-50">
                    <FaQuestionCircle
                      className="mr-2 text-lightMode-primary dark:text-darkMode-primary"
                      size={20}
                    />
                    <span className="flex-1 text-wrap">{item.question}</span>
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {activeIndex === index ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </span>
                </Button>
                {activeIndex === index && (
                  <>
                    <div className="py-4 border-b border-gray-300 dark:border-gray-600" />
                    <div className="mt-4 font-semibold text-lightMode-text dark:text-darkMode-text">
                      {item.answer}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </BlurFade>
  );
}
