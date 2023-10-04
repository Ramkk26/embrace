const accordtitles=document.querySelectorAll('.accord-title');

accordtitles.forEach((title)=>{
title.addEventListener("click",()=>{
    const height=title.nextElementSibling.scrollHeight;
title.classList.toggle("active-header");
if(title.classList.contains("active-header")){
    title.nextElementSibling.style.maxHeight=`${height}px`;
} else{
    title.nextElementSibling.style.maxHeight=`0px`;
}

});
});


const counters = document.querySelectorAll(".count");
const speed = 200; // The lower the slower

counters.forEach(counter => {
    counter.innerText="0";

	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = `${Math.ceil(count + inc)}`;
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});

jQuery(document).ready(function($)
{
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});



// slider

var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},
   
breakpoints:{
	0: {
		slidesPerView: 1,
	},
	700: {
		slidesPerView: 2,
	},
	950: {
		slidesPerView: 3,
	},
},
  });


 const menuicon=document.querySelector(".menu-icon");
const  list=document.querySelector(".list-items");
const nav=document.querySelector(".list");
const btn=document.querySelector(".try-btn");

menuicon.addEventListener("click",()=>{
	nav.classList.toggle("v-class");
	btn.classList.toggle("v-class");
	list.classList.toggle("h-nav")
});

function play() {
	document.getElementById("slide-out ").style.transform="translate3d(900px,0px,0px)";
	document.getElementById("movie-slide").style.transition=" all 24s  " ;
	document.getElementById("movie-slow").style.transform="translateX(-1400px)";
	document.getElementById("movie-slow").style.transition=" all 20s ";  
  
	}function pause() {
	  document.getElementById("movie-slide").style.transform="none";
	 
	  document.getElementById("movie-slow").style.transform="none";
	
	
	  }
  