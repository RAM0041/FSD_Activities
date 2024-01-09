let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function (){
  var result = JSON.parse(request.response);
  var rs = result.filter((ele) => ele.currencies&&ele.currencies.USD )
  rs.map((ele) => console.log(ele.name))
}