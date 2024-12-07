import './index.css'
import 'remixicon/fonts/remixicon.css'
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import PixiPlugin from 'gsap/PixiPlugin';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(PixiPlugin) ;

import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();

function textAnimation(){
  gsap.from(".txt1 span", {
    y: 30,
    delay: 0.1,
    duration: 0.7,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    stagger: 0.1  // Changed from multiplier to stagger
  }, "animate1");
  
  gsap.from(".txt2 span", {
    y: 80,
    delay: 0.1,
    duration: 0.7,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    stagger: 0.1
  }, "animate1");
  gsap.from(".txt3 span", {
    y: 80,
    delay: 0.1,
    duration: 0.7,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    stagger: 0.1
  }, "animate1");
  gsap.from(".txt4 span", {
    y: 80,
    delay: 0.1,
    duration: 0.7,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    stagger: 0.1
  }, "animate1");
}
textAnimation()

var tl = gsap.timeline();

tl.from("#section8 img",{
  opacity:0,
  duration:1
})
tl.to("#section8",{
  opacity:0,
})
tl.from("#section8 img",{
  opacity:0,
  duration:1
})
tl.to("#section8",{
  display:"none"
})
gsap.to(".centerTxt1", {
  opacity: 0,
  duration: 3,
  scrollTrigger: {
    trigger: ".centerTxt1",
    start: "top 40%", // Adjust this to control when animation starts
    end: "bottom 40%", // Adjust this to control when animation ends
    scrub: 3, // Enables smooth scrubbing effect
    pin: true, // Pins the element during the animation
    // markers:true
  },

});
gsap.from("#centerTxt2", {
  opacity:0,
  duration: 3,
  scrollTrigger: {
    trigger: "#centerTxt2",
    start: "top 40%", // Adjust this to control when animation starts
    end: "bottom 40%", // Adjust this to control when animation ends
    scrub: 3, // Enables smooth scrubbing effect
    pin: true, // Pins the element during the animation
    // markers: true, // Uncomment this for debugging
  },

});

gsap.from(".sect2Second",{
  backgroundColor:"#F4F4F5",
  duration:2.5,
  ease: "sine.out",
  scale:50,
  filter:"blur(40px)",
  duration: 1,
  scrollTrigger: {
    trigger: ".section2",
    start: "top 60%",
    end: "bottom 60%", 
    scrub: 3,
    // markers:true
    // pin: true,
  }
})

let paragraph = document.querySelector("#para")
paragraph.addEventListener("mouseenter", function(){
  gsap.to("#para i",{
    opacity:1,
    rotate:-30,
    duration:0.2,
  })
})
paragraph.addEventListener("mouseleave", function(){
  gsap.to("#para i",{
    opacity:0.4,
    rotate:0,
    duration:0.2,
  })
})

gsap.to(".sect6Texts h1",{
  opacity:1,
  duration:1,
  ease: "back.out(1.7)",
  stagger:0.4,
  scrollTrigger:{
    trigger:".sect6Texts h1",
    start:"top 80%",
    end:"top 60%",
    scrub:3,
  }
})


