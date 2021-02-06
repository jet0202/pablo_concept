
gsap.from(".logo", { duration: 0.6, ease: "power2. out", y: -60});
gsap.from(".woman", { duration: 0.6, ease: "back. out", opacity:0, y: -40, delay: 1});
// gsap.fromTo(".frist", {x:-20, autoAlpha:1}, {x:0, autoAlpha:0, duration: 5});


let tl = gsap.timeline({delay: 1.5, repeat:-1, repeatDelay:10});
tl.from("#P", { duration: 0.6, ease: "power2.out", opacity:0, x: -40})
tl.from("#A", { duration: 0.6, ease: "power2.out", opacity:0, y: 40})
tl.from("#B", { duration: 0.6, ease: "power2.out", opacity:0, x: 40})
tl.from("#L", { duration: 0.6, ease: "power2.out", opacity:0, y: -40})
tl.from("#O", { duration: 0.6, ease: "power2.out", opacity:0, x: -40})
tl.from(".pablo-logo", { duration: 0.9, ease: "elastic", y: 10})

let tl2 = gsap.timeline({delay: 2, repeat:-1, repeatDelay:5});
tl2.from(".first", { duration: 2.5, ease: "slow.out", opacity:0, x: -40})
tl2.from(".second", { duration: 2.5, ease: "slow.out", opacity:0, x: -40})
tl2.from(".third", { duration: 2.5, ease: "slow.out", opacity:0, x: -40})
tl2.from(".fourth", { duration: 2.5, ease: "slow.out", opacity:0, x: -40})
tl2.from(".fifth", { duration: 2.5, ease: "slow.out", opacity:0, x: -40})
tl2.from(".sixth", { duration: 2.5, ease: "slow.out", opacity:0, x: -40})
tl2.from(".seventh", { duration: 2.5, ease: "slow.out", opacity:0, x: -40})
tl2.from(".eighth", { duration: 2.5, ease: "slow.out", opacity:0, x: -40})
tl2.from(".nineth", { duration: 2.5, ease: "slow.out", opacity:0, x: -40})
// tl2.to(".first", { duration:1, ease: "power2.out", opacity:0, delay:1});
// tl2.from(".second", { duration:1, ease: "power2.out", opacity:0, x:-40});

// gsap.to(".1", {opacity:0}, {opacity:1,display:'block'});