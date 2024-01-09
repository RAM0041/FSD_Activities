request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function (){
    var result = JSON.parse(request.response);
    var res = result.reduce((acc, ele)=> acc + ele.population, 0);
    console.log(res)
}