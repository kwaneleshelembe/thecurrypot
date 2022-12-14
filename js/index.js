const navItems=document.querySelectorAll(".nav-item");
const navContent=document.querySelector("#nav-content");

let activeItem=navItems[0];

navItems.forEach(n=>{
		n.addEventListener("click",(event)=>{
			activeItem.classList.remove("active");
			n.classList.add("active");
			activeItem=n;
			navContent.classList.remove("show");
		})
});

const hiddenImages=document.querySelectorAll(".hidden");

const options={rootMargin:"-100px 0px 0px 0px"};

const imageObserver=new IntersectionObserver((entries)=>{
	entries.forEach(entry=>{
		if(entry.isIntersecting){
			entry.target.classList.remove("hidden");
		}
	});
},options);


hiddenImages.forEach(el=>{
	imageObserver.observe(el)
});
