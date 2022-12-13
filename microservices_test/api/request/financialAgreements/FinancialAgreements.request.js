import http from "k6/http"
import Utils from "../../../utils/utils.js"

export default class FinancialAgreements {
    geFinancialAgreements(){
        let response  = http.get(`${Utils.baseURL()}/api/v1/FinancialAgreements`, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6InJldGhpbmsiLCJGdWxsTmFtZSI6InJldGhpbmsiLCJFbWFpbCI6InJldGhpbmtAeW9wbWFpbC5jb20iLCJMYW5ndWFnZSI6InB0LUJSIiwiRW50aXR5SWQiOlsiMDFlZTI0NTMtMWIyOC00MWViLWI4NTktMTgyNzU4MWM2MGFkIiwiMSJdLCJMZWdhbEVudGl0eUlkIjoiOGQ2Mjg3YjMtZDBhMC00NDY0LThiYjUtODcxOGVhMDk1MmMxIiwiU3lzdGVtSWQiOiI1NmE2MzQ1Ni0zNmMwLTQyYjYtOGFhZS0yMTQwMDFmODY3YzciLCJTeXN0ZW1OYW1lIjoiN2VkdSIsIkVudGl0eURlc2NyaXB0aW9uIjoiQXNzb2NpYcOnw6NvIFBhdWxpc3RhIFN1ZGVzdGUtRWR1Y2HDp8OjbyIsImV4cCI6MTY3NDI0NjU3OSwiaXNzIjoiYWNjb3VudHMtcmVjZWl2aW5nLXlpMUBhZEF5IiwiYXVkIjoiYWNjb3VudHMtcmVjZWl2aW5nLU5AVmNPQW5NIn0.97XfqN32FEJxlt_CCr1dExSB7hK4RQcUPoi5TrcMTkc",
                "Content-Type": "application/json-patch+json", 
                "Accept": "application/json"
            }
        })
        console.log(response.json())
        
        return response
    }
}
