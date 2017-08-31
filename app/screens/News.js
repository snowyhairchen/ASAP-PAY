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

class News extends Component {
    render() {
        let news = [];

        for (let i = 1; i <= 10; i++) {
            news.push(
                <Card key={i} style={{ flex: 0 }}>
                    <CardItem>
                        <Left>
                            <Thumbnail
                                source={require("../data/images/thumbnail.png")}
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
                            onPress={e => this.props.onPressReadMore(e, i)}>
                            <Text>繼續閱讀</Text>
                        </Button>
                    </CardItem>
                </Card>
            );
        }

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
