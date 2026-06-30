// these are ids so that we have the unique key
const apiKey="1234567890abcdef1234567890abcdef";
// secureconnection https/servername/query parameter which end at ? q stands for query q=kigali which means gimme the weather of keigali appid this have tosend my api
const apiUrl="https://api.openweathermap.org/data/2.5/weather?q=Kigali&appid=YOUR_API_KEY&units=metric";
async function checkWeather(){
  const response=await fetch(apiUrl+`&appid=${apiKey}`);
  var data=await response.json()
  console.log(data)
}
checkWeather()
// the server sends the data in JSAON FORMAT
// you can use the async instead of then to fetch as the method that is used at the above exaple