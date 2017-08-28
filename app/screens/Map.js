import React, { Component } from "react";
import { View } from "react-native";
import MapView from "react-native-maps";
import EStyleSheet from "react-native-extended-stylesheet";

class Map extends Component {
    render() {
        return (
            <View style={styles.mapContainer}>
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
    mapContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    map: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
});

export default Map;
