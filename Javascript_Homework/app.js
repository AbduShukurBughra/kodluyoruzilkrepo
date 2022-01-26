function askName() {
          var name = prompt("Adınız nedir?");
          document.getElementById("myName").innerText = name;
      }
      
      function showTime() {
          var date = new Date();
          var h = date.getHours();
          var m = date.getMinutes();
          var s = date.getSeconds();
          var weekdayNumber = date.getDay();
      
          var arrayOfWeekdays = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
          var weekdayName = arrayOfWeekdays[weekdayNumber]
      
          h = h < 10 ? "0" + h : h;
          m = m < 10 ? "0" + m : m;
          s = s < 10 ? "0" + s : s;
      
          var time = h + ":" + m + ":" + s + " " + weekdayName;
          document.getElementById("myClock").innerText = time;
          document.getElementById("myClock").textContent = time;
      
          setTimeout(showTime, 1000);
      }
      
      askName();
      showTime();