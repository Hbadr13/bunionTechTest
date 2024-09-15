// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from './screens/HomeScreen';
// import SignIn from './screens/SignIn';
// import Signup from './screens/Signup';
// import EBankingScreen from './screens/EBanking';

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen options={{ headerShown: false }} name="EBanking" component={EBankingScreen} />
//         <Stack.Screen options={{ headerShown: false }} name="SignIn" component={SignIn} />
//         <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
//         <Stack.Screen options={{ headerShown: false }} name="Signup" component={Signup} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer, useNavigation, useNavigationState, useRoute } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './screens/HomeScreen';
import SignIn from './screens/SignIn';
import Signup from './screens/Signup';
import EBankingScreen from './screens/EBanking';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import ScreenWrapping from './components/ScreenWrapping';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';
import WaitScreen from './screens/WaitScreen';

const Drawer = createDrawerNavigator();

interface IDrawerItemProps {
  iconName: string,
  label: string,
  onPress: any | undefined
  isActive: boolean
}
function DrawerItem({ iconName, label, onPress, isActive }: IDrawerItemProps) {
  return (
    <TouchableOpacity
      className={`flex-row items-center py-2.5 rounded-md px-1 ${isActive ? 'bg-blue-100' : ''}`}
      onPress={onPress}
    >
      <MaterialCommunityIcons name={iconName} size={24} color={!isActive ? "#007aff" : '#60a5fa'} />
      <Text className="ml-3 text-lg">{label}</Text>
    </TouchableOpacity>
  );
}

function CustomDrawerContent({ navigation }: { navigation: DrawerNavigationHelpers }) {
  const routeName = useNavigationState(state => state?.routes[state.index].name);
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.navigate('SignIn')
    } catch (error: any) {
      alert('Error signing out')
    }
  };
  return (

    <ScreenWrapping>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View className="">
          <View className="p-5 ">
            <Text className="text-2xl font-bold">BUNION TECH</Text>
          </View>

          <View className="px-2">
            <DrawerItem onPress={() => navigation.navigate('Home')} iconName="home" label="Accueil" isActive={routeName === 'Home'} />
            <View className='w-full h-[2px] bg-bunion-gray-v1 rounded-full mt-2'></View>
            <Text className="text-lg font-bold text-blue-500 mt-5 mb-2.5">Digital view</Text>
            <DrawerItem onPress={() => navigation.navigate('EBanking')} iconName="desktop-mac" label="E-banking" isActive={routeName === 'EBanking'} />
            <DrawerItem onPress={undefined} iconName="send" label="Virement instantané" isActive={false} />
            <DrawerItem onPress={undefined} iconName="account-box" label="Digital onboarding" isActive={false} />
            <View className='w-full h-[2px] bg-bunion-gray-v1 rounded-full'></View>
            <Text className="text-lg font-bold text-blue-500 mt-5 mb-2.5">Business view</Text>
            <DrawerItem onPress={undefined} iconName="clipboard-account" label="Customer onboarding" isActive={false} />
            <DrawerItem onPress={undefined} iconName="folder" label="Vente et produits" isActive={false} />
            <DrawerItem onPress={undefined} iconName="calendar" label="Activité digitale" isActive={false} />
            <DrawerItem onPress={undefined} iconName="credit-card" label="Monetique" isActive={false} />
            <DrawerItem onPress={undefined} iconName="shopping" label="Salle de marché" isActive={false} />
            <DrawerItem onPress={undefined} iconName="earth" label="International" isActive={false} />
            <DrawerItem onPress={undefined} iconName="bank" label="Crédit" isActive={false} />
            <DrawerItem onPress={undefined} iconName="grid" label="Autres produits" isActive={false} />
            <DrawerItem onPress={handleLogout} iconName="logout" label="LogOut" isActive={false} />
          </View>
        </View>
      </ScrollView>

    </ScreenWrapping>

  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState('wait');


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn('login');
      } else {
        setIsLoggedIn('logout');
      }
    })

    return unsubscribe
  }, [])
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={({ navigation }) => <CustomDrawerContent navigation={navigation} />}>
        {
          isLoggedIn == 'login' ?
            <>
              <Drawer.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
              <Drawer.Screen options={{ headerShown: false }} name="EBanking" component={EBankingScreen} />
            </>
            : isLoggedIn == 'logout' ?
              <>
                <Drawer.Screen options={{ headerShown: false }} name="SignIn" component={SignIn} />
                <Drawer.Screen options={{ headerShown: false }} name="Signup" component={Signup} />
              </> :
              <Drawer.Screen options={{ headerShown: false }} name="WaitScreen" component={WaitScreen} />

        }
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
