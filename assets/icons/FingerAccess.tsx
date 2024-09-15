import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg";

const FingerAccess = (props: SvgProps) => (
    <Svg viewBox="0 0 24 24" width={24} height={24} color="#000000" fill="none" {...props}>
        <Path d="M18 12C18 8.68628 15.3137 6 12 6C8.68628 6 6 8.68628 6 12C6 15.3136 7 17.5 8.99985 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M15 21C9.5 17.5 9 13.6568 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 16.3431 15 18 15C19.6569 15 21 13.6569 21 12C21 7.02942 16.9706 3 12 3C7.02942 3 3 7.02942 3 12C3 12.6874 3.07707 13.3568 3.22303 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 12C12.5 17 17.5 19 17.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
);

export default FingerAccess;