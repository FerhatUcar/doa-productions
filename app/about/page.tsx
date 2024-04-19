import React from "react";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <main className="container">
      <div className="relative mx-auto max-w-[500px] text-zinc-200 bg-zinc-800 flex flex-col md:flex-row gap-8 my-8">
        <div className="p-4 flex flex-col gap-4">
          <div>
            <p className="uppercase base-color">Ferry & Kezi</p>
            <h1 className="text-4xl tracking-tight uppercase">Over ons</h1>
          </div>
          <div>
            Als gepassioneerde fotografen en vdeografen, streven we ernaar om de
            magie van jullie momenten vast te leggen en ze om te toveren tot
            tijdloze herinneriingen. Van intieme bruiloften tot bruisende
            evenementen, we vangen elk detail met zorg en precisie.
          </div>
          <div>
            Met een focus op zowel fotografie als videografie, bieden we een
            veelzijdig scala aan diensten om aan jullie behoeften te voldoen.
            Maar ons werk stopt niet bij het vastleggen van beelden; we geloven
            in de kracht van storytelling. Daarom gaan we verder dan alleen het
            maken van foto's en video's; we creëren verhalen die resoneren en
            emoties oproepen.
          </div>
          <div>
            Bovendien begrijpen we het belang van het promoten van jullie
            verhaal. Daarom bieden we ook expertise op het gebied van
            videopromotie, waardoor jullie beelden de aandacht krijgen die ze
            verdienen. Dus, of het nu gaat om het vastleggen van een speciaal
            moment of het promoten van jullie merk, DOA Productions zijn er om
            jullie visie tot leven te brengen.
          </div>
          <Link href="/contact" className="md:w-[250px] max-w-[500px]">
            <Button>Boek ons</Button>
          </Link>
        </div>
        <div className="p-4">
          <Image
            src="/ferry.jpg"
            alt="ferhat"
            width={300}
            height={90}
            className="absolute right-[-250px] top-[-10px]"
          />
        </div>
      </div>
    </main>
  );
};

export default About;
