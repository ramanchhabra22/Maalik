import {StyleSheet,Dimensions} from 'react-native'
import colors from './colors';
const {height, width} = Dimensions.get('window');
const itemWidth = (width - 40) / 2;

const styles = StyleSheet.create({
    splashScreenContainer : {
        justifyContent:'center',
        flexDirection:'column',
        alignItems: 'center',
    },
    toolbarContainer:{
        backgroundColor: 'white',
        height: 56,
        alignSelf: 'stretch',
    },
    homeFlatListItemContainer:{
        flex:1,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        height: 100,
        width: (Dimensions.get('window').width - 20) / 2,
        justifyContent:'center',
        alignItems : 'center',
    },
    horizontalItemContainer:{
        height: 100,
        width:120,
        marginTop:0,
        marginLeft:10,
        marginRight:0,
    
    },
    carouselItemContainer:{
        height:150,
        marginLeft:5,
        marginRight:0,
    },

    homeFlatListItemText:{
        color:'black',
        fontWeight: 'bold',
        fontSize: 25,
    
    },
    aartiFlatListItemContainer:{
        borderBottomWidth :1,
        borderBottomColor: '#d6d7da',
        flex:1,
    },
    aartiFlatListItemText:{
        color:'black',
        paddingTop : 15,
        paddingLeft: 30,
        paddingBottom:15,
    },
    homeFlatListStyle: {
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 10
    },
    viewAll:{
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        paddingTop:2,
        paddingBottom:2,
        paddingLeft:8,
        paddingRight:8,
        fontSize:10,
        color:colors.viewAll,
    },
    horizontalHeadingText:{
        opacity:0.75,
        color:'black'
    }

})

export default styles