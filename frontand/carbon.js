
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();

        // Get user inputs
        let electricity = parseFloat(document.getElementById("electricity").value) || 0;
        let fuel = parseFloat(document.getElementById("fuel").value) || 0;
        let diet = document.getElementById("diet").value;
        let waste = parseFloat(document.getElementById("waste").value) || 0;
        let water = parseFloat(document.getElementById("water").value) || 0;
        let flights = parseFloat(document.getElementById("flights").value) || 0;

        // Carbon footprint calculation logic (simplified example)
        let footprint = (electricity * 0.4) + (fuel * 2.3) + (waste * 0.2) + (water * 0.1) + (flights * 1.5);

        if (diet === "Non-Vegetarian") {
            footprint += 2.0;
        } else if (diet === "Vegetarian") {
            footprint += 1.0;
        }

        // Define footprint categories
        let category = "";
        if (footprint < 5) {
            category = "Low (Great job! Keep up your sustainable lifestyle.)";
        } else if (footprint < 15) {
            category = "Moderate (Consider making small eco-friendly changes.)";
        } else {
            category = "High (It's time to take action and reduce your carbon footprint!)";
        }

        // Update progress bar
        let progress = Math.min((footprint / 20) * 100, 100);
        document.getElementById("progressBar").style.width = progress + "%";

        // Display result in a popup
        alert(`Your estimated carbon footprint: ${footprint.toFixed(2)} tons CO₂ per year.\n\nCategory: ${category}`);
    });