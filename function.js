/* This code is written by Kyaw Pyae Sone Han(2334273)-DCITP/FT/1A06 */
function multiplyWithArray() {
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    const array = [0.09, 0.08]; // Replace this array with your desired values

    // Check if the input values are valid numbers
    if (isNaN(input1) || isNaN(input2) || input1<0 || input2<0) {
        alert('Please enter valid numbers.');
        return;
    }

    // Perform the multiplication
    const result1 = input1 * array[0];
    const result2 = input2 * array[1];

    // Display the results
    alert(`You have emit this much amount of carbon by using your own car: ${result1}kg\nYou have emit this much amount of carbon by using public transport: ${result2}kg`);
}

// Function to trigger multiplication on button click
function onMultiplyButtonClick() {
    multiplyWithArray();
}

// Attach event listener to the button
document.getElementById('multiplyButton').addEventListener('click', onMultiplyButtonClick);