// ======== Sticky Navbar on Scroll ========
let header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 50);
});

// ======== Scroll Section Active Link ========
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;

    sections.forEach(sec => {
        let height = sec.offsetHeight;
        let top = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if (scrollY >= top && scrollY < top + height) {
            navLinks.forEach(link => link.classList.remove('active'));
             document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
        }
    });
});

// ======== Smooth Scrolling for Navigation ========
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// ======== Scroll to Top Button ========
document.querySelector(".top-icon a").addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ======== Simple Button Animation ========
let buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
    btn.addEventListener('mousedown', () => {
        btn.style.transform = "scale(0.95)";
    });
    btn.addEventListener('mouseup', () => {
        btn.style.transform = "scale(1)";
    });
});
   /* dowload cv*/



   function downloadAlert() {
    alert("Thanks for downloading! Your CV is on the way.");
}

// ======== Contact Form Alert (Dummy Example) ========
// document.querySelector('button').onclick = () => {
//     alert("Your message has been received! (Form not connected to server yet)");
// };
function sendMessage() {
    // Get form input values
    let name = document.querySelector('input[placeholder="Full Name"]').value;
    let email = document.querySelector('input[placeholder="Email Address"]').value;
    let number = document.querySelector('input[placeholder="Mobile Number"]').value;
    let subject = document.querySelector('input[placeholder=" Email Subject"]').value;
    let message = document.querySelector('textarea').value;

    // Check if fields are empty
    if (name === "" || email === "" || number === "" || subject === "" || message === "") {
        alert("⚠ Please fill all fields before sending.");
        return;
    }

    // If all fields are filled
    alert("✅ Your message has been sent successfully!");
}
