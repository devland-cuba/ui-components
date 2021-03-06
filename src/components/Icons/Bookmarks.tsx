/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from './types/icon-props';
import { useAppColors } from 'components/Configuration';

const BookmarksIcon: FunctionComponent<IconProps> = (props) => {
  const { color = 'currentcolor', height = 24, width = 24, className, style } = props;
  const colors = useAppColors();

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
      <path fillRule="evenodd" clipRule="evenodd" d="M10 1C8.90652 1 8.01801 1.89236 8.00027 3H19V17.9156L21 18.9324V3.03378C21 1.91055 20.1046 1 19 1H10ZM10 19.118L3 22.618V7C3 5.89543 3.89543 5 5 5H15C16.1046 5 17 5.89543 17 7V22.618L10 19.118ZM5 19.382L10 16.882L15 19.382V7H5V19.382Z" fill={colors[color] || color} />
    </svg>
  );
};

export default BookmarksIcon;
