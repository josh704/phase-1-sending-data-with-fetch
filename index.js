function submitData(name, email) {
    
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ name, email })
    })
    .then(function (response) {
        return response.json();
      })
    .then(data => {
        const idElement = document.createElement('p');
        idElement.textContent = `New user ID: ${data.id}`;
        document.body.appendChild(idElement);
    })
    .catch(error => {
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
    });
}
