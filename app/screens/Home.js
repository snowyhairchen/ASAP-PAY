import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

import { Container } from '../components/Container';

class Home extends Component {
  render () {
    return (
      <Container>
        <FormLabel>帳號</FormLabel>
        <FormInput/>
        <FormLabel>密碼</FormLabel>
        <FormInput secureTextEntry/>
        <Button title='登入'/>
      </Container>
    )
  }
}

export default Home;
