// const counter = document.querySelector(".counter");
// const increment = counter.querySelector(".increment");
// const decrement = counter.querySelector(".decrement");
// const input = counter.querySelector("input");

// const indexSlide = (id, options, mount) => {
//   const splide = new Splide("#" + id, {
//     arrows: false,
//     perMove: 1,
//     rewindSpeed: 900,
//     lazyLoad: "sequential",
//     loop: true,
//     ...options,
//   }).mount(mount);
//   if (document.getElementById(id + "Prev")) {
//     document.getElementById(id + "Prev").addEventListener("click", () => {
//       var prev = id + "Prev";
//       var next = id + "Next";
//       // $( "#" + next  ).removeClass( "active" );
//       // $( "#" + prev  ).addClass( "active" );
//       splide.go("-1");
//     });
//   }
//   if (document.getElementById(id + "Next")) {
//     document.getElementById(id + "Next").addEventListener("click", () => {
//       var prev = id + "Prev";
//       var next = id + "Next";
//       // $( "#" + prev  ).removeClass( "active" );
//       // $( "#" + next  ).addClass( "active" );
//       splide.go("+1");
//     });
//   }
// };

// increment.addEventListener("click", () => input.stepUp());
// decrement.addEventListener("click", () => input.stepDown());
// window.addEventListener("load", function () {
//   indexSlide("homeSlider", {
//     perPage: 1,
//     pagination: true,
//     type: "loop",
//     easing: "cubic-bezier(.42,.65,.27,.99)",
//   });
//   indexSlide("energySlider", {
//     perPage: 1,
//     pagination: true,
//   });
//   indexSlide("careerSlider", {
//     perPage: 1,
//     pagination: false,
//   });
//   indexSlide("newsSlider", {
//     perPage: 3,
//     pagination: false,
//     gap: 0,
//     breakpoints: {
//       768: {
//         perPage: 1,
//       },
//       992: {
//         perPage: 2,
//       },
//     },
//   });
//   const socialSlider = new Splide("#socialSlider", {
//     arrows: false,
//     perMove: 1,
//     rewindSpeed: 900,
//     lazyLoad: "sequential",
//     loop: true,
//     perPage: 1,
//     pagination: false,
//     type: "fade",
//   }).mount();
//   const socialTwo = new Splide("#socialTwo", {
//     arrows: false,
//     perMove: 1,
//     rewindSpeed: 900,
//     lazyLoad: "sequential",
//     loop: true,
//     perPage: 2,
//     pagination: false,
//     type: "loop",
//     autoWidth: true,
//   }).mount();

//   document.getElementById("socialSliderPrev").addEventListener("click", () => {
//     socialTwo.go("-1");
//   });
//   document.getElementById("socialSliderNext").addEventListener("click", () => {
//     socialTwo.go("+1");
//   });
//   socialSlider.sync(socialTwo).mount();
// });

// $("#savingMode").click(function() {
//   var add = document.getElementsByClassName("dark-mode")
//   $("#search-card").hide();
//   $( "#flexSwitchCheckChecked" ).click(function (){
//     console.log("basyım")
//     if ( add.length !== 0 ) {
//       $( "#bodyDark" ).removeClass( "dark-mode" );
//     } else {
//       $( "#bodyDark" ).addClass( "dark-mode" );
//     }
//   });
//   $("#saving-mode").slideToggle("slow");
// });
// $( "#flexSwitchCheckChecked" ).click(function (){
//   var add = document.getElementsByClassName("dark-mode")
//   if ( add.length !== 0 ) {
//     $( "#bodyDark" ).removeClass( "dark-mode" );
//   } else {
//     $( "#bodyDark" ).addClass( "dark-mode" );
//   }
// });

// $("#searchCard").click(function() {
//   $("#saving-mode").hide();
//   $("#search-card").slideToggle("slow");
// });
