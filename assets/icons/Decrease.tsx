import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg";

const Decrease = ({ width, height, color, ...props }: { width: number | string, height: number | string, color: string }) => (
    <Svg viewBox="0 0 24 24" width={width} height={height} color="#ef4444" fill="none" {...props}>
        <Path d="M20 11V16H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M20 16L15 11C14.1174 10.1174 13.6762 9.67615 13.1346 9.62737C13.045 9.6193 12.955 9.6193 12.8654 9.62737C12.3238 9.67615 11.8826 10.1174 11 11C10.1174 11.8826 9.67615 12.3238 9.13457 12.3726C9.04504 12.3807 8.95496 12.3807 8.86543 12.3726C8.32385 12.3238 7.88256 11.8826 7 11L4 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
);

export default Decrease;
