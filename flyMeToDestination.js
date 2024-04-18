// Function Declareation
// Function to calculate the minimum number of planes required to reach the last airport
const minimumRequiredPlanes = (array) => {
    
    // Initializing an array to store the minimum planes required for each airport
    const Requiredplanes = new Array(array.length).fill(Number.MAX_SAFE_INTEGER); 

    // We start from the first airport, so no planes required to reach itself
    Requiredplanes[0] = 0;

    // Iterating through each airport
    for (let i = 0; i < array.length - 1; i++) {
        
        // Iterating through the reachable airports from the current airport
        for (let j = i; j <= Math.min(i + array[i], array.length - 1); j++) {
            
            // Updating the minimum planes required for each reachable airport
            Requiredplanes[j] = Math.min(Requiredplanes[j], Requiredplanes[i] + 1);
        }
    }

    // If it's not possible to reach the last airport, return -1
    return Requiredplanes[array.length - 1] === Number.MAX_SAFE_INTEGER ? -1 : Requiredplanes[array.length - 1];
}

// Example arrays
const firstArray = [2, 1, 2, 3, 1];
const secondArray = [1, 6, 3, 4, 5, 0, 0, 0, 6];

// Printing the minimum planes required for each example
console.log(`The minimum planes required for (${firstArray}): ${minimumRequiredPlanes(firstArray)}`); // Output: 2
console.log(`The minimum planes required for (${secondArray}): ${minimumRequiredPlanes(secondArray)}`) // Output: 3