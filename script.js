function stringChop(str, chunkLength) {
  // your code here
	 // If the input string is null, return an empty array
    if (str === null) {
        return [];
    }

    const chunks = []; // Array to hold the resulting chunks

    // Loop through the string and slice it into chunks
    for (let i = 0; i < str.length; i += chunkLength) {
        // Slice the string from the current index to the current index plus chunkLength
        const chunk = str.slice(i, i + chunkLength);
        chunks.push(chunk); // Add the chunk to the array
    }

    return chunks; // Return the array of chunks
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
