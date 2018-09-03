import {View,Text,TouchableHighlight} from 'react-native'
import { Actions } from 'react-native-router-flux';
import React from 'react'
import styles from './styles';

const HomeFlatListItem = ({item,separators}) =>{
    return(
        <TouchableHighlight
        onPress={() => this._onPress(item)}
        onShowUnderlay={separators.highlight}
        onHideUnderlay={separators.unhighlight}>
        <View style={styles.homeFlatListItemContainer}>
            <Text style={styles.homeFlatListItemText}>{item.title}</Text>
        </View>
    </TouchableHighlight>
    )
}

_onPress = (item) => {
    console.log("Item of Home " + JSON.stringify(item))
    if(item.id === 1){
        Actions.bhajan(item);
    }else if(item.id === 3){
        Actions.aarti(item)
    }
}



export default HomeFlatListItem;