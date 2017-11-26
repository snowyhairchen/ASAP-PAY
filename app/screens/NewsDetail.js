import React, { Component } from "react";
import { Image, View, Platform } from "react-native";
import { Container, Content, Thumbnail, Text, Left, Body } from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";

import gstyles from "../config/styles";
import config from "../config/config";

const platform = Platform.OS;

class NewsDetail extends Component {
    constructor() {
        super();
    }

    render() {
        let specialofferData = this.props.navigation.state.params
            .specialofferData;
        let imgURL =
            config["baseURL"] +
            "/images/stores/" +
            specialofferData["Store_StoreAccount"];
        console.log(imgURL);

        return (
            <Container style={gstyles.container}>
                <Content style={styles.content}>
                    <View style={styles.newsHeader}>
                        <Thumbnail
                            source={{ uri: imgURL + "/thumbnail.png" }}
                        />
                        <View>
                            <Text>
                                {specialofferData["store"][0]["StoreName"]}
                            </Text>
                            <Text note>
                                {specialofferData["StartTime"]}~{
                                    specialofferData["EndTime"]
                                }
                            </Text>
                        </View>
                    </View>
                    <Image
                        source={{
                            uri:
                                imgURL +
                                "/specialoffer/" +
                                specialofferData["No"] +
                                ".jpg"
                        }}
                        style={{ height: 200, width: 200 }}
                    />
                    <Text>{specialofferData["Content"]}</Text>
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
