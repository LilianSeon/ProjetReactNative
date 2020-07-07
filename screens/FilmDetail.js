import React, {Component} from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, Animated, Dimensions } from 'react-native'
import FilmService from '../API/films.service';

class FilmDetail extends Component {

    constructor(props){
      super(props)
      this.state = {
        film: []
      }
    }

    async find(id){

        let init = {
            method: "GET"
        };

        let call = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=dc9ac6156df1fd6e7c12b0b83ca70243&language=fr-FR`, init);
        let response = await call.json();
        return response;
    }

    async componentDidMount(){

        
        let film = await this.find(this.props.navigation.state.params.idFilm);
        this.setState({
            film
        })
        console.log(this.state.film.production_companies);
    }

    render() {

        let { poster_path, original_title, genres, production_companies} = this.state.film
        

        return(
            <View>
                <Image
                    style={styles.image}
                    source={{uri: "https://image.tmdb.org/t/p/w500"+poster_path}}
                />
                <Text style={styles.title}>{original_title}</Text>
                <View style={styles.genres}>
                {
                    (typeof genres !== 'undefined' && genres.length > 0) ? genres.map((item, key) => (<View style={styles.genresText} key={key}><Text style={styles.text}>{item.name}</Text></View>)) : false

                }
                </View>
                <View style={styles.production}>
                <View style={styles.production_container}>
                {
                    (typeof production_companies !== 'undefined' && production_companies.length > 0) ? production_companies.map((item, key) => (<Image key={key} style={styles.production_img} source={{uri: "https://image.tmdb.org/t/p/w500"+item.logo_path}}/>)) : <Text>Production inconnu</Text>

                }
                </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    main_container: {
      width: 200,
      marginBottom: 20,
      marginLeft: 10,
      marginRight: 10,
      backgroundColor: "#FFF",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    title:{
        fontSize: 25,
        fontWeight: "600",
        marginTop: 10,
        marginLeft: 5
    },
    image: {
      width: "100%",
      height: 200,
    },
    genres:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        alignSelf:'center',
        marginTop: 10,
    },
    genresText: {
        backgroundColor: 'black',
        paddingHorizontal: 10,
        marginHorizontal: 5,
        borderRadius: 10
    },
    text:{
        fontWeight: 'bold',
        color: 'white',
        paddingHorizontal: 10,
        fontSize: 15,
    },
    production:{
        flexDirection: 'row',
        marginTop: 15
    },
    production_container:{
        height: 50,
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    production_img:{
        width: 110,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 5,
        resizeMode: 'stretch',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})

export default FilmDetail;