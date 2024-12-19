function calculateBMI(weight, height) {
    
    return weight / (height * height);
}

function displayBMI() {
    const weight = parseFloat(prompt("Enter your weight in kg:"));
    const height = parseFloat(prompt("Enter your height in meters:"));
    
    if (isNaN(weight) || isNaN(height)) {
        alert("Please enter valid numbers for weight and height.");
        return;
    }

    const bmi = calculateBMI(weight, height);
    alert(`Your BMI is ${bmi.toFixed(2)}`);
}


displayBMI();
