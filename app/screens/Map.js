import React, { Component } from "react";
import { View } from "react-native";
import { Button, Text } from "native-base";
import MapView from "react-native-maps";
import EStyleSheet from "react-native-extended-stylesheet";

class Map extends Component {
    render() {
        return (
            <View>
                <View style={styles.categoryContainer}>
                    <Button bordered style={styles.button}>
                        <Text>美妝</Text>
                    </Button>
                    <Button bordered style={styles.button}>
                        <Text>衣服</Text>
                    </Button>
                    <Button bordered style={styles.button}>
                        <Text>美食</Text>
                    </Button>
                    <Button bordered style={styles.button}>
                        <Text>家電</Text>
                    </Button>
                    <Button bordered style={styles.button}>
                        <Text>其他</Text>
                    </Button>
                </View>

                <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                    style={styles.map}
                />
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    categoryContainer: {
        flexDirection: "row",
        alignSelf: "stretch",
        height: 100
    },
    map: {
        alignSelf: "stretch",
        height: 100
    },
    button: {
        justifyContent: "center",
        width: 75,
        margin: 5,
        paddingVertical: 5
    }
});

export default Map;
