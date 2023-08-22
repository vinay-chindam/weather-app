const apiKey = "d1845658f92b31c64bd94f06f7188c9c";


const place=document.querySelector(".place");
const submit=document.querySelector(".submit");
const out=document.querySelector(".out");

submit.addEventListener("click", function() {
  const value = place.value;
  
  getWeather(value);
  console.log("added");
  

  place.value="";
  
});

async function getWeather(value) {
  let a= 'https://api.openweathermap.org/data/2.5/weather?q='+value+'&appid='+apiKey;
          
  if(value===''){
    console.log("nothing in input");
    return;
  }
  try {
    console.log("something  26");
    
    const response = await fetch(a);
    console.log("at 29");
    
    if (!response.ok) {
      throw new Error('Weather data not available');
    }

    const data = await response.json();
    console.log(data);
     const temp=document.querySelector(".temperature");
     const wind=document.querySelector(".wind-speed");
     const desc=document.querySelector(".description");

     temp.textContent=Math.round(data.main.temp-273);
     wind.textContent=data.wind.speed;
     desc.textContent=data.weather[0].description;

    
    

    
    
  } catch (error) {
    console.log('Error:', error);
  }
    
      
    
}