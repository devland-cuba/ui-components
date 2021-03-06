/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from './types/icon-props';
import { useAppColors } from 'components/Configuration';

const FlaskIcon: FunctionComponent<IconProps> = (props) => {
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
        fill={colors[color] || color}
        d="M20.11,17.49,15,8.73V4h1a1,1,0,0,0,0-2H8A1,1,0,0,0,8,4H9V8.73L3.89,17.49A3,3,0,0,0,6.48,22h11a3,3,0,0,0,2.59-4.51Zm-9.25-8A1,1,0,0,0,11,9V4h2V9a1,1,0,0,0,.14.5L14,11H10Zm7.52,10a1,1,0,0,1-.86.5h-11a1,1,0,0,1-.86-.5,1,1,0,0,1,0-1L8.83,13h6.35l3.2,5.5A1,1,0,0,1,18.38,19.5ZM10,15a1,1,0,1,0,1,1A1,1,0,0,0,10,15Zm4,1a1,1,0,1,0,1,1A1,1,0,0,0,14,16Z"
      />
    </svg>
  );
};

export default FlaskIcon;
