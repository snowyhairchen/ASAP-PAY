import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Form, Container, Header, Content, Item, Label, Input, Button, Text, StyleProvider } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';

class Login extends Component {
    state = {
        fontLoaded: false,
    };

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });

        this.setState({ fontLoaded: true });
    }

    static propTypes = {
        navigation: PropTypes.object
    }

    handlePressRegister = () => {
        console.log('press register');
        this.props.navigation.navigate('Register', {title: '註冊'});
    }

    handlePressLogin = () => {
        console.log('press login');
    }

    render () {
        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <Item inlineLabel>
                            <Label>帳號</Label>
                            <Input />
                        </Item>
                        <Item inlineLabel>
                            <Label>密碼</Label>
                            <Input />
                        </Item>
                    </Form>
                    <View style={styles.buttonContainer}>
                        <Button style={styles.button} rounded onPress={this.handlePressLogin}>
                            {this.state.fontLoaded ? (<Text>登入</Text>) : null}
                        </Button>    
                        <Button style={styles.button} rounded onPress={this.handlePressRegister}>
                            {this.state.fontLoaded ? (<Text>註冊</Text>) : null}
                        </Button>    
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = EStyleSheet.create({
    content: {
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 15,
    },
    button: {
        justifyContent: 'center',
        flex: 1,
        marginHorizontal: 10,
    },
})

export default Login;
