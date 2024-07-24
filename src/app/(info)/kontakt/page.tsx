import React from "react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-lightMode-surface dark:bg-darkMode-surface min-h-screen">
      <div className="space-y-2 flex flex-col p-6 items-center justify-center">
        <div className="inline-block rounded-lg bg-lightMode-primary px-3 py-1 text-sm dark:bg-darkMode-primary text-lightMode-text">
          Kontakt
        </div>
        <h1 className="text-3xl font-bold mb-6 text-lightMode-text dark:text-darkMode-text">
          Kontaktirajte nas
        </h1>
        <div className="flex flex-col lg:flex-row items-center lg:items-start bg-lightMode-background dark:bg-darkMode-background shadow-lg rounded-lg overflow-hidden w-full max-w-screen-lg">
          <div className="w-full lg:w-1/2 p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2874.798693671049!2d22.2780373764668!3d43.90143587109143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475473cae0a09be9%3A0x2d9b17154e662e37!2sSlatka%20kuca%20To-Ko%20S!5e0!3m2!1sen!2srs!4v1721832064093!5m2!1sen!2srs"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Embed"
              aria-label="Google Maps showing the location of Slatka kuca To-Ko S"
            ></iframe>
          </div>
          <div className="w-full lg:w-1/2 p-6 bg-lightMode-background dark:bg-darkMode-background">
            <h2 className="text-2xl font-semibold mb-4 text-lightMode-text dark:text-darkMode-text">
              Poručivanje
            </h2>
            <ul className="list-disc list-inside text-lightMode-text dark:text-darkMode-text">
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
                <strong>Instagram:</strong> Slanjem poruke na nasem profilu{" "}
                <Link
                  href="https://www.instagram.com/slatkakucatokos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-poppins dark:text-blue-500"
                >
                  @slatkakucatokos
                </Link>
                .
              </li>
              <li>
                <strong>Facebook:</strong> Slanjem poruke na nasem profilu
                <br />
                <Link
                  href="https://www.facebook.com/Slatka-Kuca-Tokos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-poppins dark:text-blue-500"
                >
                  Slatka Kuca Tokos
                </Link>
                .
              </li>
              <li>
                <strong>WhatsApp i Viber:</strong> Koriscenjem aplikacija
                WhatsApp i Viber.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
