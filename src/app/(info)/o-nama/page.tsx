import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 bg-lightMode-surface dark:bg-darkMode-surface"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col p-6 items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-lightMode-primary px-3 py-1 text-sm dark:bg-darkMode-primary text-lightMode-text">
              O nama
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-gray-50">
              O nama
            </h1>
          </div>
          <div className="bg-lightMode-background dark:bg-darkMode-background shadow-lg rounded-lg overflow-hidden w-full max-w-5xl mx-auto p-6">
            <p className="text-lightMode-text dark:text-darkMode-text mb-4">
              <strong>Slatka Kuca To-Ko S</strong> je porodična poslastičarnica
              smeštena u srcu Zaječara. Naša poslastičarnica je poznata po
              izuzetnim kolačima, tortama, i ostalim slatkim i slanim
              poslasticama koje pravimo sa puno ljubavi i pažnje. Koristimo samo
              najkvalitetnije sastojke kako bismo osigurali vrhunski ukus i
              zadovoljstvo za naše kupce.
            </p>
            <p className="text-lightMode-text dark:text-darkMode-text mb-4">
              Naša ponuda uključuje raznovrsne torte za sve prilike, kolače koji
              će oduševiti vaša čula, i specijalitete poput slanog keteringa
              koji su idealni za sve vrste proslava. Pored standardne ponude,
              nudimo i mogućnost poručivanja po meri, gde naši kupci mogu da
              kreiraju svoje savršene poslastice u saradnji sa našim
              talentovanim timom.
            </p>
            <p className="text-lightMode-text dark:text-darkMode-text mb-4">
              Kupci mogu da poruče proizvode online preko našeg sajta, putem
              telefona, ili preko društvenih mreža kao što su Instagram i
              Facebook. Takođe, dostupni smo putem WhatsApp-a i Vibera za sve
              dodatne informacije i poručivanje. Naš cilj je da svima omogućimo
              uživanje u našim poslasticama na najjednostavniji način.
            </p>
            <p className="text-lightMode-text dark:text-darkMode-text">
              U <strong>Slatka Kuca To-Ko S</strong> verujemo da slatkiši nisu
              samo hrana, već iskustvo koje delimo sa našim voljenima. Radujemo
              se prilici da budemo deo vaših posebnih trenutaka i proslava.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
