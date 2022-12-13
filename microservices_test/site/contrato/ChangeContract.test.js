import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {
  ext: {
    loadimpact: {
      distribution: { 'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 } },
      apm: [],
    },
  },
//   thresholds: {},
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
}

export default function scenario_1() {
  let response

  group(
    'LOGIN - https://login.sdasystems.org/login?signin=33ed67776dc16f35a109ed854681bd6c',
    function () {
      response = http.post(
        'https://login.sdasystems.org/login?signin=33ed67776dc16f35a109ed854681bd6c',
        {
          'idsrv.xsrf':
            'l44ZZ8PVIl9rYfUEWQEF66_kGRrxaJ1ayayTkdo30q0IlFAG5-28XnQFkYPaDvHYSCmd8GKLALrcFiJ_kUPfP3-wecWETlYAYOpg9ebklOw',
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
    }
  )
  console.log(`LOGIN ===> ${response.json()}`)

  group('MODULO FINANCEIRO - https://7edu-br-financial-sandbox.educadventista.org/', function () {
    response = http.post(
      'https://7edu-br-financial-sandbox.educadventista.org/',
      {
        code: 'ef92dac9c66a964806ffc35ead7b85d7',
        id_token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjI0Uk5yaEYtYXo3WDh3UndVUFY5emJKQkZYayIsImtpZCI6IjI0Uk5yaEYtYXo3WDh3UndVUFY5emJKQkZYayJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLnNkYXN5c3RlbXMub3JnIiwiYXVkIjoiMzdhODdiYzMtYjg5Yi00NWZiLTk0YjUtZWM1ZWFhN2U1NDViIiwiZXhwIjoxNjcwMzI5Mjc2LCJuYmYiOjE2NzAzMjg5NzYsIm5vbmNlIjoiNjM4MDU5MjU3NjUzNzM0NDM1Lk4yVmtNR1psT0RrdFpUSXhaaTAwWkRJMUxUbGxPRFV0TUdabE1HWTRaRFF5WldFd1lqQXdZVEU1TnpBdE5Ea3pNeTAwTVRZMUxXRTJNREV0TXpCbFlXUXlNalkyWlRKayIsImlhdCI6MTY3MDMyODk3NiwiYXRfaGFzaCI6Ikt2SkloRDU0RlN6emRBLXQtSTZYenciLCJjX2hhc2giOiI3WHo4MUxUX2k4bDhkSWQxalZNYlJnIiwic2lkIjoiMzQ4Y2I4NjkzOWI1OTkxMzAzZmMwM2FiNjJkODkyZTEiLCJzdWIiOiIyYzRiNjFlYS05YTkyLTRlYzUtODIzZS03ODU0OTVmN2QxZjgiLCJhdXRoX3RpbWUiOjE2NzAzMjg5NzUsImlkcCI6IklBVGVjX0dBTnYzIiwiZ2l2ZW5fbmFtZSI6InJldGhpbmsiLCJuYW1lIjoicmV0aGluayByZXRoaW5rIiwiZmFtaWx5X25hbWUiOiJyZXRoaW5rIiwiZW1haWwiOiJyZXRoaW5rQHlvcG1haWwuY29tIiwiYmlydGhkYXRlIjoiMjAwMC0wMS0wMSIsImdlbmRlciI6Im1hbGUiLCJsb2NhbGUiOiJwdC1CUiIsInByZWZlcnJlZF91c2VybmFtZSI6InJldGhpbmsiLCJwaWN0dXJlIjoiaHR0cHM6Ly9zYWQtdXMtZm0tMS5hY2NvdW50cy5saXZlLndzLnNkYXN5c3RlbXMub3JnL3NkYXVzZXJzL0hhbmRsZXJzL1VzZXJQaWN0dXJlLmFzaHg_SWQ9ZmY1YmQyMWQtNzBiOC00ODU0LTkyZWEtMzk2OTlhMTgwN2ViIiwiYW1yIjpbIlNkYS5BY2NvdW50cyJdfQ.PqyGqahf-pqGglb4IWjrxkNoyQ1k-V1joBrGVWVEJ18y6mtJ1tChxtVsK9uFyu_86Dfbr_gBCnxi-oBUvupqq_Af9thj5a0IU3YN4mgu-cqauqONBnXG1YCCECSbmDauRdqi3uyhdsLPxxKtdc2inlqjm4MC5Z_3KkCE7Mic9GU-Ux6Y_uyTjybo5QTmqbvnZmwPcnfjNNJXQDFPYukQOa60wwV4lpT1B9exE4OipMJGZezJr-3z2V_zpeSbNA1k46ED5v2-kprZM_qhQTjDc2RMz-TDfcDmvcT_0FR5JihgQZZLTT5W44ujdrVI_UZFnxwud2R7Qs5lFlqQ7ONXEDpnoMVKauzgDGjlq2e9WLiiBuvIUG-ildhMLabiTVkJ3kajPDr86B0W1yqhLa5bCGb2wKafUbLgMKjYtAFcCPuN9hxzodEUgfD7i0MQWEbdlI-463QqKkmTo9xCI_7LQp2q_azXRMhjDbh0UqYOGSTYvHWDvJUVMW6utgCUcfHsUwReIVQsoNNOX1zDIgsswDgbHmiqeLLo7a7vxBhmACu2JsB1ZoQ_eR5MSCXWdl8dswrug-El4Pj3Y_MDzZsm0Ad9GF6V-i2U5SHFAs0C7FG-RkLcCVBlpHN9mggcV5Wt1b-rjgI_GyuKU_-Gtn5EMZ5gTyw5tT_Ed8I-qqO06JE',
        access_token: 'c57fdbc5684d8ea675b7e58b36652262',
        token_type: 'Bearer',
        expires_in: '3600',
        scope: 'openid profile email',
        state:
          'OpenIdConnect.AuthenticationProperties=bKPHj49CSsx2YueqiSSoiDEZJrj1rYV8SXha6h16852czjV7mNNPHxwHlcWpt_eO4-I9QaQVpHreAGBIM-kgit1Ef9DihMLam9ja6nFY9ba1MiPN_2-Kg36xhWEEkzaMDtSi0X24SV5WpSfNUY8b7_OCWX92hK707uroO2l3NIbad1Yj1FlUNS3_Fb2RpdyEUlmftSmu_5LU2mKrUyLsul62mFBQ1kPRbrLfv2rNKD7m4-MIKjj9wcJ1TFy1x6BsQhre7nLRposZzhrniiWGkg',
        session_state:
          'Y9wpQiWjead_U6wpB64xTwoCa9T_gtt3ps_tYqoV4Yg.d00dcd2bd669ef0db7aad5c3d0519423',
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
  })
  console.log(`MODULO FINANCEIRO ===> ${response.json()}`)

  group(
    'ACESSAR ALTERAÇÃO DE CONTRATO - https://7edu-br-financial-sandbox.educadventista.org/',
    function () {
      response = http.post(
        'https://7edu-br-financial-sandbox.educadventista.org/',
        {
          code: 'd25fd517c3975fb0bf78467832be26c7',
          id_token:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjI0Uk5yaEYtYXo3WDh3UndVUFY5emJKQkZYayIsImtpZCI6IjI0Uk5yaEYtYXo3WDh3UndVUFY5emJKQkZYayJ9.eyJpc3MiOiJodHRwczovL2xvZ2luLnNkYXN5c3RlbXMub3JnIiwiYXVkIjoiMzdhODdiYzMtYjg5Yi00NWZiLTk0YjUtZWM1ZWFhN2U1NDViIiwiZXhwIjoxNjcwMzI5Mjc5LCJuYmYiOjE2NzAzMjg5NzksIm5vbmNlIjoiNjM4MDU5MjU3Nzg4MzgzNDMxLk4yVTRaRGxrTURndFl6ZzFaUzAwWkRZNExXSm1OVEV0TUdNek1qVTRPR1V6TlRobU1HWTBOakUxTXpVdE56a3haUzAwWkdNNExUZzJORGN0TjJWaE9USXdZalkzWm1VeSIsImlhdCI6MTY3MDMyODk3OSwiYXRfaGFzaCI6ImVsaUFwcXpEc2tMQ09XdXhzRWdhRGciLCJjX2hhc2giOiJKVXZNcUF1RzI2NlVtYmdHYXBTTVJ3Iiwic2lkIjoiMzQ4Y2I4NjkzOWI1OTkxMzAzZmMwM2FiNjJkODkyZTEiLCJzdWIiOiIyYzRiNjFlYS05YTkyLTRlYzUtODIzZS03ODU0OTVmN2QxZjgiLCJhdXRoX3RpbWUiOjE2NzAzMjg5NzUsImlkcCI6IklBVGVjX0dBTnYzIiwiZ2l2ZW5fbmFtZSI6InJldGhpbmsiLCJuYW1lIjoicmV0aGluayByZXRoaW5rIiwiZmFtaWx5X25hbWUiOiJyZXRoaW5rIiwiZW1haWwiOiJyZXRoaW5rQHlvcG1haWwuY29tIiwiYmlydGhkYXRlIjoiMjAwMC0wMS0wMSIsImdlbmRlciI6Im1hbGUiLCJsb2NhbGUiOiJwdC1CUiIsInByZWZlcnJlZF91c2VybmFtZSI6InJldGhpbmsiLCJwaWN0dXJlIjoiaHR0cHM6Ly9zYWQtdXMtZm0tMS5hY2NvdW50cy5saXZlLndzLnNkYXN5c3RlbXMub3JnL3NkYXVzZXJzL0hhbmRsZXJzL1VzZXJQaWN0dXJlLmFzaHg_SWQ9ZmY1YmQyMWQtNzBiOC00ODU0LTkyZWEtMzk2OTlhMTgwN2ViIiwiYW1yIjpbIlNkYS5BY2NvdW50cyJdfQ.dOZQia_23mPmLehRubqY2nqqrcdopEnOb6FiPloEa7u0Vf0jR9iR-ZqqWB-Z75wnhM0ZZy_y9KUBXyUvWPAayLmufl-wpXL5LoOjZ1hEgYQWqohNqghJxHYLE6V4MtctHqRUqdE8jlAxqmcHFZlfOV0tfv_RGz6N30v3eATo1bossnlMOgUZDgGodq6ACn0wGK1hhrjugIS83ERzEKd1fcrAU2lOKo3h0U0zRs8GB-ZyO3uGdqX23mB87053EF2Y3aoOEy3syFvKpBa36vstjexhUAHvWTysmR4mPdnBp-12dcCXrQEbwYr7DoHOp68mTVlV36JJGwasqYIPqlvIcArI3t7HhKX0eKrVWtsF4DrTkzjsQtvADWxUhRwPiP9S3lRZwKDVPwQKUneB5A5dPO4Vr2qq_2pJ7Z3rFzox2Zbr0ch7YhCgan6AvCAPbaVpggusSu52_vWoXb8p-JOSkBkzBHAVuHz7lJ2-_JPlUSwga_2qM1sLsZbB0c20KujiUb_0KPFjvOxUhVKjCNBrHHGwtSIDuIdenpgep1M3N1j1ZysLnr28TSs_BPP7JUGys2reCv3NsB_qWm4UhozIOkD_a3hEJvd2jTj02l_37YnYfSnTOAzH7g-h50Zeu53_TM_CO_JpwTaYiXGzOeaYsd-shdRxJO3_9EGI7WOrmkE',
          access_token: '77bdf99f075a31508d6a803617fe6bb6',
          token_type: 'Bearer',
          expires_in: '3600',
          scope: 'openid profile email',
          state:
            'OpenIdConnect.AuthenticationProperties=E2CK_FftVQXj1z6rlKj1VNlQjudr_zZzVz1c0mt1-k03hUnVMDIuFT9UEDJ38O_O1F8k6nFanvuoD68gmwddS7MzVHh10dv-T1ZXio8MjqQyZEXHS5weeH2Loz45wUiNJlJwKhMxlIOo5qddn-WNau9qI_XAk57VZysTv0w3XLf6QLWidsQ8WtMp6DZEl2IkWRFBwAhHYh0P0pHqIVacs9e3JLDCFlisjMUCeL7wncI0RYIiqM_NFpeYOISnPCIcWtrBivL6iRD5fTaGrMv9tA',
          session_state:
            'd3N0HrCHA0oPy23RI14G9APXJbiBmH7QZ-2S3BJVcko.3c5eb94772ce811d93059b48c6c75cce',
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
      

      response = http.get(
        'https://7edu-br-financial-sandbox.educadventista.org/ShellInfo/GetMenu',
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
    }
  )

  group(
    'ALTERAR CONTRATO - https://7edu-br-financial-sandbox.educadventista.org/AccountsReceiving/ApiContractsChanges',
    function () {
      response = http.get(
        'https://7edu-br-financial-sandbox.educadventista.org/AccountsReceiving/ApiContractsChanges',
        {
          headers: {
            'upgrade-insecure-requests': '1',
            'sec-ch-ua': '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.post(
        'https://7edu-br-financial-sandbox.educadventista.org/AccountsReceiving/ApiContractsChanges/GetContractsChanges',
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

      response = http.post(
        'https://7edu-br-financial-sandbox.educadventista.org/AccountsReceiving/ApiContractsChanges/CheckAlreadyChanged',
        {
          contractChangeId: '4f551158-f5b6-48c5-889f-b65cc074b005',
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
    }
  )

  // Automatically added sleep
  sleep(1)
}