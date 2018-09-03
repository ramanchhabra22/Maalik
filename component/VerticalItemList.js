import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Actions } from 'react-native-router-flux';
import React from 'react';
import styles from './styles';
import { Card } from 'react-native-elements';

const VerticalItemList = ({ item }) => {
    return (
        <TouchableOpacity
            onPress={() => this.verticalItemClick(item)}
        >
            <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5, marginLeft: 10 }}>
                <Image
                    style={{ height: 100, width: 100, marginRight: 10 }}
                    source={{ uri: item.snippet.thumbnails.medium.url }}
                />
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row',flexWrap:'wrap'}}>
                        <Text style={{ marginBottom: 2}}>
                            {item.snippet.title}
                        </Text>
                    </View>

                    <Text style={{ marginBottom: 2 }}>
                        {item.snippet.channelTitle}
                    </Text>
                </View>

            </View>

        </TouchableOpacity>
    )
}

verticalItemClick = (item) => {
    Actions.youTubePlayer(item);
}



export default VerticalItemList;

// <Card
//     title={null}
//     image={{ uri: item.snippet.thumbnails.medium.url }}
//     containerStyle={styles.horizontalItemContainer}
// >
//     <Text style={styles.homeFlatListItemText}>{item.title}</Text>
// </Card>