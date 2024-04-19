import VideoBackground from "@/components/VideoBackground";
import Button from "@/components/Button";
import Link from "next/link";
import { MotionWrapper } from "@/components/MotionWrapper";

export default function Home() {
  return (
    <>
      <main className="w-full flex flex-col items-center justify-between">
        <VideoBackground src="/bg.mp4" />
        <MotionWrapper>
          <div className="center-content px-8">
            <div>
              <p className="uppercase base-color">Doa Productions</p>
              <h1 className="text-4xl tracking-tight uppercase mb-2">
                Introduction
              </h1>
              <div className="flex flex-col space-y-4">
                <p>
                  Welkom bij DOA Productions: jullie creatieve partners in
                  verhalen vertellen door middel van beeld. Als gepassioneerde
                  fotografen en vdeografen, streven we ernaar om de magie van
                  jullie momenten vast te leggen en ze om te toveren tot
                  tijdloze herinneriingen. Van intieme bruiloften tot bruisende
                  evenementen, we vangen elk detail met zorg en precisie.
                </p>
                <div className="md:mx-auto">
                  <Link href="/about" className="md:w-[250px] max-w-[500px]">
                    <Button>Over ons</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </main>
    </>
  );
}
