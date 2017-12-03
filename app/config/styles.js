import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
    input: {
        marginVertical: "$componentSpacing"
    },
    button: {
        justifyContent: "center",
        flex: 1,
        marginHorizontal: "$componentSpacing"
    },
    buttonContainer: {
        height: 45,
        flexDirection: "row",
        marginTop: 20
    },
    radioButtonLabel: {
        marginRight: 15
    },
    radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: "$componentSpacing",
        marginHorizontal: "$containerPadding"
    },
    container: {
        backgroundColor: "$backgroundColor"
    },
    storeHeader: {
        flexDirection: "row"
    },
    storeHeaderText: {
        justifyContent: "center"
    }
});
