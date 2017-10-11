import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import { Radio } from "native-base";

import { MText } from "../MText";
import styles from "./styles";

const RadioButton = ({ label, onPress, selected }) => (
    <View style={styles.radioButtonContainer}>
        <Radio style={styles.radio} onPress={onPress} selected={selected} />
        <MText>{label}</MText>
    </View>
);

RadioButton.prototype = {
    label: PropTypes.string,
    onPress: PropTypes.func,
    selected: PropTypes.bool
};

export default RadioButton;
