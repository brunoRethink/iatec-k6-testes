import { group, check } from 'k6'
import CantransferBatch from '../../api/request/cashierManagement/CantransferBatch.request.js'

export default function () {
    let cashier = new CantransferBatch()

    group('GET - /api/v1/CashierManagement/CanTransferBatch', () => {
        let res = cashier.transferBatch()

        check(res, {
            'Should be return 200': (r) => r.status === 200
        })
    })
}