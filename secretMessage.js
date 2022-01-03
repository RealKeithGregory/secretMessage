let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
// console.log(secretMessage.length); // Checked original length of array
secretMessage.pop();
// console.log(secretMessage.length); // Checked to see if array was modified
secretMessage.push('to','Program'); // added 'to Program' to end of array
// console.log(secretMessage);
secretMessage[7] = 'right'; // Changed the word 'easily' to 'right'
secretMessage.shift(); // Removed first string from array
secretMessage.unshift('Programming'); // Added 'Programming' to the beginning of array


secretMessage.splice(6,5,'know');
console.log(secretMessage.join(' ')); // Concatenated all the elements of the array to form a message