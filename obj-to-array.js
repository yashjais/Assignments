const obj = {"base":"USD","date":"2019-12-11","time_last_updated":1576023045,"rates":{"USD":1,"AED":3.671935,"ARS":59.929293,"AUD":1.467163,"BGN":1.765666,"BRL":4.141894,"BSD":1,"CAD":1.323515,"CHF":0.986284,"CLP":772.526172,"CNY":7.037737,"COP":3353.434783,"CZK":23.052285,"DKK":6.748967,"DOP":52.828082,"EGP":16.125653,"EUR":0.902657,"FJD":2.175774,"GBP":0.759876,"GTQ":7.673764,"HKD":7.826666,"HRK":6.715911,"HUF":299.270341,"IDR":13816.842298,"ILS":3.468352,"INR":70.944779,"ISK":121.614748,"JPY":108.64814,"KRW":1191.081018,"KZT":385.645,"MXN":19.232609,"MYR":4.162986,"NOK":9.174844,"NZD":1.527605,"PAB":1,"PEN":3.385073,"PHP":50.779855,"PKR":154.87751,"PLN":3.871673,"PYG":6427.416667,"RON":4.314591,"RUB":63.605238,"SAR":3.749908,"SEK":9.521817,"SGD":1.359463,"THB":30.303086,"TRY":5.806879,"TWD":30.46923,"UAH":23.686316,"UYU":37.808333,"VND":23215.789474,"ZAR":14.745288}}

console.log(obj.rates)

const rates = Object.keys(obj.rates)
const values = Object.values(obj.rates)

const currencies = []

for(let i=0;i<rates.length;i++){
    currencies.push([rates[i],values[i]])
}

console.log(currencies)