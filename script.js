document.getElementById('colorButton').addEventListener('click', function() {
    // Get the value of the color input
    var selectedColor = document.getElementById('colorInput').value;
    
    // Set the background color of the body
    document.body.style.backgroundColor = selectedColor;

    // Update the color display
    document.getElementById('colorDisplay').textContent = 'Selected Color: ' + selectedColor;
});

document.getElementById('randomColorButton').addEventListener('click', function() {
    // Generate a random hex color
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Set the background color of the body
    document.body.style.backgroundColor = randomColor;

    // Update the color display
    document.getElementById('colorDisplay').textContent = 'Selected Color: ' + randomColor;
});