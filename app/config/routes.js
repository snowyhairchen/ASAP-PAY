import { StatusBar } from "react-native";
import { StackNavigator } from "react-navigation";

import Login from "../screens/Login";
import Register from "../screens/Register";
import Main from "../screens/Main";

export default StackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: {
                header: () => null
            }
        },
        Register: {
            screen: Register,
            navigationOptions: {
                header: () => null
            }
        },
        Main: {
            screen: Main,
            navigationOptions: {
                header: () => null
            }
        }
    },
    {
        mode: "modal",
        cardStyle: { paddingTop: StatusBar.currentHeight }
    }
);
