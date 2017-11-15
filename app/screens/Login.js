import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Alert } from "react-native";
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
import { baseURL } from "../config/config";

class Login extends Component {
    constructor() {
        super();

        this.state = { user: "user", password: "password" };
    }

    static propTypes = {
        navigation: PropTypes.object
    };

    handlePressUserRegister = () => {
        console.log("press register");
        this.props.navigation.navigate("Register");
    };

    handlePressLogin = () => {
        console.log("press login");

        fetch(baseURL + "/auth.php", {
            method: "POST",
            headers: {
                Accept: "text/plain",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: this.state.user,
                password: this.state.password
            })
        })
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson == "-1") {
                    Alert.alert("", "無此帳號");
                } else if (responseJson == "0") {
                    Alert.alert("", "密碼錯誤");
                } else {
                    this.props.navigation.navigate("MainUser");
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    render() {
        return (
            <Container style={[styles.container, gstyles.container]}>
                <Form>
                    <Item style={gstyles.input} inlineLabel>
                        <Label>帳號</Label>
                        <Input
                            onChangeText={user =>
                                this.setState({
                                    user
                                })}
                            value={this.state.user}
                        />
                    </Item>
                    <Item style={gstyles.input} inlineLabel>
                        <Label>密碼</Label>
                        <Input
                            secureTextEntry={true}
                            onChangeText={password =>
                                this.setState({
                                    password
                                })}
                            value={this.state.password}
                        />
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
