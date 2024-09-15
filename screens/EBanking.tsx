

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
import { EBankingData } from '../data/Ebank';
import Navbar from '../components/NavBar';

const EBankingScreen = ({ navigation }: { navigation: HomeNavigationProp }) => {
    const loingRef = useRef('');
    const passwordRef = useRef('');

    const onPressSigUp = () => {
        if (!loingRef.current || !passwordRef.current) alert('hello');
        else navigation.navigate('SignIn');
    };

    const onPressSigIn = () => navigation.navigate('SignIn');

    return (
        <ScreenWrapping backgroundColor={'#232428'} >
            <ScrollView showsVerticalScrollIndicator={false}>
                <SafeAreaView style={{ width: wp(100), height: hp(100) }} className='bg-bunion-white-v0'>
                    <Navbar navigation={navigation} />
                    <View className='w-full  p-4 flex flex-row items-center space-x-2  '>
                        <Icon name='Desktop' width={30} height={30} />
                        <Text className='text-2xl font-bold text-bunion-black-v0'>E-Banking</Text>
                    </View>

                    <View className='flex flex-wrap p-1'>
                        {EBankingData.map((item, index) => (
                            <View key={index} className='w-full p-1.5'>
                                <View style={style.CardShadowInside} className='bg-white w-full rounded-xl  p-1 space-y-6'>
                                    <View style={style.CardShadow} className='  rounded-xl bg-white  w-full flex flex-row justify-between items-center space-x-1 p-1 '>
                                        <View className='flex flex-row items-center space-x-1 '>
                                            <Icon name='Wallet' width={25} height={25} color='#f8e71c' strokeWidth={10} />
                                            <View>
                                                <View>
                                                    <Text className='text-lg text-gray-600 font-bold' numberOfLines={5}>
                                                        {item.name}
                                                    </Text>
                                                </View>
                                                <View className=' flex flex-row justify-between space-x-2 '>
                                                    {

                                                        item.overview.metrics.map((it, index) =>
                                                            <View key={index} className={` flex flex-row items-center space-x-0.5`}>
                                                                <Text
                                                                    className={` font-bold text-xs  text-bunion-gray-v4`}>
                                                                    {it.name}:
                                                                </Text>
                                                                <Text
                                                                    className={` font-bold text-xs text-green-500`}>
                                                                    {it.value}
                                                                </Text>
                                                            </View>
                                                        )
                                                    }
                                                </View>
                                            </View>
                                        </View>
                                        <View className='flex flex-row items-center space-x-1'>
                                            <Icon name='AddUser' width={17} height={17} />
                                            <Text className='font-bold text-bunion-gray-v4'>{item.flow}</Text>
                                            <TouchableOpacity>
                                                <Icon name='DotsThreePoints' width={17} height={17} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View className='w-full flex flex-row justify-between'>
                                        {
                                            item.overview.transactions.map((transcation, index) =>
                                                <View key={index} className='w-[24%] flex flex-col  items-center space-y-1'>
                                                    <Text className='text-xs font-bold text-bunion-gray-v3'>{transcation.name}</Text>
                                                    <View key={index} className={` flex flex-row  justify-center space-x-1 ${transcation.type == 'inc' ? 'bg-green-100' : 'bg-red-100'} w-full h-8  rounded-xl flex flex-row items-center`}>
                                                        <Icon name={transcation.type == 'inc' ? 'Increase' : 'Decrease'} />
                                                        <Text
                                                            className={` font-bold text-xs ${transcation.type == 'inc' ? 'text-green-600' : 'text-red-600'}`}>
                                                            {transcation.value}
                                                        </Text>
                                                    </View>
                                                </View>
                                            )
                                        }
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                </SafeAreaView>
            </ScrollView>
        </ScreenWrapping>
    );
};

export default EBankingScreen;

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
    CardShadowInside: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.16,
        shadowRadius: 1.51,
        elevation: 2
    },
});

