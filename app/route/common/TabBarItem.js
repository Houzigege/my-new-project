import React,{Component} from 'react';
import { View, Platform, Image } from 'react-native';
import { Badge } from '@ant-design/react-native';
import { connect } from 'react-redux';


@connect(({ user }) => ({ user }))
export default class TabBarItem extends Component {
    render() {
        console.log(this.props);
        const unread = this.props.user && this.props.user.userName && this.props.user.userName.length > 0;
        return(
            <View>
                {
                    this.props.type ? (
                        <View  style={{
                            ...Platform.select({
                                android: {
                                    padding: 10
                                }
                            }),
                        }}>
                            <Image source={this.props.icon} style={{width: 32, height: 32, resizeMode: 'stretch'}} />
                            {
                                this.props.type && unread ? (
                                    <View  style={{
                                        ...Platform.select({
                                            android: {
                                                left:15,bottom:16
                                            },
                                            ios:{
                                                left:21,bottom:21
                                            }
                                        }),
                                    }}>
                                        <Badge style={{
                                            ...Platform.select({
                                                android: {
                                                    left: 4, bottom: 3
                                                },
                                                ios:{
                                                    left: 6,bottom: 4
                                                }
                                            }),
                                        }} dot />
                                    </View>
                                ) : null
                            }
                        </View>
                    ) : (
                        <View>
                            <Image source={this.props.icon} style={{width: 32, height: 32, resizeMode: 'stretch'}} />
                        </View>
                    )
                }
            </View>
        )
    }

}
