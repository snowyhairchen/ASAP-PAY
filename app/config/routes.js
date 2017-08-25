import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Register from '../screens/Register';

export default StackNavigator (
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: () => null
      },
    },
    Register: {
      screen: Register,
      navigationOptions: ({navigation}) => ({
        headerTitle: navigation.state.params.title,
      }),
    },
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
  }
);
