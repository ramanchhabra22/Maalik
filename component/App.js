import React,{Component} from 'react';
import SplashScreen from './SplashScreen';
import Error from "./Error";
import Home from "./Home";
import Routes from './Routes';

export default class App extends Component{

    constructor(){
        super()
        this.state = {
            view   : <SplashScreen/>
        };

    setTimeout(() => {
        if(true){
            this.setState({
                view : <Routes/>
            })
        }else{
            this.setState({
                view : <Error/>
            })
        }
        
    }, 2000);
}

    render(){
        return(
            this.state.view
        )
    }
}

