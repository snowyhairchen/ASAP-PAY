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

class Coupon extends Component {
    render() {
        let coupons = [];

        for (let i = 1; i <= 10; i++) {
            coupons.push(
                <ListItem style={styles.listItem} key={i}>
                    <Thumbnail
                        square
                        size={80}
                        source={require("../data/images/couponImg.jpg")}
                    />
                    <Body>
                        <Text>優惠卷標題</Text>
                        <Text note>優惠卷期限</Text>
                    </Body>
                    <View style={styles.buttonContainer}>
                        <Button bordered small>
                            <Text>兌換</Text>
                        </Button>
                    </View>
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

const styles = EStyleSheet.create({});

export default Coupon;
