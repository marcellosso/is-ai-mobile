import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MainStackParamList = {
  Home: undefined;
  Game: undefined;
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<MainStackParamList, 'Home'>;
export type GameScreenNavigationProp = NativeStackNavigationProp<MainStackParamList, 'Game'>;
