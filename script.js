//your JS code here. If required.
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    let age = document.getElementById('age').value;
    let name = document.getElementById('name').value;
    
    if (!age || !name) {
        alert("Please fill out all fields.");
        return;
    }
    
    // Create a promise to handle asynchronous processing
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (age >= 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000); // 4 seconds delay
    });
    
    // Promise resolution and rejection handling
    promise.then(function(message) {
        alert(message);
    }).catch(function(message) {
        alert(message);
    });
});