import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Content, Form, Item, Label, Input, Button } from 'native-base';
import EstyleSheet from 'react-native-extended-stylesheet';

import { MText } from '../components/MText';
import { RadioButton } from '../components/RadioButton';
import gstyles from '../config/styles';

class Register extends Component {
  constructor () {
      super();

      this.state = {
          radioMale: true,
          radioFemale: false,
      }
  }

  handlePressMale = () => {
    this.setState({
        radioMale: true,
        radioFemale: false,
    });
  }

  handlePressFemale = () => {
    this.setState({
        radioMale: false,
        radioFemale: true,
    });
  }

  handlePressOk = () => {
      console.log("press Ok");
  }

  render () {
    return (
        <Container>
            <Content>
                <Form>
                    <Item style={gstyles.Input} inlineLabel>
                        <Label>帳號</Label>
                        <Input />
                    </Item>
                    <Item style={gstyles.Input} inlineLabel>
                        <Label>密碼</Label>
                        <Input secureTextEntry={true}/>
                    </Item>
                    <Item style={gstyles.Input} inlineLabel>
                        <Label>確認密碼</Label>
                        <Input secureTextEntry={true}/>
                    </Item>
                    <Item style={gstyles.Input} inlineLabel>
                        <Label>姓名</Label>
                        <Input/>
                    </Item>
                    <View style={styles.radioButtonContainer}>
                        <Label style={styles.label}>性別</Label>
                        <RadioButton label="男" onPress={this.handlePressMale} selected={this.state.radioMale}/>
                        <RadioButton label="女" onPress={this.handlePressFemale} selected={this.state.radioFemale}/>
                    </View>
                    <Item style={gstyles.Input} inlineLabel>
                        <Label>電話</Label>
                        <Input keyboardType="numeric"/>
                    </Item>                    
                    <Item style={gstyles.Input} inlineLabel>
                        <Label>就讀學校</Label>
                        <Input/>
                    </Item>
                    <Item style={gstyles.Input} inlineLabel>
                        <Label>E-mail</Label>
                        <Input keyboardType="email-address"/>
                    </Item>
                    <View style={gstyles.buttonContainer}>
                        <Button style={gstyles.button} rounded onPress={this.handlePressOk}>
                            <MText text="註冊" />
                        </Button>                                         
                    </View>
                </Form>
            </Content>
        </Container>
    )
  }
}

const styles = EstyleSheet.create({
    label: {
        marginRight: 25,
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: '$componentSpacing',
        marginHorizontal: '$containerPadding',
    },
});

export default Register;
