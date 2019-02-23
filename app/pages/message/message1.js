import React, {Component} from 'react';
import {
  Text,
  View
} from 'react-native';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  componentWillMount() {

  }

  componentWillReceiveProps (nextProps) {
    console.log('12313131312312', nextProps)
  }

  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>消息</Text>
        </View>
    )
  }
}

