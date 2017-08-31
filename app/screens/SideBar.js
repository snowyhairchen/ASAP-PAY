import React, { Component } from "react";
import {
    Container,
    Content,
    Text,
    List,
    ListItem,
    Left,
    Icon,
    Body
} from "native-base";
import EStyleSheet from "react-native-extended-stylesheet";

class SideBar extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <List>
                        <ListItem icon>
                            <Left>
                                <Icon name="md-person" />
                            </Left>
                            <Body>
                                <Text>個人</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="md-settings" />
                            </Left>
                            <Body>
                                <Text>設定</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        backgroundColor: "$backgroundColor"
    }
});

export default SideBar;
