import React, { Component } from "react";
import { Image, View, Platform } from "react-native";
import { Container, Content, Thumbnail, Text, Left, Body } from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";

import gstyles from "../config/styles";

const platform = Platform.OS;

class NewsDetail extends Component {
    render() {
        return (
            <Container style={gstyles.container}>
                <Content style={styles.content}>
                    <View style={styles.newsHeader}>
                        <Thumbnail
                            source={require("../data/images/thumbnail.png")}
                        />
                        <View>
                            <Text>店家名稱</Text>
                            <Text note>發佈時間</Text>
                        </View>
                    </View>
                    <Image
                        source={require("../data/images/cat.jpg")}
                        style={{ height: 200, width: 200 }}
                    />
                    <Text>優惠內容</Text>
                </Content>
            </Container>
        );
    }
}

const styles = EStyleSheet.create({
    content: {
        padding: platform === "ios" ? 15 : 17
    },
    newsHeader: {
        flexDirection: "row",
        alignItems: "center"
    }
});

export default NewsDetail;
