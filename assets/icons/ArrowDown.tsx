import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg";

const ArrowDown = ({ width, height, color, ...props }: { width: number | string, height: number | string, color: string }) => (
    <Svg viewBox="0 0 24 24" width={width} height={height} color={color} fill="none" {...props}>
        <Path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
);

export default ArrowDown;
