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

  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>资讯</Text>
        </View>
    )
  }
}

