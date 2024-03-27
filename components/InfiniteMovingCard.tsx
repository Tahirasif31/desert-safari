"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Absolutely phenomenal city tour experience! From the iconic landmarks to the hidden gems, City Tours provided an insightful exploration of the city's rich culture and history. Can't wait to join their desert safari next!",
    name: "Ahmed Abdullah Al-Mansoori",
    title: "Ras Al Khaimah",
  },
  {
    quote:
      "تجربة مذهلة مع جولات المدينة! كانت جولتهم في المدينة ممتعة ومثيرة للاهتمام، وكانت سفاري الصحراء مغامرة لا تُنسى بالفعل. أوصي بهم بشدة لمن يبحث عن تجربة سفر غامرة",
    name: "عبدالله صالح الفلاسي",
    title: "أم القيوين",
  },
  {
    quote:
      "City Tours made our vacation unforgettable! The knowledgeable guides, seamless organization, and attention to detail exceeded our expectations. The desert safari was a highlight, offering thrilling adventures in the mesmerizing dunes ",
    name: "David R.",
    title: "New York",
  },
  {
    quote:
      "قامت جولات المدينة بتجربة استثنائية من البداية إلى النهاية. كانت جولتهم في المدينة شاملة وممتعة، وكانت سفاري الصحراء مغامرة لا تُنسى تمامًا. شكرًا لكم على الذكريات التي لا تُنسى",
    name: "خالد علي الحمادي",
    title: "عجمان",
  },
  {
    quote:
      "Unforgettable memories made possible by City Tours! Their city tour was informative and enjoyable, while the desert safari was an exhilarating adventure. Can't wait to book with them again!",
    name: "Fatima Mohammed Al-Hashemi",
    title: "Abu Dhabi ",
  },
];
