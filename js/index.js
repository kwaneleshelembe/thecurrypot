const navItems=document.querySelectorAll(".nav-item");
const navToggler=document.querySelector("#navbar-toggler-btn");

let activeItem=navItems[0];

navItems.forEach(n=>{
		n.addEventListener("click",(event)=>{
			activeItem.classList.remove("active");
			n.classList.add("active");
			activeItem=n;
			navToggler.click();
		})
});