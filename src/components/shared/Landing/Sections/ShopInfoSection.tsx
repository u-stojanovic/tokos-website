import Image from "next/image";
import NumberTicker from "@/components/magicui/number-ticker";

export default function ShopInfoSection() {
  return (
    <section className="bg-lightMode-background py-12 text-lightMode-text dark:text-darkMode-text dark:bg-darkMode-background grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-stretch justify-between gap-8 p-6 drop-shadow-lg">
      <TextCard />
      <PictureCard />
      <StatsCard />
    </section>
  );
}

function TextCard() {
  return (
    <div className="flex items-center justify-center text-center font-raleway rounded-lg p-6 min-h-[300px] h-full transform transition-transform duration-300 hover:scale-105">
      <div>
        <h2 className="text-3xl font-bold mb-4">Tokos magija</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          molestiae qui! Veniam iure harum rerum tenetur, dolorum, nulla
          praesentium id minus ea cupiditate unde similique commodi voluptatem
          iusto consectetur in.
        </p>
      </div>
    </div>
  );
}

function PictureCard() {
  return (
    <div className="flex items-center justify-center rounded-lg shadow-lg min-h-[300px] min-w-[300px] h-full object-contain lg:w-full md:w-full transform transition-transform duration-300 hover:scale-105">
      <Image
        src="https://images.unsplash.com/photo-1545396113-20ce94ab6433?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Muffin Image"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  );
}

function StatsCard() {
  const startDate = new Date("2004-09-05");
  const currentDate = new Date();
  let workingYears = currentDate.getFullYear() - startDate.getFullYear();
  const m = currentDate.getMonth() - startDate.getMonth();
  if (m < 0 || (m === 0 && currentDate.getDate() < startDate.getDate())) {
    workingYears--;
  }

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 text-center font-raleway text-2xl rounded-lg p-6 bg-lightMode-surface dark:bg-darkMode-surface min-h-[300px] h-full items-center justify-center transform transition-transform duration-300 hover:scale-105">
      <StatsCardInfo number={54} text="ukusa torti" />
      <StatsCardInfo number={workingYears} text="godina rada" />
      <StatsCardInfo number={23} text="ukusa kolača" />
    </div>
  );
}

interface StatsCardInfoProps {
  number: number;
  text: string;
}

function StatsCardInfo({ number, text }: StatsCardInfoProps) {
  return (
    <div className="text-nowrap">
      <h2 className="text-4xl font-bold mb-2">
        <NumberTicker
          value={number}
          className="text-lightMode-text dark:text-darkMode-text"
        />
      </h2>
      <p className="text-lg">{text}</p>
    </div>
  );
}
