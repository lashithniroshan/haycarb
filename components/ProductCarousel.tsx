import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Product Name",
    image: "/images/innerpage/product-placeholder.svg",
  },
  {
    id: 2,
    name: "Product Name",
    image: "/images/innerpage/product-placeholder.svg",
  },
  {
    id: 3,
    name: "Product Name",
    image: "/images/innerpage/product-placeholder.svg",
  },
  {
    id: 4,
    name: "Product Name",
    image: "/images/innerpage/product-placeholder.svg",
  },
  {
    id: 5,
    name: "Product Name",
    image: "/images/innerpage/product-placeholder.svg",
  },
];

const ProductCarousel = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 12 }, // Default for mobile

    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 16 }, // Tablet
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 20 }, // Desktop
      },
    },
  });

  return (
    <div className="relative w-full px-4">
      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <div key={product.id} className="keen-slider__slide">
            <div className="rounded-xl overflow-hidden shadow-sm flex flex-col items-center">
              <Image
                src={product.image}
                alt="product image"
                width={300}
                height={180}
                className="object-contain w-full"
              />
              <p className="text-[#005881] text-lg font-medium mt-2 mb-3">
                {product.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute top-1/2 left-0 -translate-y-1/2 bg-[#e4e4e4] hover:bg-[#ccc] w-8 h-8 rounded-full flex items-center justify-center z-10"
      >
        <span className="text-xl text-white rotate-180">❯</span>
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-[#e4e4e4] hover:bg-[#ccc] w-8 h-8 rounded-full flex items-center justify-center z-10"
      >
        <span className="text-xl text-white">❯</span>
      </button>
    </div>
  );
};

export default ProductCarousel;
