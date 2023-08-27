import React from "react";
import styles from "./FullGameLeft.module.scss";
import { Button, Icon } from "cutie-ui";
import { useNavigate } from "react-router-dom";
import { Game } from "../../redux/types/types";

interface FullGameLeftProps {
  data?: Game;
}

export const FullGameLeft: React.FC<FullGameLeftProps> = ({ data }) => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };

  if (!data) return <></>;

  return (
    <div className={styles.root}>
      <div className={styles.sticky}>
        <Button
          color="var(--textPrimary)"
          onClick={handleClickBack}
          variant="text2"
          className={styles.buttonBack}
          size="large"
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
        >
          Назад
        </Button>
        <img
          src={data.thumbnail}
          alt={`${data.title} image`}
          className={styles.image}
        />
        <a href={data.game_url} target="blank">
          <Button
            className={styles.button}
            variant="contained"
            endIcon={
              <Icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Icon>
            }
          >
            ИГРАТЬ
          </Button>
        </a>
      </div>
    </div>
  );
};
