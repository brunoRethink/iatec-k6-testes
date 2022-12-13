import { group, check } from 'k6'
import GenerateBillet from '../../api/request/billet/GenerateBillet.request.js'

export default function () {
    let billet = new GenerateBillet()

    group('GET - /api/v1/FinancialAgreements', () => {
        let res = billet.getBillet()
        // res.forEach(r => {
        //     check(r, {
        //         'Should be return 200': (r) => r.status === 200
        //     })
        // });
        // console.log(res.json())
    })
}