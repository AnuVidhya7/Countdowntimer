  function timer() { 
      const input = document.getElementById('dateTimeInput').value; 
      const countdown = new Date(input).getTime();  
      if (isNaN(countdown) || countdown <= Date.now()) { 
        alert("Please enter  future date and time."); 
        return; 
      } 
      const x = document.getElementById('timer');  
      const interval = setInterval(() => { 
        const current = Date.now(); 
        const distance = countdown - current; 
        if (distance <= 0) { 
          clearInterval(interval);  
          x.textContent = "Time's Up!"; 
          return; 
        } 
        const days = Math.floor(distance / (1000 * 60 * 60 * 24)); 
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); 
        const seconds = Math.floor((distance % (1000 * 60)) / 1000); 
        x.textContent = `${String(days).padStart(2, '0')}:${String(hours).padStart(2, 
'0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`; 
      }, 1000); 
    }  