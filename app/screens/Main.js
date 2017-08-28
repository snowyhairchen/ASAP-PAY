import React, { Component } from "react";
import { Image } from "react-native";
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Left,
    Body,
    Tabs,
    Tab,
    TabHeading,
    Item,
    Input,
    Icon
} from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";

import gstyles from "../config/styles";
import News from "./News";
import Map from "./Map";
import Coupon from "./Coupon";
import Points from "./Points";

class Main extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Container>
                <Header noShadow searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="搜尋店家" />
                    </Item>
                    <View style={styles.menuContainer}>
                        <Button transparent>
                            <Icon name="md-menu" />
                        </Button>
                    </View>
                </Header>
                <Tabs>
                    <Tab
                        heading={
                            <TabHeading>
                                <Text>優惠消息</Text>
                            </TabHeading>
                        }>
                        <News />
                    </Tab>
                    <Tab
                        heading={
                            <TabHeading>
                                <Text>附近店家</Text>
                            </TabHeading>
                        }>
                        <Map />
                    </Tab>
                    <Tab
                        heading={
                            <TabHeading>
                                <Text>優惠卷</Text>
                            </TabHeading>
                        }>
                        <Coupon />
                    </Tab>
                    <Tab
                        heading={
                            <TabHeading>
                                <Text>點數兌換</Text>
                            </TabHeading>
                        }>
                        <Points />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

const styles = EStyleSheet.create({
    menuContainer: {
        alignSelf: "flex-end"
    }
});

export default Main;
