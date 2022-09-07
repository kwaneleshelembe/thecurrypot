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