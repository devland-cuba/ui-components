/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const TagIcon: FunctionComponent<IconProps> = (props) => {
  const { color, height, width, className, style } = props;

  return (
    <svg
      className={className}
      style={style}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="icon"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.53518 5H21C22.1046 5 23 5.89543 23 7V17C23 18.1046 22.1046 19 21 19H6.53518C5.86648 19 5.24201 18.6658 4.87108 18.1094L1.16795 12.5547C0.944017 12.2188 0.944017 11.7812 1.16795 11.4453L4.87108 5.8906C5.24201 5.3342 5.86648 5 6.53518 5ZM3.20185 12L6.53518 17H21V7H6.53518L3.20185 12ZM8 12C8 12.5523 7.55228 13 7 13C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11C7.55228 11 8 11.4477 8 12Z"
        fill={color}
      />
    </svg>
  );
};

export default TagIcon;
