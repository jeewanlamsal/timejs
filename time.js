// Function to display and update current time
function displayCurrentTime() {
    var now = new Date(); // Get the current date and time
    var hours = now.getHours(); // Get hours 
    var minutes = now.getMinutes(); // Get minutes
    var seconds = now.getSeconds(); // Get seconds 

    var currentTimeString = hours+":"+minutes+":"+seconds; // Format time as HH:mm:ss

    // Output the current time to the console
    console.log(currentTimeString);
}

// Function to update time every second
function updateTime() {
    // Display current time initially
    displayCurrentTime();

    // Update the time every second
    setInterval(displayCurrentTime, 1000);
}

// Call updateTime to start updating the time
updateTime();