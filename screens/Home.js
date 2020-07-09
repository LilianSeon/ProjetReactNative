import React, {Component} from 'react'
import { StyleSheet, FlatList, ScrollView, Text  } from 'react-native'
import FilmItem from './FilmItem'
import FilmService from '../API/films.service';
import { connect } from 'react-redux'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            trend: [],
            discoverMovies: [],
            discoverTV: [],
        }
    }

    async componentDidMount(){
        
        let trend = await FilmService.trend();
        let discoverMovies = await FilmService.discoverMovies();
        let discoverTV = await FilmService.discoverTV();

        this.setState({
            trend,
            discoverMovies,
            discoverTV
        })
    }

    render() {
        
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Tendence d'aujourd'hui</Text>
            <FlatList
                horizontal={true}
                style={styles.list}
                extraData={this.props.favoritesFilm}
                data={this.state.trend}
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

            <Text style={styles.title}>Découvrir des films</Text>
            <FlatList
                horizontal={true}
                style={styles.list}
                extraData={this.props.favoritesFilm}
                data={this.state.discoverMovies}
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

            <Text style={styles.title}>Découvrir des Programmes TV</Text>
            <FlatList
                horizontal={true}
                style={styles.list, {marginBottom: 70}}
                extraData={this.props.favoritesFilm}
                data={this.state.discoverTV}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                <FilmItem
                    film={item}
                    displayDetailForFilm={false}
                    isFilmFavorite={(this.props.favoritesFilm.findIndex(film => film.id === item.id) !== -1) ? true : false}
                    navigation={this.props.navigation}
                />
                )}
            />
        </ScrollView>
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

export default connect(mapStateToProps)(Home);