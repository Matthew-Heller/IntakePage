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

    // Fetch the file and inject it into the case-specific container
    fetch(`case-type-questions/${fileName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${fileName}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('case-specific-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading case-specific file:', error));
}

function showCard(cardNumber) {
    // Hide all currently visible cards
    document.querySelectorAll('.card').forEach(function(card) {
        card.style.display = 'none';
    });

    // Show the card with the given cardNumber
    const cardToShow = document.getElementById('card-' + cardNumber);
    if (cardToShow) {
        cardToShow.style.display = 'block';
    } else {
        console.error(`Card with ID card-${cardNumber} not found.`);
    }
}

function prevCard(cardNumber) {
    // Hide all currently visible cards
    document.querySelectorAll('.card').forEach(function(card) {
        card.style.display = 'none';
    });

    // Show the previous card
    const cardToShow = document.getElementById('card-' + cardNumber);
    if (cardToShow) {
        cardToShow.style.display = 'block';
    } else {
        console.error(`Card with ID card-${cardNumber} not found.`);
    }
}
