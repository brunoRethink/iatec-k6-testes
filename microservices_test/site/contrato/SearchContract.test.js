import { sleep, group, check } from 'k6'
import http from 'k6/http'

// export const options = {
//   scenarios: {
//     Scenario_1: {
//       executor: 'ramping-vus',
//       gracefulStop: '30s',
//       stages: [
//         { target: 20, duration: '1m' },
//         { target: 20, duration: '3m30s' },
//         { target: 0, duration: '1m' },
//       ],
//       gracefulRampDown: '30s',
//       exec: 'scenario_1',
//     },
//   },
// }

export default function scenario_1() {
  let response

  group(
    'LOGIN - https://login.sdasystems.org/login?signin=a2b1214b94f97caf114345c146d06a7e',
    function () {
      // LOGIN
      response = http.post(
        'https://login.sdasystems.org/login?signin=a2b1214b94f97caf114345c146d06a7e',
        {
          'idsrv.xsrf':
            'Gjnke1bVL_rMzbqmvfIR1WJnR_sDlfMxELplJwqxWXOR2Yaq9AATeipQjgmaHzPr0_jivG0P0WEOrwbkrOpimn5cGkDhdt2At2U874In38o',
          username: 'rethink',
          password: '1qaz2wsx$',
          btnLogin: '',
        },
        {
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            origin: 'https://login.sdasystems.org',
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      check(response, {
        'Should be return 200 - LOGIN': (r) => r.status === 200
    })
    }
  )

  group('ACESSAR FIANCEIRO - https://7edu-br-financial-sandbox.educadventista.org/', function () {
    // ACESSAR FIANCEIRO
    response = http.post(
      'https://7edu-br-financial-sandbox.educadventista.org/',
      {
        code: 'ea5f119248a51011d977c0992d207651',
        id_token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjI0Uk5yaEYtYXo3WDh3UndVUFY5emJKQkZYayIsImtpZCI6IjI0Uk5yaEYtYXo3WDh3UndVUFY5emJKQkZYayJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLnNkYXN5c3RlbXMub3JnIiwiYXVkIjoiMzdhODdiYzMtYjg5Yi00NWZiLTk0YjUtZWM1ZWFhN2U1NDViIiwiZXhwIjoxNjcwMzM2NjU5LCJuYmYiOjE2NzAzMzYzNTksIm5vbmNlIjoiNjM4MDU5MzMxMzc0NTE1NTkyLlpEUmlOelUyTWpFdFltUm1NeTAwTkRrNUxUbGpaVFl0WXpGa1pXTmpZV1E0TXprNU5qY3lOREJoWkdRdE9XVTNOaTAwT1dObUxXSmtPVGd0Tm1GaVpEVXhOR1E1Tm1ObSIsImlhdCI6MTY3MDMzNjM1OSwiYXRfaGFzaCI6IjNxVHB3TXBad0pkZXJYTVR4VXRzVnciLCJjX2hhc2giOiItUjk2T1lpbFlBckRpajF1aVdvYmpnIiwic2lkIjoiZWJlOTcyNTk1ZmJiZmQ0ZDFkZDY0NjZiY2U3ODc5NDMiLCJzdWIiOiIyYzRiNjFlYS05YTkyLTRlYzUtODIzZS03ODU0OTVmN2QxZjgiLCJhdXRoX3RpbWUiOjE2NzAzMzYzNTgsImlkcCI6IklBVGVjX0dBTnYzIiwiZ2l2ZW5fbmFtZSI6InJldGhpbmsiLCJuYW1lIjoicmV0aGluayByZXRoaW5rIiwiZmFtaWx5X25hbWUiOiJyZXRoaW5rIiwiZW1haWwiOiJyZXRoaW5rQHlvcG1haWwuY29tIiwiYmlydGhkYXRlIjoiMjAwMC0wMS0wMSIsImdlbmRlciI6Im1hbGUiLCJsb2NhbGUiOiJwdC1CUiIsInByZWZlcnJlZF91c2VybmFtZSI6InJldGhpbmsiLCJwaWN0dXJlIjoiaHR0cHM6Ly9zYWQtdXMtZm0tMS5hY2NvdW50cy5saXZlLndzLnNkYXN5c3RlbXMub3JnL3NkYXVzZXJzL0hhbmRsZXJzL1VzZXJQaWN0dXJlLmFzaHg_SWQ9ZmY1YmQyMWQtNzBiOC00ODU0LTkyZWEtMzk2OTlhMTgwN2ViIiwiYW1yIjpbIlNkYS5BY2NvdW50cyJdfQ.c778wwJ6Q7tgJfAFX433X2_jLtfO1zbtRMixwz7zwpIvhJPoJNhMFTbB4zDiBRafpoJzoU01Un8pw3HhXzeFrrCqSQzjTj-YcR0OtyWjixEB48MPhP7iZdZGONRHjvSlAXliMxylqVvty2LqCKsII4n3bQw8JNqIkI-tHUPwNjA-Uir-Fp39Un9Jr6uDaQhGAo6X01S2AUYdFCPD0dcldGR1VlVWgDBFaefGXXNMbtFz9gFe5QCQQgNe3zzl_1GbSqKUjCq31QgXyhpVdUXkYxFyxpIdMwKAiRhEoUtKJbmITuuyEfrkTt-IdWSpCktAcyHS86hcflB5qRGb75OP7KcIxLVJYwYKYPK_GDxy9_a0Ag_v46PRr3G7x_zCv3CKKjT3cy_lZ8jOG2ngBA3A74okXKPzq4yp0dB7KSTQ-yyMEPqvvuosjzXuu2R-1W54SaUtog1QncK0fNp4q5VhUaVMlTNhFw_LpgVrNcl17OdwymXzsOt_GJ2n34LVOiW9crJfZisLDN6nk77bxjr_o5RESmkD--bg14wA5mdIxjr82EN7rkvFq8OZEAkiq9uhnCYnrkSvY3wjg9vtybT7NQ5VksBbKe9vTUg_dlLmB0sQYn2m8eSinv5KrKsu7kytF3t_r_fraFODWAtKwpJuOu9vfOdc6gdenN1dBJrAJyU',
        access_token: '4e7f5e64f397362b9dd1f37e30c33852',
        token_type: 'Bearer',
        expires_in: '3600',
        scope: 'openid profile email',
        state:
          'OpenIdConnect.AuthenticationProperties=eq6OIlxH3NMzLcxGkPDusaw58TruJVkgTy75IxkHpMrbYTzi6IKtdCYdJuwFjOkQlJFhryNCB_QZZpMsAXwdL3BglFYG3oJfrDXsGxQVSaESg9_8SIYXbxpba5uE8O2KDA8UG0ERlXxDfPJMGVoRnLP6eH9MY24-dHMl9uSUwZ8SJw52LQJsgfFc8Mgoe7kMgNR1w1rWTyEsYdS0ez99VbfXsSTmea93rMkyswR4qG7veK_fxQlj1lfnhxBVRepVhaWCR4RdTxLb6ohVB7g4yQ',
        session_state:
          '2fJ0z73SUeQXY0IDAhbjRYqoyQNhtqZYWBynA6ouFhk.b22595af02c84e40a81226b16e0f0009',
      },
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          origin: 'https://login.sdasystems.org',
          'upgrade-insecure-requests': '1',
          'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    console.log('FINANCEIRO '+ response.status)
    check(response, {
      'Should be return 200 - FINANCEIRO': (r) => r.status === 200
  })
  })

  group('ACESSAR FIANCEIRO - https://7edu-br-financial-sandbox.educadventista.org/', function () {
    // ACESSAR FIANCEIRO
    response = http.post(
      'https://7edu-br-financial-sandbox.educadventista.org/',
      {
        code: '756f54a3857e3392ebe7602c1afc82b5',
        id_token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjI0Uk5yaEYtYXo3WDh3UndVUFY5emJKQkZYayIsImtpZCI6IjI0Uk5yaEYtYXo3WDh3UndVUFY5emJKQkZYayJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLnNkYXN5c3RlbXMub3JnIiwiYXVkIjoiMzdhODdiYzMtYjg5Yi00NWZiLTk0YjUtZWM1ZWFhN2U1NDViIiwiZXhwIjoxNjcwMzM2NjYyLCJuYmYiOjE2NzAzMzYzNjIsIm5vbmNlIjoiNjM4MDU5MzMxNjIzMjQzMjc2Lk5XRTFZekk0WXpFdE9HRmxaaTAwWXpRM0xXSXdOR1V0WmpFMlltTXpOR1l5TWpGak5HTTRPVGhtTjJNdFlqVTJOQzAwTm1RNExUZzVaVGt0WlRReU0yRTFPREpsWkRZNCIsImlhdCI6MTY3MDMzNjM2MiwiYXRfaGFzaCI6Im9Ca1htZ3JnQmcxU1lPcHNmdDlzVHciLCJjX2hhc2giOiJrVktGd05LbFVwN0pjRUV1UFRLUGl3Iiwic2lkIjoiZWJlOTcyNTk1ZmJiZmQ0ZDFkZDY0NjZiY2U3ODc5NDMiLCJzdWIiOiIyYzRiNjFlYS05YTkyLTRlYzUtODIzZS03ODU0OTVmN2QxZjgiLCJhdXRoX3RpbWUiOjE2NzAzMzYzNTgsImlkcCI6IklBVGVjX0dBTnYzIiwiZ2l2ZW5fbmFtZSI6InJldGhpbmsiLCJuYW1lIjoicmV0aGluayByZXRoaW5rIiwiZmFtaWx5X25hbWUiOiJyZXRoaW5rIiwiZW1haWwiOiJyZXRoaW5rQHlvcG1haWwuY29tIiwiYmlydGhkYXRlIjoiMjAwMC0wMS0wMSIsImdlbmRlciI6Im1hbGUiLCJsb2NhbGUiOiJwdC1CUiIsInByZWZlcnJlZF91c2VybmFtZSI6InJldGhpbmsiLCJwaWN0dXJlIjoiaHR0cHM6Ly9zYWQtdXMtZm0tMS5hY2NvdW50cy5saXZlLndzLnNkYXN5c3RlbXMub3JnL3NkYXVzZXJzL0hhbmRsZXJzL1VzZXJQaWN0dXJlLmFzaHg_SWQ9ZmY1YmQyMWQtNzBiOC00ODU0LTkyZWEtMzk2OTlhMTgwN2ViIiwiYW1yIjpbIlNkYS5BY2NvdW50cyJdfQ.SUXZ7rfWEyH_0ZwA6RMeO5hgTEWXryyg7kMjRK8GGHSzQSNSFVEqroWlybdZSnetXpQJtIRlHcfClbB5Abl-4URTomWm_3T78M0nFRj7fcUqeWAcFzoqZbvV6TrX11eBJh1jC5gbfHJI62GcPt6klaPT_JYf9dyiNU8YOL6L1cQqFOracToXtCVvBgf9O48W5TcC4pFKVY8QRiS3Exl0yMeKIMyJjzKZssQ0JWjbUW1k9nXMPCysgSUIC496V_vwmmHflLiX6OfNA4ypZgqAYxCswBsWEqu6ZY2IhOCdMJpkdEM0QF6zF7ywjgqR4iXV4FGaou94rdlIqPgtjSKjYGNLP3AgAGTNq2o2bF1VjUC27wp-9B7eaiZwSMwgwIVlxG7eWxgizL21px-SUtD4MpPo50T8dzFPSHF-YGvmGjhe_25KVO2a397EY_OV8MpIzjZ6fduN-sckDk6dIgxHfaDnLtjSHeAzEWRFU5jwj-yqPa6qrDSdLH5KaHAaJ4EbAr_-OzxuQujzNPSKEFu-Rxi93OZC8pDmrLlps7fhBfmYFQu99wI3v0aSuNtUrfQHbZMvzbHCU0sXmotKWqW49QKdAUbEZeEh23fxR6ewdgvVlsQm2W8eCYn4241gcAOHIL6ZpIMy1S5N56_XEXhLjBG9jGtJLFkN77Hkvo-eD1k',
        access_token: '31ab8071d2b22a5ffe038ce5511a2bb7',
        token_type: 'Bearer',
        expires_in: '3600',
        scope: 'openid profile email',
        state:
          'OpenIdConnect.AuthenticationProperties=3WbmObnySaklL1_XUA_8BDnpIqAvIwk_Fb_mvGHXAf2SZfIZpythVHPFEM0nwZZEBXBMZFTo98s8XB3MlqwQh2G4U9-ybrlbQdP4jbzrL00O7UnKggNYixba61sVxvtp6tw54iaeploiiLM4b4Oa374RWQhh3mbmaoAj7TavubJQmtMPOwtmKhzA_OiHE68ttdiN_0r_ak0c-SpmTFdDiuDn71jeniqIBpl8WIq5AEZ8ee2l8e-VQ9tqpKEHh_p5U-5YpVf32Khzl-Wqq-aW5A',
        session_state:
          'boL7zg2ohVScLQmImTUi3KvU4i5GuJXl2F4LrFtchRQ.bb4735ca7aab6f7d42e6598b4bb1bb23',
      },
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          origin: 'https://login.sdasystems.org',
          'upgrade-insecure-requests': '1',
          'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    console.log('FINANCEIRO ' + response.status)
    check(response, {
      'Should be return 200 - FINANCEIRO': (r) => r.status === 200
  })

    // MENU
    response = http.get('https://7edu-br-financial-sandbox.educadventista.org/ShellInfo/GetMenu', {
      headers: {
        accept: '*/*',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })
    console.log('GET MENU ' + response.status)
    check(response, {
      'Should be return 200 - GET MENU': (r) => r.status === 200
  })

    // CHANGE CONTRACT NOTIFY
    response = http.get(
      'https://7edu-br-financial-sandbox.educadventista.org/Directives/changeContractNotify/index.html',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    console.log('CHANGE CONTRACT NOTIFY ' + response.status)
    check(response, {
      'Should be return 200 - CHANGE CONTRACT NOTIFY': (r) => r.status === 200
  })

    // GET PERMISSION LIST
    response = http.post(
      'https://7edu-br-financial-sandbox.educadventista.org/Home/GetPermissionList',
      null,
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    console.log('GET PERMISSION LIST ' + response.status)
    check(response, {
      'Should be return 200 - GET PERMISSION LIST': (r) => r.status === 200
  })

    // CHANGE CONTRACT NOTIFY
    response = http.post(
      'https://7edu-br-financial-sandbox.educadventista.org/ApiContractsChanges/ChangeContractNotify',
      null,
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
    console.log('CHANGE CONTRACT NOTIFY ' + response.status)
    check(response, {
      'Should be return 200 - CHANGE CONTRACT NOTIFY': (r) => r.status === 200
  })
  })

  group(
    'ACCONTS RECEIVING - https://7edu-br-financial-sandbox.educadventista.org/AccountsReceiving/AccountsReceiving',
    function () {
      // ACCONTS RECEIVING
      response = http.get(
        'https://7edu-br-financial-sandbox.educadventista.org/AccountsReceiving/AccountsReceiving',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      console.log('ACCONTS RECEIVING ' + response.status)
    check(response, {
      'Should be return 200 - ACCONTS RECEIVING': (r) => r.status === 200
  })

      // GET LEGAL ENTITIES
      response = http.post(
        'https://7edu-br-financial-sandbox.educadventista.org/AccountsReceiving/AccountsReceiving/GetLegalEntities',
        null,
        {
          headers: {
            accept: '*/*',
            'x-requested-with': 'XMLHttpRequest',
            'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      console.log('GET LEGAL ENTITIES ' + response.status)
    check(response, {
      'Should be return 200 - GET LEGAL ENTITIES': (r) => r.status === 200
  })

      // GET AFM ADDRESS
      response = http.post(
        'https://7edu-br-financial-sandbox.educadventista.org/Home/GetAfmAddress',
        null,
        {
          headers: {
            accept: '*/*',
            'x-requested-with': 'XMLHttpRequest',
            'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      console.log('GET AFM ADDRESS ' + response.status)
    check(response, {
      'Should be return 200 - GET AFM ADDRESS': (r) => r.status === 200
  })

      // VALIDATE BASIC CONFIGURATION
      response = http.post(
        'https://7edu-br-financial-sandbox.educadventista.org/AccountsReceiving/AccountsReceiving/validateBasicConfiguration',
        null,
        {
          headers: {
            accept: '*/*',
            'x-requested-with': 'XMLHttpRequest',
            'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      // GET PERIODS
      response = http.post(
        'https://7edu-br-financial-sandbox.educadventista.org/AccountsReceiving/AccountsReceiving/GetPeriods',
        {
          legalEntityId: 'c284359a-1d26-439d-8b22-71cb89a4e03c',
          sdaSystemId: '56a63456-36c0-42b6-8aae-214001f867c7',
        },
        {
          headers: {
            accept: '*/*',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'x-requested-with': 'XMLHttpRequest',
            'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      // GET CONTRACS BY RANGE DATE
      response = http.post(
        'https://7edu-br-financial-sandbox.educadventista.org/AccountsReceiving/AccountsReceiving/GetContractsByRangeDate?InitialDateText=2022-10-03&contractNumber=&name=&page=0&totalByPage=7',
        null,
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      // GET CONTRAC LITE BY CONTRACT
      response = http.post(
        'https://7edu-br-financial-sandbox.educadventista.org/AccountsReceiving/AccountsReceiving/GetContractLiteByContract?contractId=71e5e8f0-eb44-4c3a-a60f-7470823e889e&responsibleId=25c408f7-3cdf-4a02-998b-3edacf96e1a6',
        null,
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      // GET PERIODS HAS DEBIT BY PERIOD ID AND PERSON ID
      response = http.get(
        'https://7edu-br-financial-sandbox.educadventista.org/AccountsReceiving/AccountsReceiving/GetPeriodsHasDebitByPeriodIdAndPersonId?personId=25c408f7-3cdf-4a02-998b-3edacf96e1a6&isBeneficiary=false',
        {
          headers: {
            accept: '*/*',
            'x-requested-with': 'XMLHttpRequest',
            'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      // GET CONTRACT LOG
      response = http.post(
        'https://7edu-br-financial-sandbox.educadventista.org/ContractLog/GetContractLogs',
        '{"contractId":"71e5e8f0-eb44-4c3a-a60f-7470823e889e"}',
        {
          headers: {
            accept: 'application/json, text/plain, */*',
            'content-type': 'application/json; charset=UTF-8',
            'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      // SAVE
      response = http.post(
        'https://7edu-br-financial-sandbox.educadventista.org/AccountsReceiving/AccountsReceiving/Save',
        {
          str: '[{"Operation":2,"Id":"71e5e8f0-eb44-4c3a-a60f-7470823e889e","Description":"2022 -2M59","Url":null,"ContractIdExternal":"2802f172-0d8a-430a-bb7d-af230113d323","ClosureDate":null,"SdaSystem":{"Id":"56a63456-36c0-42b6-8aae-214001f867c7","Code":null,"AccountingDescriptionName":null,"EntityType":null,"NotAcceptNew":true},"LegalEntity":{"Id":"c284359a-1d26-439d-8b22-71cb89a4e03c","EndingDate":null,"Document":"99660055000577","CompanyName":"Instituição Adventista de Educação e Assistência Social Norte Brasileira","NextNumberReceipt":null,"NextNumberAuthorization":null,"AdministrativeRegion":null,"Regime":null,"Email":"dp@unb.org.br","Phone":"(91) 2144-500","EntityCode":"5124","EntityCode_Name":"5124 - FAAMA Faculdade - Faculdade Adventista da Amazônia"},"Level":{"Id":"b49db907-0a5f-4e71-9378-581bf02912ea","Description":"Curso de Musica","Cnae":null,"Code":null,"IntegrationCode":null,"DepartmentCode":null,"Parent":null},"Responsible":{"Documents":null,"Id":"25c408f7-3cdf-4a02-998b-3edacf96e1a6","PersonIdExternal":"6aef367c-60bd-47c0-81f8-ae600125c083","Email":"ht@hortolandia.com","SituationTypePersonReceivingService":0,"Country":{"Id":1,"Name":null,"Code":null,"Currency":null,"DecimalDigits":0,"LanguageCode":null,"RevenueCode":null,"CountryIdExternal":"00000000-0000-0000-0000-000000000000","CountryAreaCode":null,"CountryIdPeople":"00000000-0000-0000-0000-000000000000"},"IsResponsible":true,"IsBeneficiary":false},"Beneficiary":{"Documents":null,"Id":"25c408f7-3cdf-4a02-998b-3edacf96e1a6","PersonIdExternal":"6aef367c-60bd-47c0-81f8-ae600125c083","Email":"ht@hortolandia.com","SituationTypePersonReceivingService":0,"Country":{"Id":1,"Name":null,"Code":null,"Currency":null,"DecimalDigits":0,"LanguageCode":null,"RevenueCode":null,"CountryIdExternal":"00000000-0000-0000-0000-000000000000","CountryAreaCode":null,"CountryIdPeople":"00000000-0000-0000-0000-000000000000"},"IsResponsible":false,"IsBeneficiary":false},"AccountingType":2,"ConditionalDiscount":0,"ConditionalDiscountNew":0,"GuarantorsLite":[],"ServicesLite":[{"Operation":4,"Id":"15e0829c-006c-489f-a8d1-00ebec5fd719","Date":"2022-07-01T05:00:00.000Z","Service":{"ServiceCalculationBasis":[],"ServiceLevelFilters":null,"ServiceAccountsReceivableTypeFilters":null,"LegalEntity":null,"SdaSystem":null,"ServiceGroup":{"LegalEntity":null,"ServiceGroupType":1,"Id":"84cd3187-b6ce-44d4-896c-85540867ddb6","Description":"Serviços Extra-Curriculares","AccountsPayableDocumentType":null,"UseGroupTaxCollection":false},"PercentType":null,"Id":"1249b324-3312-4bb9-9ff8-d6b735736184","Code":"401","Percentage":0,"Iva":null,"ReceivingSeparate":false,"FiscalService":null},"AccountsReceivableType":{"LegalEntity":null,"Code":null,"Id":"8ca39726-0d54-49cb-b7c4-6a18222fc037"},"Value":191.67,"Observation":null,"Journal":null,"TransactionAfs":null,"ToAccount":true,"Level":{"Id":"e6e5ae56-0f8b-4900-b1aa-710165bd9678","Description":"CMUSI01MB","Cnae":null,"Code":null,"IntegrationCode":null,"DepartmentCode":null,"Parent":null,"Main":null,"Period":{"Entity":null,"SdaSystem":null,"Id":"02ba1ec2-7d2b-4d76-a8f7-cfe972e93388","Code":"2022 - 2S","PeriodIdExternal":null,"Description":"2022 - 2 Semestre","SubAccount":"2022","DefaultDueDay":10},"Entity":{"Country":null,"Id":"01b99c70-7de4-43f8-b75c-175980e78467","Code":"5124","Description":"Faculdade Adventista da Amazônia","EntityType":null,"BeginDate":null,"EndDate":null,"LegalEntity":null,"NextContractNumber":null,"NextSaleId":null,"Path":null,"Acronym":"FAAma","LastDateUpdated":"/Date(-62135575200000)/","TimeZoneId":"E. South America Standard Time","IsEnable":false}},"AcceptsNegativeValue":false,"CodStatus":0,"PeriodConfig":null,"CurrentAccountReferencyId":null},{"Operation":4,"Id":"4bc132fd-64f1-4064-b654-5b885274d27e","Date":"2022-11-01T05:00:00.000Z","Service":{"ServiceCalculationBasis":[],"ServiceLevelFilters":null,"ServiceAccountsReceivableTypeFilters":null,"LegalEntity":null,"SdaSystem":null,"ServiceGroup":{"LegalEntity":null,"ServiceGroupType":1,"Id":"84cd3187-b6ce-44d4-896c-85540867ddb6","Description":"Serviços Extra-Curriculares","AccountsPayableDocumentType":null,"UseGroupTaxCollection":false},"PercentType":null,"Id":"1249b324-3312-4bb9-9ff8-d6b735736184","Code":"401","Percentage":0,"Iva":null,"ReceivingSeparate":false,"FiscalService":null},"AccountsReceivableType":{"LegalEntity":null,"Code":null,"Id":"8ca39726-0d54-49cb-b7c4-6a18222fc037"},"Value":191.66,"Observation":null,"Journal":null,"TransactionAfs":null,"ToAccount":true,"Level":{"Id":"e6e5ae56-0f8b-4900-b1aa-710165bd9678","Description":"CMUSI01MB","Cnae":null,"Code":null,"IntegrationCode":null,"DepartmentCode":null,"Parent":null,"Main":null,"Period":{"Entity":null,"SdaSystem":null,"Id":"02ba1ec2-7d2b-4d76-a8f7-cfe972e93388","Code":"2022 - 2S","PeriodIdExternal":null,"Description":"2022 - 2 Semestre","SubAccount":"2022","DefaultDueDay":10},"Entity":{"Country":null,"Id":"01b99c70-7de4-43f8-b75c-175980e78467","Code":"5124","Description":"Faculdade Adventista da Amazônia","EntityType":null,"BeginDate":null,"EndDate":null,"LegalEntity":null,"NextContractNumber":null,"NextSaleId":null,"Path":null,"Acronym":"FAAma","LastDateUpdated":"/Date(-62135575200000)/","TimeZoneId":"E. South America Standard Time","IsEnable":false}},"AcceptsNegativeValue":false,"CodStatus":0,"PeriodConfig":null,"CurrentAccountReferencyId":null},{"Operation":4,"Id":"e6902fbc-89dc-4849-a005-750f873a4037","Date":"2022-09-01T05:00:00.000Z","Service":{"ServiceCalculationBasis":[],"ServiceLevelFilters":null,"ServiceAccountsReceivableTypeFilters":null,"LegalEntity":null,"SdaSystem":null,"ServiceGroup":{"LegalEntity":null,"ServiceGroupType":1,"Id":"84cd3187-b6ce-44d4-896c-85540867ddb6","Description":"Serviços Extra-Curriculares","AccountsPayableDocumentType":null,"UseGroupTaxCollection":false},"PercentType":null,"Id":"1249b324-3312-4bb9-9ff8-d6b735736184","Code":"401","Percentage":0,"Iva":null,"ReceivingSeparate":false,"FiscalService":null},"AccountsReceivableType":{"LegalEntity":null,"Code":null,"Id":"8ca39726-0d54-49cb-b7c4-6a18222fc037"},"Value":191.67,"Observation":null,"Journal":null,"TransactionAfs":null,"ToAccount":true,"Level":{"Id":"e6e5ae56-0f8b-4900-b1aa-710165bd9678","Description":"CMUSI01MB","Cnae":null,"Code":null,"IntegrationCode":null,"DepartmentCode":null,"Parent":null,"Main":null,"Period":{"Entity":null,"SdaSystem":null,"Id":"02ba1ec2-7d2b-4d76-a8f7-cfe972e93388","Code":"2022 - 2S","PeriodIdExternal":null,"Description":"2022 - 2 Semestre","SubAccount":"2022","DefaultDueDay":10},"Entity":{"Country":null,"Id":"01b99c70-7de4-43f8-b75c-175980e78467","Code":"5124","Description":"Faculdade Adventista da Amazônia","EntityType":null,"BeginDate":null,"EndDate":null,"LegalEntity":null,"NextContractNumber":null,"NextSaleId":null,"Path":null,"Acronym":"FAAma","LastDateUpdated":"/Date(-62135575200000)/","TimeZoneId":"E. South America Standard Time","IsEnable":false}},"AcceptsNegativeValue":false,"CodStatus":0,"PeriodConfig":null,"CurrentAccountReferencyId":null},{"Operation":4,"Id":"4be08e97-708f-4332-9b40-a52997a7fa05","Date":"2022-12-01T06:00:00.000Z","Service":{"ServiceCalculationBasis":[],"ServiceLevelFilters":null,"ServiceAccountsReceivableTypeFilters":null,"LegalEntity":null,"SdaSystem":null,"ServiceGroup":{"LegalEntity":null,"ServiceGroupType":1,"Id":"84cd3187-b6ce-44d4-896c-85540867ddb6","Description":"Serviços Extra-Curriculares","AccountsPayableDocumentType":null,"UseGroupTaxCollection":false},"PercentType":null,"Id":"1249b324-3312-4bb9-9ff8-d6b735736184","Code":"401","Percentage":0,"Iva":null,"ReceivingSeparate":false,"FiscalService":null},"AccountsReceivableType":{"LegalEntity":null,"Code":null,"Id":"8ca39726-0d54-49cb-b7c4-6a18222fc037"},"Value":191.66,"Observation":null,"Journal":null,"TransactionAfs":null,"ToAccount":true,"Level":{"Id":"e6e5ae56-0f8b-4900-b1aa-710165bd9678","Description":"CMUSI01MB","Cnae":null,"Code":null,"IntegrationCode":null,"DepartmentCode":null,"Parent":null,"Main":null,"Period":{"Entity":null,"SdaSystem":null,"Id":"02ba1ec2-7d2b-4d76-a8f7-cfe972e93388","Code":"2022 - 2S","PeriodIdExternal":null,"Description":"2022 - 2 Semestre","SubAccount":"2022","DefaultDueDay":10},"Entity":{"Country":null,"Id":"01b99c70-7de4-43f8-b75c-175980e78467","Code":"5124","Description":"Faculdade Adventista da Amazônia","EntityType":null,"BeginDate":null,"EndDate":null,"LegalEntity":null,"NextContractNumber":null,"NextSaleId":null,"Path":null,"Acronym":"FAAma","LastDateUpdated":"/Date(-62135575200000)/","TimeZoneId":"E. South America Standard Time","IsEnable":false}},"AcceptsNegativeValue":false,"CodStatus":0,"PeriodConfig":null,"CurrentAccountReferencyId":null},{"Operation":4,"Id":"96e02ceb-7bf0-4229-9e29-cbcea6500787","Date":"2022-10-01T05:00:00.000Z","Service":{"ServiceCalculationBasis":[],"ServiceLevelFilters":null,"ServiceAccountsReceivableTypeFilters":null,"LegalEntity":null,"SdaSystem":null,"ServiceGroup":{"LegalEntity":null,"ServiceGroupType":1,"Id":"84cd3187-b6ce-44d4-896c-85540867ddb6","Description":"Serviços Extra-Curriculares","AccountsPayableDocumentType":null,"UseGroupTaxCollection":false},"PercentType":null,"Id":"1249b324-3312-4bb9-9ff8-d6b735736184","Code":"401","Percentage":0,"Iva":null,"ReceivingSeparate":false,"FiscalService":null},"AccountsReceivableType":{"LegalEntity":null,"Code":null,"Id":"8ca39726-0d54-49cb-b7c4-6a18222fc037"},"Value":191.67,"Observation":null,"Journal":null,"TransactionAfs":null,"ToAccount":true,"Level":{"Id":"e6e5ae56-0f8b-4900-b1aa-710165bd9678","Description":"CMUSI01MB","Cnae":null,"Code":null,"IntegrationCode":null,"DepartmentCode":null,"Parent":null,"Main":null,"Period":{"Entity":null,"SdaSystem":null,"Id":"02ba1ec2-7d2b-4d76-a8f7-cfe972e93388","Code":"2022 - 2S","PeriodIdExternal":null,"Description":"2022 - 2 Semestre","SubAccount":"2022","DefaultDueDay":10},"Entity":{"Country":null,"Id":"01b99c70-7de4-43f8-b75c-175980e78467","Code":"5124","Description":"Faculdade Adventista da Amazônia","EntityType":null,"BeginDate":null,"EndDate":null,"LegalEntity":null,"NextContractNumber":null,"NextSaleId":null,"Path":null,"Acronym":"FAAma","LastDateUpdated":"/Date(-62135575200000)/","TimeZoneId":"E. South America Standard Time","IsEnable":false}},"AcceptsNegativeValue":false,"CodStatus":0,"PeriodConfig":null,"CurrentAccountReferencyId":null},{"Operation":4,"Id":"937c99d1-d7db-4bdb-909f-e68e34e213a5","Date":"2022-08-01T05:00:00.000Z","Service":{"ServiceCalculationBasis":[],"ServiceLevelFilters":null,"ServiceAccountsReceivableTypeFilters":null,"LegalEntity":null,"SdaSystem":null,"ServiceGroup":{"LegalEntity":null,"ServiceGroupType":1,"Id":"84cd3187-b6ce-44d4-896c-85540867ddb6","Description":"Serviços Extra-Curriculares","AccountsPayableDocumentType":null,"UseGroupTaxCollection":false},"PercentType":null,"Id":"1249b324-3312-4bb9-9ff8-d6b735736184","Code":"401","Percentage":0,"Iva":null,"ReceivingSeparate":false,"FiscalService":null},"AccountsReceivableType":{"LegalEntity":null,"Code":null,"Id":"8ca39726-0d54-49cb-b7c4-6a18222fc037"},"Value":191.67,"Observation":null,"Journal":null,"TransactionAfs":null,"ToAccount":true,"Level":{"Id":"e6e5ae56-0f8b-4900-b1aa-710165bd9678","Description":"CMUSI01MB","Cnae":null,"Code":null,"IntegrationCode":null,"DepartmentCode":null,"Parent":null,"Main":null,"Period":{"Entity":null,"SdaSystem":null,"Id":"02ba1ec2-7d2b-4d76-a8f7-cfe972e93388","Code":"2022 - 2S","PeriodIdExternal":null,"Description":"2022 - 2 Semestre","SubAccount":"2022","DefaultDueDay":10},"Entity":{"Country":null,"Id":"01b99c70-7de4-43f8-b75c-175980e78467","Code":"5124","Description":"Faculdade Adventista da Amazônia","EntityType":null,"BeginDate":null,"EndDate":null,"LegalEntity":null,"NextContractNumber":null,"NextSaleId":null,"Path":null,"Acronym":"FAAma","LastDateUpdated":"/Date(-62135575200000)/","TimeZoneId":"E. South America Standard Time","IsEnable":false}},"AcceptsNegativeValue":false,"CodStatus":0,"PeriodConfig":null,"CurrentAccountReferencyId":null}],"ControlNegotiationLite":[{"Operation":4,"Id":"a6a43f5e-83b1-4abb-bd6f-d946493107f4","Date":"2022-10-03T21:44:17.037Z","PlanNumber":1,"Billets":[{"Billet":null,"Operation":4,"Id":"c73ad2ad-3949-45c4-95b7-b0f676a9f0e8","Pending":false,"Responsible":{"Documents":null,"Id":"25c408f7-3cdf-4a02-998b-3edacf96e1a6","PersonIdExternal":"6aef367c-60bd-47c0-81f8-ae600125c083","FullName":"Hlynyz Beryu Ce Mylme","Email":"ht@hortolandia.com","LastDateUpdated":"2022-03-23T22:04:41.050Z","SituationTypePersonReceivingService":0,"Country":{"Id":1,"Name":null,"Code":null,"Currency":null,"DecimalDigits":0,"LanguageCode":null,"RevenueCode":null,"CountryIdExternal":"00000000-0000-0000-0000-000000000000","CountryAreaCode":null,"CountryIdPeople":"00000000-0000-0000-0000-000000000000"},"IsResponsible":false,"IsBeneficiary":false},"DueDate":"2023-03-10T03:00:00.000Z","CollectionType":1,"StatusBillet":2,"DebitDate":null,"CancellationReason":null,"CancellationReasonDescription":null,"FinancialAgreement":{"Entities":null,"CardAgreementLegalEntities":null,"FinancialAccount":null,"FinancialAgreementType":4,"Id":"0730d478-0c73-4651-9a86-e2c417d4ad32","AgreementCode":"2616963","TradingBook":"101","CurrencyType":"R$","NextNumber":195648,"NextOurNumber":148678,"MaxNextOurNumber":null,"NumberMax":null,"MinDays":null,"Active":true,"IsInternet":true,"AccessKey":null,"MerchantId":null,"ViewEntities":null,"AdditionalInformation":null,"HasBillet":null},"Contract":null,"StatusBilling":0,"Number":"101.0094876","OurNumber":"1423274","StatusPayment":0,"InstallmentsLites":[{"Operation":4,"Id":"270c60e9-6c6a-4c00-a108-359f64c5838d","InstallmentNumber":6,"Value":191.66,"InstallmentPlanningType":0,"InstallmentPlanningReferenceId":null,"AccountsReceivableType":{"LegalEntity":{"Id":"97c58956-afb1-49e6-91ed-865b8cc573ed","Name":null,"Parent":null,"InitialDate":"/Date(-62135575200000)/","EndingDate":null,"Document":null,"CompanyName":null,"LastDateUpdated":"/Date(-62135575200000)/","NextNumberReceipt":null,"NextNumberAuthorization":null,"AdministrativeRegion":null,"Regime":null,"Email":null,"Phone":null,"EntityCode":null,"EntityCode_Name":null},"Code":null,"Id":"8ca39726-0d54-49cb-b7c4-6a18222fc037"},"InstallmentPlanningBilletLite":{"Operation":4,"Id":"ec74138f-fa20-4725-b890-929c81f9166d","Percentage":100},"LatesFeePaid":0,"InterestRatePaid":0,"PostedFee":0,"PostedInterest":0,"TotalValue":191.66,"TotalOpenValue":191.66}],"Devolution":null,"DevolutionIsAuthorized":false,"BilletCommunicationInfo":null,"BilletRefunded":null,"NotValidateDueDay":false,"ExternalNumber":0,"NewBilletRegistered":false,"Value":191.66,"Fee":0,"FeePaid":0,"AlterFee":0,"FeeOpen":0,"Interest":0.06,"InterestPaid":0,"InterestOpen":0,"TotalValue":191.66,"TotalOpenValue":191.66,"GrossTotalOpenValue":191.66,"Adjustment":0,"TotalPaid":0,"ExpectedAdjustment":0,"IgnoreDiscount":false,"BilletExpectedAdjustment":0},{"Billet":null,"Operation":4,"Id":"79261340-6b48-40fc-b9cd-9d81b810aea9","Pending":false,"Responsible":{"Documents":null,"Id":"25c408f7-3cdf-4a02-998b-3edacf96e1a6","PersonIdExternal":"6aef367c-60bd-47c0-81f8-ae600125c083","FullName":"Hlynyz Beryu Ce Mylme","Email":"ht@hortolandia.com","LastDateUpdated":"2022-03-23T22:04:41.050Z","SituationTypePersonReceivingService":0,"Country":{"Id":1,"Name":null,"Code":null,"Currency":null,"DecimalDigits":0,"LanguageCode":null,"RevenueCode":null,"CountryIdExternal":"00000000-0000-0000-0000-000000000000","CountryAreaCode":null,"CountryIdPeople":"00000000-0000-0000-0000-000000000000"},"IsResponsible":false,"IsBeneficiary":false},"DueDate":"2023-01-10T03:00:00.000Z","CollectionType":1,"StatusBillet":2,"DebitDate":null,"CancellationReason":null,"CancellationReasonDescription":null,"FinancialAgreement":{"Entities":null,"CardAgreementLegalEntities":null,"FinancialAccount":null,"FinancialAgreementType":4,"Id":"0730d478-0c73-4651-9a86-e2c417d4ad32","AgreementCode":"2616963","TradingBook":"101","CurrencyType":"R$","NextNumber":195648,"NextOurNumber":148678,"MaxNextOurNumber":null,"NumberMax":null,"MinDays":null,"Active":true,"IsInternet":true,"AccessKey":null,"MerchantId":null,"ViewEntities":null,"AdditionalInformation":null,"HasBillet":null},"Contract":null,"StatusBilling":0,"Number":"101.0094874","OurNumber":"1423312","StatusPayment":0,"InstallmentsLites":[{"Operation":4,"Id":"9080e924-d8a5-4627-95ba-54ce476e9d12","InstallmentNumber":4,"Value":191.67,"InstallmentPlanningType":0,"InstallmentPlanningReferenceId":null,"AccountsReceivableType":{"LegalEntity":{"Id":"97c58956-afb1-49e6-91ed-865b8cc573ed","Name":null,"Parent":null,"InitialDate":"/Date(-62135575200000)/","EndingDate":null,"Document":null,"CompanyName":null,"LastDateUpdated":"/Date(-62135575200000)/","NextNumberReceipt":null,"NextNumberAuthorization":null,"AdministrativeRegion":null,"Regime":null,"Email":null,"Phone":null,"EntityCode":null,"EntityCode_Name":null},"Code":null,"Id":"8ca39726-0d54-49cb-b7c4-6a18222fc037"},"InstallmentPlanningBilletLite":{"Operation":4,"Id":"901d1f64-c8c7-44c5-99d9-b0eb2f5a09a0","Percentage":100},"LatesFeePaid":0,"InterestRatePaid":0,"PostedFee":0,"PostedInterest":0,"TotalValue":191.67,"TotalOpenValue":191.67}],"Devolution":null,"DevolutionIsAuthorized":false,"BilletCommunicationInfo":null,"BilletRefunded":null,"NotValidateDueDay":false,"ExternalNumber":0,"NewBilletRegistered":false,"Value":191.67,"Fee":0,"FeePaid":0,"AlterFee":0,"FeeOpen":0,"Interest":0.06,"InterestPaid":0,"InterestOpen":0,"TotalValue":191.67,"TotalOpenValue":191.67,"GrossTotalOpenValue":191.67,"Adjustment":0,"TotalPaid":0,"ExpectedAdjustment":0,"IgnoreDiscount":false,"BilletExpectedAdjustment":0},{"Billet":null,"Operation":4,"Id":"83c459be-f9e2-4bac-a218-ba64929fd77b","Pending":false,"Responsible":{"Documents":null,"Id":"25c408f7-3cdf-4a02-998b-3edacf96e1a6","PersonIdExternal":"6aef367c-60bd-47c0-81f8-ae600125c083","FullName":"Hlynyz Beryu Ce Mylme","Email":"ht@hortolandia.com","LastDateUpdated":"2022-03-23T22:04:41.050Z","SituationTypePersonReceivingService":0,"Country":{"Id":1,"Name":null,"Code":null,"Currency":null,"DecimalDigits":0,"LanguageCode":null,"RevenueCode":null,"CountryIdExternal":"00000000-0000-0000-0000-000000000000","CountryAreaCode":null,"CountryIdPeople":"00000000-0000-0000-0000-000000000000"},"IsResponsible":false,"IsBeneficiary":false},"DueDate":"2022-11-10T03:00:00.000Z","CollectionType":1,"StatusBillet":2,"DebitDate":null,"CancellationReason":null,"CancellationReasonDescription":null,"FinancialAgreement":{"Entities":null,"CardAgreementLegalEntities":null,"FinancialAccount":null,"FinancialAgreementType":4,"Id":"0730d478-0c73-4651-9a86-e2c417d4ad32","AgreementCode":"2616963","TradingBook":"101","CurrencyType":"R$","NextNumber":195648,"NextOurNumber":148678,"MaxNextOurNumber":null,"NumberMax":null,"MinDays":null,"Active":true,"IsInternet":true,"AccessKey":null,"MerchantId":null,"ViewEntities":null,"AdditionalInformation":null,"HasBillet":null},"Contract":null,"StatusBilling":0,"Number":"101.0094872","OurNumber":"1423169","StatusPayment":0,"InstallmentsLites":[{"Operation":4,"Id":"9cd543ce-7532-4905-9bd7-788cf4e44f55","InstallmentNumber":2,"Value":191.67,"InstallmentPlanningType":0,"InstallmentPlanningReferenceId":null,"AccountsReceivableType":{"LegalEntity":{"Id":"97c58956-afb1-49e6-91ed-865b8cc573ed","Name":null,"Parent":null,"InitialDate":"/Date(-62135575200000)/","EndingDate":null,"Document":null,"CompanyName":null,"LastDateUpdated":"/Date(-62135575200000)/","NextNumberReceipt":null,"NextNumberAuthorization":null,"AdministrativeRegion":null,"Regime":null,"Email":null,"Phone":null,"EntityCode":null,"EntityCode_Name":null},"Code":null,"Id":"8ca39726-0d54-49cb-b7c4-6a18222fc037"},"InstallmentPlanningBilletLite":{"Operation":4,"Id":"34dc132d-b6b3-4a0b-a6da-574638690a64","Percentage":100},"LatesFeePaid":0,"InterestRatePaid":0,"PostedFee":0,"PostedInterest":0,"TotalValue":197.06,"TotalOpenValue":197.06}],"Devolution":null,"DevolutionIsAuthorized":false,"BilletCommunicationInfo":null,"BilletRefunded":null,"NotValidateDueDay":false,"ExternalNumber":0,"NewBilletRegistered":false,"Value":191.67,"Fee":3.83,"FeePaid":0,"AlterFee":0,"FeeOpen":3.83,"Interest":0.06,"InterestPaid":0,"InterestOpen":1.56,"TotalValue":197.06,"TotalOpenValue":197.06,"GrossTotalOpenValue":191.67,"Adjustment":0,"TotalPaid":0,"ExpectedAdjustment":0,"IgnoreDiscount":false,"BilletExpectedAdjustment":0},{"Billet":null,"Operation":4,"Id":"20204042-6c97-4c59-a6e4-7822af686034","Pending":false,"Responsible":{"Documents":null,"Id":"25c408f7-3cdf-4a02-998b-3edacf96e1a6","PersonIdExternal":"6aef367c-60bd-47c0-81f8-ae600125c083","FullName":"Hlynyz Beryu Ce Mylme","Email":"ht@hortolandia.com","LastDateUpdated":"2022-03-23T22:04:41.050Z","SituationTypePersonReceivingService":0,"Country":{"Id":1,"Name":null,"Code":null,"Currency":null,"DecimalDigits":0,"LanguageCode":null,"RevenueCode":null,"CountryIdExternal":"00000000-0000-0000-0000-000000000000","CountryAreaCode":null,"CountryIdPeople":"00000000-0000-0000-0000-000000000000"},"IsResponsible":false,"IsBeneficiary":false},"DueDate":"2022-10-03T03:00:00.000Z","CollectionType":1,"StatusBillet":2,"DebitDate":null,"CancellationReason":null,"CancellationReasonDescription":null,"FinancialAgreement":{"Entities":null,"CardAgreementLegalEntities":null,"FinancialAccount":null,"FinancialAgreementType":4,"Id":"0730d478-0c73-4651-9a86-e2c417d4ad32","AgreementCode":"2616963","TradingBook":"101","CurrencyType":"R$","NextNumber":195648,"NextOurNumber":148678,"MaxNextOurNumber":null,"NumberMax":null,"MinDays":null,"Active":true,"IsInternet":true,"AccessKey":null,"MerchantId":null,"ViewEntities":null,"AdditionalInformation":null,"HasBillet":null},"Contract":null,"StatusBilling":0,"Number":"101.0094871","OurNumber":"1424343","StatusPayment":0,"InstallmentsLites":[{"Operation":4,"Id":"15c07ca1-0f54-4c95-9760-b22598911451","InstallmentNumber":1,"Value":191.67,"InstallmentPlanningType":0,"InstallmentPlanningReferenceId":null,"AccountsReceivableType":{"LegalEntity":{"Id":"97c58956-afb1-49e6-91ed-865b8cc573ed","Name":null,"Parent":null,"InitialDate":"/Date(-62135575200000)/","EndingDate":null,"Document":null,"CompanyName":null,"LastDateUpdated":"/Date(-62135575200000)/","NextNumberReceipt":null,"NextNumberAuthorization":null,"AdministrativeRegion":null,"Regime":null,"Email":null,"Phone":null,"EntityCode":null,"EntityCode_Name":null},"Code":null,"Id":"8ca39726-0d54-49cb-b7c4-6a18222fc037"},"InstallmentPlanningBilletLite":{"Operation":4,"Id":"9967e876-973f-4fa5-9fc1-1884157610f2","Percentage":100},"LatesFeePaid":0,"InterestRatePaid":0,"PostedFee":0,"PostedInterest":0,"TotalValue":199.34,"TotalOpenValue":199.34}],"Devolution":null,"DevolutionIsAuthorized":false,"BilletCommunicationInfo":null,"BilletRefunded":null,"NotValidateDueDay":false,"ExternalNumber":0,"NewBilletRegistered":false,"Value":191.67,"Fee":3.83,"FeePaid":0,"AlterFee":0,"FeeOpen":3.83,"Interest":0.06,"InterestPaid":0,"InterestOpen":3.84,"TotalValue":199.34,"TotalOpenValue":199.34,"GrossTotalOpenValue":191.67,"Adjustment":0,"TotalPaid":0,"ExpectedAdjustment":0,"IgnoreDiscount":false,"BilletExpectedAdjustment":0},{"Billet":null,"Operation":4,"Id":"ebb7df0b-b0b3-4d4c-86ca-910af1ec15d0","Pending":false,"Responsible":{"Documents":null,"Id":"25c408f7-3cdf-4a02-998b-3edacf96e1a6","PersonIdExternal":"6aef367c-60bd-47c0-81f8-ae600125c083","FullName":"Hlynyz Beryu Ce Mylme","Email":"ht@hortolandia.com","LastDateUpdated":"2022-03-23T22:04:41.050Z","SituationTypePersonReceivingService":0,"Country":{"Id":1,"Name":null,"Code":null,"Currency":null,"DecimalDigits":0,"LanguageCode":null,"RevenueCode":null,"CountryIdExternal":"00000000-0000-0000-0000-000000000000","CountryAreaCode":null,"CountryIdPeople":"00000000-0000-0000-0000-000000000000"},"IsResponsible":false,"IsBeneficiary":false},"DueDate":"2022-12-10T03:00:00.000Z","CollectionType":1,"StatusBillet":2,"DebitDate":null,"CancellationReason":null,"CancellationReasonDescription":null,"FinancialAgreement":{"Entities":null,"CardAgreementLegalEntities":null,"FinancialAccount":null,"FinancialAgreementType":4,"Id":"0730d478-0c73-4651-9a86-e2c417d4ad32","AgreementCode":"2616963","TradingBook":"101","CurrencyType":"R$","NextNumber":195648,"NextOurNumber":148678,"MaxNextOurNumber":null,"NumberMax":null,"MinDays":null,"Active":true,"IsInternet":true,"AccessKey":null,"MerchantId":null,"ViewEntities":null,"AdditionalInformation":null,"HasBillet":null},"Contract":null,"StatusBilling":0,"Number":"101.0094873","OurNumber":"1424238","StatusPayment":0,"InstallmentsLites":[{"Operation":4,"Id":"6d9cd60b-505a-406d-a809-beded1d0a2e5","InstallmentNumber":3,"Value":191.67,"InstallmentPlanningType":0,"InstallmentPlanningReferenceId":null,"AccountsReceivableType":{"LegalEntity":{"Id":"97c58956-afb1-49e6-91ed-865b8cc573ed","Name":null,"Parent":null,"InitialDate":"/Date(-62135575200000)/","EndingDate":null,"Document":null,"CompanyName":null,"LastDateUpdated":"/Date(-62135575200000)/","NextNumberReceipt":null,"NextNumberAuthorization":null,"AdministrativeRegion":null,"Regime":null,"Email":null,"Phone":null,"EntityCode":null,"EntityCode_Name":null},"Code":null,"Id":"8ca39726-0d54-49cb-b7c4-6a18222fc037"},"InstallmentPlanningBilletLite":{"Operation":4,"Id":"099b0580-c9b0-4a45-be30-b3db1b06fa8d","Percentage":100},"LatesFeePaid":0,"InterestRatePaid":0,"PostedFee":0,"PostedInterest":0,"TotalValue":191.67,"TotalOpenValue":191.67}],"Devolution":null,"DevolutionIsAuthorized":false,"BilletCommunicationInfo":null,"BilletRefunded":null,"NotValidateDueDay":false,"ExternalNumber":0,"NewBilletRegistered":false,"Value":191.67,"Fee":0,"FeePaid":0,"AlterFee":0,"FeeOpen":0,"Interest":0.06,"InterestPaid":0,"InterestOpen":0,"TotalValue":191.67,"TotalOpenValue":191.67,"GrossTotalOpenValue":191.67,"Adjustment":0,"TotalPaid":0,"ExpectedAdjustment":0,"IgnoreDiscount":false,"BilletExpectedAdjustment":0},{"Billet":null,"Operation":4,"Id":"d7d9f30d-15e2-4719-a46b-3e8de925e15a","Pending":false,"Responsible":{"Documents":null,"Id":"25c408f7-3cdf-4a02-998b-3edacf96e1a6","PersonIdExternal":"6aef367c-60bd-47c0-81f8-ae600125c083","FullName":"Hlynyz Beryu Ce Mylme","Email":"ht@hortolandia.com","LastDateUpdated":"2022-03-23T22:04:41.050Z","SituationTypePersonReceivingService":0,"Country":{"Id":1,"Name":null,"Code":null,"Currency":null,"DecimalDigits":0,"LanguageCode":null,"RevenueCode":null,"CountryIdExternal":"00000000-0000-0000-0000-000000000000","CountryAreaCode":null,"CountryIdPeople":"00000000-0000-0000-0000-000000000000"},"IsResponsible":false,"IsBeneficiary":false},"DueDate":"2023-02-10T03:00:00.000Z","CollectionType":1,"StatusBillet":2,"DebitDate":null,"CancellationReason":null,"CancellationReasonDescription":null,"FinancialAgreement":{"Entities":null,"CardAgreementLegalEntities":null,"FinancialAccount":null,"FinancialAgreementType":4,"Id":"0730d478-0c73-4651-9a86-e2c417d4ad32","AgreementCode":"2616963","TradingBook":"101","CurrencyType":"R$","NextNumber":195648,"NextOurNumber":148678,"MaxNextOurNumber":null,"NumberMax":null,"MinDays":null,"Active":true,"IsInternet":true,"AccessKey":null,"MerchantId":null,"ViewEntities":null,"AdditionalInformation":null,"HasBillet":null},"Contract":null,"StatusBilling":0,"Number":"101.0094875","OurNumber":"1424920","StatusPayment":0,"InstallmentsLites":[{"Operation":4,"Id":"bb88cd77-e99c-4e80-a216-d60a4cc7815f","InstallmentNumber":5,"Value":191.66,"InstallmentPlanningType":0,"InstallmentPlanningReferenceId":null,"AccountsReceivableType":{"LegalEntity":{"Id":"97c58956-afb1-49e6-91ed-865b8cc573ed","Name":null,"Parent":null,"InitialDate":"/Date(-62135575200000)/","EndingDate":null,"Document":null,"CompanyName":null,"LastDateUpdated":"/Date(-62135575200000)/","NextNumberReceipt":null,"NextNumberAuthorization":null,"AdministrativeRegion":null,"Regime":null,"Email":null,"Phone":null,"EntityCode":null,"EntityCode_Name":null},"Code":null,"Id":"8ca39726-0d54-49cb-b7c4-6a18222fc037"},"InstallmentPlanningBilletLite":{"Operation":4,"Id":"5de98238-16a2-4c4c-8836-15f0252bdeb2","Percentage":100},"LatesFeePaid":0,"InterestRatePaid":0,"PostedFee":0,"PostedInterest":0,"TotalValue":191.66,"TotalOpenValue":191.66}],"Devolution":null,"DevolutionIsAuthorized":false,"BilletCommunicationInfo":null,"BilletRefunded":null,"NotValidateDueDay":false,"ExternalNumber":0,"NewBilletRegistered":false,"Value":191.66,"Fee":0,"FeePaid":0,"AlterFee":0,"FeeOpen":0,"Interest":0.06,"InterestPaid":0,"InterestOpen":0,"TotalValue":191.66,"TotalOpenValue":191.66,"GrossTotalOpenValue":191.66,"Adjustment":0,"TotalPaid":0,"ExpectedAdjustment":0,"IgnoreDiscount":false,"BilletExpectedAdjustment":0}]}],"EarlyReceivingCreditTotal":0}]',
        },
        {
          headers: {
            accept: '*/*',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'x-requested-with': 'XMLHttpRequest',
            'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      // GET INVOICE LINK BY RESPONSABLE ID
      response = http.post(
        'https://7edu-br-financial-sandbox.educadventista.org/AccountsReceiving/AccountsReceiving/GetInvoiceLinkByResponsableId',
        {
          responsibleId: '25c408f7-3cdf-4a02-998b-3edacf96e1a6',
          periodId: '02ba1ec2-7d2b-4d76-a8f7-cfe972e93388',
        },
        {
          headers: {
            accept: '*/*',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'x-requested-with': 'XMLHttpRequest',
            'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      // GET BY PERSON ID
      response = http.post(
        'https://7edu-br-financial-sandbox.educadventista.org/AccountsReceiving/AccountsReceiving/GetByPersonId',
        {
          personId: '25c408f7-3cdf-4a02-998b-3edacf96e1a6',
          isResponsible: 'true',
          isBeneficiary: 'false',
          periodId: '02ba1ec2-7d2b-4d76-a8f7-cfe972e93388',
          onlyContractWithDebts: 'false',
        },
        {
          headers: {
            accept: '*/*',
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'x-requested-with': 'XMLHttpRequest',
            'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      // GET TRANSACTION DETAIL BILLET PAID
      response = http.post(
        'https://7edu-br-financial-sandbox.educadventista.org/AccountsReceiving/AccountsReceiving/GetTransactionDetailBilletPaid',
        null,
        {
          headers: {
            accept: '*/*',
            'x-requested-with': 'XMLHttpRequest',
            'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
    }
  )

  // Automatically added sleep
  sleep(1)
}