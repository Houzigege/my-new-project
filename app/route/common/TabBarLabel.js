import React,{Component} from 'react';
import { Text ,View,Platform } from 'react-native';


export default class TabBarLabel extends Component {

    render() {
        return(
            <View>
                <Text style={{...Platform.select({
                        android: {
                            left:"35%"
                        },
                        ios:{

                        }
                    }), color: this.props.tintColor, fontSize: 12}}>
                    {this.props.lableName}
                </Text>
            </View>
        )
    }

}

