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
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import Modal from 'react-native-modal';
const Signup = ({ navigation }: { navigation: SignupNavigationProp }) => {

    const emailRef = useRef('')
    const passwordRef = useRef('')
    const handleSignUp = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, emailRef.current, passwordRef.current);
            await signOut(auth);
            navigation.navigate('SignIn')
        } catch (error: any) {
            let errorMessage = "";

            console.log(error)
            switch (error.code) {
                case "auth/email-already-in-use":
                    errorMessage = "Cet email est déjà utilisé.";
                    break;
                case "auth/invalid-email":
                    errorMessage = "L'adresse email est mal formatée.";
                    break;
                case "auth/weak-password":
                    errorMessage = "Le mot de passe doit comporter au moins 6 caractères.";
                    break;
                case "auth/missing-email":
                    errorMessage = "L'adresse email ou mot de passe est mal formatée";
                    break;
                case 'auth/network-request-failed':
                    errorMessage = 'Network error. Please check your internet connection.';
                    break;
                default:
                    errorMessage = error.message.replace('Firebase:', '').trim();
                    break;
            }

            alert(errorMessage);
        }

    }
    const onPressSigIn = () => {
        emailRef.current = ''
        passwordRef.current = ''
        navigation.navigate('SignIn')

    }

    return (
        <ScreenWrapping>

            <SafeAreaView style={{ width: wp(100), height: hp(100) }}>
                <TouchableWithoutFeedback >
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
                                    <InputField onChangeText={(text) => emailRef.current = text} type='email' placeholder="Email ..." />
                                    <InputField onChangeText={(text) => passwordRef.current = text} type='password' placeholder="Mot de passe ..." />
                                    <Text className='w-full text-center font-bold text-bunion-gray-v3'>Créer un compte</Text>
                                </View>
                                <View className="w-full h-[40%] flex  space-y-[6%] relative pt-2">
                                    <View className="w-full h-[30%] flex flex-row justify-between">
                                        <TouchableOpacity onPress={handleSignUp} className='w-[60%] bg-gray-700/40 h-14 rounded-3xl flex flex-row justify-center items-center space-x-2'>
                                            <Icon name='AddUser' strokeWidth={1.8} color='#232428' />
                                            <Text className='font-bold text-lg'>
                                                S'inscrire
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity className='w-[35%] bg-blue-600/60 h-14 overflow-hidden rounded-3xl flex flex-row justify-center items-center space-x-2'>
                                            <Icon name='FingerAccess' width={wp(14)} height={hp(14)} strokeWidth={1.8} color='#232428' />
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity onPress={onPressSigIn} className='w-full bg-green-600/50 h-11 rounded-3xl flex flex-row justify-center items-center space-x-2'>
                                        <Icon name='Connecter' color='#232428' />
                                        <Text className='font-semibold'>
                                            Se Connecter
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
