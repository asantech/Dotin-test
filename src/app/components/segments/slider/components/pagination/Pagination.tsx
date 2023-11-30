import times from "lodash/times";
import clsx from "clsx";

import styles from "./Pagination.module.scss";

type PaginationButtonsProps = {
  currentPageIndex: number;
  sliderItemsCount: number;
  onPageSelect: (slideIndex: number) => void;
};

function PaginationButtons({
  currentPageIndex,
  sliderItemsCount,
  onPageSelect,
}: Readonly<PaginationButtonsProps>) {
  return (
    <div className={styles.pagination}>
      {times(sliderItemsCount)?.map((_, slideIndex) => {
        const key: number = slideIndex;
        return (
          <div
            key={key}
            className={clsx(
              styles.bullet,
              currentPageIndex === slideIndex && styles.active
            )}
            onClick={() => onPageSelect(slideIndex)}
          ></div>
        );
      })}
    </div>
  );
}

export default PaginationButtons;
