import React, {Component} from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, FlatList, ScrollView, ImageBackground, Button} from 'react-native'
import cinema from '../assets/cinema.jpg';
import logo from '../assets/logo.png';
import FilmService from '../API/films.service';

class Login extends Component {

    constructor(props){
      super(props)
      this.state = {

      }
    }

    _connexion(){
        this.props.navigation.navigate('Home')
    }

    render(){

        return(
            <ImageBackground source={cinema} style={styles.image}>
                <Image source={logo} style={styles.logo}/>
                <View style={styles.container}>
                    <Text style={styles.login}>Login</Text>
                    <TextInput style={styles.textInput} placeholder='Email...' ></TextInput>
                    <TextInput style={styles.textInput} placeholder='Mot de passe...' secureTextEntry={true}></TextInput>
                    <View style={styles.button_container}>
                        <TouchableOpacity style={{marginRight: 20, marginTop: 7}} onPress={() => this.props.navigation.navigate('Inscription')}>
                            <Text>Inscription</Text>
                        </TouchableOpacity>
                        <View>
                            <Button style={styles.connexion} title="Connexion" onPress={() => this._connexion()}/>
                        </View>
                    </View>
                </View>
                
            </ImageBackground>
        )
    }

}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        alignItems:'center',
      },
      logo:{
        width: 100,
        height: 100,
        marginTop: 50,
        marginBottom: 15
      },
      container:{
          width: 300,
          height: 300,
          backgroundColor: '#FFF',
          alignItems:'center',
          borderRadius: 15,

      },
      login:{
          fontSize: 25,
          marginTop: 15,
          marginBottom: 10
      },
      textInput:{
          borderBottomWidth: 1,
          borderBottomColor: 'black',
          width: 250,
          marginTop: 20
      },
      button_container:{
          marginTop: 20,
          flexDirection: 'row',
          height: 50,
          marginTop: 50
      },
      connexion:{
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }
})

export default Login;