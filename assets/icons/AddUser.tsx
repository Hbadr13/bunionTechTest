

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Path, Svg } from 'react-native-svg'

const AddUser = ({ width, height, color, ...props }: { width: number | string, height: number | string, color: string }) => {
    return (
        <Svg viewBox="0 0 24 24" width={width} height={height} color={color} fill="none" {...props}>
            <Path d="M17 10H20M23 10H20M20 10V7M20 10V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M1 20V19C1 15.134 4.13401 12 8 12V12C11.866 12 15 15.134 15 19V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>

    )
}

export default AddUser

const styles = StyleSheet.create({})