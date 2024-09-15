import React, { useRef, useState } from 'react';
import {
    View,
    KeyboardAvoidingView,
    TextInput,
    Text,
    Platform,
    TouchableWithoutFeedback,
    Button,
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
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Signup = ({ navigation }: { navigation: SignupNavigationProp }) => {
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const onPressSigUp = () => {
        emailRef.current == ''
        passwordRef.current == ''
        navigation.navigate('Signup')
    };
    const onPressLogin = async () => {

        try {
            const user = await signInWithEmailAndPassword(auth, emailRef.current, passwordRef.current)
            // if (user) router.replace('/(tabs)')
            console.log('sucseesfull', user)
            navigation.navigate('Home')
        } catch (error: any) {
            let errorMessage = '';
            switch (error.code) {
                case 'auth/invalid-email':
                    errorMessage = 'The email address is badly formatted.';
                    break;
                case 'auth/user-not-found':
                    errorMessage = 'No user found with this email address.';
                    break;
                case 'auth/wrong-password':
                    errorMessage = 'The password is incorrect. Please try again.';
                    break;
                case 'auth/user-disabled':
                    errorMessage = 'The user account has been disabled.';
                    break;
                case 'auth/network-request-failed':
                    errorMessage = 'Network error. Please check your internet connection.';
                    break;
                default:
                    errorMessage = 'Sign in failed: ' + error.message;
                    break;
            }

            alert(errorMessage);
        }

    }


    return (
        <ScreenWrapping>
            <SafeAreaView style={{ width: wp(100), height: hp(100) }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        <ImageBackground
                            resizeMode="cover"
                            className="w-full h-full flex justify-center items-center"
                            source={require('../assets/images/buildingBackground.jpeg')}
                        >
                            <View className="h-2/3 w-[94%]  bg-white/80 rounded-xl p-3 mb-[10%]">
                                <View className="w-full h-[30%] flex flex-row justify-between  items-center  divide-x-2 divide-bunion-gray-v3">
                                    <View className='w-1/4 h-[75%]  '>
                                        <Image className='w-full object-contain h-full' source={require('../assets/images/flower.png')} />
                                    </View>
                                    <View className='w-3/4 overflow-hidden  pl-2'>
                                        <Text className='text-5xl font-bold text-bunion-gray-v3'>BUNION</Text>
                                        <Text className='text-5xl font-bold text-bunion-gray-v3'>TECH</Text>
                                    </View>
                                </View>
                                <View className="w-full h-[30%]  flex flex-col   justify-around ">
                                    <InputField type='email' onChangeText={(text) => emailRef.current = text} placeholder="Email ..." />
                                    <InputField type='password' onChangeText={(text) => passwordRef.current = text} placeholder="Mot de passe ..." />
                                </View>
                                <View className="w-full h-[40%] flex  space-y-[6%] relative pt-2">
                                    <View className="w-full h-[30%] flex flex-row justify-between">
                                        <TouchableOpacity onPress={onPressLogin} className='w-[60%] bg-green-600/50 h-14 rounded-3xl flex flex-row justify-center items-center space-x-2'>
                                            <Icon name='Connecter' color='#232428' />
                                            <Text className='font-bold text-lg'>
                                                Se Connecter
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity className='w-[35%] bg-blue-600/60 h-14 overflow-hidden rounded-3xl flex flex-row justify-center items-center space-x-2'>
                                            <Icon name='FingerAccess' width={wp(14)} height={hp(14)} strokeWidth={1.8} color='#232428' />
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity onPress={onPressSigUp} className='w-full bg-gray-700/40 h-11 rounded-3xl flex flex-row justify-center items-center space-x-2'>
                                        <Icon name='AddUser' strokeWidth={1.8} color='#232428' />
                                        <Text className='font-semibold'>
                                            S'inscrire
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity className='w-full  absolute bottom-0' ><Text className='text-center text-green-600 underline underline-offset-1'>mot de passe oublié ?</Text></TouchableOpacity>
                                </View>
                            </View>
                        </ImageBackground>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </ScreenWrapping>

    );
};

export default Signup;
