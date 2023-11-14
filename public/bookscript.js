const stars = document.getElementsByClassName('fa-star');
// const rating = document.getElementById('rating');
const returnBtn = document.getElementById('returnBtn')

let level = rating.dataset.id;

returnBtn.onclick = () => {
    goBack()
}


// rating.classList.add('fa-solid')

for (let i = 0; i < level; i++) {
    const star = stars[i];
    star.classList.add('fa-solid')
}

function goBack() {
    window.history.back();
}