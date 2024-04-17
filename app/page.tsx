import VideoBackground from "@/components/VideoBackground";
import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="w-full flex flex-col items-center justify-between">
        <VideoBackground src="/bg.mp4" />
        <div className="center-content px-8">
          <div className="">
            <h1 className="text-4xl tracking-tight uppercase">Introduction</h1>
            <div className="flex flex-col space-y-4">
              <div>
                Welkom bij DOA Productions: jullie creatieve partners in
                verhalen vertellen door middel van beeld. Als gepassioneerde
                fotografen en videografen, streven we ernaar om de magie van
                jullie momenten vast te leggen en ze om te toveren tot tijdloze
                herinneringen. Van intieme bruiloften tot bruisende evenementen,
                we vangen elk detail met zorg en precisie.
              </div>
              {/*<div>*/}
              {/*  Met een focus op zowel fotografie als videografie, bieden we een*/}
              {/*  veelzijdig scala aan diensten om aan jullie behoeften te voldoen.*/}
              {/*  Maar ons werk stopt niet bij het vastleggen van beelden; we*/}
              {/*  geloven in de kracht van storytelling. Daarom gaan we verder dan*/}
              {/*  alleen het maken van foto's en video's; we creëren verhalen die*/}
              {/*  resoneren en emoties oproepen.*/}
              {/*</div>*/}
              {/*<div>*/}
              {/*  Bovendien begrijpen we het belang van het promoten van jullie*/}
              {/*  verhaal. Daarom bieden we ook expertise op het gebied van*/}
              {/*  videopromotie, waardoor jullie beelden de aandacht krijgen die ze*/}
              {/*  verdienen. Dus, of het nu gaat om het vastleggen van een speciaal*/}
              {/*  moment of het promoten van jullie merk, DOA Productions zijn er om*/}
              {/*  jullie visie tot leven te brengen.*/}
              {/*</div>*/}
              <div className="w-full md:mx-auto">
                <Button>
                  <Link href="/about">Over ons</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
