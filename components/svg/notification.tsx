import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={20} height={22} viewBox="0 0 20 22" fill="none" {...props}>
      <Path
        clipRule="evenodd"
        d="M10 16.848c5.64 0 8.248-.724 8.5-3.627 0-2.902-1.819-2.716-1.819-6.276C16.681 4.165 14.045 1 10 1S3.319 4.164 3.319 6.945c0 3.56-1.819 3.374-1.819 6.275.253 2.915 2.862 3.628 8.5 3.628z"
        stroke="#130F26"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.389 19.857c-1.364 1.515-3.492 1.533-4.87 0"
        stroke="#130F26"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
