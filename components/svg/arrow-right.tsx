import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function ArrowRight({ color, ...props }: SvgProps) {
  return (
    <Svg width={10} height={16} viewBox="0 0 10 16" fill="none" color={color} {...props}>
      <Path
        d="M1.5 1l7 7-7 7"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ArrowRight;
