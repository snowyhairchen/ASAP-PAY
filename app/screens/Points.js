import React, { Component } from "react";
import { View } from "react-native";
import {
    Content,
    List,
    ListItem,
    Thumbnail,
    Body,
    Text,
    Right,
    Button,
    Icon
} from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";

class Points extends Component {
    render() {
        let products = [];

        for (let i = 1; i <= 10; i++) {
            products.push(
                <ListItem key={i}>
                    <Thumbnail
                        square
                        size={80}
                        source={require("../data/images/points.jpg")}
                    />
                    <Body>
                        <Text>商品</Text>
                        <Text note>期限</Text>
                    </Body>
                    <View style={styles.buttonContainer}>
                        <Button bordered small>
                            <Text>10點</Text>
                        </Button>
                    </View>
                </ListItem>
            );
        }

        return (
            <Content>
                <List>{products}</List>
            </Content>
        );
    }
}

const styles = EStyleSheet.create({});

export default Points;
