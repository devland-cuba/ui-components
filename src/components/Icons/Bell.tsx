/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from './types/icon-props';

const BellIcon: FunctionComponent<IconProps> = (props) => {
  const { color = 'currentcolor', height = 24, width = 24, className, style } = props;

  return (
    <svg
      className={className}
      style={style}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 10C19 5.94082 16.7616 3.1235 13.8654 2.27771C13.7605 2.00636 13.5948 1.7541 13.3695 1.54243C12.5997 0.81919 11.4003 0.81919 10.6305 1.54243C10.4057 1.75364 10.2402 2.00525 10.1353 2.27592C7.23535 3.11803 5 5.92919 5 10C5 12.6339 4.46898 14.1098 3.48596 15.1793C3.32161 15.3582 2.87632 15.7678 2.57468 16.0453L2.57465 16.0453L2.57465 16.0453L2.5745 16.0454C2.43187 16.1766 2.32138 16.2783 2.28796 16.3119L2 16.604V20.0141H8.08798C8.29384 21.0761 8.87009 21.7867 9.9122 22.4226C11.1941 23.2049 12.8059 23.2049 14.0878 22.4226C15.0075 21.8614 15.6241 20.9989 15.8743 20.0141H22V16.604L21.712 16.3119C21.6817 16.2812 21.5757 16.1834 21.437 16.0555C21.1363 15.7781 20.6823 15.3592 20.5154 15.1769C19.5317 14.1024 19 12.6246 19 10ZM13.7367 20.0141H10.1786C10.3199 20.2769 10.5607 20.4754 10.954 20.7154C11.5963 21.1073 12.4037 21.1073 13.046 20.7154C13.3434 20.5339 13.5758 20.2937 13.7367 20.0141ZM19.0402 16.5274C19.2506 16.7573 19.7016 17.1774 20 17.4519V18.0141H4V17.4524C4.29607 17.1811 4.74843 16.7613 4.95849 16.5327C6.29422 15.0794 7 13.1178 7 10C7 6.21989 9.33277 4.01238 12 4.01238C14.6597 4.01238 17 6.23129 17 10C17 13.1078 17.706 15.07 19.0402 16.5274Z"
        fill={color}
      />
    </svg>
  );
};

export default BellIcon;