/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const CreatePenIcon: FunctionComponent<IconProps> = (props) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.4374 2C17.0921 2 17.7197 2.26142 18.1781 2.72342L21.279 5.82432C21.7407 6.286 22.0001 6.91217 22.0001 7.56508C22.0001 8.21799 21.7407 8.84416 21.279 9.30584L9.95751 20.6238C9.25902 21.4295 8.2689 21.9245 7.1346 22.0023H2V21.0023L2.00325 16.7873C2.08844 15.7328 2.57867 14.7523 3.3265 14.0934L14.6954 2.72463C15.1564 2.26083 15.7834 2 16.4374 2ZM7.06398 20.0048C7.59821 19.967 8.09549 19.7184 8.49479 19.2616L16.0567 11.6997L12.3023 7.94519L4.6961 15.5496C4.29095 15.9079 4.04031 16.4092 4 16.8678V20.0029L7.06398 20.0048ZM13.7167 6.53115L17.4709 10.2855L19.8648 7.89162C19.9514 7.80502 20.0001 7.68756 20.0001 7.56508C20.0001 7.4426 19.9514 7.32514 19.8648 7.23854L16.7611 4.13486C16.6755 4.04855 16.5589 4 16.4374 4C16.3158 4 16.1992 4.04855 16.1136 4.13486L13.7167 6.53115Z"
        fill={color}
      />
    </svg>
  );
};

export default CreatePenIcon;
