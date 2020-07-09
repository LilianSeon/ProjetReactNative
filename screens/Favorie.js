import React, {Component} from 'react'
import { StyleSheet, View, Text, FlatList} from 'react-native'
import FilmItem from './FilmItem'
import { connect } from 'react-redux'


class Favorie extends Component {

    constructor(props){
      super(props)
      this.state = {
        films: [],
      }
    }

    componentDidMount(){
        console.log(this.props.favoritesFilm);
    }

    _displayFavorie(){
        if(this.props.favoritesFilm.length > 0){
            return(
                <FlatList
                    horizontal={true}
                    style={styles.list}
                    extraData={this.props.favoritesFilm}
                    data={this.props.favoritesFilm}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <FilmItem
                            film={item}
                            isFilmFavorite={(this.props.favoritesFilm.findIndex(film => film.id === item.id) !== -1) ? true : false}
                            displayDetailForFilm={false}
                            navigation={this.props.navigation}
                        />
                    )}
                />
            )
        }else{
            return(
                <Text style={{marginLeft: 10}}>La liste de vos films favories est vide.</Text>
            )
        }
    }

    render(){
        
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Vos films favories</Text>
                {this._displayFavorie()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        paddingTop: 70,
    },
    title:{
        fontSize: 22,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 10,
    },
    list: {
        flex: 1,
        marginBottom: 20,
    }
})

const mapStateToProps = state => {
    return {
      favoritesFilm: state.favoritesFilm
    }
}

export default connect(mapStateToProps)(Favorie);