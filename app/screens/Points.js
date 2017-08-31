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
                        <Text>商品(10點)</Text>
                        <Text note>期限</Text>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="md-arrow-forward" />
                        </Button>
                    </Right>
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

export default Points;
