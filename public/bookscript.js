const stars = document.getElementsByClassName('fa-star');
const returnBtn = document.getElementById('returnBtn')

let level = rating.dataset.id;

returnBtn.onclick = () => {
    goBack()
}

for (let i = 0; i < level; i++) {
    const star = stars[i];
    star.classList.add('fa-solid')
}

function goBack() {
    window.history.back();
}