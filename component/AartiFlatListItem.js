import {View,Text,TouchableHighlight} from 'react-native'
import { Actions } from 'react-native-router-flux';
import React from 'react'
import styles from './styles';

const AartiFlatListItem = ({item,separators}) =>{
    return(
        <TouchableHighlight
        onPress={() => this.onPressClick(item)}
        >
        <View style={styles.aartiFlatListItemContainer}>
            <Text style={styles.aartiFlatListItemText}>{item.title}</Text>
        </View>
    </TouchableHighlight>
    )
}

onPressClick = (item) => {
   Actions.youTubePlayer(item);
}



export default AartiFlatListItem;