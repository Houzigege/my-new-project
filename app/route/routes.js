import { createStackNavigator } from "react-navigation";
import Tabs from './tabRoutes';
import Select from '../pages/home/home';


const AppNavigator = createStackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: ({navigation}) => {
            // console.log(navigation);
            return {
                header: null
            }
        }
    },
    Select: {
        screen: Select
    },
  }, {
    initialRouteName: "Home",
  });

export default AppNavigator;
