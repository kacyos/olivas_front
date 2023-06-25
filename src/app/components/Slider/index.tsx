// create component React carouse

"use client";
import { useEffect, useRef } from "react";
import style from "./slider.module.scss";

export function Slider({ image = "", alt = "", unique = true }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  let width = carouselRef.current?.offsetWidth;

  const handleNextImage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const scrollWidth = carouselRef.current?.scrollWidth;
    const scrollLeft = carouselRef.current?.scrollLeft || 0;

    if (carouselRef.current && width && scrollWidth) {
      if (carouselRef.current && width) {
        carouselRef.current.scrollLeft = carouselRef.current.scrollWidth;
      } else {
        carouselRef.current.scrollLeft -= width;
      }
    }
  };

  const handlePreviousImage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const width = carouselRef.current?.offsetWidth;
    const scrollLeft = carouselRef.current?.scrollLeft || 0;

    if (carouselRef.current && width) {
      if (scrollLeft === 0) {
        carouselRef.current.scrollLeft = carouselRef.current.scrollWidth;
      } else {
        carouselRef.current.scrollLeft -= width;
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        width = carouselRef.current.offsetWidth;
      }
    };
    console.log("qq");

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <>
      <div className={style.carousel_container} ref={carouselRef}>
        <div className={style.cards_container}>
          <div className={style.carousel_card}>
            <div className={style.images}>
              <img src="./images/notice_image.png" alt="alerna" />
            </div>

            <div className={style.info}>
              <div className={style.card}>aqui fica um card</div>
              <p>aqui fica um texto</p>
            </div>
          </div>

          <div className={style.carousel_card}>
            <div className={style.images}>
              <img src="./images/notice_image.png" alt="alerna" />
            </div>

            <div className={style.info}>
              <div className={style.card}>aqui fica um card</div>
              <p>aqui fica um texto</p>
            </div>
          </div>
        </div>

        <div className={style.control_buttons}>
          <button
            onClick={(e) => handlePreviousImage(e)}
            className={style.left}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
          </button>

          <button onClick={(e) => handleNextImage(e)} className={style.right}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
