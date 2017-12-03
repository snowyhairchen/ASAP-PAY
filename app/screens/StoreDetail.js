import React, { Component } from "react";
import { View, Image } from "react-native";
import { Container, Content, Thumbnail, Body, Text } from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";
import Swiper from "react-native-swiper";

import config from "../config/config";
import gstyles from "../config/styles";
import { ScaledImage } from "../components/ScaledImage";

class StoreDetail extends Component {
    render() {
        let storeData = this.props.navigation.state.params.storeData;
        let storeImgURL =
            config["baseURL"] + "/images/stores/" + storeData["StoreAccount"];
        let storedetailURL = storeImgURL + "/storedetail";
        console.log(storeData);

        return (
            <Container style={gstyles.container}>
                <Content>
                    <Swiper
                        style={styles.swiper}
                        paginationStyle={styles.pagination}
                        showsButtons={true}>
                        <View style={styles.slide}>
                            <ScaledImage
                                uri={storedetailURL + "/0.jpg"}
                                height={200}
                            />
                        </View>
                        <View style={styles.slide}>
                            <ScaledImage
                                uri={storedetailURL + "/1.jpg"}
                                height={200}
                            />
                        </View>
                        <View style={styles.slide}>
                            <ScaledImage
                                uri={storedetailURL + "/2.jpg"}
                                height={200}
                            />
                        </View>
                    </Swiper>

                    <View style={[gstyles.storeHeader, styles.storeHeader]}>
                        <Thumbnail
                            source={{ uri: storeImgURL + "/thumbnail.png" }}
                        />
                        <View style={gstyles.storeHeaderText}>
                            <Text>{storeData["StoreName"]}</Text>
                        </View>
                    </View>

                    <View style={styles.imagesContainer}>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={require("../data/images/star.png")}>
                                <Text style={styles.imageText}>
                                    {storeData["Rate"]}
                                </Text>
                            </Image>
                            <Text style={styles.imageDescription}>星等</Text>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={require("../data/images/message.png")}>
                                <Text style={styles.imageText}>
                                    {storeData["reviewAmount"]}
                                </Text>
                            </Image>
                            <Text style={styles.imageDescription}>評論數</Text>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={require("../data/images/heart.png")}>
                                <Text style={styles.imageText}>
                                    {storeData["keepstoreAmount"]}
                                </Text>
                            </Image>
                            <Text style={styles.imageDescription}>
                                收藏次數
                            </Text>
                        </View>
                        <View style={styles.imageContainer}>
                            <View style={styles.categoryCircle}>
                                <Image
                                    style={[styles.image, styles.categoryIcon]}
                                    source={{
                                        uri:
                                            config["baseURL"] +
                                            "/images/storecategory/" +
                                            storeData[
                                                "StoreCategory_CategoryNo"
                                            ] +
                                            ".png"
                                    }}
                                />
                            </View>
                            <Text style={styles.imageDescription}>
                                {storeData["storecategory"][0]["Name"]}
                            </Text>
                        </View>
                        <View />
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = EStyleSheet.create({
    swiper: {
        flex: 1,
        height: 200
    },
    pagination: {},
    slide: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    storeHeader: {
        marginLeft: 10,
        marginRight: 10
    },
    imagesContainer: {
        flexDirection: "row",
        marginLeft: 10,
        marginRight: 10,
        justifyContent: "center"
    },
    imageContainer: {
        alignItems: "center",
        marginLeft: 5,
        marginRight: 5
    },
    image: {
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    imageDescription: {
        fontSize: 10
    },
    imageText: {
        fontSize: 12
    },
    categoryCircle: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: "#27ae60",
        justifyContent: "center",
        alignItems: "center"
    },
    categoryIcon: {
        width: 35,
        height: 35
    }
});

export default StoreDetail;
