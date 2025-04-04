const listItems = document.querySelectorAll("li");
const indicator = document.querySelector(".indicator");
let activeIndex = 0; 

function moveIndicator(index) {
    indicator.style.transform = `translateX(${index * 70}px)`;
}

listItems.forEach((li, index) => {
    li.addEventListener("mouseover", () => {
        moveIndicator(index);
    });

    li.addEventListener("click", () => {
        listItems.forEach(item => item.classList.remove("active"));
        li.classList.add("active");
        activeIndex = index;
    });
});

const nav = document.querySelector(".navegation ul");
nav.addEventListener("mouseleave", () => {
    moveIndicator(activeIndex);

    listItems.forEach((li, index) => {
        if (index === activeIndex) {
            li.classList.add("active");
        } else {
            li.classList.remove("active");
        }
    });

const $list = document.querySelectorAll('li');

function activeLink() {
    $list.forEach(($li) => {
    $li.classList.remove('active');
});
this.classList.add('active');
}});

$list.forEach(($li) => {
$li.addEventListener(
    'click', 
    activeLink
);
});