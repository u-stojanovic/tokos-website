import React from "react";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row h-screen bg-lightMode-surface dark:bg-darkMode-surface"
    >
      <div className="w-full md:w-1/2 h-1/2 md:h-screen p-4 md:p-6 lg:p-8 drop-shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2874.798693671049!2d22.2780373764668!3d43.90143587109143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475473cae0a09be9%3A0x2d9b17154e662e37!2sSlatka%20kuca%20To-Ko%20S!5e0!3m2!1sen!2srs!4v1721832064093!5m2!1sen!2srs"
          className="w-full h-full rounded-lg"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center bg-lightMode-surface dark:bg-darkMode-surface p-4 md:p-6 lg:p-8">
        <div className="w-full lg:w-3/4 bg-lightMode-surface rounded-lg shadow-lg p-6 md:p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-lightMode-text dark:text-lightMode-text">
            Poručivanje
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lightMode-text dark:text-lightMode-text">
            <li>
              <strong>Online:</strong> Preko našeg sajta.
            </li>
            <li>
              <strong>Telefon:</strong> Pozovite nas{" "}
              <Link className="text-blue-500" href="tel:+381654274270">
                +381 (65) 427-427-0
              </Link>
              .
            </li>
            <li>
              <strong>Instagram:</strong> Slanjem poruke na našem profilu{" "}
              <Link
                href="https://www.instagram.com/slatkakucatokos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-poppins"
              >
                @slatkakucatokos
              </Link>
              .
            </li>
            <li>
              <strong>Facebook:</strong> Slanjem poruke na našem profilu
              <br />
              <Link
                href="https://www.facebook.com/Slatka-Kuca-Tokos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-poppins"
              >
                Slatka Kuca Tokos
              </Link>
              .
            </li>
            <li>
              <strong>WhatsApp i Viber:</strong> Korišćenjem aplikacija WhatsApp
              i Viber.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
