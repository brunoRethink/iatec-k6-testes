import http from "k6/http"
import params from "../../../data/headers.json"
import body  from "../../../data/createAccount.json"

export default class CurrentAccount {
    getAllAccounts() {
        let res = http.get(`https://api-accountsreceiving-afs-sandbox.sdasystems.org/api/v1/Currentaccounts`, { headers: params }) 
        console.log(res.json())
        return res
    }

    createAccount() {
        let res = http.post(`https://api-accountsreceiving-afs-sandbox.sdasystems.org/api/v1/Currentaccounts`, JSON.stringify(body), { headers: params }) 
        console.log(res.json())
        return res
    }
}
