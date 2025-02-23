// window.addEventListener('scroll', setScrollVar)
// window.addEventListener('resize', setScrollVar)

// function setScrollVar() {
//     const htmlElement = document.documentElement;
//     const screenScrollPercentage = (htmlElement.scrollTop / htmlElement.clientHeight / 5) * 100

//     const mainSection = document.querySelector('.main')
//     const aboutSection = document.querySelector('.about')
//     const imageContainer = document.querySelector('.main__imageContainer')


//     if (imageContainer && imageContainer.style) {
//         imageContainer.style.backgroundImage = `url('./images/illustration-${Math.floor(Math.min((screenScrollPercentage), 44))}.png')`
//     }

//     if (screenScrollPercentage > 44) {
//         mainSection.style.position = 'relative'
//     }

//     if (screenScrollPercentage <= 44) {
//         mainSection.style.position = 'sticky'
//     }
// }

// setScrollVar()

// ---------------------------------------------------

window.addEventListener('scroll', () => {
    const htmlElement = document.documentElement
    const body = document.querySelector('body')
    const screenScrollPercentage = Math.round(htmlElement.scrollTop / htmlElement.clientHeight * 100)

    const [red, green, blue] = [255, 255, 255]
    const [redAbout, greenAbout, blueAbout] = [122, 157, 246]

    const bColor = `rgb(
        ${Math.round(red - (screenScrollPercentage * ((red - redAbout) / 100)))}, 
        ${Math.round(green - (screenScrollPercentage * ((green - greenAbout) / 100)))}, 
        ${Math.round(blue - (screenScrollPercentage * ((blue - blueAbout) / 100)))}
    )`

    const bColorMinus = `rgb(
        ${Math.round(redAbout + ((screenScrollPercentage - 100) * ((red - redAbout) / 100)))}, 
        ${Math.round(greenAbout + ((screenScrollPercentage - 100) * ((green - greenAbout) / 100)))}, 
        ${Math.round(blueAbout + ((screenScrollPercentage - 100) * ((blue - blueAbout) / 100)))}
    )`
    
    body.style.backgroundColor = screenScrollPercentage < 100 ? bColor : bColorMinus
})
