import http from "k6/http"
import params from "../../../data/headers.json"

export default class CanTransferBatch {
    transferBatch() {
        let res = http.get(`https://api-accountsreceiving-afs-sandbox.sdasystems.org/api/v1/CashierManagement/CanTransferBatch`, { headers: params }) 
        console.log(res.json())
        return res
    }
}
