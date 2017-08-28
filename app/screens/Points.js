import React, { Component } from "react";
import {
    Content,
    List,
    ListItem,
    Thumbnail,
    Body,
    Text,
    Right,
    Button,
    Icon
} from "native-base";

class Points extends Component {
    render() {
        return (
            <Content>
                <List>
                    <ListItem>
                        <Thumbnail
                            square
                            size={80}
                            source={require("../data/images/points.jpg")}
                        />
                        <Body>
                            <Text>商品</Text>
                            <Text note>期限</Text>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Icon name="md-arrow-forward" />
                            </Button>
                        </Right>
                    </ListItem>
                </List>
            </Content>
        );
    }
}

export default Points;
