import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  image: string;
}

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
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
      {/* Arrows - Positioned exactly at image center */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute -left-1 sm:-left-2 bg-[#e4e4e4] hover:bg-[#ccc] transition-colors duration-200 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 shadow-md"
        style={{ top: "calc(50% - 45px)" }}
      >
        <span className="text-xl sm:text-2xl text-white rotate-180 leading-none">
          ❯
        </span>
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute -right-1 sm:-right-2 bg-[#e4e4e4] hover:bg-[#ccc] transition-colors duration-200 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 shadow-md"
        style={{ top: "calc(50% - 45px)" }}
      >
        <span className="text-xl sm:text-2xl text-white leading-none">❯</span>
      </button>

      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <div key={product.id} className="keen-slider__slide">
            <div className="rounded-xl overflow-hidden shadow-sm flex flex-col items-center">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={180}
                className="object-contain w-full rounded-xl"
              />
              <p className="text-[#005881] text-lg text-center font-medium mt-2 mb-3">
                {product.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
