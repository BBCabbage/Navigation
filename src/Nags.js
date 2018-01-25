import React, { Component } from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import Home from './Home'
import About from './About'

const Tab = TabNavigator({
        Home: {
            screen: Home,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'Home',
            }),
        },
        About: {
            screen: About,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'About',
            }),
        },
    }, {
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
    }
)

let Navigator = StackNavigator({
        Tab: { screen: Tab },
    }, {
        navigationOptions: {
            headerBackTitle: null,
            headerTintColor: '#333333',
        }
    }
)

export default class Nags extends Component {

    render(){
        return (
            <Navigator />
        )
    }
}
