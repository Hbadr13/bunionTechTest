import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useRoute } from '@react-navigation/native'
import Icon from '../assets/icons'
import { HomeNavigationProp } from '../types/navigationTypes'
import Modal from 'react-native-modal'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const Navbar = ({ navigation }: { navigation: HomeNavigationProp }) => {
    const router = useRoute()
    const [isModalVisible, setModalVisible] = useState(false);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setModalVisible(false)
            navigation.navigate('SignIn')
        } catch (error: any) {
            setModalVisible(false)
            alert('Error signing out')
        }
    };

    return (
        <View className={`w-full h-[7%] flex flex-row items-center px-[1%] py-[1%] ${router.name != 'Home' ? 'bg-bunion-black-v0' : 'bg-white'}`}>

            <Modal
                className='flex justify-center items-center'
                animationIn={'bounceIn'}
                animationOut={'bounceOut'}
                isVisible={isModalVisible}
            >
                <View
                    id='parent'
                    onStartShouldSetResponder={() => {
                        setModalVisible(false);
                        return true;
                    }}
                    style={{ flex: 1 }}
                    className='flex-1 w-full h-full justify-center items-center'
                >
                    <View
                        id='child'
                        onStartShouldSetResponder={() => true} // Prevents the touch event from bubbling to the parent
                        className='w-[200px] h-[100px]  bg-white rounded-xl p-2 flex  justify-center'
                    >
                        <TouchableOpacity onPress={handleLogout}>
                            <View className='  top-0 w-auto h-auto    space-x-6 flex-row rounded-full justify-center items-center'>
                                <Text className='  text-[18px]  text-[#F938A5] '>Déconnexion</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <View className='w-1/2 flex-row flex items-center justify-center '>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <MaterialCommunityIcons name={'menu'} size={24} color={"#007aff"} />
                </TouchableOpacity>
                <View className="w-3/4  h-full flex flex-row justify-between  items-center ">
                    <View className='w'>
                        <Image className=' w-10 h-full object-cover ' source={require('../assets/images/flower.png')} />
                    </View>
                    <View className=' w-2/3 overflow-hidden '>
                        <Text className='text-lg font-bold text-bunion-gray-v3 leading-5'>BUNION</Text>
                        <Text className='text-lg font-bold text-bunion-gray-v3 leading-5'>TECH</Text>
                    </View>
                </View>
            </View>
            <View className='w-1/2 flex flex-row items-center '>
                <View className='w-1/2 flex flex-row items-center justify-around ' >
                    <Icon name='Notification' width={22} height={22} />
                    <View className='w-[18%] h-[50%] rounded-[2px] bg-red-400 flex flex-col justify-center items-center'>
                        <Text className='text-white font-bold'>3</Text>
                    </View>
                    <TouchableOpacity>
                        <Icon name='ArrowDown' width={22} height={22} color='#007aff' />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => setModalVisible(true)} className='w-1/2 flex flex-row items-center justify-center space-x-2' >
                    <Icon name='UserProfile' width={22} height={22} />
                    <View>
                        <Icon name='ArrowDown' width={22} height={22} color='#007aff' />
                    </View>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default Navbar

const styles = StyleSheet.create({})