import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%",
        padding: 10,
    },
    leftContainer: {
        flexDirection: 'row',
    },
    midContainer: {
        justifyContent: 'space-around',
    },
    avarta: {
        width: 60,
        height: 60,
        margin: 5,
        borderRadius: 50,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    status: {
        fontSize: 16,
        color: 'grey',
   },


});

export default styles;