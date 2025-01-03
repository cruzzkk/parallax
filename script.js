document.addEventListener("DOMContentLoaded", () => {
    const bgVideo = document.getElementById("bgVideo");
    const nextImage = document.getElementById("nextImage");
    const section2 = document.getElementById("section2");
    const octopusContainer = document.getElementById("octopusContainer");
    const dialogBox = document.getElementById("dialogBox");
    const dialogText = document.getElementById("dialogText");
    const dialogBoxImage = document.getElementById("dialogBoxImage");
    const whiteOverlay = document.getElementById("whiteOverlay");
    const buttonContainers = document.querySelectorAll(".button-container");

    const section3 = document.getElementById("section3");
    const section3octopusContainer = document.getElementById("section3octopusContainer");
    const section3octopusContainershell= document.getElementById("section3octopusContainershell");
    const section3dialogBox = document.getElementById("section3dialogBox");
    const section3dialogText = document.getElementById("section3dialogText");
    const section3_button= document.getElementById("section3_button");
    const foodchain_button=document.getElementById('foodchain');

    const section4 = document.getElementById("section4");
    const section4octopusContainer = document.getElementById("section4octopusContainer");
    const section4dialogBox = document.getElementById("section4dialogBox");
    const section4dialogText = document.getElementById("section4dialogText");
    const grassContainers = document.querySelectorAll("#section4button4, #section4button2");

    const section5 = document.getElementById("section5");
    const section5bgVideo = document.getElementById("section5bgVideo");
    const section5nextImage = document.getElementById("section5nextImage");
    
    const audio1 = new Audio("assets/audio/countdown-ten-seconds.mp3");
    const audio2 = new Audio("assets/audio/countdown-ten-seconds.mp3");
    const audio3 = new Audio("assets/audio/countdown-ten-seconds.mp3");
    const audio4 = new Audio("assets/audio/countdown-ten-seconds.mp3");
    const audio5 = new Audio("assets/audio/countdown-ten-seconds.mp3");
    const audio6 = new Audio("assets/audio/countdown-ten-seconds.mp3");



        //common
    document.querySelectorAll('.section').forEach(section => {
            section.addEventListener('click', function(event) {
                // Get the clicked element
                const target = event.target;
        
                // Find the parent with class 'section'
                const parentSection = target.closest('.section');
        
                if (parentSection) {
                    const sectionId = parentSection.id;
                    console.log('Clicked section ID:', sectionId);
                    // Switch statement based on sectionId
                    switch (sectionId) {
                        case 'section1':
                            console.log('Section 1 clicked.');
                            enableVideo();
                            break;
                        case 'section2':
                            if (handleOctopusVisible()) {
                                triggerOctopusActions();
                            }
                            break;
                        case 'section3':
                            if(handleOctopusidelVisible()){
                                section3triggerOctopusActions();
                            }
                            break;
                        case 'section4':
                            if(handleOctopus4Visible()){
                                section4triggerOctopusActions();
                            }
                            break;
                        case 'section5':
                            console.log('Section 5 clicked.');
                            // Perform actions specific to section 5
                            break;
                        default:
                            console.log('Unknown section clicked.');
                    }
                }
            });
    });

// 1st 
    let played=false;

     const enableVideo = () => {
        if(!played){
            bgVideo.muted = false;
            bgVideo.play();
            played=!played;
        }
          
        
    };
    // Event: When the video ends
    bgVideo.addEventListener("ended", () => {
        nextImage.style.display = "block"; // Show the image after the video ends
        section2.style.display = "block";
        section2.style.display = "visible";
         

    });


// 2nd
    let firstactiontriggered=false;
     // Parallax Effect on Scroll
     window.addEventListener("scroll", () => {
        const scrollY = window.scrollY; // Amount scrolled from the top
        const viewportHeight = window.innerHeight; // Height of the viewport
        const scrollFactor = scrollY / viewportHeight; // Normalize scrolling
    
        // Apply the parallax effect
        document.querySelectorAll(".image-container").forEach(layer => {
            const speed = parseFloat(layer.getAttribute("data-speed")) || 0;
            // Normalize movement based on viewport height
            layer.style.transform = `translateX(-50%) translateY(${scrollFactor * speed * viewportHeight}px)`;
        });
    });
    // Trigger 1: Display Octopus and Play First Audio
    const handleOctopusVisible = () => {
        const octopusRect = octopusContainer.getBoundingClientRect(); // Get the bounding box of the container
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
         // Check if the octopus is fully visible in the viewport
        if (
            octopusRect.bottom >= 0 &&
            octopusRect.top <= windowHeight &&
            octopusRect.right >= 0 &&
            octopusRect.left <= windowWidth&&!firstactiontriggered
        ) {
            return true;
        }
        return false;
    };
    // Trigger method when octopus is visible
    const triggerOctopusActions = () => {
         // Add your additional logic here
        dialogBox.style.display = "block";
        dialogBoxImage.style.display = "block";
        dialogText.style.display = "block";
        dialogText.textContent = "Hello! I am Octopus.";
        audio1.play();
        firstactiontriggered=!firstactiontriggered;
    };

    // Trigger 2: When First Audio Ends, Play Second Audio
    audio1.addEventListener("ended", () => {
        dialogText.textContent =  dialogText.textContent+"\nLet's learn something new!";
        dialogText.style.fontFamily = "Heinemann";
        dialogText.style.fontWeight = "italic";
        audio2.play();
    });

    // Trigger 3: When Second Audio Ends, Show White Image and Buttons
    audio2.addEventListener("ended", () => {
        whiteOverlay.style.display = "block";
                // Loop through all button containers and make them visible
        buttonContainers.forEach(element => {
            element.style.display = "block";
        });
    });
    // Track clicked buttons
    const clickedButtons = new Set();

    // Total number of buttons
    const totalButtons = document.querySelectorAll('.button-container').length;
    console.log('total',totalButtons)
    // Variable to track whether all buttons have been clicked
    let allButtonsClicked = false;
    // Add click event listeners for each button
    document.querySelectorAll('.button-container').forEach((buttonContainer, index) => {
        buttonContainer.addEventListener('click', () => {
            //   // Hide all labels and arrows
            //   document.querySelectorAll('.label, .arrow').forEach(element => {
            //     element.style.display = 'none';
            //   });
                console.log('clicked')
            // Show the specific label and arrow for the clicked button
            const label = document.querySelector(`#label${index + 1}`);
            const arrow = document.querySelector(`#arrow${index + 1}`);
            if (label) label.style.display = 'block';
            if (arrow) arrow.style.display = 'block';
                // Mark the current button as clicked
            clickedButtons.add(index);

            // Check if all buttons have been clicked
            if (!allButtonsClicked && clickedButtons.size === totalButtons) {
                console.log('finished');
                allButtonsClicked = true;
                audio3.play();
                dialogText.textContent = "New text";
                dialogText.style.fontFamily = "Heinemann";
                dialogText.style.fontWeight = "italic";
            }
        });
    });
    audio3.addEventListener("ended", () => {
         
        section3.style.display = "block";
        section2.style.overflow="visible";
        section3.style.overflow="visible";
        //scroll down image enable
    });



//3rd
    let section3Octopusidelvisible = false;    
    // Parallax Effect on Scroll
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY; // Amount scrolled from the top
        const viewportHeight = window.innerHeight; // Height of the viewport
        const scrollFactor = scrollY / viewportHeight; // Normalize scrolling

        // Apply the parallax effect
        document.querySelectorAll("#section3octopusContainer, #section3octopusContainershell").forEach(layer => {
            const speed = parseFloat(layer.getAttribute("data-speed")) || 0;
            // Normalize movement based on viewport height
            layer.style.transform = `translateX(-50%) translateY(${scrollFactor * speed * viewportHeight}px)`;
        });
    });
 

    // Trigger 1: Display Octopus and Play First Audio
    const handleOctopusidelVisible = () => {
            const octopusRect = section3octopusContainer.getBoundingClientRect(); // Get the bounding box of the container
            const windowHeight = window.innerHeight;
            const windowWidth = window.innerWidth;
             // Check if the octopus is fully visible in the viewport
            if (
                octopusRect.bottom >= 0 &&
                octopusRect.top <= windowHeight &&
                octopusRect.right >= 0 &&
                octopusRect.left <= windowWidth&&!section3Octopusidelvisible
            ){
                return true;
            }
            return false;
    };
    const section3triggerOctopusActions = () => {
        section3dialogBox.style.display = "block";
        section3dialogText.style.display = "block";
        section3dialogText.textContent = "Hello! I am Octopus2.";
        audio4.play();
        section3Octopusidelvisible=!section3Octopusidelvisible;
    };
  
    audio4.addEventListener("ended", () => {
        section3dialogText.textContent = "Hello! I am Octopus2.";
        audio5.play()
        
    });
    audio5.addEventListener("ended", () => {
        section3_button.style.display = "block";
        section3dialogBox.style.display = "none";
        section3dialogText.style.display = "none";
    });
    // Add a click event listener to the container
    section3_button.addEventListener('click', () => {
        console.log('section3_button_clicked');
        section3octopusContainer.style.display = "none";
        section3octopusContainershell.style.display = "block";
        section3_button.style.display = "none";
    });

    // Add click event listener to the 'foodchain' element
    foodchain_button.addEventListener('click', () => {
        section4.style.display="block"
        section4.style.overflow="visible";
    });


   
