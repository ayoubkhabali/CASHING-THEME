let    header = document.querySelector(".header");
let    navToggler = document.querySelector(".nav-toggler");
let    navList = document.querySelector(".nav-list");
let    TogIcon = document.querySelector(".toggler-icon");

window.addEventListener("scroll" , function () {
    if (this.pageYOffset > 60) {
        header.classList.add("stick");
    } else {
        header.classList.remove("stick")
    }
});

navToggler.addEventListener("click", function () {
    navList.classList.toggle("openList");
    TagIcon.classList.add('fa-times');
    TogIcon.classList.remove('fa-bars');
});


const reviews = [
    {
      id : 1,
      name : "user 1",
      text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet beatae vel nulla omnis minima ullam, hic accusantium dolorem nemo cumque molestias quia nobis aut! Consequuntur est quia illum officia eligendi. 111111",
    },
    {
      id : 2,
      name : "user 2",
      text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet beatae vel nulla omnis minima ullam, hic accusantium dolorem nemo cumque molestias quia nobis aut! Consequuntur est quia illum officia eligendi. 22222",
    },
    {
      id : 3,
      name : "user 3",
      text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet beatae vel nulla omnis minima ullam, hic accusantium dolorem nemo cumque molestias quia nobis aut! Consequuntur est quia illum officia eligendi. 333333",
    },
    {
      id : 4,
      name : "user 4",
      text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet beatae vel nulla omnis minima ullam, hic accusantium dolorem nemo cumque molestias quia nobis aut! Consequuntur est quia illum officia eligendi. 4444",
    }
  ];


  let currentItem = 0;
  
  const user = document.getElementById("user");
  const description = document.getElementById("description");
  const nextBtn = document.querySelector(".nextBtn");
  const prevBtn = document.querySelector(".prevBtn");

  window.addEventListener("DOMContentLoaded", function () {
      showPerson(currentItem);
  });

  nextBtn.addEventListener("click", function () {
      currentItem++;
      if (currentItem > reviews.length - 1) {
          currentItem = reviews.length - 1;
      };
      showPerson(currentItem);
  });

  prevBtn.addEventListener("click", function () {
      currentItem--;
      if (currentItem < 0) {
          currentItem = reviews.length - 1
      };
      showPerson(currentItem);

  });

  function showPerson(item) {
      const review = reviews[item];

      user.textContent = review.name;
      description.textContent = review.text;
  };




