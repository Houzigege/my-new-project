import React from 'react';
import {createBottomTabNavigator} from "react-navigation";
import TabBarLabel from './common/TabBarLabel';
import TabBarItem from './common/TabBarItem';
import Home from '../pages/home/home';
import Message from '../pages/message/message1';
import Information from '../pages/message/message2';
import Mine from '../pages/message/message3';
import homeIcon from '../assets/house.png';
import personIcon from '../assets/person.png';


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
                        icon={homeIcon}
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
                        type={true}
                        tintColor={tintColor}
                        focused={focused}
                        icon={personIcon}
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
                        icon={homeIcon}
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
                        icon={personIcon}
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
