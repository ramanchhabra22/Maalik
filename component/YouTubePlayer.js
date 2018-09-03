import YouTube from 'react-native-youtube'
import React,{Component} from 'react'

export default class YouTubePlayer extends Component{

    constructor(props){
        super(props);
        console.log("YouTube Player" + this.props.videoId);
    }
    render(){
        return(
            <YouTube
                videoId={this.props.videoId}  // The YouTube video ID
                play={true}             // control playback of video with true/false
                fullscreen={true}       // control whether the video should play in fullscreen or inline
                loop={true}             // control whether the video should loop when ended
                apiKey="AIzaSyBP8wHXCT0nsy9r5oFjzXIXqJmhqsv50-4"
 
                onReady={e => this.setState({ isReady: true })}
                onChangeState={e => this.setState({ status: e.state })}
                onChangeQuality={e => this.setState({ quality: e.quality })}
                onError={e => this.setState({ error: e.error })}
 
                style={{ alignSelf: 'stretch', height: 300 }}
/>
        )
    }
}
