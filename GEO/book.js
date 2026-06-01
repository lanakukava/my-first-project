const citySelect = document.getElementById('citySelect');

const peopleCount = document.getElementById('peopleCount');

const finalPrice = document.getElementById('finalPrice');

const bookingForm = document.getElementById('bookingForm');

/* PRICE UPDATE */

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

/* BOOKING */

bookingForm.addEventListener('submit', function(e){

    e.preventDefault();

    /* NAME */

    document.getElementById('ticketName').innerHTML =
    document.getElementById('nameInput').value;

    /* PERSONAL ID */

    document.getElementById('ticketPersonal').innerHTML =
    document.getElementById('personalInput').value;

    /* PHONE */

    document.getElementById('ticketPhone').innerHTML =
    document.getElementById('phoneInput').value;

    /* CITY */

    document.getElementById('ticketCity').innerHTML =
    citySelect.options[citySelect.selectedIndex].text;

    /* PEOPLE */

    document.getElementById('ticketPeople').innerHTML =
    peopleCount.options[peopleCount.selectedIndex].text;

    /* DATE */

    document.getElementById('ticketDate').innerHTML =
    document.getElementById('dateInput').value;

    /* PRICE */

    document.getElementById('ticketPrice').innerHTML =
    finalPrice.innerHTML;

    /* SHOW TICKET */

    document.getElementById('ticketPopup').style.display = 'flex';
});

/* CLOSE TICKET */

function closeTicket(){

    document.getElementById('ticketPopup').style.display = 'none';
}

/* DOWNLOAD TICKET */

function downloadTicket(){

    const ticket = document.getElementById('ticketCard');

    html2canvas(ticket).then(canvas => {

        const link = document.createElement('a');

        link.download = 'GeoVibe-Ticket.png';

        link.href = canvas.toDataURL();

        link.click();
    });
}