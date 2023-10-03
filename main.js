const url =
  "http://api.exchangeratesapi.io/v1/latest?access_key=8b95c9de27bb9356070368e3bffa2dae";

function getData() {
  fetch(url)
    .then((result) => {
      return result.json();
    })

    .then((data) => {
      //console.log(data);

      const EURO = data.rates.EUR;
      const TRY = EURO / data.rates.TRY;
      const USD = EURO / data.rates.USD;
      const GBP = EURO / data.rates.GBP;
      const PHP = EURO / data.rates.PHP;

      SetData(TRY, USD, GBP, EURO, PHP);
    });
}

//----------addToUİ-----------

function SetData(TRY, USD, GBP, EURO, PHP) {
  const avro = document.getElementById("euro-text");
  const turkishLira = document.getElementById("try-text");
  const dollar = document.getElementById("usd-text");
  const pound = document.getElementById("gpb-text");
  const philipins = document.getElementById("php-text");
  avro.innerText = EURO;
  turkishLira.innerText = TRY;
  dollar.innerText = USD;
  pound.innerHTML = GBP;
  philipins.innerText = PHP;
}

getData();
