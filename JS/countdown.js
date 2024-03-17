// countdown js

// Set the target date and time (ensure it's in the future)
const targetDate = new Date("2024-03-22T01:30:00").getTime();

// UPDATE COUNTDOWN EVERY SECOND
const countdownTimer = setInterval(function() {
    // Get the current date and time
    const currentDate = new Date().getTime();
    
    // Calculate the remaining time in milliseconds
    const remainingTime = targetDate - currentDate;
    
    // Calculate the remaining days, hours, minutes, and seconds
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    
    // Update the countdown elements with the remaining time
    document.getElementById("countdown-days").textContent = days;
    document.getElementById("countdown-hours").textContent = hours;
    document.getElementById("countdown-minutes").textContent = minutes;
    document.getElementById("countdown-seconds").textContent = seconds;

    // If the countdown is over, clear the interval
    if (remainingTime <= 0) {
        clearInterval(countdownTimer);
        // Hide or remove the countdown elements or display a message
    }
}, 1000); // Update every second


// Function to update the arc path for seconds only

function updateSecondsArc(percentage) {
    const svgWidth = 10; // Increased width of the SVG element
    const svgHeight = 110; // Increased height of the SVG element
    const radius = 80; // Radius of the arc
    const centerX = (svgWidth / 0.75) + 140; // Shifted X-coordinate of the center
    const centerY = svgHeight / 0.75; // Y-coordinate of the center

    const startAngle = (-Math.PI / 5) - (Math.PI / 3.28); // Adjusted start angle of the arc
    const endAngle = startAngle + percentage * (2 * Math.PI); // End angle of the arc

    // Calculate the start and end points of the arc
    const startX = centerX + radius * Math.cos(startAngle);
    const startY = centerY + radius * Math.sin(startAngle);
    const endX = centerX + radius * Math.cos(endAngle);
    const endY = centerY + radius * Math.sin(endAngle);

    // Construct the SVG path command
    const largeArcFlag = percentage > 0.5 ? 1 : 0; // Determine large or small arc
    const sweepFlag = percentage > 0 ? 1 : 0; // Determine clockwise or counterclockwise arc
    const arcPath = `M ${startX},${startY} A ${radius},${radius} 0 ${largeArcFlag},${sweepFlag} ${endX},${endY}`;

    // Update the arc path for seconds
    document.querySelector(".arc-seconds").setAttribute("d", arcPath);
}

// Function to update the arc path for minutes only
function updateMinutesArc(percentage) {
    const svgWidth = 10; // Width of the SVG element
    const svgHeight = 110; // Height of the SVG element
    const radius = 100; // Radius of the arc
    const centerX = (svgWidth / 0.75) + 140; // X-coordinate of the center
    const centerY = svgHeight / 0.75; // Y-coordinate of the center

    const startAngle = (-Math.PI / 5) - (Math.PI / 3.28); // Start angle of the arc
    const endAngle = startAngle + percentage * (2 * Math.PI); // End angle of the arc

    // Calculate the start and end points of the arc
    const startX = centerX + radius * Math.cos(startAngle);
    const startY = centerY + radius * Math.sin(startAngle);
    const endX = centerX + radius * Math.cos(endAngle);
    const endY = centerY + radius * Math.sin(endAngle);

    // Construct the SVG path command
    const largeArcFlag = percentage > 0.5 ? 1 : 0; // Determine large or small arc
    const sweepFlag = percentage > 0 ? 1 : 0; // Determine clockwise or counterclockwise arc
    const arcPath = `M ${startX},${startY} A ${radius},${radius} 0 ${largeArcFlag},${sweepFlag} ${endX},${endY}`;

    // Update the arc path for minutes
    document.querySelector(".arc-minutes").setAttribute("d", arcPath);
}

