"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "About Us",
    description:
      "Discover Doha's allure and Qatar's expansive deserts with our expertly curated city tours and exhilarating desert safaris. Embark on a journey with us to uncover the hidden gems of this dynamic city and the breathtaking beauty of its surrounding desert landscapes. Let us be your guide as you delve into the rich culture, fascinating history, and thrilling adventures that await in Doha and beyond. With our unparalleled expertise and personalized service, your experience with us will be nothing short of unforgettable. Join us for a truly immersive exploration of Doha and Qatar's mesmerizing wonders with every step of your journey meticulously crafted by our passionate team at City Tours",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/des-six.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Our Mission",
    description:
      "At City Tours, our mission is to provide unforgettable experiences that captivate the hearts of our travelers. We are committed to showcasing the vibrant city life and boundless desert beauty of Doha, Qatar, through meticulously crafted city tours and exhilarating desert safaris. With a focus on excellence, authenticity, and customer satisfaction, we strive to exceed expectations, ensuring every journey with us is a seamless blend of adventure, discovery, and cultural immersion. Join us as we embark on a mission to create lasting memories and foster a deep appreciation for the captivating wonders of Doha and Qatar.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/des-two.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function About() {
  return <StickyScroll content={content} />;
}
