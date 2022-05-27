import Carousel from "react-multi-carousel";
import PromoCard from "./PromoCard";

const PromoCarousel = () => {
  return (
    <>
      <h3 className="text-heading-3 text-white font-label font-bold pt-14 mb-4">
        Promo Liburan
      </h3>
      <Carousel
        className="py-5"
        containerClass="carousel-container"
        arrows
        centerMode={false}
        draggable
        swipeable
        customRightArrow={
          <button
            type="button"
            aria-label="Go to next slide"
            className="absolute right-0 opacity-50 hover:opacity-100"
          >
            <img
              src="/assets/icons/right-arrow-rounded.svg"
              height="75"
              width="75"
              alt=""
            />
          </button>
        }
        customLeftArrow={
          <button
            type="button"
            aria-label="Go to previous slide"
            className="absolute opacity-50 hover:opacity-100"
          >
            <img
              src="/assets/icons/left-arrow-rounded.svg"
              height="75"
              width="75"
              alt=""
            />
          </button>
        }
        partialVisbile
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 720,
            },
            items: 2,
            paritialVisibilityGutter: 100,
          },
        }}
      >
        <PromoCard />
        <PromoCard />
        <PromoCard />
        <PromoCard />
        <PromoCard />
      </Carousel>
    </>
  );
};

export default PromoCarousel;
