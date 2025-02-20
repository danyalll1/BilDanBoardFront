import {ofetch} from "ofetch";

class apiService {

    constructor() {

    }

    private fetchInstance = ofetch.create({baseURL: 'https://wwwnick2690.fvds.ru/api'})
    private get<T>(route: string, headers: string){
        this.fetchInstance(`${route}`, {
            headers:{
                ...headers
            }
        })
    }

}


