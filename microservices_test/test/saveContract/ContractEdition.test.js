import { group, check } from 'k6'
import ContractEdition from '../../api/request/saveContract/ContractEdition.request.js'

export default function () {
    let contract = new ContractEdition()

    group('GET - /api/v1/FinancialAgreements', () => {
        let res = contract.getContract()
        check(res, {
            'Should be return 200': (r) => r.status === 200
        })
    })
}