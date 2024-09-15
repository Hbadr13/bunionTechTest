
import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    SafeAreaView,
    Image
} from 'react-native';
import ScreenWrapping from '../components/ScreenWrapping';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from '../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { SignupNavigationProp } from '../types/navigationTypes';
import InputField from '../components/InputField';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
const WaitScreen = () => {


    return (
        <ImageBackground
            style={{ flex: 1 }}
            resizeMode="cover"
            className=" flex-1 w-full h-full flex justify-center items-center"
            source={require('../assets/images/buildingBackground.jpeg')}
        >
            <View className='w-full h-full flex justify-center items-center '>
                <View className="w-full h-[30%] flex flex-row justify-center space-x-2   items-center  divide-x-2 divide-bunion-gray-v2">
                    <View className='w-1/4 h-[75%]  '>
                        <Image className='w-full object-contain h-full' source={require('../assets/images/flower.png')} />
                    </View>
                    <View className=' overflow-hidden  pl-2'>
                        <Text className='text-5xl font-bold text-bunion-gray-v2'>BUNION</Text>
                        <Text className='text-5xl font-bold text-bunion-gray-v2'>TECH</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>

    );
};

export default WaitScreen;
