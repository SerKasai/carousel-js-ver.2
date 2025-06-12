const slides = [
  {
    title: 'Svezia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'img/01.jpg'
  },
  {
    title: 'Svizzera',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dui a tellus rhoncus gravida vitae ac justo. Nulla vel congue purus, nec sodales neque.',
    image: 'img/02.jpg'
  },
  {
    title: 'Gran Bretagna',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dui a tellus rhoncus gravida vitae ac justo.',
    image: 'img/03.jpg'
  },
  {
    title: 'Germania',
    description: 'Lorem ipsum dolor sit amet.',
    image: 'img/04.jpg'
  },
  {
    title: 'Paradise',
    description: 'Lorem ipsum',
    image: 'img/05.jpg'
  },
]

const items = [];
const title = [];
const text = [];

const itemsRef = document.getElementsByClassName('items')[0];
const thumbsRef = document.getElementsByClassName('thumbs')[0];
let item = '';
let thumb = '';
let active = 1;

// for (let i = 0; i < slides.length; i++) {

//   const { title, description, image } = slides[i];

//   item += `
//   <div class="item">
//     <img src="${image}" alt="${title}">
//     <div class="text">
//       <h3>${title}</h3>
//       <p>${description}</p>
//     </div>
//   </div>`
//   thumb += `
//   <div class="thumb">
//   <img src="${image}" alt="">
//   </div>`
// }

slides.forEach(({ title, description, image }) => {

  item += `
  <div class="item">
    <img src="${image}" alt="${title}">
    <div class="text">
      <h3>${title}</h3>
      <p>${description}</p>
    </div>
  </div>`
  thumb += `
  <div class="thumb">
  <img src="${image}" alt="">
  </div>`

})

itemsRef.innerHTML = item;
document.getElementsByClassName('item')[active].classList.add('active');

thumbsRef.innerHTML += thumb;
document.getElementsByClassName('thumb')[active].classList.add('active');

const prev = document.querySelector('.prev');
prev.addEventListener('click', function () {
  if (active == 0) {
    active = items.length - 1;

    document.querySelector('.item.active').classList.remove('active');
    document.getElementsByClassName('item')[active].classList.add('active');

    document.querySelector('.thumb.active').classList.remove('active');
    document.getElementsByClassName('thumb')[active].classList.add('active');
  } else if (active < items.length) {
    --active

    document.querySelector('.item.active').classList.remove('active');
    document.getElementsByClassName('item')[active].classList.add('active');

    document.querySelector('.thumb.active').classList.remove('active');
    document.getElementsByClassName('thumb')[active].classList.add('active');
  }
});

const next = document.querySelector('.next');
next.addEventListener('click', function () {
  if (active < items.length - 1) {
    ++active

    document.querySelector('.item.active').classList.remove('active');
    document.getElementsByClassName('item')[active].classList.add('active');

    document.querySelector('.thumb.active').classList.remove('active');
    document.getElementsByClassName('thumb')[active].classList.add('active');
  } else if (active == items.length - 1) {
    active = 0;

    document.querySelector('.item.active').classList.remove('active');
    document.getElementsByClassName('item')[active].classList.add('active');

    document.querySelector('.thumb.active').classList.remove('active');
    document.getElementsByClassName('thumb')[active].classList.add('active');
  }
})