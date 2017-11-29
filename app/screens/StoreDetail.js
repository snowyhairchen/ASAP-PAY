import React, { Component } from "react";
import { View, Image } from "react-native";
import { Container, Content } from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";
import Swiper from "react-native-swiper";

import config from "../config/config";
import { ScaledImage } from "../components/ScaledImage";

class StoreDetail extends Component {
    render() {
        let storeData = this.props.navigation.state.params.storeData;
        let imgURL =
            config["baseURL"] +
            "/images/stores/" +
            storeData["StoreAccount"] +
            "/storedetail";

        return (
            <Container>
                <Content>
                    <Swiper
                        style={styles.swiper}
                        paginationStyle={styles.pagination}
                        showsButtons={true}>
                        <View style={styles.slide}>
                            <ScaledImage uri={imgURL + "/0.jpg"} height={200} />
                        </View>
                        <View style={styles.slide}>
                            <ScaledImage uri={imgURL + "/1.jpg"} height={200} />
                        </View>
                        <View style={styles.slide}>
                            <ScaledImage uri={imgURL + "/2.jpg"} height={200} />
                        </View>
                    </Swiper>
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
    }
});

export default StoreDetail;
