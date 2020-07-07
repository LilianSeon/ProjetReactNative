import React, {Component} from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, Animated, Dimensions } from 'react-native'
import { getImageFromApi } from '../API/films.service'
import NoteBox from '../components/NoteBox'
import FilmDetail from './FilmDetail'

class FilmItem extends Component {

  constructor(props){
    super(props)
    this.state = {
      positionLeft: new Animated.Value(Dimensions.get('window').width),
      film: []
    }
  }

  componentDidMount(){
    Animated.spring(
      this.state.positionLeft,
      {
        toValue: 0
      }
    ).start()
  }

  _displayDetailForFilm(idFilm){
    console.log("Display film " + idFilm)
    // On a récupéré les informations de la navigation, on peut afficher le détail du film
    //this.props.navigation.navigate('FilmDetail', {idFilm: idFilm})
    console.log(this.props.navigation.navigate('FilmDetail', {idFilm: idFilm}))
  }

  _displayFavoriteImage() {
    if (this.props.isFilmFavorite) {
      // Si la props isFilmFavorite vaut true, on affiche le 🖤
      return (
        <Image
          style={styles.favorite_image}
          source={require('../assets/ic_favorite.png')}
        />
      )
    }
  }

  render() {
    const { film, displayDetailForFilm } = this.state
    const { title, poster_path, id, vote_average, release_date, name, first_air_date } = this.props.film; 

    return (
      <Animated.View style={{left: this.state.positionLeft}}>
      <TouchableOpacity
        style={styles.main_container}
        onPress={() => this._displayDetailForFilm(id)}>
        <Image
          style={styles.image}
          source={{uri: "https://image.tmdb.org/t/p/w500"+poster_path}}
        />
        <View style={styles.body}>
            <NoteBox note={vote_average}/>
            <Text style={styles.title}>{(title) ? title : name}</Text>
            <Text style={styles.subtitle}>{(release_date) ? release_date : first_air_date}</Text>
        </View>
      </TouchableOpacity>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    width: 200,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#EEEEEE",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  image: {
    width: "100%",
    height: 180,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  body: {
      flex: 1,
      height: 150,
      backgroundColor: "#FFF",
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
      paddingHorizontal: 10,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 10
      },
      shadowOpacity: 0.1,
      elevation: 5,
  },
  subtitle:{
      fontSize: 16,
      color: '#B0B0B0'
  },
  title:{
      fontSize: 18,
      fontWeight: "600",
      marginTop: 30
  }
})

export default FilmItem;