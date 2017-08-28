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
        return (
            <Content>
                <List>
                    <ListItem>
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
                </List>
            </Content>
        );
    }
}

export default Coupon;
