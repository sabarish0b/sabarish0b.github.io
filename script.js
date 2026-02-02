// ===============================
// Typing animation (OLD - NO CHANGE)
// ===============================
const roles = ["Frontend Developer", "UI Designer", "Web Enthusiast"];
let i = 0, j = 0;
const typing = document.querySelector(".typing");

function type(){
  if(j < roles[i].length){
    typing.textContent += roles[i][j++];
    setTimeout(type, 100);
  }else{
    setTimeout(erase, 1500);
  }
}

function erase(){
  if(j > 0){
    typing.textContent = roles[i].substring(0, --j);
    setTimeout(erase, 50);
  }else{
    i = (i + 1) % roles.length;
    setTimeout(type, 300);
  }
}

if(typing){
  type();
}

// ===============================
// RESPONSIVE NAVBAR (ADDED ONLY)
// Fashion website style
// ===============================
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if(bar){
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if(close){
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// ===============================
// Contact form (OLD - NO CHANGE)
// ===============================
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thanks for your message ❤️");
  this.reset();
});
