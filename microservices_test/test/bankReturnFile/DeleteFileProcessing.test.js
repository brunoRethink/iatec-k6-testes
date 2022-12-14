import { group, check } from 'k6'
import DeleteFileProcessing from '../../api/request/bankReturnFile/DeleteFileProcessing.request.js'

export default function () {
    let file = new DeleteFileProcessing()

    group('POST - /api/v1/BankReturnFile/DeleteFileProcessing', () => {
        let res = file.fileProcessing()

        check(res, {
            'Should be return 200': (r) => r.status === 200
        })
    })
}