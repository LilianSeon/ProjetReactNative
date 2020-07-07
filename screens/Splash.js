import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, Animated } from 'react-native';
import logo from './../assets/logo.png'
import Home from './Home'

class Splash extends Component{

  constructor(props){
    super(props);
    this.state = {
      fadeIn: new Animated.Value(0),
    };
  }

  fadeInAnimation = () => {
    Animated.timing(this.state.fadeIn, {
      toValue: 1,
      duration: 2000
    }).start(() => this.props.navigation.navigate('Login'));
  };

  componentDidMount(){
    this.fadeInAnimation();
  }

  render(){

    let {fadeIn} = this.state;

    return(
      <View style={styles.container}>

        <Animated.Image
          style={{opacity: fadeIn}}
          source={logo}
        />
        

      </View>
    )
  }

} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  }
});

export default Splash;
