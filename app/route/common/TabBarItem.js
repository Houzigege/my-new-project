import React,{Component} from 'react';
import { View, Platform } from 'react-native';
import { Badge, Icon } from '@ant-design/react-native';


export default class TabBarItem extends Component {

    render() {
        const unread = this.props.reduxData && this.props.reduxData.data && this.props.reduxData.data.length > 0;
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
                            <Icon name={this.props.icon} style={{color: this.props.tintColor}} />
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
                                                }
                                            }),
                                        }} dot />
                                    </View>
                                ) : null
                            }
                        </View>
                    ) : (
                        <View>
                            <Icon name={this.props.icon} style={{color: this.props.tintColor}} />
                        </View>
                    )
                }
            </View>
        )
    }

}
