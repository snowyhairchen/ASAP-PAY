import React, { Component } from "react";
import { Text } from "react-native";

class StoreDetail extends Component {
    render() {
        console.log(this.props.navigation.state.params.storeData);

        return <Text>StoreDetail</Text>;
    }
}

export default StoreDetail;
