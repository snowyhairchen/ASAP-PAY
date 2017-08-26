import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

import Navigator from "./config/routes";

EStyleSheet.build({
    $componentSpacing: 10,
    $containerPadding: 15,
    $backgroundColor: "#FFFFFF"
});

export default () => <Navigator />;