function cardAddings(){
  let clutter = '';
  const cards = [
    {
      id:0,
      Image:"https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea284_05.08.22_HEAVN_0414.avif",
      title:"The energy boost in the morning.",
      description:"The full-spectrum daylight lamp that can be switched on at the front is a real wake-up call. With an effect of up to 10,000 lux, you reactivate your bodily functions for more vitality, wakefulness and concentration."
    },
    {
      id:1,
      Image:"https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea284_05.08.22_HEAVN_0414.avif",
      title:"The energy boost in the morning.",
      description:"The full-spectrum daylight lamp that can be switched on at the front is a real wake-up call. With an effect of up to 10,000 lux, you reactivate your bodily functions for more vitality, wakefulness and concentration."
    },
    {
      id:2,
      Image:"https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea284_05.08.22_HEAVN_0414.avif",
      title:"The energy boost in the morning.",
      description:"The full-spectrum daylight lamp that can be switched on at the front is a real wake-up call. With an effect of up to 10,000 lux, you reactivate your bodily functions for more vitality, wakefulness and concentration."
    },
    {
      id:3,
      Image:"https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea284_05.08.22_HEAVN_0414.avif",
      title:"The energy boost in the morning.",
      description:"The full-spectrum daylight lamp that can be switched on at the front is a real wake-up call. With an effect of up to 10,000 lux, you reactivate your bodily functions for more vitality, wakefulness and concentration."
    },
    {
      id:4,
      Image:"https://cdn.prod.website-files.com/6715f1e6fc9be43498dea1eb/6715f1e6fc9be43498dea284_05.08.22_HEAVN_0414.avif",
      title:"The energy boost in the morning.",
      description:"The full-spectrum daylight lamp that can be switched on at the front is a real wake-up call. With an effect of up to 10,000 lux, you reactivate your bodily functions for more vitality, wakefulness and concentration."
    },
  ]
  cards.forEach(function(card){
    clutter +=`        <div data-id="${card.id}" class="cards border w-full flex justify-between">
            <div class="cardLeft w-[35vw] h-[35vw] overflow-hidden ">
              <img class="w-full h-full object-cover " src="${card.Image}" alt="">
            </div>
            <div class="cardRight w-[36vw] px-10 py-10 ">
              <h3 class="font-normal text-3xl leading-7">${card.title}</h3>
              <p class="leading-5 py-5">${card.description}</p>
            </div>
          </div>`
  })
  let cardContainer = document.querySelector(".cardContainer")
  cardContainer.innerHTML = clutter
  const targetCard = document.querySelector('.cards[data-id="2"]');
  gsap.to(cardContainer, {
    duration: 1,
    backgroundColor: "rgb(24, 24, 27)",
    ease: "power1.inOut",
    scrollTrigger:{
      trigger:targetCard,
      start:"top 30%",
      end:"bottom 60%",
      scrub:3,
    }
  });
  gsap.to(".cards", {
    duration: 1,
    color:"#ffff",
    ease: "power1.inOut",
    scrollTrigger:{
      trigger:targetCard,
      start:"top 30%",
      end:"bottom 60%",
      scrub:3,
    }
  });
}

function fameAnimation(){
  const canvas = document.querySelector('#canvas')
  const context = canvas.getContext('2d');
  
  const frames = {
      currentIndex: 0,
      maxIndex: 482
  }
  
  const images = [];
  let imagesLoaded = 0;
  
  const preLoader = () => {
      for (var i = 1; i <= frames.maxIndex; i++) {
          const imgUrl = `./Lamp/frame_${i.toString().padStart(4, "0")}.jpeg`
          const img = new Image();
          img.src = imgUrl;
          img.onload = function () {
              imagesLoaded++
              if (imagesLoaded === frames.maxIndex) {
                console.log("images loaded")
                  loadImage(frames.currentIndex);
                  startAnimation();
              }
          }
          images.push(img)
      }
  }
  
  const loadImage = (index) => {
      if (index >= 0 && index <= frames.maxIndex) {
          const img = images[index]
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
  
          const scaleX = canvas.width / img.width;
          const scaleY = canvas.height / img.height;
          const scale = Math.max(scaleX, scaleY);
  
          const newWidth = img.width * scale;
          const newHeight = img.height * scale;
  
          const offsetX = (canvas.width - newWidth) / 2;
          const offsetY = (canvas.height - newHeight) / 2;
  
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.imageSmoothingEnabled = true;
          context.imageSmoothingQuality = "high";
          context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
          frames.currentIndex = index
          console.log(frames.currentIndex)
      }
  }
  function startAnimation(){
  
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger: ".parent",
            start: "top top",
            scrub: 2,
            end: "bottom bottom",
        }
    })
  
    function updateFrames(index){
      return{
        currentIndex:index,
        ease:"linear",
        onUpdate: function(){
          loadImage(Math.floor(frames.currentIndex))
        }
      }
    }
    tl
    .to(frames,updateFrames(80),"first")
    .to(".animate1", { opacity: 0, ease: "linear" }, "first")

    .to(frames,updateFrames(110),"second")
    .to(".animate2", { opacity: 1, ease: "linear" }, "second")

    .to(frames,updateFrames(130),"third")
    .to(".animate2", { opacity: 1, ease: "linear" }, "third")

    .to(frames,updateFrames(150),"fourth")
    .to(".animate2", { opacity: 0, ease: "linear" }, "fourth")

    .to(frames,updateFrames(180),"fifth")
    .to(".animate3", { opacity: 1, ease: "linear" }, "fifth")

    .to(frames,updateFrames(210),"sixth")
    .to(".animate3", { opacity: 1, ease: "linear" }, "sixth")

    .to(frames,updateFrames(240),"seventh")
    .to(".animate3", { opacity: 0, ease: "linear" }, "seventh")

    .to(frames,updateFrames(270),"eighth")
    .to(".animate4", { opacity: 1, ease: "linear" }, "eighth")
    
    .to(frames,updateFrames(300),"eighth")
    .to(".animate4", { opacity: 1, ease: "linear" }, "eighth")


  }
preLoader()
}

cardAddings()
fameAnimation()