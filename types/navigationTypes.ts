import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    Signup: undefined;
    Home: undefined;
    SignIn: undefined;
    EBanking: undefined;
    WaitScreen: undefined
};

export type SignupNavigationProp = StackNavigationProp<RootStackParamList, 'Signup'>;
export type WaitScreenNavigationProp = StackNavigationProp<RootStackParamList, 'WaitScreen'>;
export type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type SignInNavigationProp = StackNavigationProp<RootStackParamList, 'SignIn'>;
export type EBankingNavigationProp = StackNavigationProp<RootStackParamList, 'EBanking'>;