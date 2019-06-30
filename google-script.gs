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
