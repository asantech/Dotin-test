"use client";

import { useState, useRef, useEffect, CSSProperties } from "react";
import Image from "next/image";
import isEmpty from "lodash/isEmpty";
import { useMediaQuery } from "usehooks-ts";
import { Swiper, SwiperSlide } from "swiper/react";
import { t } from "@/localize/i18n";
import "swiper/css";

import useSlider from "./useSlider";
import PaginationButtons from "./components/pagination/Pagination";
import Navigator from "./components/navigator/Navigator";
import styles from "./Slider.module.scss";

type SliderItem = {
  buttonTitle: string;
  entityId: number;
  entityType: string;
  id: number;
  imageUrl: string;
  link: string;
  logoImageUrl: string;
  mediumImageUrl: string;
  smallImageUrl: string;
  type: string;
};

type SliderProps = {
  windowWidth: number;
  isSidebarCollapsed: boolean;
};

const SLIDER_IMAGE_ASPECT_RATIO: number = 646 / 283;
const SLIDER_WRAPPER_ASPECT_RATIO: number = 1100 / 370;

function Slider({ windowWidth, isSidebarCollapsed }: Readonly<SliderProps>) {
  const swiperRef = useRef<any>();
  const minWidth1200px: boolean = useMediaQuery("(min-width: 1200px)");
  const { data, isFetching } = useSlider();

  const [currentPage, setCurrentPage] = useState<number>(0);

  const VISIBLE_SIDEBAR_WIDTH: number = isSidebarCollapsed ? 60 : 256;
  const SIDEBAR_WIDTH: number = minWidth1200px ? VISIBLE_SIDEBAR_WIDTH : 0;
  const PAGE_SCROLLBAR_WIDTH: number = minWidth1200px ? 10 : 0;

  const sliders = (data as any)?.sliders;
  const hasSliders: boolean = !isEmpty(sliders);
  const sliderItemWidth: number =
    windowWidth - (SIDEBAR_WIDTH + PAGE_SCROLLBAR_WIDTH);
  const sliderImageHeight: number = sliderItemWidth / SLIDER_IMAGE_ASPECT_RATIO;
  const sliderWrapperHeight: number =
    sliderItemWidth / SLIDER_WRAPPER_ASPECT_RATIO;

  const onSlideChange = (swiper: any) => {
    setCurrentPage(swiper.snapIndex);
  };

  const onSwiper = (swiper: any) => {
    swiperRef.current = swiper;
  };

  const selectPage = (page: number) => {
    swiperRef.current.slideTo(page);
  };

  const navigateLeft = () => {
    swiperRef.current.slidePrev();
  };

  const navigateRight = () => {
    swiperRef.current.slideNext();
  };

  const swiperStyles: CSSProperties = {
    overflow: "hidden",
    height: sliderWrapperHeight,
    width: sliderItemWidth,
  };

  useEffect(() => {
    const swiperTimerId: any = setInterval(() => {
      if (hasSliders && swiperRef.current.snapIndex === sliders.length - 1) {
        swiperRef.current.slideTo(0);
        return;
      }

      swiperRef.current.slideNext();
    }, 6000);
    return () => clearInterval(swiperTimerId);
  }, [hasSliders, sliders?.length]);

  const showSliderPlaceholder: boolean = isFetching || !hasSliders;
  const showSlider: boolean = !isFetching && hasSliders;

  return (
    <section className={styles["slider"]}>
      {showSliderPlaceholder && <div style={{ minHeight: 370 }}></div>}
      {showSlider && (
        <>
          <Swiper
            style={swiperStyles}
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={onSlideChange}
            onSwiper={onSwiper}
          >
            {sliders.map((slider: SliderItem) => {
              return (
                <SwiperSlide key={slider.id}>
                  <span style={{ color: "white" }}>
                    <Image
                      src={slider.imageUrl}
                      alt={t("IMAGE.ALT.SWIPER_SLIDE_IMAGE")}
                      width={sliderItemWidth}
                      height={sliderImageHeight}
                    />
                  </span>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <PaginationButtons
            currentPageIndex={currentPage}
            sliderItemsCount={(data as any)?.sliders?.length}
            onPageSelect={selectPage}
          />
          <Navigator
            navigateLeft={navigateLeft}
            navigateRight={navigateRight}
          />
        </>
      )}
    </section>
  );
}

export default Slider;
