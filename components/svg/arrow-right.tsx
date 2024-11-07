import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SvgComponent({ ...props }: SvgProps) {
  return (
    <Svg width={10} height={16} viewBox="0 0 10 16" fill="none" {...props}>
      <Path
        d="M1.5 1l7 7-7 7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
