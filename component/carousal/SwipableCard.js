
import React, { Component } from 'react';
import { Text, Animated, PanResponder, Dimensions, View } from 'react-native';
import {LayoutAnimation, UIManager} from 'react-native';


export class SwipeableCard extends Component {

    constructor(props){
        super(props);
        console.log("Data Source length" + this.props.dataSource.length);
        console.log("Data in swipable card" + JSON.stringify(this.props.dataSource))
    }

    state = {selectedItem : 0}
    translateX = new Animated.Value(0);
    transitX = new Animated.Value(0);
    scaleXY = new Animated.Value(1);
    
    _panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      //onPanResponderMove: Animated.event([null, { dx: this.transitX }]),
      onPanResponderMove: (e, {vx, dx}) => this.transitX.setValue(dx) ,
      onPanResponderRelease: (e, {vx, dx}) => {
  
        let numMenu = this.props.dataSource.length - 1;
        let moveStep = this.props.viewportWidth - 2 * this.props.reveal - 2 * this.props.style.margin;
  
        if (Math.abs(vx) >= 0.5 || Math.abs(dx) >= 0.5 * this.props.viewportWidth) {
          
          let selectedItem = dx < 0 ?  this.state.selectedItem + 1 : this.state.selectedItem - 1;
  
          selectedItem = selectedItem > numMenu ?  numMenu : selectedItem;
          selectedItem = selectedItem < 0 ? 0 : selectedItem;
  
          let toValue = - selectedItem * moveStep;
          Animated.parallel([
          Animated.timing(this.scaleXY, {toValue:1.2,duration: 200}),
          Animated.timing(this.transitX, {toValue:0,duration: 200}),
          Animated.timing(this.translateX, {
            toValue:toValue,
            duration: 200
          })]).start(()=> {console.log(dx);this.setState({selectedItem : selectedItem});this.props.onDismiss(selectedItem);});
        } 
        
        else {
          
          let toValue = - this.state.selectedItem * moveStep;
          console.log(toValue);
          Animated.parallel([
            Animated.timing(this.scaleXY, {toValue:1.2,duration: 300}),
            Animated.spring(this.transitX, {toValue: 0,bounciness: 10})
          ]).start();
  
          
          Animated.spring(this.translateX, {
            toValue: toValue,
            bounciness: 10
          }).start();
        }
        
      }
    });
  
    render() {
        console.log("Swipable render function")
        console.log("length " + this.props.dataSource.length)
        console.log("Data " + JSON.stringify(this.props.dataSource))
      
      let margin = this.props.style && this.props.style.margin ? this.props.style.margin : 20;
      let reveal = this.props.reveal;
      
      return (
        <View>
          <Animated.View
            style={{flexDirection: 'row', transform: [{translateX: Animated.add(this.translateX, this.transitX)}]}} {...this._panResponder.panHandlers}>
            {this.props.dataSource.map((title, i) => 
            <View style={{ height: 75, width: this.props.viewportWidth - ((4 * margin) + (2 * reveal )), backgroundColor: 'white', borderRadius: 10, padding: 5, marginLeft: margin + (i== 0 ? margin + reveal  : 0) ,marginRight: margin,transform: [ {scaleX: i==this.state.selectedItem ? 1 : .91 },{scaleY: i==this.state.selectedItem ? 1 : .91 }] }} key={i}>
                <Text>
                  Raman
                </Text>
              
            </View>
            )}
          </Animated.View>
        </View>
  
      );
    }
  }