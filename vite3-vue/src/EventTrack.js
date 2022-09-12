export function EventTrack() {
  let baseUrl = 'http://localhost:8888'
  let query = {
    name: 'yyb',
    age: 20
  }
  let queryStr = Object.entries(query).map(([key, value]) =>`${key}=${value}`).join('&')
  let img = new Image()
  img.src = `${baseUrl}?${queryStr}`

  let a = navigator.sendBeacon(baseUrl, query)
  console.log('sendBeacon =>', a);
  console.log('screen => ', document.documentElement.clientHeight, document.documentElement.clientWidth);
  const P = window.performance.timing
  const DNS = P.domainLookupEnd - P.domainLookupStart
  console.log('DNS :>> ', DNS);
  const TCP = P.connectEnd - P.connectStart
  console.log('TCP :>> ', TCP);
  const FP = P.domLoading - P.navigationStart
  console.log('FP :>> ', FP);
  const DCL = P.domContentLoadedEventEnd - P.navigationStart
  console.log('DCL :>> ', DCL);
  console.log('P :>> ', P);
  console.log('document.referrer :>> ', document.referrer);
  console.log('window.screen :>> ', window.screen.height);
}

{
  class StatisticSDK {
    constructor(id) {
      this.productId = id
    }

    send(baseUrl, query={}) {
      query.productID = this.productId;
      let queryStr = Object.entries(query).map(([key, value]) =>`${key}=${value}`).join('&')
      let img = new Image()
      img.src = `${baseUrl}?${queryStr}`
    }

    event(key, val = {}) {
      let eventUrl = 'https://demo'
      this.send(eventUrl, {event: key, ...val})
    }
  }
}
