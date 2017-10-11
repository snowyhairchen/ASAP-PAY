import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import {
    Form,
    Container,
    Header,
    Content,
    Label,
    Input,
    Button,
    Text,
    Item
} from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";

import { MText } from "../components/MText";
import { RadioButton } from "../components/RadioButton";
import gstyles from "../config/styles";

class Login extends Component {
    static propTypes = {
        navigation: PropTypes.object
    };

    handlePressUserRegister = () => {
        console.log("press register");
        this.props.navigation.navigate("Register");
    };

    handlePressLogin = () => {
        console.log("press login");
        this.props.navigation.navigate("MainUser");
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
                        <MText>登入</MText>
                    </Button>
                    <Button
                        style={gstyles.button}
                        rounded
                        onPress={this.handlePressUserRegister}>
                        <MText>註冊</MText>
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
