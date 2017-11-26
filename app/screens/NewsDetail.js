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
        let storeData = this.props.navigation.state.params.storeData;
        let imgURL =
            config["baseURL"] +
            "/images/stores/" +
            storeData["Store_StoreAccount"];
        console.log(imgURL);

        return (
            <Container style={gstyles.container}>
                <Content style={styles.content}>
                    <View style={styles.newsHeader}>
                        <Thumbnail
                            source={{ uri: imgURL + "/thumbnail.png" }}
                        />
                        <View>
                            <Text>{storeData["store"][0]["StoreName"]}</Text>
                            <Text note>
                                {storeData["StartTime"]}~{storeData["EndTime"]}
                            </Text>
                        </View>
                    </View>
                    <Image
                        source={{
                            uri:
                                imgURL +
                                "/specialoffer/" +
                                storeData["No"] +
                                ".jpg"
                        }}
                        style={{ height: 200, width: 200 }}
                    />
                    <Text>{storeData["Content"]}</Text>
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
