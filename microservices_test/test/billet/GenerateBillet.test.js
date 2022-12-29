import { group, check } from 'k6'
import GenerateBillet from '../../api/request/billet/GenerateBillet.request.js'

export default function () {
    let billet = new GenerateBillet()

    group('GET - /api/v1/billet/{billetId}/Print', () => {
        let res = billet.getBillet()
            check(res, {
                'Should be return 200': (r) => r.status === 200
            })
    })
}