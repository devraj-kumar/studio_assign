// Function to load the page with blue theme
function loadBlue() {
	// Display the loader image in blue color
	document.getElementsByClassName("loaderImg")[0].style.display = 'block' // Display the loader image
	document.getElementsByClassName("loaderImg")[0].src = 'assets/loader_icon_blue.svg' // Set the loader image source to blue

	// Display the loader image button in blue color
	document.getElementsByClassName("loaderImgBtn")[0].style.display = 'block' // Display the loader image button
	document.getElementsByClassName("loaderImgBtn")[0].src = 'assets/loader_icon_blue.svg' // Set the loader image button source to blue

	// Hide the logo image and upload icon
	document.getElementsByClassName("logoImg")[0].style.display = 'none' // Hide the logo image
	document.getElementsByClassName("uploadIcon2")[0].style.display = 'none' // Hide the upload icon

	// Remove background image from divLoader
	document.getElementsByClassName('divLoader')[0].style.backgroundImage = 'none'; // Remove background image from divLoader
	console.log("in loading") // Log a message indicating loading state
	setTimeout(blueColorChange, 3000); // Call blueColorChange after a delay of 3000ms
}

// Function to load the page with pink theme
function loadPink() {
	// Display the loader image in pink color
	document.getElementsByClassName("loaderImg")[0].style.display = 'block' // Display the loader image
	document.getElementsByClassName("loaderImg")[0].src = 'assets/loader_icon_pink.svg' // Set the loader image source to pink

	// Display the loader image button in pink color
	document.getElementsByClassName("loaderImgBtn")[0].style.display = 'block' // Display the loader image button
	document.getElementsByClassName("loaderImgBtn")[0].src = 'assets/loader_icon_pink.svg' // Set the loader image button source to pink

	// Hide the logo image and upload icon
	document.getElementsByClassName("logoImg")[0].style.display = 'none' // Hide the logo image
	document.getElementsByClassName("uploadIcon2")[0].style.display = 'none' // Hide the upload icon

	// Remove background image from divLoader
	document.getElementsByClassName('divLoader')[0].style.backgroundImage = 'none'; // Remove background image from divLoader
	console.log("in loading") // Log a message indicating loading state
	setTimeout(pinkColorChange, 3000); // Call pinkColorChange after a delay of 3000ms
}

// Function to load the page with yellow theme
function loadYellow() {
	// Display the loader image in yellow color
	document.getElementsByClassName("loaderImg")[0].style.display = 'block' // Display the loader image
	document.getElementsByClassName("loaderImg")[0].src = 'assets/loader_icon_yellow.svg' // Set the loader image source to yellow

	// Display the loader image button in yellow color
	document.getElementsByClassName("loaderImgBtn")[0].style.display = 'block' // Display the loader image button
	document.getElementsByClassName("loaderImgBtn")[0].src = 'assets/loader_icon_yellow.svg' // Set the loader image button source to yellow

	// Hide the logo image and upload icon
	document.getElementsByClassName("logoImg")[0].style.display = 'none' // Hide the logo image
	document.getElementsByClassName("uploadIcon2")[0].style.display = 'none' // Hide the upload icon

	// Remove background image from divLoader
	document.getElementsByClassName('divLoader')[0].style.backgroundImage = 'none'; // Remove background image from divLoader
	console.log("in loading") // Log a message indicating loading state
	setTimeout(yellowColorChange, 3000); // Call yellowColorChange after a delay of 3000ms
}

// Function to change the page theme to yellow
function yellowColorChange() {
	// Hide the loader image and loader image button
	document.getElementsByClassName("loaderImg")[0].style.display = 'none' // Hide the loader image
	document.getElementsByClassName("loaderImgBtn")[0].style.display = 'none' // Hide the loader image button
	// Set the background color of the body to yellow
	document.body.style.backgroundColor = '#fcfcb3'; // Set the background color to yellow

	// Set the background image of divLoader to yellow
	document.getElementsByClassName('divLoader')[0].style.backgroundImage = 'url("assets/Yellow umbrella.png")'; // Set the background image of divLoader to yellow

	// Display the logo image and upload icon
	document.getElementsByClassName("logoImg")[0].style.display = 'block' // Display the logo image
	document.getElementsByClassName("uploadIcon2")[0].style.display = 'block' // Display the upload icon
	console.log("color changed to yellow") // Log a message indicating the color change to yellow
}

// Function to change the page theme to blue
function blueColorChange() {
	// Hide the loader image and loader image button
	document.getElementsByClassName("loaderImg")[0].style.display = 'none' // Hide the loader image
	document.getElementsByClassName("loaderImgBtn")[0].style.display = 'none' // Hide the loader image button

	// Set the background color of the body to bluish
	document.body.style.backgroundColor = '#b6fcf7'; // Set the background color to bluish

	// Set the background image of divLoader to blue
	document.getElementsByClassName('divLoader')[0].style.backgroundImage = 'url("assets/Blue umbrella.png")'; // Set the background image of divLoader to blue

	// Display the logo image and upload icon
	document.getElementsByClassName("logoImg")[0].style.display = 'block' // Display the logo image
	document.getElementsByClassName("uploadIcon2")[0].style.display = 'block' // Display the upload icon
	console.log("color changed to blue") // Log a message indicating the color change to blue
}

// Function to change the page theme to pink
function pinkColorChange() {
	// Hide the loader image and loader image button
	document.getElementsByClassName("loaderImg")[0].style.display = 'none' // Hide the loader image
	document.getElementsByClassName("loaderImgBtn")[0].style.display = 'none' // Hide the loader image button

	// Set the background color of the body to pinkish
	document.body.style.backgroundColor = '#fcb6eb'; // Set the background color to pinkish

	// Set the background image of divLoader to pink
	document.getElementsByClassName('divLoader')[0].style.backgroundImage = 'url("assets/Pink umbrella.png")'; // Set the background image of divLoader to pink

	// Display the logo image and upload icon
	document.getElementsByClassName("logoImg")[0].style.display = 'block' // Display the logo image
	document.getElementsByClassName("uploadIcon2")[0].style.display = 'block' // Display the upload icon
	console.log("color changed to pink") // Log a message indicating the color change to pink
}


// Function to load a file
function loadFile(event) {
	var image = document.getElementsByClassName('logoImg')[0]; // Get the logo image element
	image.src = URL.createObjectURL(event.target.files[0]); // Set the source of the logo image to the selected file
	image.style.display='block' // Display the logo image
	var buttonTxt = document.getElementsByClassName("btnTxt")[0]; // Get the button text element
	buttonTxt.innerHTML = event.target.files[0].name // Set the button text to the name of the selected file
	document.getElementsByClassName("closeIcon")[0].style.display = 'block' // Display the close icon
	console.log("file uploaded: " + event.target.files[0].name) // Log a message indicating the uploaded file name
}

// Function to handle button click
function buttonClicked() {
	const realFileBtn = document.getElementById("real-file"); // Get the real file input button
	realFileBtn.click(); // Simulate a click on the real file input button
}

// Function to handle image close
function imageClosed() {
	var image = document.getElementsByClassName('logoImg')[0]; // Get the logo image element
	image.style.display='none' // Hide the logo image
	document.getElementsByClassName("closeIcon")[0].style.display = 'none' // Hide the close icon
	var buttonTxt = document.getElementsByClassName("btnTxt")[0]; // Get the button text element
	buttonTxt.innerHTML = "UPLOAD LOGO" // Reset the button text
}
