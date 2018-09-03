import { FlatList, View, Text, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import styles from './styles';
import HorizontalItemList from './HorizontalItemList';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { createStackNavigator } from 'react-navigation';

class HorizontalList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
        }

        this.fetchData = this.fetchData.bind(this)
    }

    componentDidMount() {
        const url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&relatedToVideoId=' + this.props.data.videoId + '&maxResults=8&safeSearch=strict&key=AIzaSyBP8wHXCT0nsy9r5oFjzXIXqJmhqsv50-4';
        this.fetchData(url)
    }

    render() {
        return (
            <View style={{ marginBottom: 10 }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end', marginTop: 10, marginLeft: 10, marginRight: 10, marginBottom: 5
                }}>
                    <Text>{this.props.data.title}</Text>
                    <TouchableOpacity
                        onPress={() => this._onViewMoreClick(this.props.data)}>
                        <Text style={styles.viewAll}>View All</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={this.state.items}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={HorizontalItemList}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>

        )
    }

    fetchData = (data) => {

        axios.get(data)
            .then(res => {
                this.setState({ items: res.data.items });
            }).catch(err => {
                console.err
            })
    }

    _onViewMoreClick = (item) => {
        this.props.navigation.navigate('ViewMore',{item})
    }
}




export default HorizontalList;