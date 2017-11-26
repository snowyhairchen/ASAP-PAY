import React, { Component } from "react";
import { Image, View } from "react-native";
import {
    Container,
    Header,
    Card,
    Text,
    Button,
    Tabs,
    Tab,
    TabHeading,
    Item,
    Input,
    Icon,
    Right,
    Drawer
} from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";

import gstyles from "../config/styles";
import News from "./News";
import Map from "./Map";
import Coupon from "./Coupon";
import Points from "./Points";
import SideBar from "./SideBar";

class MainUser extends Component {
    constructor() {
        super();
    }

    handlePressMenu = () => {
        console.log("press menu");
        this.drawer._root.open();
    };

    closeDrawer = () => {
        this.drawer._root.close();
    };

    handlePressReadMore = (e, i, storeData) => {
        console.log("press readmore");
        this.props.navigation.navigate("NewsDetail", { storeData });
    };

    render() {
        return (
            <Drawer
                ref={ref => {
                    this.drawer = ref;
                }}
                content={<SideBar navigator={this.navigator} />}
                onClose={() => this.closeDrawer()}
                side="right">
                <Container>
                    <Header noShadow searchBar rounded>
                        <Item>
                            <Icon name="ios-search" />
                            <Input placeholder="搜尋店家" />
                        </Item>
                        <Right style={styles.menuContainer}>
                            <Button transparent onPress={this.handlePressMenu}>
                                <Icon name="md-more" />
                            </Button>
                        </Right>
                    </Header>
                    <Tabs>
                        <Tab
                            heading={
                                <TabHeading>
                                    <Icon name="md-paper" />
                                </TabHeading>
                            }>
                            <News onPressReadMore={this.handlePressReadMore} />
                        </Tab>
                        <Tab
                            heading={
                                <TabHeading>
                                    <Icon name="md-map" />
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
            </Drawer>
        );
    }
}

const styles = EStyleSheet.create({
    menuContainer: {
        margin: 0,
        flex: 0
    }
});

export default MainUser;
