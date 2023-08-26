import { Button, Icon } from "cutie-ui";
import { useAppDispatch } from "../../hooks";
import { setCurrentPage } from "../../redux/slices/pagesSlice";
import styles from "./Pagination.module.scss";

export const Pagination = ({ currentPage, pages, pagesCount }: any) => {
  const dispatch = useAppDispatch();
  const onClickNext = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };
  const onClickPrev = () => {
    dispatch(setCurrentPage(currentPage - 1));
  };

  return (
    <div className={styles.pagination}>
      <Button
        disabled={currentPage == 1}
        startIcon={
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </Icon>
        }
        className={styles.prevButton}
        onClick={onClickPrev}
      >
        Назад
      </Button>
      <div className={styles.pages}>
        {pages.map((page: number, i: number) => (
          <span
            onClick={() => dispatch(setCurrentPage(page))}
            className={currentPage == page ? styles.active : ""}
            key={i}
          >
            {page}
          </span>
        ))}
      </div>
      <Button
        disabled={currentPage == pagesCount}
        endIcon={
          <Icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Icon>
        }
        className={styles.nextButton}
        onClick={onClickNext}
      >
        Далее
      </Button>
    </div>
  );
};
