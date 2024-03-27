import { Hero } from "./../components/Hero";
import { About } from "./../components/About";
import { ExpertsTeam } from "@/components/ExpertsTeam";
import { Meteor } from "@/components/Meteor";
import BestService from "@/components/BestService";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCard";
import { GlobeDemo } from "@/components/Globe";
import { LayoutGridDemo } from "@/components/LayoutGrid";
import { GetQuote } from "@/components/GetQuote";
import { SparklesPreview } from "@/components/Sparkles";

const review = [{}];

const SERVICES = [
  {
    title: "Camel Ride Doha Qatar",
    description:
      "Embark on a majestic camel ride through the enchanting landscapes of Doha, Qatar. Immerse yourself in the rich culture and stunning vistas of the desert.",
  },
  {
    title: "Doha Dhow Cruise Tour",
    description:
      "Sail through Doha's shimmering waters aboard a traditional dhow cruise. Experience panoramic views of the city skyline and indulge in authentic Qatari hospitality.",
  },
  {
    title: "North Qatar Tour",
    description:
      "Explore the captivating landscapes and cultural heritage of North Qatar on a guided tour. Immerse yourself in history, nature, and local traditions with unforgettable experiences.",
  },

  {
    title: "Zakreet West Coast",
    description:
      "Discover the untouched beauty of Zakreet's West Coast on a mesmerizing tour. Explore pristine beaches, rugged cliffs, and stunning vistas for an unforgettable coastal adventure.",
  },
  {
    title: "Doha City Tour",
    description:
      "Delve into the soul of Doha on our captivating city tour. Uncover its diverse architecture, bustling souqs, and cultural landmarks for an unforgettable exploration of Qatar's capital.",
  },
  {
    title: "Doha Combo City Tour",
    description:
      "Experience Doha's diversity with our Ultimate Combo City Tour. From historic sites to modern marvels, uncover the essence of this dynamic city in one comprehensive adventure...",
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <section id="about">
        <About />
      </section>
      <GlobeDemo />
      <div id="solutions">
        <ExpertsTeam />
      </div>
      <section
        id="services"
        className="mx-auto xl:max-w-[1080px] md:max-w-[1000px]"
      >
        <p className="text-[38px] font-[600] text-center pb-5 md:pb-10">
          Our Services
        </p>
        <div className="px-2 sm:px-6 grid md:grid-cols-3 gap-5 align-middle items-center sm:grid-cols-2 md:gap-x-5 md:gap-y-8 justify-items-center">
          {SERVICES.map((ser) => {
            return (
              <Meteor
                key={ser.title}
                title={ser.title}
                description={ser.description}
              />
            );
          })}
        </div>
      </section>
      <BestService />
      <section>
        <p className="text-[38px] font-[600] text-center">Discovery Matrix</p>
        <LayoutGridDemo />
      </section>
      <InfiniteMovingCardsDemo />
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto xl:max-w-[1080px] md:max-w-[1000px] py-[100px] lg:gap-3 gap-8 px-5 items-center">
        <div className="">
          <div>
            <SparklesPreview />
          </div>
        </div>
        <div id="contact">
          <GetQuote />
        </div>
      </div>
    </div>
  );
}
