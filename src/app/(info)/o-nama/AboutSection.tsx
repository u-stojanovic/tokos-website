import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full pt-12 pb-64 bg-lightMode-surface dark:bg-darkMode-surface flex flex-col gap-6"
    >
      <TextRightImageLeft
        text="Slatka Kuća Tokos je porodična poslastičarnica
            smeštena u srcu Zaječara. Naša poslastičarnica je poznata po
            izuzetnim kolačima, tortama, i ostalim slatkim i slanim poslasticama
            koje pravimo sa puno ljubavi i pažnje. Koristimo samo
            najkvalitetnije sastojke kako bismo osigurali vrhunski ukus i
            zadovoljstvo za naše kupce."
        href="https://images.unsplash.com/photo-1670843840225-2ffcaf483c01?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <TextLeftImageRight
        text="Naša ponuda uključuje raznovrsne torte za sve prilike, kolače koji će
          oduševiti vaša čula, i specijalitete poput slanog keteringa koji su
          idealni za sve vrste proslava. Pored standardne ponude, nudimo i
          mogućnost poručivanja po meri, gde naši kupci mogu da kreiraju svoje
          savršene poslastice u saradnji sa našim talentovanim timom."
        href="https://images.unsplash.com/photo-1491222389951-dcb98b47f5b6?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <TextRightImageLeft
        text="Kupci mogu da poruče proizvode online preko našeg sajta, putem
          telefona, ili preko društvenih mreža kao što su Instagram i Facebook.
          Takođe, dostupni smo putem WhatsApp-a i Vibera za sve dodatne
          informacije i poručivanje. Naš cilj je da svima omogućimo uživanje u
          našim poslasticama na najjednostavniji način."
        href="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <TextLeftImageRight
        text="Mi verujemo da slatkiši nisu
              samo hrana, već iskustvo koje delimo sa našim voljenima. Radujemo
              se prilici da budemo deo vaših posebnih trenutaka i proslava."
        href="https://images.unsplash.com/photo-1505114643939-2b179ccc6430?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </section>
  );
}

interface AboutProps {
  text: string;
  href: string;
}

function TextLeftImageRight({ text, href }: AboutProps) {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-4">
      <div className="w-full md:w-2/3 bg-lightMode-background dark:bg-darkMode-background rounded-lg p-6 flex justify-start items-center h-64 shadow-xl">
        <p className="text-lightMode-text dark:text-darkMode-text text-center">
          {text}
        </p>
      </div>
      <div className="w-full md:w-1/3 flex justify-center h-64">
        <Image
          src={href}
          alt="About us Image"
          width={300}
          height={300}
          className="rounded-lg object-cover h-full shadow-xl"
        />
      </div>
    </div>
  );
}

function TextRightImageLeft({ text, href }: AboutProps) {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-4">
      <div className="w-full md:w-1/3 flex justify-center h-64">
        <Image
          src={href}
          alt="Cake making"
          width={300}
          height={300}
          className="rounded-lg object-cover h-full shadow-xl"
        />
      </div>
      <div className="w-full md:w-2/3 bg-lightMode-background dark:bg-darkMode-background rounded-lg p-6 flex justify-end items-center h-64 shadow-xl">
        <p className="text-lightMode-text dark:text-darkMode-text text-center">
          {text}
        </p>
      </div>
    </div>
  );
}
