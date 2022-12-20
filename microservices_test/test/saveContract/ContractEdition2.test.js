import { group, check } from 'k6'
import ContractEdition from '../../api/request/saveContract/ContractEdition2.request.js'

export default function () {
    let contract = new ContractEdition()

    group('POST - /AccountsReceiving/AccountsReceiving/Save', () => {
        let res = contract.getContract()
        check(res, {
            'Should be return 200': (r) => r.status === 200
        })
    })
}