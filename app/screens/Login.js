import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import {
    Form,
    Container,
    Header,
    Content,
    Item,
    Label,
    Input,
    Button,
    Text,
    StyleProvider
} from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";

import { MText } from "../components/MText";
import gstyles from "../config/styles";

class Login extends Component {
    state = {
        fontLoaded: false
    };

    static propTypes = {
        navigation: PropTypes.object
    };

    handlePressRegister = () => {
        console.log("press register");
        this.props.navigation.navigate("Register", { title: "註冊" });
    };

    handlePressLogin = () => {
        console.log("press login");
        this.props.navigation.navigate("Main");
    };

    render() {
        return (
            <Container style={[styles.container, gstyles.container]}>
                <Form>
                    <Item style={gstyles.input} inlineLabel>
                        <Label>帳號</Label>
                        <Input />
                    </Item>
                    <Item style={gstyles.input} inlineLabel>
                        <Label>密碼</Label>
                        <Input />
                    </Item>
                </Form>
                <View style={gstyles.buttonContainer}>
                    <Button
                        style={gstyles.button}
                        rounded
                        onPress={this.handlePressLogin}>
                        <MText text="登入" />
                    </Button>
                    <Button
                        style={gstyles.button}
                        rounded
                        onPress={this.handlePressRegister}>
                        <MText text="註冊" />
                    </Button>
                </View>
            </Container>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }
});

export default Login;
