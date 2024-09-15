import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ViewIcon from './ViewIcon'
import ViewOffSlashIcon from './ViewOffSlashIcon'
import { SvgProps } from 'react-native-svg'
import AddUser from './AddUser'
import FingerAccess from './FingerAccess'
import Connecter from './Connecter'
import DotsThreePoints from './DotsThreePoints'
import ArrowDown from './ArrowDown'
import Wallet from './Wallet'
import Desktop from './Desktop'
import Decrease from './Decrease'
import Increase from './Increase'
import Notification from './Notification'
import UserProfile from './userProfile'
import SlawDecrease from './SlawDecrease'

const icons = {
    ViewIcon,
    ViewOffSlashIcon,
    AddUser,
    FingerAccess,
    Connecter,
    DotsThreePoints,
    ArrowDown,
    Wallet,
    Desktop,
    Decrease,
    Increase,
    Notification,
    UserProfile,
    SlawDecrease
}
interface IIconProps extends SvgProps {
    name: keyof typeof icons
    width?: number | string
    height?: number | string
    color?: string

}

const Icon = ({ color, width, height, name, ...props }: IIconProps) => {
    const SelectIocon = icons[name]
    return (
        <SelectIocon
            color={color || "#9599a0"}
            width={width || 24}
            height={height || 24}
            {...props}
        />
    )
}

export default Icon

const styles = StyleSheet.create({})