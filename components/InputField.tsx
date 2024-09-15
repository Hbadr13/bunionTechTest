import React, { RefObject, useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg'; // Import for inline SVGs
import Icon from '../assets/icons';

interface IInputFieldProps {
    placeholder: string
    onChangeText: ((text: string) => void) | undefined
    // inputRef: LegacyRef<TextInput>
    type: 'password' | 'email'

}
const InputField = ({ placeholder, onChangeText, type }: IInputFieldProps) => {
    const [hide, setHide] = useState(false)
    return (
        <View className='w-full h-[35%] bg-bunion-gray-v2/30 rounded-md   relative'>
            {
                type == 'password' && <TouchableOpacity onPress={() => setHide((pr) => !pr)} className={`absolute z-10  right-0 inset-y-0  flex justify-center -translate-x-2 `}>
                    <Icon name={hide ? 'ViewIcon' : 'ViewOffSlashIcon'} color='#8f929b' />
                </TouchableOpacity>
            }
            <TextInput
                keyboardType="default" // Helps with email input
                autoCapitalize="none" // Prevents auto-capitalization
                onChangeText={onChangeText}
                className='placeholder:text-lg placeholder:font-semibold    p-2 w-full h-full relative z-0'
                placeholder={placeholder}
                secureTextEntry={type == 'email' ? false : !hide}
            >
            </TextInput>
        </View>
    );
};

export default InputField;
