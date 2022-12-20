import { group, check } from 'k6'
import CurrentAccount from '../../api/request/currentAccounts/CurrentAccount.request.js'

export default function () {
    let account = new CurrentAccount()

    group('GET - /api/v1/Currentaccounts', () => {
        let res = account.getAllAccounts()

        check(res, {
            'Should be return 200': (r) => r.status === 200
        })
    })
}