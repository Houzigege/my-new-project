import React from 'react';
import {createBottomTabNavigator} from "react-navigation";
import TabBarLabel from './common/TabBarLabel';
import TabBarItem from './common/TabBarItem';
import Home from '../pages/home/home';
import Message from '../pages/message/message1';
import Information from '../pages/message/message2';
import Mine from '../pages/message/message3';


const AppTabsNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions:({navigation}) => {
            return ({
                tabBarLabel:({focused, tintColor}) => (
                    <TabBarLabel
                        tintColor={tintColor}
                        focused={focused}
                        lableName={'首页'}
                    />),
                tabBarIcon:({focused,tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        icon={'audio'}
                    />
                ),

            })
        },
    },
    Message: {
        screen: Message,
        navigationOptions:({navigation}) => {
            return ({
                tabBarLabel:({focused, tintColor}) => (
                    <TabBarLabel
                        tintColor={tintColor}
                        focused={focused}
                        lableName={'消息'}
                    />),
                tabBarIcon:({focused,tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        icon={'audio'}
                    />
                ),

            })
        },
    },
    Information: {
        screen: Information,
        navigationOptions:({navigation}) => {
            return ({
                tabBarLabel:({focused, tintColor}) => (
                    <TabBarLabel
                        tintColor={tintColor}
                        focused={focused}
                        lableName={'资讯'}
                    />),
                tabBarIcon:({focused,tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        icon={'audio'}
                    />
                ),

            })
        },
    },
    Mine: {
        screen: Mine,
        navigationOptions:({navigation}) => {
            return ({
                tabBarLabel:({focused, tintColor}) => (
                    <TabBarLabel
                        tintColor={tintColor}
                        focused={focused}
                        lableName={'我的'}
                    />),
                tabBarIcon:({focused,tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        icon={'audio'}
                    />
                ),

            })
        },
    }
  }, {
    initialRouteName: "Home",
    tabBarPosition:'bottom',
    swipeEnabled:true,
    animationEnabled:false,
    lazy:true,
    tabBarOptions:{
        activeTintColor:'green',
        inactiveTintColor:'#ccc',
        style:{
            backgroundColor: '#fff',
            padding: 3
        },
        labelStyle: {
            fontSize: 8,
            color: '#333'
        },
    }
  });

export default AppTabsNavigator;
