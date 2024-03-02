function loadingAnimation() {
  var tl = gsap.timeline();

  tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.25,
  });

  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      var h5timer = document.querySelector("#line1-part1 h5");

      var grow = 0;
      setInterval(() => {
        if (grow < 100) {
          grow++;
          // console.log(grow);
          h5timer.innerHTML = grow;
        } else {
          grow = 100;
          h5timer.innerHTML = grow;
        }
      }, 33);
    },
  });

  tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
  });
  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 2.5,
  });

  tl.from("#page1", {
    delay: 0.2,
    y: 1600,
    opacity: 0,
    duration: 0.5,
    ease: Power4,
  });
  tl.to("#loader", {
    display: "none",
  });

  tl.from("#nav", {
    opacity: 0,
  });

  tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1", {
    y: 140,
    stagger: 0.2,
  });

  // important:-
  // tl.from("",{
  // opacity: 0, iska matlab hai ki starting me opacity 0 fir code execute hone ke baad opacity 1.
  // that meant opacity set from 0 to 1
  // })
  // tl.to("",{
  // opacity: 0, iska matlab hai ki starting me opacity 1 fir code execute hone ke baad opacity 0.
  // that meant opacity set from 1 to 0
  // })
}

function cursorAnimation() {
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23,1,0.320,1)",
    duration: 1,
  });
  Shery.makeMagnet("#nav-part2 h4");

  var videoContainer = document.querySelector("#video-container");
  var video = document.querySelector("#video-container video");
  videoContainer.addEventListener("mouseenter", function () {
    videoContainer.addEventListener("mousemove", function (dets) {
      gsap.to(".mouseFollower", {
        opacity: 0,
      });
      gsap.to("#video-cursor", {
        left: dets.x - 470,
        y: dets.y - 200,
      });
    });
  });

  videoContainer.addEventListener("mouseleave", function () {
    gsap.to(".mouseFollower", {
      opacity: 1,
    });

    gsap.to("#video-cursor", {
      left: "70%",
      top: "-15%",
    });
  });

  var flag = 0;
  videoContainer.addEventListener("click", function () {
    if (flag == 0) {
      video.play();
      video.style.opacity = 1;
      document.querySelector("#video-cursor").innerHTML =
        '<i class="ri-pause-mini-fill"></i>';
      gsap.to("#video-cursor", {
        scale: 0.5,
      });

      flag = 1;
    } else {
      video.pause();
      video.style.opacity = 1;
      document.querySelector("#video-cursor").innerHTML =
        '<i class="ri-play-mini-fill"></i>';
      gsap.to("#video-cursor", {
        scale: 1,
      });

      flag = 0;
    }
  });
}

function sheryAnimation() {
  Shery.imageEffect(".image-div", {
    style: 5,
    config: {
      a: { value: 2, range: [0, 30] },
      b: { value: 0.75, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7272399310861554 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 6.45, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: false },
      maskVal: { value: 1.3, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 0.66, range: [0, 10] },
      metaball: { value: 0.5, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.45, range: [0, 2] },
      noise_scale: { value: 7.44, range: [0, 100] },
    },
    gooey: true,
  });
}

loadingAnimation();

cursorAnimation();

sheryAnimation();

document.addEventListener("mousemove", function (dets) {
  gsap.to("#flag", {
    x: dets.x,
    y: dets.y,
  });
});

document.querySelector("#hero3").addEventListener("mouseenter", function () {
  gsap.to("#flag", {
    opacity: 1,
  });
});

document.querySelector("#hero3").addEventListener("mouseleave", function () {
  gsap.to("#flag", {
    opacity: 0,
  });
});

document
  .querySelector("#textAnimation")
  .addEventListener("mouseenter", function () {
    gsap.from("#textAnimation", {
      opacity: 0,
      duration: 0.5,
      onStart: function () {
        $('#textAnimation').textillate({
          loop: true,
          minDisplayTime:400, //Loop Interval
          initialDelay: 100, //Waiting time before starting
          //when start animation
          in: {
            effect: 'fadeIn', //EffectType(options;http://textillate.js.org/)
          }
        });
      },
    });
  });

