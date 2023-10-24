const selectElement = document.getElementById('categorySelect');
selectElement.addEventListener('change', (event) => {
    const selectedCategoryId = event.target.value;

    // Send the selectedCategoryId to the backend using an HTTP request (e.g., AJAX or Fetch).
    // You can use the Fetch API for this purpose.
    fetch('/book', {
        method: 'POST', // or 'GET' depending on your requirements
        body: JSON.stringify({ categoryId: selectedCategoryId }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                // Handle the successful response from the backend.
                return response.json(); // Assuming the response is in JSON format.
            } else {
                throw new Error('Network response was not ok');
            }
        })
        .then(data => {
            // Handle the data returned from the backend.
            console.log(data);
        })
        .catch(error => {
            // Handle any errors that occurred during the request.
            console.error('Error:', error);
        });
});
