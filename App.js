import React, {Component} from 'react';
import { Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from "react-navigation-tabs";
import Splash from "./screens/Splash";
import Home from "./screens/Home";
import FilmDetail from "./screens/FilmDetail";
import Search from "./screens/Search";
import Login from "./screens/Login";
import Inscription from "./screens/Inscription";
import logo from './assets/logo.png'


const BottomNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: () => ({
                tabBarIcon: () => (
                    <Image
                        source={logo}
                        style={{width: 30, height: 30}}
                        size={24}
                    />
                )
            })
        },
        Search: {
            screen: Search,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name={"search"}
                        color={tintColor}
                        size={24}
                    />
                )
            })
        },
    })

const AppNavigator = createStackNavigator(
    {
        Splash: {screen: Splash, navigationOptions: {headerShown: false}},
        Login: {screen: Login, navigationOptions: {headerShown: false}},
        Inscription: {screen: Inscription, navigationOptions: {headerShown: false}},
        Home: {screen: BottomNavigator, navigationOptions: {headerShown: false}},
        FilmDetail: {screen: FilmDetail, navigationOptions: {headerShown: true, title: 'Détails'}},
        Search: {screen: BottomNavigator, navigationOptions: {headerShown: false}},
    },
    {
        initialRouteName: 'Splash'
    }
);

const AppContainer = createAppContainer(AppNavigator);

class App extends Component{
    render() {
      return (
            <AppContainer/>
      )
    }
}

export default App;
