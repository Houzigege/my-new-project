import React from 'react';
import {
  NativeModules,
  View,
  Animated,
  Dimensions
} from 'react-native';

const { UIManager } = NativeModules;
const { height, width } = Dimensions.get('window');

UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);


export default class WelcomeHome extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0.5),
    translate: new Animated.ValueXY({x: width, y: height}),
  };

  componentDidMount() {
    Animated.sequence([
      Animated.decay(this.state.translate, {
        velocity: { x: 10, y: 10 },
        deceleration: 0.9
      }),
      Animated.parallel([
        Animated.timing(this.state.translate, {
          toValue: { x: 0, y: 0 },
          duration: 2000,
        }),
        Animated.timing(this.state.fadeAnim, {
          toValue: 1,
          duration: 2000,
        })
      ])
    ]).start();

    setTimeout(() => {
        const { navigate } = this.props.navigation;
        global.pushNavigate = navigate;
        navigate('Home');
    }, 4000);
  }

  render() {
    let { fadeAnim } = this.state;

    return (
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Animated.Image
              source={require('../../assets/9aef6567e2c878f14a1e51f18877d129.jpg')}
              style={{
                width: width,
                height: height,
                opacity: fadeAnim,
                transform: [
                  {translateX: this.state.translate.x}, // x轴移动
                  {translateY: this.state.translate.y}, // y轴移动
                ]
              }}
          />
        </View>
    );
  }
}

