import gsap from "gsap";

const scrollAnimation = (position, target, onUpdate) => {
    const tl = gsap.timeline()
    tl.to(position,{
        x:-3.38,
        y:10.74,
        z:5.93,
        scrollTrigger:{
            trigger:'#second',
            start:'top bottom',
            end:'top top',
            scrub:2,
            immediateRender:false
        },
        onUpdate
    }).to(target,{
        x:1.52,
        y:0.77,
        z:2.08,
        scrollTrigger:{
            trigger:'#second',
            start:'top bottom',
            end:'top top',
            scrub:2,
            immediateRender:false
        },
    })
}

export  {scrollAnimation};