// 4th

    let section4actiontriggered = false;
    let section4objectsisclickable=false;
 
    // Handle visibility of Section 4 Octopus
    const handleOctopus4Visible = () => {
        const octopusRect = section4octopusContainer.getBoundingClientRect(); // Get the bounding box of the container
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;

        // Check if the octopus is fully visible in the viewport
        if (
            octopusRect.bottom >= 0 &&
            octopusRect.top <= windowHeight &&
            octopusRect.right >= 0 &&
            octopusRect.left <= windowWidth &&
            !section4actiontriggered
        ) {
            return true;
        }
        return false;
    };
    // Trigger method when octopus is visible
    const section4triggerOctopusActions = () => {
        section4dialogBox.style.display = "block";
        section4dialogText.style.display = "block";
        section4dialogText.textContent = "Hello! I am Octopus4.";
        audio6.play().catch((error) => {
            console.error('Error playing audio:', error);
        });
        section4actiontriggered=!section4actiontriggered;
    };
    // Handle visibility of Section 4 Grass
    const handleGrassVisible = () => {
        let allVisible = true; // Flag to check if all elements are visible
    
        grassContainers.forEach((container) => {
            const rect = container.getBoundingClientRect(); // Get the bounding box of the element
            const windowHeight = window.innerHeight;
            const windowWidth = window.innerWidth;
    
            // Check if the element is fully visible in the viewport
            if (
                rect.bottom < 0 || // Completely above the viewport
                rect.top > windowHeight || // Completely below the viewport
                rect.right < 0 || // Completely to the left of the viewport
                rect.left > windowWidth // Completely to the right of the viewport
            ) {
                allVisible = false; // Set flag to false if any container is not visible
            }
        });
    
        // Show or hide 'section4ReadHelp' based on visibility of all containers
        if (allVisible) {
            document.getElementById("section4ReadHelp").style.display = "block";
            document.getElementById("section4Help").style.display = "block";
        } else {
            document.getElementById("section4ReadHelp").style.display = "none";
            document.getElementById("section4Help").style.display = "none";
        }
    };
    
    // Listen for scroll to check visibility
    window.addEventListener("scroll", handleGrassVisible);

    let section4allButtonsClicked=false;
        // Track clicked buttons
    const section4clickedButtons = new Set();

    // Buttons to track
    const buttons = [
        document.getElementById("section4button1"),
        document.getElementById("section4button2"),
        document.getElementById("section4button3"),
        document.getElementById("section4button4")
    ];
    // Function to check if all buttons are clicked
    function checkAllClicked() {
        if (section4clickedButtons.size === buttons.length&&!section4allButtonsClicked) {
            // All buttons clicked, trigger your code
            console.log("All buttons clicked!");
            // Add your trigger code here
            // Section5 start
            section4allButtonsClicked=true;
            enablesection5video();
            
        }
    }
    // Add click event listeners to each button
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (section4objectsisclickable){
                section4clickedButtons.add(button.id); // Track the clicked button
                checkAllClicked(); // Check if all buttons are clicked
            }
           
        });
    });
    
 
    audio6.addEventListener("ended", () => {
        // Change images dynamically
        document.querySelector("#section4button1 img").src = "assets/Slides_25-35/Kelp_outline.png";
        document.querySelector("#section4button2 img").src = "assets/Slides_25-35/Grizzly_bear_outline.png";
        document.querySelector("#section4button3 img").src = "assets/Slides_25-35/Salmon_outline.png";
        document.querySelector("#section4button4 img").src = "assets/Slides_25-35/Yeast_outline.png";
        clickedButtons.clear();
        section4dialogBox.style.display = "none";
        section4dialogText.style.display = "none";
        buttons.forEach(button => {
            button.style.cursor = "pointer"; // Set cursor to pointer
            button.style.pointerEvents="visible"
        });
        section4objectsisclickable=true;

     });
 
        // Parallax Effect on Scroll
    window.addEventListener("scroll", () => {
            const scrollY = window.scrollY; // Amount scrolled from the top
            const viewportHeight = window.innerHeight; // Height of the viewport
            const scrollFactor = scrollY / viewportHeight; // Normalize scrolling
    
            // Apply the parallax effect
            document.querySelectorAll("#section4octopusContainer,#section4dialogBox").forEach(layer => {
                const speed = parseFloat(layer.getAttribute("data-speed")) || 0;
                // Normalize movement based on viewport height
                layer.style.transform = `translateX(-50%) translateY(${scrollFactor * speed * viewportHeight}px)`;
            });
    });
    let isScrolling;
    window.addEventListener("scroll", () => {
        // Add "no-transition" class when scrolling starts
        document.querySelectorAll(".section4button-container").forEach(layer => {
            layer.classList.add("no-transition");
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const scrollFactor = scrollY / viewportHeight;
    
            // Update the parallax offset
            const speed = parseFloat(layer.getAttribute("data-speed")) || 0;
            const parallaxOffset = `${scrollFactor * speed * viewportHeight}px`;
            layer.style.setProperty('--parallax-transform', parallaxOffset);
        });
    
        // Clear any previous timeout
        clearTimeout(isScrolling);
    
        // Remove "no-transition" class after scrolling stops
        isScrolling = setTimeout(() => {
            document.querySelectorAll(".section4button-container").forEach(layer => {
                layer.classList.remove("no-transition");
            });
        }, 200); // Adjust delay as needed (200ms is a typical debounce time)
    });
    


    document.getElementById('closePopupBtn').addEventListener('click', function() {
        document.querySelector('.overlay').style.display = 'none'; // Hide overlay
    });
    document.getElementById('section4ReadHelp').addEventListener('click', function() {
        document.querySelector('.overlay').style.display = 'flex'; // Hide overlay
    });
    document.getElementById('closePopupBtn2').addEventListener('click', function() {
        document.querySelector('.overlay2').style.display = 'none'; // Hide overlay
    });
    document.getElementById('section4Help').addEventListener('click', function() {
        document.querySelector('.overlay2').style.display = 'block'; // Hide overlay
    });

    //COUNTRY BUTTON CLICK AND UNCLICK IMAGE CHANGE
    document.querySelectorAll('.country-btn').forEach(button => {
        button.addEventListener('click', () => {
          // Reset all buttons to their unclicked state
          document.querySelectorAll('.country-btn').forEach(btn => {
            const img = btn.querySelector('img');
            img.src = btn.getAttribute('data-unclicked'); // Set to unclicked image
          });
      
          // Set clicked button to its clicked state
          const clickedImg = button.querySelector('img');
          clickedImg.src = button.getAttribute('data-clicked'); // Set to clicked image
        });
      });
    // const section4ReadHelp = document.getElementById("section4ReadHelp");

    // window.addEventListener("resize", () => {
    //     const container = document.querySelector(".page-container").getBoundingClientRect();
    //     const button = section4ReadHelp.getBoundingClientRect();
    
    //     // Ensure the button stays within the container
    //     if (button.right > container.right) {
    //         section4ReadHelp.style.right = `${window.innerWidth - container.right}%`;
    //     } else {
    //         section4ReadHelp.style.right = "2%"; // Default position
    //     }
    // });
    // const section4Help = document.getElementById("section4Help");

    // window.addEventListener("resize", () => {
    //     const container = document.querySelector(".page-container").getBoundingClientRect();
    //     const button = section4Help.getBoundingClientRect();
    
    //     // Ensure the button stays within the container
    //     if (button.right > container.right) {
    //         section4Help.style.right = `${(window.innerWidth - container.right)*.1}%`;
    //     } else {
    //         section4Help.style.right = "2%"; // Default position
    //     }
    // });

 






