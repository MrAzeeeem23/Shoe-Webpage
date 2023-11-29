gsap.registerPlugin(ScrollTrigger);
  
    gsap.from('span',{
    y:100,
    duration:0.2,
    opacity:0,
    stagger:0.2,
    delay:1
})

    gsap.from('.photo',{
    x:100,
    duration:0.9,
    opacity:0,
})
    gsap.from('.prod-card',{
    y:200,
    duration: 0.9,
    opacity:0,
    scrollTrigger: '.prod-card'
})

    gsap.from('#BG-shoeOne', {
    x: -800,
    duration: 1,
    // opacity:0,
    scrollTrigger: '#BG-shoeOne'
})

    gsap.from('#BG-shoeTwo', {
    x: 800,
    duration: 1,
    delay: 0.5,
    // opacity:0,
    scrollTrigger: '#BG-shoeTwo'
})
// window.addEventListener('scroll', function(){
//     let yoff = window.pageYOffset
//     let scrollheight = window.innerHeight

//     let percentageH = (yoff / scrollheight) * 100
//    if(percentageH > 80){
//     gsap.to('.prod-card', {
//     duration:3,
//     rotate:360,
//     ease:"elastic"
//     })
    
//    }console.log(percentageH)
// })

const checkoutBtn = document.querySelectorAll('.checkOut');
const paymentBox = document.querySelector('#payment-box');
const submitPaymentBtn = document.querySelector('#submit-payment');
const backBtn = document.querySelector('#back-btn');

checkoutBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
    paymentBox.style.display = 'block';
    console.log("hellow")
});
})

backBtn.addEventListener('click', () => {
  paymentBox.style.display = 'none';
});

submitPaymentBtn.addEventListener('click', () => {
  alert('Payment submitted successfully!');
});

const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
      currentProductSizes.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });