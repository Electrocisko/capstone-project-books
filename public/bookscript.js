const stars = document.getElementsByClassName('fa-star');
const rating = document.getElementById('rating');

let level = rating.dataset.id;

rating.classList.add('fa-solid')

for (let i = 0; i < level; i++) {
    const star = stars[i];
    star.classList.add('fa-solid')
  
    
}

