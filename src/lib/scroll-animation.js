import gsap from "gsap";

const scrollAnimation = (position, target, onUpdate) => {
    const tl = gsap.timeline()
    tl.to(position, {
        x: -3.38,
        y: 10.74,
        z: 5.93,
        scrollTrigger: {
            trigger: '#second',
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
        onUpdate
    }).to(target, {
        x: 1.52,
        y: 0.77,
        z: 2.08,
        scrollTrigger: {
            trigger: '#second',
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
    }).to('#header', {
        opacity: 0,
        scrollTrigger: {
            trigger: '#second',
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
    }).to('#c-second', {
        opacity: 1,
        scrollTrigger: {
            trigger: '#second',
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
    }).to(position, {
        x: 1.56,
        y: 8.0,
        z: 0.01,
        scrollTrigger: {
            trigger: '#third',
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
        onUpdate
    }).to(target, {
        x: -1.0,
        y: 0.32,
        z: 0.0,
        scrollTrigger: {
            trigger: '#third',
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
    })
}

export { scrollAnimation };



// import gsap from "gsap";

// const scrollAnimation = (position, target, onUpdate) => {
//     const tl = gsap.timeline()
//     tl.to(position, {
//         x: -3.38,
//         y: 10.74,
//         z: -5.93,
//         scrollTrigger: {
//             trigger: '#second',
//             start: 'top bottom',
//             end: 'top top',
//             scrub: 2,
//             immediateRender: false
//         },
//         onUpdate
//     }).to(target, {
//         x: -2.0,
//         y: 0.77,
//         z: -1.08,
//         scrollTrigger: {
//             trigger: '#second',
//             start: 'top bottom',
//             end: 'top top',
//             scrub: 2,
//             immediateRender: false
//         },
//     }).to('#header', {
//         opacity: 0,
//         scrollTrigger: {
//             trigger: '#second',
//             start: 'top bottom',
//             end: 'top top',
//             scrub: 2,
//             immediateRender: false
//         },
//     }).to('#c-second', {
//         opacity: 1,
//         scrollTrigger: {
//             trigger: '#second',
//             start: 'top bottom',
//             end: 'top top',
//             scrub: 2,
//             immediateRender: false
//         },
//     }).to(position, {
//         x: 1.56,
//         y: 8.0,
//         z: 0.01,
//         scrollTrigger: {
//             trigger: '#third',
//             start: 'top bottom',
//             end: 'top top',
//             scrub: 2,
//             immediateRender: false
//         },
//         onUpdate
//     }).to(target, {
//         x: -1.0,
//         y: 0.32,
//         z: 0.0,
//         scrollTrigger: {
//             trigger: '#third',
//             start: 'top bottom',
//             end: 'top top',
//             scrub: 2,
//             immediateRender: false
//         },
//     })
// }

// export { scrollAnimation };