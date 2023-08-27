let show_features = document.querySelector(".show_feature");

let Comp_features = document.querySelector(".Comp_features");

let links_box_show = document.getElementById("Features_box");

let links_box = document.querySelector(".company");

show_features.addEventListener("click", () => {
  links_box_show.classList.toggle("show_features");
});
Comp_features.addEventListener("click", () => {
  links_box.classList.toggle("Company_features");
});

// script for mobile display

let show_features1 = document.querySelector(".show_feature1");

let Comp_features1 = document.querySelector(".Comp_features1");

let links_box_show1 = document.getElementById("Features_box1");

let links_box1 = document.querySelector(".company1");


show_features1.addEventListener("click", () => {
  links_box_show1.classList.toggle("show_features");
});

Comp_features1.addEventListener("click", () => {
  links_box1.classList.toggle("Company_features");
});

// ul Display

let menu = document.querySelector('.menu img');

let list_items = document.querySelector('.mobile_ul');

menu.addEventListener('click',()=>{
  if(list_items.style.display === 'none'|| list_items.style.display === ''){
    list_items.style.display = 'flex'
  }else{
    list_items.style.display = 'none'

  }
});

// changing the Main img

let img_location = document.querySelector('.right_main img');

let old_img_url = 'images/image-hero-desktop.png';

let new_img_url = 'images/image-hero-mobile.png';

let all_br = document.querySelectorAll('br')

window.addEventListener('resize',()=>{

  if(window.innerWidth < 1024){
    img_location.setAttribute('src',new_img_url);
  }else{
    img_location.setAttribute('src',old_img_url);
  }

  // Removing br tags

  if(window.innerWidth< 545){
    all_br.forEach((br_tags)=>{
      br_tags.remove();
    })
  }
  
})