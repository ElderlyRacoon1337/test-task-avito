import styles from "./Filters.module.scss";
import React, { useState } from "react";

import { Button, Icon, Menu, MenuItem } from "cutie-ui";

interface FilterProps {
  label: string;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  menuItems: string[];
  currentValue: string;
}

export const Filter: React.FC<FilterProps> = ({
  label,
  setValue,
  menuItems,
  currentValue,
}) => {
  const [ancorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(ancorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setAnchorEl(e.currentTarget);
  };

  return (
    <div className={styles.filter}>
      <p>{label}</p>
      <Button
        onClick={handleClick}
        endIcon={
          currentValue == "Браузерные" ? (
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
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
              </svg>
            </Icon>
          ) : currentValue == "Windows" ? (
            <Icon>
              <svg
                fill="var(--primary)"
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 640 640"
              >
                <path d="M.2 298.669L0 90.615l256.007-34.76v242.814H.201zM298.658 49.654L639.905-.012v298.681H298.657V49.654zM640 341.331l-.071 298.681L298.669 592V341.332h341.33zM255.983 586.543L.189 551.463v-210.18h255.794v245.26z" />
              </svg>
            </Icon>
          ) : (
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
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </Icon>
          )
        }
        size="large"
      >
        {currentValue}
      </Button>
      <Menu
        className={styles.menu}
        fullWidth
        anchorEl={ancorEl as any}
        onClose={handleClose}
        open={open}
      >
        {menuItems.map((el, i) => (
          <MenuItem onClose={handleClose} onClick={() => setValue(el)} key={i}>
            {el}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
