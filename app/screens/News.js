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
        return (
            <Content>
                <Card style={{ flex: 0 }}>
                    <CardItem>
                        <Left>
                            <Thumbnail
                                source={require("../data/images/thumbnail.png")}
                            />
                            <Body>
                                <Text>Cat</Text>
                                <Text note>April 15, 2016</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Image
                                source={require("../data/images/cat.jpg")}
                                style={{ height: 200, width: 200, flex: 1 }}
                            />
                            <Text>優惠內容</Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Button style={styles.button} bordered>
                            <Text>繼續閱讀</Text>
                        </Button>
                    </CardItem>
                </Card>
            </Content>
        );
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
