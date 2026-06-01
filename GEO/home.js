const modal = document.getElementById('modal');

const modalTitle = document.getElementById('modalTitle');
const modalImg = document.getElementById('modalImg');
const modalPrice = document.getElementById('modalPrice');
const modalTime = document.getElementById('modalTime');
const modalPlaces = document.getElementById('modalPlaces');
const modalSeason = document.getElementById('modalSeason');

function openModal(title, img, price, time, places, season){

    modal.style.display = 'flex';

    modalTitle.innerHTML = title;
    modalImg.src = img;
    modalPrice.innerHTML = price;
    modalTime.innerHTML = time;
    modalPlaces.innerHTML = places;
    modalSeason.innerHTML = season;
}

function closeModal(){
    modal.style.display = 'none';
}window.onclick = function(e){

    if(e.target == modal){
        modal.style.display = 'none';
    }
}