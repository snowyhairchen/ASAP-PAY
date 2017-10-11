import { StatusBar } from "react-native";
import { StackNavigator } from "react-navigation";

import Login from "../screens/Login";
import Register from "../screens/Register";
import MainUser from "../screens/MainUser";
import NewsDetail from "../screens/NewsDetail";

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
        MainUser: {
            screen: MainUser,
            navigationOptions: {
                header: () => null
            }
        },
        NewsDetail: {
            screen: NewsDetail,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: "#3F61B5"
                },
                headerTintColor: "#FFFFFF"
            }
        }
    },
    {
        mode: "modal",
        cardStyle: { paddingTop: StatusBar.currentHeight }
    }
);
