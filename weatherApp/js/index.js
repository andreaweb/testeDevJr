 if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(function(position) {
     $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
     $.ajax({
         url: 'http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&APPID=b717b7c6deec9727376949aa2f2fc379',
         type: 'GET',
         data: {},
         dataType: 'json',
         success: function(data) {
           document.getElementById("city").innerHTML = data.name;
           var cel = Math.floor(data.main.temp_max - 273.15);
           var far = Math.floor(data.main.temp_max * 9 / 5 - 459.67);
           $(".farenheit").append(far + 'ºF <br>');
           $(".celsius").append(cel + 'ºC <br>');
           $("button").click(function(event){
             $(".celsius , .farenheit").toggleClass("hidden");
           });
           document.getElementById("main").innerHTML = data.weather[0].main;
           var conditions = data.weather[0].id;
    
      switch(true){
             case conditions <= 300: //thunderstorm
  $('body').css("background-image", "#ff0");
               break;
               case conditions <= 400: //drizzle
  $('body').css("background-image", "url(https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xfp1/t31.0-8/12779168_456020204586708_1176157215606992888_o.jpg)");
               break;
               case conditions <= 600: //rain
  $('body').css("background-image", "url(https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xfa1/t31.0-8/12771650_456020214586707_5446463029052544416_o.jpg)");
               break;
               case conditions <= 700: //snow
  $('body').css("background-image", "url(https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xpt1/t31.0-8/12783670_456020764586652_8788116819675480585_o.jpg)");
               break;
               case conditions <= 799: //atmosphere
  $('body').css("background-image", "url(https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xtl1/t31.0-8/12496330_456020111253384_8479269646696011751_o.jpg)");
               break;
               case 800: //clear
  $('body').css("background-image", "url(https://scontent-gru2-1.xx.fbcdn.net/hphotos-xfl1/t31.0-8/12764625_456020041253391_2397703114611276467_o.jpg)");
               break;
               case conditions <= 900: //clouds
  $('body').css("background-image", "url(https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xtp1/t31.0-8/12764361_456020121253383_7266592342125250981_o.jpg)");
               break;
        case conditions > 900: //extreme
            $('body').css("background-image", "url(https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xfp1/t31.0-8/12795153_456020187920043_4168457795022619817_o.jpg)");
               break;
           }
         };
     });
   })
 };