// Function to update the arc path for hours only
function updateHoursArc(percentage) {
    const svgWidth = 10; // Width of the SVG element
    const svgHeight = 110; // Height of the SVG element
    const radius = 120; // Radius of the arc
    const centerX = (svgWidth / 0.75) + 140; // X-coordinate of the center
    const centerY = svgHeight / 0.75; // Y-coordinate of the center

    const startAngle = (-Math.PI / 5) - (Math.PI / 3.28); // Start angle of the arc
    const endAngle = startAngle + percentage * (2 * Math.PI); // End angle of the arc

    // Calculate the start and end points of the arc
    const startX = centerX + radius * Math.cos(startAngle);
    const startY = centerY + radius * Math.sin(startAngle);
    const endX = centerX + radius * Math.cos(endAngle);
    const endY = centerY + radius * Math.sin(endAngle);

    // Construct the SVG path command
    const largeArcFlag = percentage > 0.5 ? 1 : 0; // Determine large or small arc
    const sweepFlag = percentage > 0 ? 1 : 0; // Determine clockwise or counterclockwise arc
    const arcPath = `M ${startX},${startY} A ${radius},${radius} 0 ${largeArcFlag},${sweepFlag} ${endX},${endY}`;

    // Update the arc path for hours
    document.querySelector(".arc-hours").setAttribute("d", arcPath);
}






// Function to update the arc path for days only
function updateDaysArc(percentage) {
    const svgWidth = 10; // Width of the SVG element
    const svgHeight = 110; // Height of the SVG element
    const radius = 140; // Radius of the arc
    const centerX = (svgWidth / 0.75) + 140; // X-coordinate of the center
    const centerY = svgHeight / 0.75; // Y-coordinate of the center

    const startAngle = (-Math.PI / 5) - (Math.PI / 3.28); // Start angle of the arc
    const endAngle = startAngle + percentage * (2 * Math.PI); // End angle of the arc

    // Calculate the start and end points of the arc
    const startX = centerX + radius * Math.cos(startAngle);
    const startY = centerY + radius * Math.sin(startAngle);
    const endX = centerX + radius * Math.cos(endAngle);
    const endY = centerY + radius * Math.sin(endAngle);

    // Construct the SVG path command
    const largeArcFlag = percentage > 0.5 ? 1 : 0; // Determine large or small arc
    const sweepFlag = percentage > 0 ? 1 : 0; // Determine clockwise or counterclockwise arc
    const arcPath = `M ${startX},${startY} A ${radius},${radius} 0 ${largeArcFlag},${sweepFlag} ${endX},${endY}`;

    // Update the arc path for days
    document.querySelector(".arc-days").setAttribute("d", arcPath);
}

// Update the days arc every second
setInterval(function() {
    const currentDate = new Date().getTime();
    const remainingTime = targetDate - currentDate;
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    updateDaysArc(days / 365);
}, 1000); // Update every second


// Update the hours arc every second
// Update the arc for hours inside the interval function
setInterval(function() {
    const currentDate = new Date().getTime();
    const remainingTime = targetDate - currentDate;
    const hours = Math.floor(remainingTime / (1000 * 60 * 60));
    updateHoursArc(hours / 24); // Pass percentage of hours remaining
}, 1000); // Update every second



// Update the minutes arc every second
setInterval(function() {
    const currentDate = new Date().getTime();
    const remainingTime = targetDate - currentDate;
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    updateMinutesArc(minutes / 60);
}, 1000); // Update every second


// Update the seconds arc every second
setInterval(function() {
    const currentDate = new Date().getTime();
    const remainingTime = targetDate - currentDate;
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    updateSecondsArc(seconds / 60);
}, 1000); // Update every second


// Function to handle hover over days arc
document.querySelector(".arc-days").addEventListener("mouseover", function() {
    document.getElementById("countdown-days").style.color = "red";
});

document.querySelector(".arc-days").addEventListener("mouseout", function() {
    document.getElementById("countdown-days").style.color = ""; // Reset to default color
});

// Function to handle hover over hours arc
document.querySelector(".arc-hours").addEventListener("mouseover", function() {
    document.getElementById("countdown-hours").style.color = "green";
});

document.querySelector(".arc-hours").addEventListener("mouseout", function() {
    document.getElementById("countdown-hours").style.color = ""; // Reset to default color
});

// Function to handle hover over minutes arc
document.querySelector(".arc-minutes").addEventListener("mouseover", function() {
    document.getElementById("countdown-minutes").style.color = "blue";
});

document.querySelector(".arc-minutes").addEventListener("mouseout", function() {
    document.getElementById("countdown-minutes").style.color = ""; // Reset to default color
});

// Function to handle hover over seconds arc
document.querySelector(".arc-seconds").addEventListener("mouseover", function() {
    document.getElementById("countdown-seconds").style.color = "yellow";
});

document.querySelector(".arc-seconds").addEventListener("mouseout", function() {
    document.getElementById("countdown-seconds").style.color = ""; // Reset to default color
});
