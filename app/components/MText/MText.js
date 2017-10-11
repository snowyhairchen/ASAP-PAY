import React, { Component } from "react";
import Proptypes from "prop-types";
import { View } from "react-native";
import { Text } from "native-base";

class MText extends Component {
    state = {
        fontLoaded: false
    };

    static proptype = {
        text: Proptypes.string
    };

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });

        this.setState({ fontLoaded: true });
    }

    render() {
        if (this.state.fontLoaded) {
            return <Text>{this.props.children}</Text>;
        } else {
            return null;
        }
    }
}

export default MText;
