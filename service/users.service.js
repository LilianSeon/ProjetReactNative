const baseUrl = "https://39b2e95abed7.ngrok.io";

class UserService{

    static async list(){
        let init = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        }
        let call = await fetch(`${baseUrl}/users`, init);
        return call;

    }

    static async detail(id){
        let init = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
        let call = await fetch(`${baseUrl}/users/${id}`, init);
        return call;
    }

    static async update(id, bodyFilm){
        let init = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bodyFilm)
        }
        let call = await fetch(`${baseUrl}/film/${id}`, init);
        return call;
    }

    static async create(body){
        let init = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
        let call = await fetch(`${baseUrl}/users`, init);
        return call;
    }

    static async delete(id){
        let init = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        }
        let call = await fetch(`${baseUrl}/users/${id}`, init);
        return call;
    }


}

export default UserService