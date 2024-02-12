// Optional JavaScript for toggling the dropdown on hover and changing background color
document.addEventListener("DOMContentLoaded", function() {
    // Get all dropdown buttons
    var dropdowns = document.getElementsByClassName("dropdown");
    
    // Add event listener to each dropdown button
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].addEventListener("mouseenter", function() {
            this.classList.add("active");
            var dropdownContent = this.querySelector(".dropdown-content");
            dropdownContent.style.display = "block";
        });

        dropdowns[i].addEventListener("mouseleave", function() {
            this.classList.remove("active");
            var dropdownContent = this.querySelector(".dropdown-content");
            dropdownContent.style.display = "none";
            document.body.classList.remove("black-background"); // Remove black background class
        });
    }
});






/*
// Optional JavaScript for toggling the dropdown on click and changing background color
document.addEventListener("DOMContentLoaded", function() {
    // Get all dropdown buttons
    var dropdowns = document.getElementsByClassName("dropdown");
    
    // Add event listener to each dropdown button
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var dropdownContent = this.querySelector(".dropdown-content");
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
                document.body.classList.remove("black-background"); // Remove black background class
            } else {
                dropdownContent.style.display = "block";
                document.body.classList.add("black-background"); // Add black background class
            }
        });
    }
});


NOTES:
document.addEventListener("DOMContentLoaded", function() {
    // This event listener listens for when the DOM content is fully loaded.
    // Once the DOM content is fully loaded, the function inside the event listener is executed.

    var dropdowns = document.getElementsByClassName("dropdown");
    // This line selects all elements with the class name "dropdown" and stores them in the variable dropdowns.

    for (var i = 0; i < dropdowns.length; i++) {
        // This loop iterates over each element with the class name "dropdown".

        dropdowns[i].addEventListener("mouseenter", function() {
            // This line adds an event listener to each dropdown element that listens for the "mouseenter" event,
            // which occurs when the mouse cursor enters the dropdown element.

            this.classList.add("active");
            // When the mouse enters the dropdown element, the "active" class is added to the dropdown element.
            // This class is used to style the dropdown button when it's hovered over.

            var dropdownContent = this.querySelector(".dropdown-content");
            // This line selects the dropdown content associated with the current dropdown button.

            dropdownContent.style.display = "block";
            // When the mouse enters the dropdown element, the dropdown content is displayed by setting its
            // display property to "block". This makes the dropdown content visible on the web page.

            document.body.classList.add("black-background");
            // Additionally, when the mouse enters the dropdown element, the body of the document
            // (i.e., the entire web page) is given the "black-background" class.
            // This class is used to change the background color of the entire web page to black.
        });

        dropdowns[i].addEventListener("mouseleave", function() {
            // This line adds an event listener to each dropdown element that listens for the "mouseleave" event,
            // which occurs when the mouse cursor leaves the dropdown element.

            this.classList.remove("active");
            // When the mouse leaves the dropdown element, the "active" class is removed from the dropdown element.

            var dropdownContent = this.querySelector(".dropdown-content");
            // This line selects the dropdown content associated with the current dropdown button.

            dropdownContent.style.display = "none";
            // When the mouse leaves the dropdown element, the dropdown content is hidden by setting its
            // display property to "none". This makes the dropdown content invisible on the web page.

            document.body.classList.remove("black-background");
            // Additionally, when the mouse leaves the dropdown element, the "black-background" class
            // is removed from the body of the document, reverting the background color of the entire web page.
        });
    }
});
*/