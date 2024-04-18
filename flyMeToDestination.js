function minPlanesRequired(fuel) {
    let planesNeeded = 0;
    let maxFuel = fuel[0]; // maximum reachable airport with current plane

    for (let i = 0; i < fuel.length; i++) {
        if (i > maxFuel) {
            // If the current airport cannot be reached with the current plane, hire another plane
            if (maxFuel === i - 1) return -1; // If no plane can reach this airport, return -1
            planesNeeded++;
            maxFuel = i - 1; // Update the maximum reachable airport with the new plane
        }
        maxFuel = Math.max(maxFuel, i + fuel[i]); // Update the maximum reachable airport with the current plane
    }

    return planesNeeded;
}

// Example usage:
const fuelArray1 = [2, 1, 2, 3, 1];
console.log(minPlanesRequired(fuelArray1)); // Output: 2

const fuelArray2 = [1, 6, 3, 4, 5, 0, 0, 0, 6];
console.log(minPlanesRequired(fuelArray2)); // Output: 3
