let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function (){
    var result = JSON.parse(request.response);
    var res = result.filter((ele) => ele.population < 2_00_000);
    console.log(res)

}
