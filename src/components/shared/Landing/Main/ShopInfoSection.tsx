import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import NumberTicker from "@/components/magicui/number-ticker";

export default function ShopInfoSection() {
  return (
    <section className="bg-white py-12 text-[#754437] dark:text-white dark:bg-gray-900 grid-cols-1 p-4 md:grid-cols-3 lg:grid-cols-3 items-stretch justify-between gap-4 grid">
      <TextCard />
      <PictureCard />
      <StatsCard />
    </section>
  );
}

function TextCard() {
  return (
    <div className="items-center justify-center text-center content-center font-raleway bg-[#FFD0CE] rounded-lg p-4 drop-shadow-xl min-h-[300px] h-full">
      <div>
        <h2 className="text-2xl">Tokos magija</h2>
        <p>
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
    <div className="items-center justify-center rounded-lg drop-shadow-xl min-h-[300px] min-w[300px] h-full object-contain lg:w-full md:w-full">
      <Image
        src="https://images.unsplash.com/photo-1545396113-20ce94ab6433?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Muffin Image"
        fill={true}
      />
    </div>
  );
}

function StatsCard() {
  const startDate = new Date("2004-09-15");
  const currentDate = new Date();
  let workingYears = currentDate.getFullYear() - startDate.getFullYear();
  const m = currentDate.getMonth() - startDate.getMonth();
  if (m < 0 || (m === 0 && currentDate.getDate() < startDate.getDate())) {
    workingYears--;
  }

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 text-center font-raleway text-2xl bg-[#FFD0CE] rounded-lg p-4 drop-shadow-xl min-h-[300px] h-full items-center justify-center">
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
      <h2>
        <NumberTicker value={number} className="text-[#754437]" />
      </h2>
      <p>{text}</p>
    </div>
  );
}
