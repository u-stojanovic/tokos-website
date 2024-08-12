import React from "react";
import Link from "next/link";
import Footer from "@/components/shared/Landing/Footer";

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="flex flex-col md:flex-row h-screen bg-lightMode-surface dark:bg-darkMode-surface mt-16"
      >
        <div className="w-full max-w-5xl mx-auto py-12 md:py-16 lg:py-20">
          <div className="px-4 md:px-6">
            <div className="space-y-4 mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50 tracking-tight">
                Kontaktirajte nas
              </h1>
              <p className=" text-lg md:text-xl text-gray-900 dark:text-gray-50">
                Dopustite da ulepšamo Vaš poseban trenutak.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-lightMode-background dark:bg-darkMode-background text-lightMode-text dark:text-darkMode-text rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-48 md:h-auto rounded-t-lg md:rounded-l-lg md:rounded-tr-none overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11499.194769100606!2d22.2806123!3d43.9014359!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475473cae0a09be9%3A0x2d9b17154e662e37!2sSlatka%20kuca%20To-Ko%20S!5e0!3m2!1sen!2srs!4v1722524440812!5m2!1sen!2srs"
                    width="450"
                    height="250"
                    loading="lazy"
                    className=""
                  ></iframe>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-semibold">Zaječar</h3>
                  <p>Ljube Nešića 51, Zaječar 19000</p>
                  <p>
                    Telefon:{" "}
                    <Link href="tel:+381654274270" className="text-blue-500">
                      +381 (65) 427-427-0
                    </Link>
                  </p>
                  <p>
                    Instagram:{" "}
                    <Link
                      href="https://www.instagram.com/slatkakucatokos/"
                      className="text-blue-500"
                      target="_blank"
                    >
                      @slatkakucatokos
                    </Link>
                  </p>
                  <p>
                    Facebook:{" "}
                    <Link
                      href="https://www.facebook.com/slatkakuca.tokos"
                      className="text-blue-500"
                      target="_blank"
                    >
                      Slatka Kuća Tokos
                    </Link>
                  </p>
                  <p>
                    Viber i WhatsApp:{" "}
                    <Link href="tel:+381654274270" className="text-blue-500">
                      +381 (65) 427-427-0
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
