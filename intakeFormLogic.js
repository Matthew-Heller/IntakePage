function loadCaseSpecific() {
    const caseType = document.getElementById('case-type').value;
    let fileName = '';

    // Determine which file to load based on case type
    switch (caseType) {
        case 'Med Mal':
            fileName = 'med-mal.html';
            break;
        case 'Motor Vehicle Collision':
            fileName = 'mvc.html';
            break;
        case 'Premises Liability':
            fileName = 'premises-liability.html';
            break;
        default:
            alert('Please select a case type.');
            return;
    }

    // Load the selected case type file into the container
    fetch(`case-type-questions/${fileName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${fileName}`);
            }
            return response.text();
        })
        .then(data => {
            // Insert the loaded HTML into the case-specific container
            document.getElementById('case-specific-container').innerHTML = data;
            showCard(2); // Show card 2 for the case-specific questions
        })
        .catch(error => console.error('Error loading case-specific file:', error));
}

// Function to show a specific card by card number
function showCard(cardNumber) {
    document.querySelectorAll('.card').forEach(function(card) {
        card.style.display = 'none';
    });
    document.getElementById('card-' + cardNumber).style.display = 'block';
}

// Function to navigate to the previous card
function prevCard(cardNumber) {
    showCard(cardNumber);
}
