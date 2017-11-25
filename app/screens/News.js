import React, { Component } from "react";
import { Image } from "react-native";
import {
    Content,
    Card,
    CardItem,
    Left,
    Thumbnail,
    Body,
    Text,
    Button,
    Icon
} from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";

import config from "../config/config";
import functionSet from "../config/function";

class News extends Component {
    constructor() {
        super();

        let no, store_storeaccount, title, content, starttime, endtime;
        let date = new Date();
        let now =
            date.getFullYear() +
            "-" +
            (date.getMonth() + 1) +
            "-" +
            date.getDate();
        let url =
            config["baseURL"] +
            "/api.php/specialoffer?include=store&columns=No,Title,Content,StartTime,EndTime,store.StoreName&order=StartTime&filter=EndTime,ge," +
            now;
        console.log("request url:" + url);
        this.news = [];

        fetch(url, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(responseJson => {
                responseFormat = functionSet["php_crud_api_transform"](
                    responseJson
                )["specialoffer"];
                console.log(responseFormat);

                for (let i = 0; i < responseFormat.length; i++) {
                    let imgURL =
                        config["baseURL"] +
                        "/images/stores/" +
                        responseFormat[i]["Store_StoreAccount"];
                    let content = "";

                    if (responseFormat[i]["Content"].length > 100) {
                        content =
                            responseFormat[i]["Content"].substring(0, 100) +
                            "...";
                    } else {
                        content = responseFormat[i]["Content"];
                    }

                    this.news.push(
                        <Card key={i} style={{ flex: 0 }}>
                            <CardItem>
                                <Left>
                                    <Thumbnail
                                        source={{
                                            uri: imgURL + "/thumbnail.png"
                                        }}
                                    />
                                    <Body>
                                        <Text>
                                            {
                                                responseFormat[i]["store"][0][
                                                    "StoreName"
                                                ]
                                            }
                                        </Text>
                                        <Text note>
                                            {responseFormat[i]["StartTime"]}~{
                                                responseFormat[i]["EndTime"]
                                            }
                                        </Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem>
                                <Body style={styles.body}>
                                    <Image
                                        source={{
                                            uri:
                                                imgURL +
                                                "/specialoffer/" +
                                                responseFormat[i]["No"] +
                                                ".jpg"
                                        }}
                                        style={{ height: 200, width: 200 }}
                                    />
                                    <Text>{content}</Text>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Button
                                    style={styles.button}
                                    bordered
                                    onPress={e =>
                                        this.props.onPressReadMore(e, i)
                                    }>
                                    <Text>繼續閱讀</Text>
                                </Button>
                            </CardItem>
                        </Card>
                    );
                }
            })
            .catch(error => {
                console.error(error);
            });

        console.log(this.news);
    }

    render() {
        return <Content>{this.news}</Content>;
    }
}

const styles = EStyleSheet.create({
    button: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default News;
