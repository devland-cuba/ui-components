/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from './types/icon-props';
import { useAppColors } from 'components/Configuration';

const FireIcon: FunctionComponent<IconProps> = (props) => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.1758 11.53C11.7222 10.763 11.6612 9.9553 11.2823 8.50235C10.533 5.62882 10.8313 4.05383 13.4147 2.18916L14.6756 1.27905L14.9805 2.80389C15.3046 4.42441 15.8369 5.42671 17.2035 7.35464C17.2578 7.43122 17.2578 7.43122 17.3124 7.50815C19.2809 10.2854 20 11.9596 20 15C20 18.6884 16.2713 22 12 22C7.72837 22 3.99996 18.6888 3.99996 15C3.99996 14.9311 4.00003 14.9331 3.98835 14.6285C3.89799 12.2718 4.33377 10.4274 6.09703 8.43586C6.46957 8.01509 6.89304 7.61068 7.36959 7.22371L8.42158 6.36946L8.92762 7.62658C9.30154 8.55547 9.73966 9.28567 10.2346 9.82151C10.6537 10.2754 10.9647 10.8461 11.1758 11.53ZM7.59444 9.76166C6.23708 11.2947 5.91437 12.6606 5.98688 14.5518C6.00038 14.9039 5.99996 14.8915 5.99996 15C5.99996 17.5279 8.78356 20 12 20C15.2161 20 18 17.5275 18 15C18 12.4582 17.4317 11.135 15.6807 8.6647C15.6264 8.58818 15.6264 8.58818 15.5719 8.51125C14.5085 7.01111 13.8746 5.96759 13.4553 4.80052C12.7704 5.62118 12.8107 6.43739 13.2176 7.99766C13.967 10.8712 13.6686 12.4462 11.0852 14.3108L9.61223 15.3741L9.50181 13.5608C9.43126 12.4023 9.16902 11.6156 8.76535 11.1785C8.36652 10.7467 8.00643 10.2411 7.68351 9.66279C7.65339 9.69566 7.6237 9.72862 7.59444 9.76166Z"
        fill={colors[color] || color}
      />
    </svg>
  );
};

export default FireIcon;
