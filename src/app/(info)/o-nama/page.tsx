import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-lightMode-surface dark:bg-darkMode-surface min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-lightMode-text dark:text-darkMode-text">
        O nama
      </h1>
      <div className="bg-lightMode-background dark:bg-darkMode-background shadow-lg rounded-lg overflow-hidden w-full max-w-screen-lg p-6">
        <p className="text-lightMode-text dark:text-darkMode-text mb-4">
          <strong>Slatka Kuca To-Ko S</strong> je porodična poslastičarnica
          smeštena u srcu Zaječara. Naša poslastičarnica je poznata po izuzetnim
          kolačima, tortama, i ostalim slatkim i slanim poslasticama koje
          pravimo sa puno ljubavi i pažnje. Koristimo samo najkvalitetnije
          sastojke kako bismo osigurali vrhunski ukus i zadovoljstvo za naše
          kupce.
        </p>
        <p className="text-lightMode-text dark:text-darkMode-text mb-4">
          Naša ponuda uključuje raznovrsne torte za sve prilike, kolače koji će
          oduševiti vaša čula, i specijalitete poput slanog keteringa koji su
          idealni za sve vrste proslava. Pored standardne ponude, nudimo i
          mogućnost poručivanja po meri, gde naši kupci mogu da kreiraju svoje
          savršene poslastice u saradnji sa našim talentovanim timom.
        </p>
        <p className="text-lightMode-text dark:text-darkMode-text mb-4">
          Kupci mogu da poruče proizvode online preko našeg sajta, putem
          telefona, ili preko društvenih mreža kao što su Instagram i Facebook.
          Takođe, dostupni smo putem WhatsApp-a i Vibera za sve dodatne
          informacije i poručivanje. Naš cilj je da svima omogućimo uživanje u
          našim poslasticama na najjednostavniji način.
        </p>
        <p className="text-lightMode-text dark:text-darkMode-text">
          U <strong>Slatka Kuca To-Ko S</strong> verujemo da slatkiši nisu samo
          hrana, već iskustvo koje delimo sa našim voljenima. Radujemo se
          prilici da budemo deo vaših posebnih trenutaka i proslava.
        </p>
      </div>
    </div>
  );
}
