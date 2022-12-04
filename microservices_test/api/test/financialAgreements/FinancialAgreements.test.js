import { group, check } from 'k6'
import FinancialAgreements from '../../request/financialAgreements/FinancialAgreements.request.js'

export default function () {
    let financialAgreements = new FinancialAgreements()

    group('GET - /api/v1/FinancialAgreements', () => {
        let res = financialAgreements.geFinancialAgreements()

        check(res, {
            'Should be return 200': (r) => r.status === 200
        })
    })
}