"use client";
import React, { useRef, useEffect, useState } from "react";
import styles from "./FiltersGrid.module.scss";
import Image from "next/image";

interface Genre {
  id: number;
  name: string;
}

interface FiltersGridProps {
  genres: Genre[];
}

export const FiltersGrid: React.FC<FiltersGridProps> = ({ genres }) => {
  const [isScrolledLeft, setIsScrolledLeft] = useState(false);
  const [isScrolledRight, setIsScrolledRight] = useState(false);
  const filtersContainerRef = useRef<HTMLDivElement>(null);
  const [scrollInterval, setScrollInterval] = useState<NodeJS.Timeout | null>(
    null
  );

  const checkScroll = () => {
    if (filtersContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        filtersContainerRef.current;
      if (scrollWidth <= clientWidth) {
        setIsScrolledLeft(false);
        setIsScrolledRight(false);
      } else {
        setIsScrolledLeft(scrollLeft > 0);
        setIsScrolledRight(scrollLeft + clientWidth < scrollWidth);
      }
    }
  };

  const startScrolling = (direction: "left" | "right") => {
    const scrollAmount = direction === "left" ? -40 : 40;
    setScrollInterval(
      setInterval(() => {
        filtersContainerRef.current?.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }, 50)
    );
  };

  const stopScrolling = () => {
    if (scrollInterval) {
      clearInterval(scrollInterval);
      setScrollInterval(null);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      checkScroll();
    };

    window.addEventListener("resize", handleResize);

    checkScroll();
    filtersContainerRef.current?.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      filtersContainerRef.current?.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <div className={styles.filtersGrid}>
      <button
        className={`${styles.filtersGrid__leftbutton} ${
          !isScrolledLeft ? styles.scrolled : ""
        }`}
        onMouseDown={() => startScrolling("left")}
        onMouseUp={stopScrolling}
        onMouseLeave={stopScrolling}
      >
        <Image src={`/left.svg`} alt="arrow left" height="20" width="20" />
      </button>
      <div className={styles.filtersGrid__container} ref={filtersContainerRef}>
        {genres.map((genre) => (
          <button
            key={genre.id}
            className={styles.filtersGrid__container__button}
          >
            {genre.name}
          </button>
        ))}
      </div>
      <button
        className={`${styles.filtersGrid__rightbutton} ${
          !isScrolledRight ? styles.scrolled : ""
        }`}
        onMouseDown={() => startScrolling("right")}
        onMouseUp={stopScrolling}
        onMouseLeave={stopScrolling}
      >
        <Image src={`/left.svg`} alt="arrow left" height="20" width="20" />
      </button>
    </div>
  );
};
