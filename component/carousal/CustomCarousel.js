import Carousel from 'react-native-snap-carousel';
import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { Card } from 'react-native-elements'
const { height, width } = Dimensions.get('window');
const itemWidth = (width - 100);
const sliderWidth = width;


// export default class CustomCarousel extends Component {

//     constructor(props){
//         super(props)
//         console.log("Carousal props" + JSON.stringify(props))
//     }

//     _renderItem({item, index}) {
//         return (
//             <View>
//                 <Text>Raman</Text>
//             </View>
//         );
//     }

//     render() {
//         return(
//             <Carousel
//               ref={(c) => { this._carousel = c; }}
//               data={this.props.data}
//               renderItem={this._renderItem}
//               sliderWidth={200}
//               itemWidth={200}
//             />
//         );
//     }
// }

const CustomCarousel = (data) => {
    return (
        <Carousel
            ref={(c) => { this._carousel = c; }}
            data={data.dataSource}
            layout={'default'}
            renderItem={this._renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
            firstItem={1}
        />
    );
}

_renderItem = ({ item, index }) => {
    return (
        <View>
            <Card
                onPress={() => this.onCarouselItemClick(item)}

                title={null}
                image={{ uri: item.imageUrl }}
                containerStyle={styles.carouselItemContainer}
            >
            </Card>
        </View>
    );
}

onCarouselItemClick = (item) => {
    Actions.youTubePlayer(item);
}

export default CustomCarousel;


