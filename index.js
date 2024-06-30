function showSidebar() {
    const container1 = document.querySelector('.container1')
    container1.style.display = 'flex'
    
    
}
function hideSidebar() {
    const container1 = document.querySelector('.container1')
    container1.style.display = 'none'
}



/*profile popup*/
function openPopup1() {
    document.getElementById("popupContainer").style.display = "block";
    document.getElementById("overlay").style.display = "block";

    //code to close side bar when login pop's up
    const container1 = document.querySelector('.container1')
    container1.style.display = 'none'  
}
function closePopup1() {
    document.getElementById("popupContainer").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
/*Bookings popup*/
function openPopup2() {
    document.getElementById("popupContainer").style.display = "block";
    document.getElementById("overlay").style.display = "block";

    //code to close side bar when login pop's up
    const container1 = document.querySelector('.container1')
    container1.style.display = 'none'
}
function closePopup2() {
    document.getElementById("popupContainer").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
/*Models & rent+ popup*/
function openPopup3() {
  document.getElementById("pop").style.display = "block";
  document.getElementById("overlay").style.display = "block";

  //code to close side bar when login pop's up
  const container1 = document.querySelector('.container1')
  container1.style.display = 'none'
}
function closePopup3() {
  document.getElementById("pop").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}




const $next = document.querySelector 
 ('.next'); 
 const $prev = document.querySelector 
 ('.prev'); 
$prev.addEventListener( 
    'click', 
    () => {
        const caritem = document.querySelectorAll('.car-item'); 
        document.querySelector('.car-slide'). 
        prepend(caritem[caritem.length -1])
    },
);
$next.addEventListener( 
    'click', 
    () => {
    const caritem  = document.querySelectorAll('.car-item'); 
    document.querySelector('.car-slide'). 
    appendChild(caritem[0]);
    },
);




document.addEventListener("DOMContentLoaded", function() {
  const questions = document.querySelectorAll(".question");
questions.forEach(question => {
  question.addEventListener("click", function() {
  const answer = this.nextElementSibling;
questions.forEach(otherQuestion => {
  const otherAnswer = otherQuestion.nextElementSibling;
  if (otherQuestion !== question) {
    otherAnswer.style.display = "none";
    otherQuestion.classList.remove("active");
  }
});
  
if (answer.style.display === "block") {
    answer.style.display = "none";
    this.classList.remove("active");
} 
else{
    answer.style.display = "block";
    this.classList.add("active");
}
    });
  });
});


  

document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
    // Show button when user scrolls down
window.addEventListener("scroll", function() {
  if (window.pageYOffset > 100) {
  scrollToTopBtn.classList.add("show");
} 
else{
  scrollToTopBtn.classList.remove("show");
}
  });
    // Scroll to top when button is clicked
scrollToTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
});
  






    
   
   
    
   
  

  





