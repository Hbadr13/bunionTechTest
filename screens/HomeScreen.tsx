

import React, { useRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import ScreenWrapping from '../components/ScreenWrapping';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from '../assets/icons';
import { HomeNavigationProp } from '../types/navigationTypes';
import { DigitalView } from '../data/DigitalView';
import { hp } from '../helper/common';
import { useRoute } from '@react-navigation/native';
import Navbar from '../components/NavBar';

const HomeScreen = ({ navigation }: { navigation: HomeNavigationProp }) => {
    const loingRef = useRef('');
    const passwordRef = useRef('');
    const x = useRoute()
    const onPressSigUp = () => {
        if (!loingRef.current || !passwordRef.current) alert('hello');
        else navigation.navigate('SignIn');
    };

    const onPressSigIn = () => navigation.navigate('SignIn');

    return (
        <ScreenWrapping backgroundColor='#ffffff'>
            <SafeAreaView style={{ width: wp(100), height: hp(100) }} className='bg-bunion-white-v0'>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Navbar navigation={navigation} />
                    <View className='w-full bg-bunion-gray-v1 h-0.5'></View>
                    <View className='w-full p-2 flex flex-row justify-between'>
                        <Text className='text-2xl font-bold text-bunion-gray-v4'>Tableau de bord</Text>
                        <TouchableOpacity className='w-8 h-8 bg-green-700 rounded-full p-1.5'>
                            <View className='w-full h-full bg-slate-700 rounded-full flex flex-row justify-center items-center'>
                                <Icon name='ArrowDown' color='white' width={15} height={15} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View className='w-full flex flex-row  space-x-1 px-2'>
                        <View className='w-1/2  bg-green-50  rounded-t-xl relative'>
                            <Text className='text-center relative z-0 text-lg font-semibold text-bunion-green-v3 py-2.5'>
                                Digital view
                            </Text>
                            <View className=' absolute w-full z-10  h-2 rounded-full bottom-0 bg-bunion-green-v3'></View>
                        </View>
                        <View className='w-1/2  bg-white  rounded-t-xl relative'>
                            <Text className='text-center relative z-0 text-lg font-semibold text-bunion-green-v3 py-2.5'>
                                Business view
                            </Text>
                        </View>
                    </View>
                    <View style={style.grid} className='flex flex-wrap p-1 '>
                        {DigitalView.map((item, index) => (
                            <View key={index} className='w-[50%] p-1.5'>
                                <View style={style.CardShadow} className='bg-white w-full rounded-xl  p-1 space-y-6'>
                                    <View className='flex flex-row items-start space-x-1 p-1 bgy'>
                                        <Icon name='Wallet' width={15} height={15} strokeWidth={10} />
                                        <Text className=' flex-1 flex-wrap text-xs text-bunion-gray-v4 font-semibold' numberOfLines={5}>
                                            {item.text}
                                        </Text>
                                        <TouchableOpacity>
                                            <Icon name='DotsThreePoints' width={17} height={17} />
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity className={`p-1 ${item.progress == 'increase' ? 'bg-green-100' : item.progress == 'decrease' ? 'bg-red-100' : 'bg-yellow-100'} w-full h-8  rounded-xl flex flex-row items-center`}>
                                        <Icon name={item.progress == 'increase' ? 'Increase' : item.progress == 'decrease' ? 'Decrease' : 'SlawDecrease'} color='black' />
                                        <Text
                                            className={` font-bold ${item.progress == 'increase' ? 'text-green-600' : item.progress == 'decrease' ? 'text-red-600' : 'text-yellow-600'}`} numberOfLines={5}>
                                            {item.value}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ScreenWrapping>
    );
};

export default HomeScreen;

const style = StyleSheet.create({
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    CardShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
});
