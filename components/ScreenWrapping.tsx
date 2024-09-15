import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
interface ScreenWrappingProps {
    children: React.ReactNode;
    backgroundColor?: string;
}

const ScreenWrapping: React.FC<ScreenWrappingProps> = ({ children, backgroundColor }) => {
    const { top } = useSafeAreaInsets()
    const paddingTop = top > 0 ? top : 30

    return (
        <View style={[styles.container, { paddingTop, backgroundColor }]}>
            {
                children
            }
        </View>
    )
}

export default ScreenWrapping

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

