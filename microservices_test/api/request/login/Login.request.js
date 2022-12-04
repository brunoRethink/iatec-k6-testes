import http from "k6/http"
import Utils from "../../utils/utils"

export default class Login {
    #token
    // baseURL = Utils.baseURL()
    // URN = ``
    // URI = this.baseURL + this.URN


    // constructor(URN) {
    //     this.baseURL = baseURL
    //     this.URN = URN
    //     this.URI = this.URI
    // }

    access() {
        let response = http.post(`${Utils.baseURL()}/api/v2/Login`, JSON.stringify(
            {
                "entityId": "uuid", 
                "countryId": "integer", 
                "entityDescription": "string", 
                "legalEntityId": "uuid", 
                "systemId": "uuid", 
                "systemName": "string"}
        ), {
            headers: {
                "Content-Type": "application/json-patch+json",
                "Accept": "application/json"
            }
        })
        this.#token = response.json('accessToken')
    }

    getToken() {
        return this.#token
    }
}
