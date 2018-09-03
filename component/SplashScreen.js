import React,{Component} from 'react'
import {View,Text} from 'react-native'
import styles from './styles';

export default class SplashScreen extends Component{
    render(){
        return(
            <View style = {styles.splashScreenContainer}>
            <Text>
                Maalik
            </Text>
            </View>
        )
    }
}