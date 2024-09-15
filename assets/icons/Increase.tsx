import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg";

const Increase = ({ width, height, color, ...props }: { width: number | string, height: number | string, color: string }) => (
    <Svg viewBox="0 0 24 24" width={width} height={height} color="#4ade80" fill="none" {...props}>
        <Path d="M20 13V8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M20 8L15 13C14.1174 13.8826 13.6762 14.3238 13.1346 14.3726C13.045 14.3807 12.955 14.3807 12.8654 14.3726C12.3238 14.3238 11.8826 13.8826 11 13C10.1174 12.1174 9.67615 11.6762 9.13457 11.6274C9.04504 11.6193 8.95496 11.6193 8.86543 11.6274C8.32385 11.6762 7.88256 12.1174 7 13L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
);

export default Increase;
