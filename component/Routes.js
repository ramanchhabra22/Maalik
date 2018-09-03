import React,{Component} from 'react'
import { Router, Scene, Actions} from 'react-native-router-flux'
import Home from './Home';
import Bhajan from './Bhajan';
import Aarti from './Aarti';
import {BackHandler} from 'react-native';
import YouTubePlayer from './YouTubePlayer';
import ViewMore from './ViewMore';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class Routes extends Component{
    constructor(props){
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    render(){
        return(
            <Router>
                <Scene key = "root">
                    <Scene key = "home" component = {Home} title = "Maalik" initial = {true} />
                    <Scene key = "bhajan" component = {Bhajan} title = "Bhajan" />
                    <Scene key = "aarti" component = {Aarti} title = "Aarti" />
                    <Scene key = "youTubePlayer" component = {YouTubePlayer}/>
                    <Scene key = "viewMore" component = {ViewMore}/>

                </Scene>
            </Router> 
        )
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    
    handleBackButtonClick() {
      console.log("Handle back button")
        if (Actions.state.index === 0) {
            return false;
          }
      
          Actions.pop();
          return true;
        }
}



// const Routes = () => (
//    <Router>
//       <Scene key = "root">
//          <Scene key = "home" component = {Home} title = "Maalik" initial = {true} />
//          <Scene key = "bhajan" component = {Bhajan} title = "Bhajan" />
//          <Scene key = "aarti" component = {Aarti} title = "Aarti" />
//          <Scene key = "youTubePlayer" component = {YouTubePlayer}/>
//       </Scene>
//    </Router>
// )
export default Routes