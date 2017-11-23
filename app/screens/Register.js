import React, { Component } from "react";
import { View, Alert } from "react-native";
import {
    Container,
    Header,
    Content,
    Form,
    Item,
    Label,
    Input,
    Button,
    Text
} from "native-base";
import EstyleSheet from "react-native-extended-stylesheet";

import { RadioButton } from "../components/RadioButton";
import gstyles from "../config/styles";
import config from "../config/config";

class Register extends Component {
    constructor() {
        super();

        this.state = {
            radioMale: true,
            radioFemale: false,
            user: "user",
            password: "password",
            verifyPassword: "password",
            email: "user@domain.com",
            phone: "0912345678",
            school: "school",
            name: "name"
        };
    }

    handlePressMale = () => {
        this.setState({
            radioMale: true,
            radioFemale: false
        });
    };

    handlePressFemale = () => {
        this.setState({
            radioMale: false,
            radioFemale: true
        });
    };

    handlePressOk = () => {
        console.log("press Ok");

        if (this.state.password !== this.state.verifyPassword) {
            Alert.alert("", "密碼不一致");
            return;
        }

        fetch(config.baseURL + "/auth.php", {
            method: "POST",
            headers: {
                Accept: "text/plain",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: this.state.user,
                password: this.state.password,
                email: this.state.email,
                sex: this.state.radioMale ? 0 : 1,
                phone: this.state.phone,
                school: this.state.school,
                name: this.state.name
            })
        })
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson == "0") {
                    Alert.alert("", "此帳號已註冊過");
                } else {
                    Alert.alert("", "註冊成功", [
                        {
                            text: "OK",
                            onPress: () => this.props.navigation.goBack()
                        }
                    ]);
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    handlePressCancel = () => {
        console.log("press Cancel");
        this.props.navigation.goBack();
    };

    render() {
        return (
            <Container style={gstyles.container}>
                <Content>
                    <Form>
                        <View>
                            <Item style={gstyles.Input} inlineLabel>
                                <Label>帳號</Label>
                                <Input
                                    onChangeText={user =>
                                        this.setState({ user })}
                                    value={this.state.user}
                                />
                            </Item>
                            <Item style={gstyles.Input} inlineLabel>
                                <Label>密碼</Label>
                                <Input
                                    secureTextEntry={true}
                                    onChangeText={password =>
                                        this.setState({ password })}
                                    value={this.state.password}
                                />
                            </Item>
                            <Item style={gstyles.Input} inlineLabel>
                                <Label>確認密碼</Label>
                                <Input
                                    secureTextEntry={true}
                                    onChangeText={verifyPassword =>
                                        this.setState({ verifyPassword })}
                                    value={this.state.verifyPassword}
                                />
                            </Item>
                            <Item style={gstyles.Input} inlineLabel>
                                <Label>姓名</Label>
                                <Input
                                    onChangeText={name =>
                                        this.setState({ name })}
                                    value={this.state.name}
                                />
                            </Item>
                            <View style={gstyles.radioButtonContainer}>
                                <Label style={gstyles.radioButtonLabel}>
                                    性別
                                </Label>
                                <RadioButton
                                    label="男"
                                    onPress={this.handlePressMale}
                                    selected={this.state.radioMale}
                                />
                                <RadioButton
                                    label="女"
                                    onPress={this.handlePressFemale}
                                    selected={this.state.radioFemale}
                                />
                            </View>
                            <Item style={gstyles.Input} inlineLabel>
                                <Label>電話</Label>
                                <Input
                                    keyboardType="numeric"
                                    onChangeText={phone =>
                                        this.setState({ phone })}
                                    value={this.state.phone}
                                />
                            </Item>
                            <Item style={gstyles.Input} inlineLabel>
                                <Label>就讀學校</Label>
                                <Input
                                    onChangeText={school =>
                                        this.setState({ school })}
                                    value={this.state.school}
                                />
                            </Item>
                            <Item style={gstyles.Input} inlineLabel>
                                <Label>E-mail</Label>
                                <Input
                                    keyboardType="email-address"
                                    onChangeText={email =>
                                        this.setState({ email })}
                                    value={this.state.email}
                                />
                            </Item>
                        </View>
                        <View style={gstyles.buttonContainer}>
                            <Button
                                style={gstyles.button}
                                rounded
                                onPress={this.handlePressOk}>
                                <Text>確認</Text>
                            </Button>
                            <Button
                                style={gstyles.button}
                                rounded
                                onPress={this.handlePressCancel}>
                                <Text>取消</Text>
                            </Button>
                        </View>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = EstyleSheet.create({});

export default Register;
