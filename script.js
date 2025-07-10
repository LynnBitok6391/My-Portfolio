// --- Tab switching logic ---
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}


// --- Mobile navigation menu logic ---
var nav = document.querySelector("nav");

function openmenu() {
    // Add 'menu-open' class to the nav element to show the menu
    if (nav) {
        nav.classList.add("menu-open");
    }
}

function closemenu() {
    // Remove 'menu-open' class from the nav element to hide the menu
    if (nav) {
        nav.classList.remove("menu-open");
    }
}


// --- Google Sheet form submission logic ---
const scriptURL = 'https://script.google.com/macros/s/AKfycbxAyTfZ0m1LKRROaQjteeLmcgb483--w3hdb7NtWqqWql6fjeSRL2ZvrbKdroqAbdlTPA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            if (msg) {
                msg.innerHTML = "Message sent successfully"
                setTimeout(function(){
                    msg.innerHTML = ""
                }, 5000)
            }
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
}