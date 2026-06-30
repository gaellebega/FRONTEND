const apiKey="1234567890abcdef1234567890abcdef";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?q=Kigali&appid=YOUR_API_KEY&units=metric";
async function checkWeather(){
  const response=await fetch(apiUrl+`&appid=${apiKey}`);
}
// you can use the async instead of then to fetch as the method that is used at the above exaple