import { BackgroundGradientDemo } from "./BackgroundGradient";

function BestService() {
  return (
    <div className="flex lg:flex-row flex-col mx-auto xl:max-w-[1080px] md:max-w-[1000px] py-[100px] lg:gap-3 gap-8 px-5 items-center">
      <div className="md:px-5 px-1">
        <h2 className="md:text-[32px] text-[26px] font-[600] leading-[38px]">
          Book Best Service <br /> On Reasonable Price
        </h2>
        <p className="md:mt-3 mt-2">
          Welcome to City Tour and Desert Safari, where every journey is an
          unforgettable adventure. Our company prides itself on providing
          unparalleled services that cater to every traveler&apos;s desires.
          Embark on our City Tours and discover the vibrant pulse of urban life,
          as our knowledgeable guides lead you through iconic landmarks and
          hidden gems, immersing you in the rich culture and history of each
          destination.
        </p>
        <p className="md:mt-2 mt-1">
          For the ultimate thrill-seekers, our Desert Safaris offer exhilarating
          experiences amidst the vast, golden sands of Qatar. From
          heart-pounding dune bashing to serene camel rides, we ensure that
          every moment is filled with excitement and wonder.
        </p>
        <p className="mt-2 hidden md:block">
          With a commitment to excellence and customer satisfaction, City Tour
          and Desert Safari promises to make your journey with us an
          unforgettable one, leaving you with memories to cherish for a lifetime
        </p>
        <p className="mt-2 hidden md:block">
          Discover the essence of Qatar with City Tour and Desert Safari&apos;s
          premium services. Explore the bustling cityscape and uncover hidden
          treasures on our City Tours, then venture into the majestic desert for
          an adrenaline-pumping adventure. With expert guides, luxurious
          accommodations, and unparalleled hospitality, we guarantee an
          experience that exceeds all expectations.
        </p>
      </div>
      <div>
        <BackgroundGradientDemo />
      </div>
    </div>
  );
}

export default BestService;
