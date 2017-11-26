import React, { Component } from "react";
import { Image, View, Platform, TouchableOpacity } from "react-native";
import { Container, Content, Thumbnail, Text, Left, Body } from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";

import gstyles from "../config/styles";
import config from "../config/config";

const platform = Platform.OS;

class NewsDetail extends Component {
    constructor() {
        super();
    }

    handlePressStore = () => {
        let storeData = this.props.navigation.state.params.specialofferData[
            "store"
        ][0];
        this.props.navigation.navigate("StoreDetail", { storeData });
    };

    render() {
        let specialofferData = this.props.navigation.state.params
            .specialofferData;
        let imgURL =
            config["baseURL"] +
            "/images/stores/" +
            specialofferData["Store_StoreAccount"];

        return (
            <Container style={gstyles.container}>
                <Content style={styles.content}>
                    <TouchableOpacity
                        style={gstyles.storeHeader}
                        onPress={this.handlePressStore}>
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
                    </TouchableOpacity>
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
    }
});

export default NewsDetail;