//5th
    function enablesection5video(){
        section5.style.display="block"
        section5.style.overflow="visible";
        section5bgVideo.muted = false; // Unmute the video
        section5bgVideo.play()
    }
     
    // Event: When the video ends
    section5bgVideo.addEventListener("ended", () => {
        section5nextImage.style.display = "block"; // Show the image after the video ends
        //section6.style.display = "block";

    });




//6th
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY; // Amount scrolled from the top
    const viewportHeight = window.innerHeight; // Height of the viewport
    const scrollFactor = scrollY / viewportHeight; // Normalize scrolling

    // Apply the parallax effect
    document.querySelectorAll(".image-container2").forEach(layer => {
        const speed = parseFloat(layer.getAttribute("data-speed")) || 0;
        // Normalize movement based on viewport height
        layer.style.transform = `translateX(-50%) translateY(${scrollFactor * speed * viewportHeight}px)`;
    });
});


 
});



//section4 overlay2 popup
function showPopup(i) {
    // Hide all popups
    const popups = document.querySelectorAll(".popup");
    popups.forEach(popup => {
        popup.style.display = "none";
    });

    // Display the selected popup
    const selectedPopup = document.getElementById("popup" + i);
    if (selectedPopup) {
        selectedPopup.style.display = "block";
    }
}

function hidePopup(id) {
    document.getElementById(id).style.display = "none";
}