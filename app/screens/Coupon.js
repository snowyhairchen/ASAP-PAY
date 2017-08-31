import React, { Component } from "react";
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

class Coupon extends Component {
    render() {
        let coupons = [];

        for (let i = 1; i <= 10; i++) {
            coupons.push(
                <ListItem key={i}>
                    <Thumbnail
                        square
                        size={80}
                        source={require("../data/images/couponImg.png")}
                    />
                    <Body>
                        <Text>優惠卷標題</Text>
                        <Text note>優惠卷期限</Text>
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
                <List>{coupons}</List>
            </Content>
        );
    }
}

export default Coupon;
