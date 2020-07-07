import React, {Component} from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, FlatList, ScrollView, ImageBackground, Button} from 'react-native'
import cinema from '../assets/cinema.jpg';
import logo from '../assets/logo.png';
import UserService from '../service/users.service'

class Inscription extends Component {

    constructor(props){
      super(props)
      this.state = {
          user:{
            email: "",
            password: ""
          }
      }
    }

    _handleChangeEmail(e){
        this.setState({
            user:{
                email: e.nativeEvent.text,
                password: this.state.user.password
            }
        });
    }
    
    _handleChangePassword(e){
        this.setState({
            user:{
                email: this.state.user.email,
                password: e.nativeEvent.text
            }
        });
    }

    async _inscription(){ // Envoie de la requête pour ajouter un utilisateur en base de donnée
        let response = await UserService.create(this.state.user); // Ajoute un user
        console.log(response);
        if(response.ok){
            this.props.navigation.navigate('Login')
        }else{
            console.log(response);
        }
    }

    render(){

        return(
            <ImageBackground source={cinema} style={styles.image}>
                <Image source={logo} style={styles.logo}/>
                <View style={styles.container}>
                    <Text style={styles.login}>Inscription</Text>
                    <TextInput id={"email"} style={styles.textInput} placeholder='Email...' onChange={(e) => this._handleChangeEmail(e)}></TextInput>
                    <TextInput id={"password"} style={styles.textInput} placeholder='Mot de passe...' secureTextEntry={true} onChange={(e) => this._handleChangePassword(e)}></TextInput>
                    <View style={styles.button_container}>
                        <TouchableOpacity style={{marginRight: 20, marginTop: 7}} onPress={() => this.props.navigation.navigate('Login')}>
                            <Text>Retour</Text>
                        </TouchableOpacity>
                        <View>
                            <Button style={styles.connexion} title="S'inscire" onPress={() => this._inscription()}/>
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
        marginBottom: 15,
      },
      container:{
          width: 300,
          height: 340,
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
          marginTop: 50,
          marginBottom: 20
      },
      connexion:{
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }
})

export default Inscription;