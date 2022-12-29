import http from "k6/http"
import { check } from 'k6'
import billet from "../../../data/billet.json"

export default class GenerateBillet {
    getBillet(){
        const jar = http.cookieJar();

        jar.set('https://7edu-br-financial-sandbox.educadventista.org/', '.AspNet.Cookies', 'PYR3vIM8iXHediDqLgeixALoOIXoRpVMJ_d6UpC_2pnMR0MQtmjMeN7Mkc7l0PgEFeaQxxYd1Yd_9YPRGEeoOR6zebVclITYZwP5zIG535dGvZJIheOnXJ6VHPDjISlUZJkvL3mGr51WxuuDWb5B9XuXajBo7nhrgxNpmJAtcejsHMDdjLx0HbLGT5w9ERyb6f4SaSeS2uHw3I1EugqSXeAKlECnkzrXcUgX7TpTFULHfmY2JNr3kXx4yBPHJoKRYDye_JipPrLK2Atp1AxKCCMbJyTMKCrOiFG8fWutFmWjyx_9CQwq9292Wyv_JHhJFrFYw-qQM2fpqrUTWzZzxcdABLCje-qPYg2yP7PbVi30DhdONOdRUwzlN3w4APcF7FH8NbCPM68oGHRtXfXBqRSob7ucZP-jqa9UA-jjmuWbiDcCzyLjZmOoUuCCXZaexgEKnsEbz00TK5S1nkoLS9-gqXDUmjameJbn1NcPMR89l5Wb0v3HFuOHVQqWTFPexVmyNC_qqntONUXBhDkg-9O9iL1u32NB1RdLG2Jz0GRxhyrjPnes814WZ4AmjYzuYiHc7-ned9aFO7mjpkKK2TSBszvU2Z3ltaarWtp5UA6tE5JTjMBxECSjYn-kRRYx66Ew8z67-eP8Re72hDyNizwiLC7edS7Jr62943-Yfc2yHedNq1gQlmxufIltzI9m5YYhqC9O9Z_NhLbamE-40GWWqL8ccPNdZ4oG_Qi0mWrNyNSyBwenmpshLU-lOc_dCgpGWfc3cWb8qpmtcobWSpcUE-Xpfi5CW2VZxrcRipmLYFVLMeCh_9X8uTe9cezGnecYHd1tIEI52EAytor9vQiFHhRve3Kdw8_YfqfBbxAciWaTuC-M82isojivIACU6QJ1UBcR8FKT9fWnmB7G4Gx6aawHOTbMBzP0txlDrekSyq1jj8zdXpBcwocSHQ9QJYVNNfgnr3UiWrWvDFW_K_ZXdN2hVk5BOPpLb0xofCsN0dFZ4CqpfTbD4ZvE4eegy2dgbWrhsDOep3ZGIN1wR1eFU9hbtmxQCj_gor7hILxgHo5pt9oqxuO0_vSS1g_zSLgo4ur9T7CQ_EzcKrAjb1XaTyklNVHkpnpEns96Xi1KREyDaVCeAD6k4mvUDCm9lU92bzPszURJI3aTquBG9mSQOg9mabHg2Ghbfm5AjyZRsmEe-EquYU9jg3Sniiy9UClZWplVyjXEwmpBT2I4FdbZ1pE63xsYSO7hXC6SIzIstl5kobyoRG_6QSsJ5egch5xQ1AzFO_5rA65tEU9YgktBYUlsQ4r8Cr9U1M5B5IguXozShJmhuWn5jWf8Ree6wGKCALKQrySjrEH2mC_mL37-p71kn4LlmTuvP87oiTWxuDz-1LA_o66wL9xkvKZ0WaBR8MZwacIxDyGBeABfhIKein5rXw2E5ghA91LNsLbAI_5QtqM2sfkqu-xmJ5xo8eGe4DXQAZdAYxNOLTh20i9EQEm9X8V3ObAt9KLZRtjWU_cT6Mne3pAjj4ulgxhE-RDP-LqktVOE_WuxVglUwdWehhJ5M5l71NU3IA6mW31I_kUiUqHEWN5ZYNlZSJfUN3rR8DQIjW3SCXQaP3fa2QnBIG1VNiaSk8M-0O0kktrERsjPvivpMi2wZrJD3NI2GupbeiGmhcJ5A4AUURax63PPQ8CIEzqOLRJ4UZDETuqf11DO08-UFM2RQbOMBtBykmvYNi7nUsObskcJ29jpCZ2ubD6jA-rnmQAztcplrmDFVQke2VwtmXm37Wvu10wVnyDvly6plbR_aTSeiNwm4dztesi1lVBt4lt6yMySJmhjCcPZqo9Ay2ilcOyFpDIfQPt1gP3v01pCpWugNj0xvu8aKUhQKRRo7KXXEdUevLxUjxiX8DiS1c26pq3PlCWsZ9-O6-5d3Pd6JLwgjnyjLmKqLKFfDk33Fz5mKrWan58cvdQqggJVbEsfUSloC27XsJiwNgbBxrqzsre-U1Fv_DoZvqwXfXeSqM5CA-bsAuiiX5HxR5GN3HDWLAfBthomCuwCY-Z9dy7GPZY18aC295cZ395_DfUU3yoXyqEHst3-E-IhzlXt-_5myOE5SS4ruccGMRx_bwC7V3xZUPHyr0_fEiE36stGEl-G7Izjihdx6m8D6sHVUemSLKXOjIO9Cj8hXoTNsNDFy7VlIGM67nzFfraWXq536UBZDEBxBfszBZdloVB5pJSUiDJzMe70-pb_d0cJ22AFXhO4uWTj43IaTa4OQCECheOaHtoO3Y3GnAFaJZPBGCHFmAXOMke5WK_QxWPOoAV8ig7I0ZuzbfXgooqOQ5hR1ihg300dvYvL1PbR4ec2rqxQk9WkzLzsDysdwJePQhvWrKmnzEFmGupTMh4aSA40B2XjveRqGe7g6-wOCuwAXSBEs_v4v0u5Wm7rtZ_2QYPwTIpABTfQ_OohWpTkFsb7lstUSb9Cke3zCY049DzwPE_Szz9QiygO5xYgvtTM_Qm3V9I6zhT_41cuY2c9FU9HQKpfJuieJEeOpDaI8tzyp8A9vAHVjErS13h0i1BA5lKXrp2THmALrqsh1f6K7M2LwgwGuX5ljY0oKIEH9YyZ0aYE0jSDLiif3m2O9ZTS0bHNCh5W_cru4QMHFtchJXjKEP5ueBFJ3jfMuuCUe6UkReqNgUYAdlD0uScFO8aHmRGFkyZdN7Fgo22xmkN2jVSwalzW8gbh6701X_PQNCj5aqD_O3QR-LxM47YHNSyiVX5y_y49PoI7UY0uDi3_0xBiAFm0s4OfsBbF3CkTt39tiG5VM_2NNcwtvsA3-wSUrOVXKh9fqvN_yKIt73eKNz7F0yTWMsDCgcbab_fTcLthW5-a_LiylmAs-QOZI1YXGykDQLG5febrV62sNY0rE9K0ytRb_PTgMEvQMZP68qbe13VP2cgxARXnAR5DXwJN_1A89ouHqChu80za5_M419uVH02CKs7euTcpL0NvP7INDxuimAfJmsqE5rnRxHo0l0wQhyw5KOqEG2bqDMmJK34AJ-w94TN0yzt82js0EEgP3kXSMxESAoPTQqZ_XNlIeztZVl5u5X70Og');
        jar.set('https://7edu-br-financial-sandbox.educadventista.org/', '61d33f5595754788327b8bee0e2dd0d3', 'cK0OOPUERh6or3rh5MeOoP/vziZJFMnRVPEjpqhy0vQ9JrneRk1LgtIwtJ6VCniu+R/xKYOVtXzEI6ckqZ5aPaAlujmQo2I1o2l6N6OY9XqYXhtLVslFCKpgQtv7BX+cspZbWQtjXCAAYGwZE6yVExPuXqUB3B98jNv4B+9w7PGQGG/YOUbd40Flqg+6diSN');
        jar.set('https://7edu-br-financial-sandbox.educadventista.org/', 'ContextSelected', '{%22LegalEntityId%22:%227f024adf-1ef6-4e40-87a6-73ea434bed4b%22,%22EntityId%22:%227cbf6f1e-08b7-4eb8-890b-1a42e5c52f15%22,%22EntityDescription%22:%22Colegio Adventista de Sao Bernardo do Campo%22,%22SdaSystemId%22:%2256a63456-36c0-42b6-8aae-214001f867c7%22}');

        // let data = { BilletId: 'aebb2b17-bdd7-4cf3-8891-7d9f8712538e'}

         
        // billet.BilletId.forEach(el => {
            let url = `https://7edu-br-financial-sandbox.educadventista.org/api/v1/billet/55208766-5b07-4082-8a2d-551ef45d6fb0/Print`
            let res = http.get(url)
            check(res, {
                'Should be return 200': (r) => r.status === 200
            })
            console.log(url)
            console.log(`${res.body} | STATUS = ${res.status}`)
            return res
        // })
    }
}
