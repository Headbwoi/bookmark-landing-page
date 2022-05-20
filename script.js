const hamburgerOpen = document.querySelector("#hamburger")
const hamburgerClose = document.querySelector("#hamburgerClose")
const mobileMenu = document.querySelector("#mobileMenu")
const links = document.querySelector(".links")
    linkTags = links.querySelectorAll("a")
const accordion = document.querySelectorAll(".accordion-item")
const toggleFeature = document.querySelector("#togglefeature"),
    toggleFeatureItem = toggleFeature.querySelectorAll(".toggleitem")
const featureItem = document.querySelector(".feature-item")
const featureItem1 = document.querySelector(".feature-item1")
const featureItem2 = document.querySelector(".feature-item2")
//form
const form = document.querySelector("form"),
    inputDiv = form.querySelector(".inputDiv"),
    email = inputDiv.querySelector("#email")
    errorTxt = inputDiv.querySelector("#errortxt")



//nav menu 
hamburgerOpen.addEventListener("click", () => {
    mobileMenu.classList.add("openMenu")
})

hamburgerClose.addEventListener("click", () => {
    mobileMenu.classList.remove("openMenu")
})

linkTags.forEach(tag => {
    tag.addEventListener("click", () => {
        mobileMenu.classList.remove("openMenu")
    })
})


//accordion item
accordion.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active")
    })
})

//feature toggle

toggleFeatureItem.forEach(item => {
    let itemValue = item.id

    item.addEventListener("click", () => {
        if (itemValue === "1") {
            removeActiveClass()
            item.classList.add("showTab")
            featureItem.classList.remove("hideFeature")
            featureItem1.classList.add("hideFeature")
            featureItem2.classList.add("hideFeature")
        }else if(itemValue === "2"){
            removeActiveClass()
            item.classList.add("showTab")
            featureItem.classList.add("hideFeature")
            featureItem1.classList.remove("hideFeature")
            featureItem2.classList.add("hideFeature")
        }else if(itemValue === "3"){
            removeActiveClass()
            item.classList.add("showTab")
            featureItem.classList.add("hideFeature")
            featureItem1.classList.add("hideFeature")
            featureItem2.classList.remove("hideFeature")
        }
    })
    
})

//remove active class
function removeActiveClass() {
    toggleFeatureItem.forEach(item => {
        item.classList.remove("showTab")
    })
}

//form validation

form.addEventListener("submit", e => {
    e.preventDefault()

    checkEmail()

    email.onkeyup = () => checkEmail()

    function checkEmail() {
        let eValue = email.value
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
        if (eValue === "") {
            inputDiv.classList.add("error")
            errorTxt.textContent = "Whoops! can't be empty"
        }else if(!eValue.match(pattern)){
            inputDiv.classList.add("error")
            errorTxt.textContent = "whoops! make sure it's an email"
        }else {
            inputDiv.classList.remove("error")
        }
    
    }
})