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

    const aboutSection = document.querySelector('.about')
    const projectsSection = document.querySelector('.projects')
    const outroSection = document.querySelector('.outro-2')

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

// Tabs Section
const tabsText = [
    "Hi there! I’m Carolina, a passionate Digital Product Designer who loves crafting intuitive and visually captivating experiences. Whether you’re here for inspiration or curiosity, I hope my work sparks joy and creativity!",
    "Hello, recruiters! I’m Carolina Valadão, a UX/UI Designer with a knack for blending creativity and user-centered solutions. My goal? To design experiences that engage and inspire. Let's connect—I'd love to contribute to your team!",
    "Hey, fellow designers! I’m Carolina, a UX/UI enthusiast with a love for elegant interfaces and seamless user journeys. I believe great design is where aesthetics meet functionality. Let’s exchange ideas and create something impactful!",
    "Hi, Product Managers! I thrive at the intersection of user needs and business goals. My focus is on delivering designs that balance usability, scalability, and impact—because great products start with great collaboration!",
    "Hello, Engineers! I design with {efficiency} && {collaboration} in mind.While (I’m ≠ coder), I value clean handoffs & seamless teamwork.Together, let’s debug ideas & ship great products!"
]

function selectTab(tabId) {
    const previousActiveTab = document.querySelector('.about__link--active')
    previousActiveTab.classList.remove('about__link--active')

    const selectedTab = (document.querySelector('.about__tabs')).children[tabId]
    selectedTab.children[0].classList.add("about__link--active");

    const textElement = document.querySelector('.about__content')
    textElement.innerHTML = tabsText[tabId]
}