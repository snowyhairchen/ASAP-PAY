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

import { baseURL}

class News extends Component {
    constructor() {
        super();

        let no, store_storeaccount, title, content, starttime, endtime;
        this.news = [];

        fetch(
            "http://192.168.1.101:8080/ASAPPayWebService/api.php/specialoffer",
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            }
        )
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                for (let i = 0; i < responseJson["columns"].length; i++) {
                    switch (responseJson["columns"][i]) {
                        case "No":
                            no = i;
                            break;
                        case "Store_StoreAccount":
                            store_storeaccount = i;
                            break;
                        case "Title":
                            title = i;
                            break;
                        case "Content":
                            content = i;
                            break;
                        case "StartTime":
                            starttime = i;
                            break;
                        case "EndTime":
                            endtime = i;
                            break;
                    }
                }

                for (let i = 0; i < responseJson["records"].length; i++) {
                    this.news.push(
                        <Card key={i} style={{ flex: 0 }}>
                            <CardItem>
                                <Left>
                                    <Thumbnail
                                        source={{uri: }}
                                    />
                                    <Body>
                                        <Text>店家名稱</Text>
                                        <Text note>發佈時間</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem>
                                <Body style={styles.body}>
                                    <Image
                                        source={require("../data/images/cat.jpg")}
                                        style={{ height: 200, width: 200 }}
                                    />
                                    <Text>優惠內容</Text>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Button
                                    style={styles.button}
                                    bordered
                                    onPress={e =>
                                        this.props.onPressReadMore(e, i)}>
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
    }

    render() {
        return <Content>{news}</Content>;
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
