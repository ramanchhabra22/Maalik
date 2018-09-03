import { View, Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux';
import React from 'react';
import { connect } from 'react-redux';
import styles from './styles';
import { Card } from 'react-native-elements';

const HorizontalItemList = ({ item, separators }) => {
    return (
        <TouchableOpacity
            onPress={() => this.horizontalItemClick(item)}
        >
            <Card
                title={null}
                image={{ uri: item.snippet.thumbnails.medium.url }}
                containerStyle={styles.horizontalItemContainer}
            >
                <Text style={styles.homeFlatListItemText}>{item.title}</Text>
            </Card>
        </TouchableOpacity>
    )
}

export default HorizontalItemList;

// horizontalItemClick = (item) => {
//     Actions.youTubePlayer(item);
// }

// const mapDispatchToProps = dispatch => ({
//     horizontalItemClick: (item) => dispatch({ type: 'YouTubePlayer' }),
// });

// export default connect(null, mapDispatchToProps)(HorizontalItemList);


