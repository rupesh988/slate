import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    rges : {
        backgroundColor : "#000000",
        flex : 1,
        minWidth : "100%",
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ rotate: '90deg' }],
        flexDirection : 'column'
    },
    lges : {
        backgroundColor : "#000000",
        flex : 1,
        minWidth : "100%",
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ rotate: '90deg' }],
        
    },

    upanel : {
        backgroundColor : "#FFF",
        flex : 1,
        alignSelf : 'stretch',
        alignItems : 'center',
        justifyContent : 'center',
        flexDirection : 'row'

    },

    rpanel : {
        backgroundColor : "#FFF",
        flex : 1,
        alignSelf : 'stretch',
        alignItems : 'center',
        justifyContent : 'center',
        flexDirection : 'row',
        gap : 0.5,
        maxHeight : 80

    },

    space :{
        backgroundColor : "#FFF",
        flex : 1,
        alignSelf : 'stretch',
        alignItems : 'center',
        justifyContent : 'center',
        flexDirection : 'row'
    },
    spacedown :{
        backgroundColor : "#fff",
        flex : 1,
        alignSelf : 'stretch',
        alignItems : 'center',
        justifyContent : 'flex-start',
        maxHeight : 100,
        borderTopWidth : 0.3,
        borderColor : "#fff",
        flexDirection : 'row',
        gap : 0.3
    },
    butts : {
        backgroundColor : "#000000",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth : 0.3,
        borderColor: "#fff",
        alignSelf: 'stretch',
        maxWidth : 100
    },
    spaceup :{
        backgroundColor : "#fff",
        flex : 1,
        alignSelf : 'stretch',
        alignItems : 'center',
        justifyContent : 'flex-start',
        maxHeight : 50,
        borderTopWidth : 0.3,
        borderColor : "#fff",
        flexDirection : 'row',
        gap : 0.6
    },


});

export default styles;
