//Created in 01.01.2022
//For free use
function NPStatus(number) {
  if(number){
    var url = "https://api.novaposhta.ua/v2.0/json/";// the "/" symbol after "json"  is the most important here
    var rdata = {
      "modelName": "TrackingDocument",
      "calledMethod": "getStatusDocuments",
      "methodProperties": {
          "Documents": [
            {
              "DocumentNumber": number.toString()
            }
          ]
      } 
    };
    var options = {
      'method' : 'post',
      'contentType': 'application/json',
      'payload' : JSON.stringify(rdata)
    };
    
    //do request
    var jsondata = UrlFetchApp.fetch(url, options);

    //parse data
    var object = JSON.parse(jsondata.getContentText());

    if(object.success){
      return object.data[0].Status;
    }else{
      return '[Помилка]';
    }
  }else{
    return '';
  }
}
