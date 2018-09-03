import React,{Component} from 'react'
import {View,Text,BackHandler,Platform} from 'react-native'
import rootRef from './FirebaseConfig';
import AartiFlatList from './AartiFlatList';
import BaseComponent from './BaseComponent';
import { Actions } from 'react-native-router-flux';

class Aarti extends Component{
    
  constructor(props){
        super(props);
        // this.handleBackButtonClick = this._handleBackButtonClick.bind(this);
        this.state = {
            dataSource:[]
          }
      }
    
    componentDidMount(){
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
          const aartiRef = rootRef.child('aarti')
          this.listenForItems(aartiRef);
      }
    
    render() {
        return (
          <View>
          <AartiFlatList dataSource = {this.state.dataSource}/>
        </View>
        );
      }
    
    listenForItems(aartiRef) {
        var items = [];
        aartiRef.on('value', (snap) => {
          snap.forEach((child) => {
            items.push({
              title: child.val().title,
              id: child.val().id,
              videoId:child.val().videoId,
            });
            console.log("Item Name : " + child.val().title);
          });
    
          this.setState({
            dataSource: items
          });
        console.log("Items " + JSON.stringify(this.state.dataSource))
        });
      }


    // componentWillMount() {
    //   if(Platform.OS == 'android'){
    //     console.log("Mount handle back button");
    //     BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    //   }
    // }
    
    componentWillUnmount() {
      if(Platform.OS == 'android'){
        console.log("Unmount handle back button");
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
      }
    }
    
    handleBackButtonClick = () => {
      console.log("Handle back button")
      if (Actions.state.index === 0) {
          return false;
        }
    
        Actions.pop();
        return true;
    }
    
}

export default Aarti;