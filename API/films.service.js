const baseUrl = "https://api.themoviedb.org/3";

class FilmService{

    // liste des films

    static async trend(){

        let init = {
            method: "GET"
        };

        let call = await fetch(`${baseUrl}/trending/all/day?api_key=dc9ac6156df1fd6e7c12b0b83ca70243`, init);
        let response = await call.json();
        return response.results;
    }

    static async discoverMovies(){

        let init = {
            method: "GET"
        };

        let call = await fetch(`${baseUrl}/discover/movie?api_key=dc9ac6156df1fd6e7c12b0b83ca70243`, init);
        let response = await call.json();
        return response.results;
    }

    static async discoverTV(){

        let init = {
            method: "GET"
        };

        let call = await fetch(`${baseUrl}/discover/tv?api_key=dc9ac6156df1fd6e7c12b0b83ca70243`, init);
        let response = await call.json();
        return response.results;
    }

    static async find(id){

        let init = {
            method: "GET"
        };

        let call = await fetch(`${baseUrl}/movie/${id}?api_key=dc9ac6156df1fd6e7c12b0b83ca70243&language=fr-FR`, init);
        let response = await call.json();
        return response;
    }

    static async search(query){

        let init = {
            method: "GET"
        };

        let call = await fetch(`${baseUrl}/search/movie?api_key=dc9ac6156df1fd6e7c12b0b83ca70243&language=fr-FR&query=${query}&page=1&include_adult=false`, init);
        let response = await call.json();
        return response.results;
    }

    static async suggestion(query){

        let init = {
            method: "GET"
        };

        let call = await fetch(`${baseUrl}/search/keyword?api_key=dc9ac6156df1fd6e7c12b0b83ca70243&query=${query}&page=1`, init);
        let response = await call.json();
        return response.results;
    }
}

export default FilmService;