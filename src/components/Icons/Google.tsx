/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from './types/icon-props';
import { useAppColors } from 'components/Configuration';

const GoogleIcon: FunctionComponent<IconProps> = (props) => {
  const { color = 'currentcolor', height = 24, width = 24, className, style } = props;
  const colors = useAppColors();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
      width={width}
      height={height}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 13V11H22V12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.0799 2 17.9313 3.4025 19.8167 5.76259L18.2542 7.01093C16.7443 5.12095 14.4653 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.0796 20 19.446 16.9463 19.9381 13H13Z"
        fill={colors[color] || color}
      />
    </svg>
  );
};

export default GoogleIcon;
