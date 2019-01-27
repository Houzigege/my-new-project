import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Routes from './routes';
import WelcomeHome from '../pages/welcome/welcomeHome';


const WelcomeNavigator = createSwitchNavigator({
    WelcomeHome: {
        screen: WelcomeHome,
        navigationOptions: ({navigation}) => {
            // console.log(navigation);
            return {
                header: null
            }
        }
    },
    Routes: {
        screen: Routes,
        navigationOptions: ({navigation}) => {
            // console.log(navigation);
            return {
                header: null
            }
        }
    }
  }, {
    initialRouteName: "WelcomeHome",
  });

export default createAppContainer(WelcomeNavigator);
