import React, { Component } from 'react';
import { BackHandler, Platform, View, ToolbarAndroid, ScrollView, Dimensions, FlatList } from 'react-native';
import styles from './styles';
import Toolbar from './Toolbar';
import rootRef from './FirebaseConfig';
import HomeFlatList from './HomeFlatList';
import HorizontalList from './HorizontalList';
import CustomCarousel from './carousal/CustomCarousel';

const screenWidth = Dimensions.get("window").width;

class Home extends Component {


  constructor() {
    super();
    this.state = {
      dataSource: [],
      carouselData: []
    }
  }


  componentDidMount() {
    const itemsRef = rootRef.child('items');
    this.listenForItems(itemsRef);

    const carouselRef = rootRef.child('carousel');
    this.carouselItems(carouselRef);

  }


  render() {
    return (
      <ScrollView>
        <View>
          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <CustomCarousel dataSource={this.state.carouselData} />
          </View>
          <FlatList
            data={this.state.dataSource}
            horizontal={false}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
          />

        </View>
      </ScrollView>
    );
  }

  listenForItems(itemsRef) {
    var items = [];
    itemsRef.on('value', (snap) => {
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          id: child.val().id,
          videoId: child.val().videoId,
        });
      });

      this.setState({
        dataSource: items
      });
    });
  }


  carouselItems(itemsRef) {
    var items = [];
    itemsRef.on('value', (snap) => {
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          id: child.val().id,
          videoId: child.val().videoId,
          imageUrl: child.val().imageUrl,
        });
      });

      this.setState({
        carouselData: items
      });
    });
  }

  onAndroidBackPress = () => {

  }

  componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onAndroidBackPress);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress');
    }
  }

  _renderItem = ({ item }) => (
    <HorizontalList
      data={item}
      navigation={this.props.navigation}
    />
  );

 
}

Home.navigationOptions = {
  title: 'Kridha',
};

export default Home

// <SwipeableCard viewportWidth={screenWidth} reveal={40} style={{margin: 5}} dataSource={titles} onDismiss={(selectedItem) => {  console.log(selectedItem)} }/>



