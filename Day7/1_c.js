let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function (){
    var result = JSON.parse(request.response);
    var res = result.forEach((element) => console.log("The country is:",element.name, "\n","The capital is:", element.capital, "\n","The flag is:", element.flag));
    console.log(res)

}