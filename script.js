
// Check current time and display availability
function checkAvailability() {
    var now = new Date();
    var day = now.getDay();
    var hour = now.getHours();
  
    if (day >= 1 && day <= 5 && hour >= 8 && hour < 17) {
      document.getElementById("availability").textContent = "We are currently open.";
    } else {
      document.getElementById("availability").textContent = "We are currently closed.";
    }
  }
  
  // Update availability every minute
  setInterval(checkAvailability, 60000);
  
  // Initial check
  checkAvailability();