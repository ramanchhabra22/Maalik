import React, { Component } from 'react'
import { View, Text, FlatList, BackHandler, Platform } from 'react-native'
import VerticalItemList from './VerticalItemList';
import axios from 'axios'
import { NavigationActions } from "react-navigation";

class ViewMore extends Component {

    constructor(props) {
        super(props);
        // {"navigation":{"state":{"params":{"item":{"title":"Shree Shyam Bhajan","id":1,"videoId":"K2HdmZj9ajM"}}
        this.state = {
            nextPageToken: '',
            items: [],
            pageUrl: '',
        }

    }

    componentDidMount() {
        const url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&relatedToVideoId=' + this.props.navigation.state.params.item.videoId + '&maxResults=15&safeSearch=strict&key=AIzaSyBP8wHXCT0nsy9r5oFjzXIXqJmhqsv50-4';
        this.setState({ pageUrl: url })
        this.fetchData(url)
        if (Platform.OS == 'android') {
            BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
        }
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.items}
                    horizontal={false}
                    renderItem={VerticalItemList}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={() => {
                        console.log("On End Reached" + this.state.nextPageToken)
                        if (this.state.nextPageToken !== '') {
                            const url = this.state.pageUrl + '&pageToken=' + this.state.nextPageToken;
                            this.fetchData(url);
                        }
                        console.log("fired"); // keeps firing
                    }}
                    onEndReachedThreshold={0.5}
                />
            </View>
        )
    }

    fetchData = (data) => {
        axios.get(data)
            .then(res => {
                this.setState({ items: this.state.items.concat(res.data.items), nextPageToken: res.data.nextPageToken });
            }).catch(err => {
                console.err
            })
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
        }
    }

    onBackPress = () => {
        console.log("On Back Pressed")
        const { dispatch, nav } = this.props;
        if (nav.index === 0) {
            return false;
        }

        dispatch(NavigationActions.back());
        return true;
    };

}

ViewMore.navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.item.title}`,
});



export default ViewMore;

