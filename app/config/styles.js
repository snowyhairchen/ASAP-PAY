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
    container: {
        backgroundColor: "$backgroundColor"
    }
});
