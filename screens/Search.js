import React, {Component} from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native'
import search from '../assets/search.png';
import close from '../assets/close.png';
import FilmItem from './FilmItem'
import FilmService from '../API/films.service';
import { connect } from 'react-redux'

class Search extends Component {

    constructor(props){
      super(props)
      this.state = {
        films: [],
        suggestion: [],
        suggestionClicked: ''
      }
    }

    async _searchEvent(text){
        this.setState({suggestionClicked: text});
        if(text.length > 2){
            let films = await FilmService.search(text);
            this.setState({films});
            let suggestion = await FilmService.suggestion(text);
            this.setState({suggestion});
        }else{
            this.setState({films: []});
            let suggestion = await FilmService.suggestion(text);
            this.setState({suggestion});
        }
    }

    async _changeValue(text){

        this.setState({suggestionClicked: text});
        let films = await FilmService.search(text);
        this.setState({films});
        let suggestion = await FilmService.suggestion(text);
        this.setState({suggestion});

    }

    render(){

        let {films, suggestion, suggestionClicked} = this.state;
        let {navigation} = this.props;

        return(
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Image source={search} style={styles.headerImage}/>
                    <TextInput style={styles.inputSearch}
                    placeholder={"Rechercher un event ..."}
                    onChangeText={(text) => this._searchEvent(text)}
                    value={(suggestionClicked !== '') ? suggestionClicked : null}></TextInput>
                    <TouchableOpacity onPress={() => this._changeValue('')}>
                        <Image source={close} style={styles.close}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.title}>Suggestions : </Text>
                <View style={styles.suggestion_container}>
                    <FlatList
                        horizontal={true}
                        style={styles.list}
                        data={suggestion}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item, key}) => 
                        <View style={styles.suggestion} key={key}><TouchableOpacity onPress={() => this._changeValue(item.name)}><Text ref={item.name} style={styles.suggestionText}>{item.name}</Text></TouchableOpacity></View>
                        }
                    />
                </View>
            
                <Text style={styles.title}>Résultats pour les films : </Text>
                <FlatList
                    horizontal={true}
                    style={styles.list}
                    extraData={this.props.favoritesFilm}
                    data={films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => 
                    <FilmItem
                        film={item}
                        isFilmFavorite={(this.props.favoritesFilm.findIndex(film => film.id === item.id) !== -1) ? true : false}
                        displayDetailForFilm={false}
                        navigation={navigation}
                    />
                    }
                />
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#EEEEEE",
    },
    header:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 70,
        marginHorizontal: 10,
        marginBottom: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    headerImage:{
        marginRight: 20,
        width: 25,
        height: 25,

    },
    close:{
        marginLeft: 25,
        width: 25,
        height: 25,
    },
    inputSearch:{
        fontSize: 22,
        marginBottom: 5,
    },
    title:{
        fontSize: 22,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 10,
        marginTop: 10
    },
    list: {
        flex: 1,
        marginBottom: 20,
    },
    suggestion_container:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        alignSelf:'center',
        marginTop: 10,
    },
    suggestion: {
        backgroundColor: 'black',
        paddingHorizontal: 10,
        marginHorizontal: 5,
        borderRadius: 10
    },
    suggestionText:{
        fontWeight: 'bold',
        color: 'white',
        paddingHorizontal: 10,
        fontSize: 15,
    },
    noResult:{
        marginLeft: 10,
        fontSize: 15
    }

});

const mapStateToProps = state => {
    return {
      favoritesFilm: state.favoritesFilm
    }
}

export default connect(mapStateToProps)(Search);