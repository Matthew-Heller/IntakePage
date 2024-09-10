let currentCard = 1;

function loadCaseSpecific() {
    const caseType = document.getElementById('case-type').value;
    let fileName = '';

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

    fetch(`case-type-questions/${fileName}`)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load ${fileName}`);
            return response.text();
        })
        .then(data => {
            document.getElementById('case-specific-container').innerHTML = data;
            showCard(2); // Move to the case-specific card
        })
        .catch(error => console.error('Error loading case-specific file:', error));
}

function showCard(cardNumber) {
    document.querySelectorAll('.card').forEach(function (card) {
        card.style.display = 'none';
    });
    document.getElementById('card-' + cardNumber).style.display = 'block';
    currentCard = cardNumber;
}

function nextCard() {
    const nextCardNumber = currentCard + 1;
    showCard(nextCardNumber);
}

function prevCard() {
    const prevCardNumber = currentCard - 1;
    if (prevCardNumber >= 1) {
        showCard(prevCardNumber);
    }
}
