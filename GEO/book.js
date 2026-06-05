const citySelect = document.getElementById('citySelect');

const peopleCount = document.getElementById('peopleCount');

const finalPrice = document.getElementById('finalPrice');

const bookingForm = document.getElementById('bookingForm');

function updatePrice(){

    let basePrice = Number(citySelect.value);

    let people = Number(peopleCount.value);

    let final = basePrice;

    if(people == 2){

        final = basePrice * 0.9;
    }

    else if(people == 3){

        final = basePrice * 0.8;
    }

    else if(people >= 4){

        final = basePrice * 0.7;
    }

    finalPrice.innerHTML = Math.round(final) + '₾';
}

citySelect.addEventListener('change', updatePrice);

peopleCount.addEventListener('change', updatePrice);

updatePrice();

bookingForm.addEventListener('submit', function(e){

    e.preventDefault();

    document.getElementById('ticketName').innerHTML =
    document.getElementById('nameInput').value;

    document.getElementById('ticketPersonal').innerHTML =
    document.getElementById('personalInput').value;

    document.getElementById('ticketPhone').innerHTML =
    document.getElementById('phoneInput').value;

    document.getElementById('ticketCity').innerHTML =
    citySelect.options[citySelect.selectedIndex].text;

    document.getElementById('ticketPeople').innerHTML =
    peopleCount.options[peopleCount.selectedIndex].text;

    document.getElementById('ticketDate').innerHTML =
    document.getElementById('dateInput').value;

    document.getElementById('ticketPrice').innerHTML =
    finalPrice.innerHTML;


    document.getElementById('ticketPopup').style.display = 'flex';
});


function closeTicket(){

    document.getElementById('ticketPopup').style.display = 'none';
}


function downloadTicket(){

    const ticket = document.getElementById('ticketCard');

    html2canvas(ticket).then(canvas => {

        const link = document.createElement('a');

        link.download = 'GeoVibe-Ticket.png';

        link.href = canvas.toDataURL();

        link.click();
    });
}