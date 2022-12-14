import http from "k6/http"
import body from "../../../data/bankReturnFile.json"
import params from "../../../data/headers.json"

export default class DeleteFileProcessing {
    fileProcessing() {
        let res = http.post(`https://api-accountsreceiving-afs-sandbox.sdasystems.org/api/v1/BankReturnFile/DeleteFileProcessing`, JSON.stringify(body), { headers: params }) 
        console.log(res.json())
        return res
    }
}
