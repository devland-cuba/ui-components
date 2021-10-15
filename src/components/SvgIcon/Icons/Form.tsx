/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const FormIcon: FunctionComponent<IconProps> = (props) => {
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
        transform="rotate(0,12,12)"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.1818 3H3.81818C2.81403 3 2 3.89543 2 5V7C2 8.10457 2.81403 9 3.81818 9H20.1818C21.186 9 22 8.10457 22 7V5C22 3.89543 21.186 3 20.1818 3ZM3.81818 11H20.1818C21.186 11 22 11.8954 22 13V15C22 16.1046 21.186 17 20.1818 17H3.81818C2.81403 17 2 16.1046 2 15V13C2 11.8954 2.81403 11 3.81818 11ZM4 13V15H20V13H4ZM4 5V7H20V5H4ZM14 19H2V21H14V19Z"
        fill={color}
      />
    </svg>
  );
};

export default FormIcon;
