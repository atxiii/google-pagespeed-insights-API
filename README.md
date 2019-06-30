# Function google page speed insights for google spreadsheet with API and google Apps script

> [Demo](https://docs.google.com/spreadsheets/d/15mPVxhuZ8W2r__F0F17RLjR1s2E2KPdzQf5KEBePBlw/edit?usp=sharing)



### Getting Start

1- [Get Started with the PageSpeed Insights API](https://developers.google.com/speed/docs/insights/v5/get-started)
Set up an API [key](https://console.developers.google.com/apis/credentials)

2- [Create a Spreedsheet](https://docs.google.com/spreadsheets/u/0/) and start a new spreadsheet.

3- then click tools > script editor

4- paste below code

```
function fch(site ,type,strategy){
  const API_KEY =  "AIzaSyAwMOerYE4_5j8082LrOBKf_jM5Wu8Jy6A";
  const site_url = site;
  const url_key= "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=";
  const url = url_key.concat(site_url,'&key=',API_KEY,'&strategy=',strategy);
  const response = UrlFetchApp.fetch(url);
  const json = response.getContentText();
  const data= JSON.parse(json);  
  console.log(data);
  
  switch (type){
  
    case 'Speed Index':
      return parseFloat(data.lighthouseResult.audits['speed-index'].displayValue); 
      break;
      
    case 'First Contentful Paint':
      return parseFloat(data.lighthouseResult.audits['first-contentful-paint'].displayValue); 
      break;
      
    case 'Time To Interactive':
      return parseFloat(data.lighthouseResult.audits['interactive'].displayValue); 
      break;
      
    case 'First Meaningful Paint':
      return parseFloat(data.lighthouseResult.audits['first-meaningful-paint'].displayValue); 
      break;
      
    case 'First CPU Idle':
      return parseFloat(data.lighthouseResult.audits['first-cpu-idle'].displayValue); 
      break;
      
    case 'Estimated Input Latency':
      return parseFloat(data.lighthouseResult.audits['estimated-input-latency'].displayValue); 
      break;
      
    default:
      return 'Please check your keyword is corrected!';
      break;

  }

}

```

5- back to spreadsheet

6- setup spreatsheet 

cell A3 => {put Address}
cell b2 => {type or parameter of google page speed such as speed-index}
cell b1 => {type mobile or desktop}

See Demo.

7- add formular (cell b3)

```
=IFERROR(fch($A3,B$2,$B$1),0)

```
