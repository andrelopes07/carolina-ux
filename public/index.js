// Main Cat scroll animation
window.addEventListener('scroll', setScrollVar)
window.addEventListener('resize', setScrollVar)

function setScrollVar() {
    const htmlElement = document.documentElement
    const screenScrollPercentage = (htmlElement.scrollTop / htmlElement.clientHeight / 3) * 100

    const imageContainer = document.querySelector('.main__cat')

    if (screenScrollPercentage <= 58 && imageContainer && imageContainer.style) {
        imageContainer.style.backgroundImage = `url('./images/${Math.floor(Math.min((screenScrollPercentage + 1), 58))}.png')`
    } else if (screenScrollPercentage > 59) {
        imageContainer.style.backgroundImage = `url('./images/58.png')`
    }
}

setScrollVar()

// Skills Cats animation
window.addEventListener('scroll', () => {
    const skillsSectionEl = document.querySelector('.outer-skills')
    const skillsRect = skillsSectionEl.getBoundingClientRect()
    const skillsScrollPercentage = Math.round(-skillsRect.top / skillsRect.height * 100)

    const scrollCatsEl = document.querySelector('.skills__scrollCats')
    scrollCatsEl.style.transform = `translateX(${100 - skillsScrollPercentage * 1.85}%)`

    const secondaryTextEl = document.querySelector('.skills__secondaryText')
    secondaryTextEl.style.opacity = 0 + skillsScrollPercentage / 50
})

// Outro Cats animation
window.addEventListener('scroll', () => {
    const outroEl = document.querySelector('.outro-1')
    const outroCat1El = document.querySelector('.outro-1__cat--1')
    const outroCat2El = document.querySelector('.outro-1__cat--2')
    const outroCat3El = document.querySelector('.outro-1__cat--3')
    const outroCat4El = document.querySelector('.outro-1__cat--4')

    const outroRect = outroEl.getBoundingClientRect()
    const outroScrollPercentage = Math.round(-outroRect.top / outroRect.height * 100)

    if (outroScrollPercentage >= -100) {
        outroCat1El.style.transform = `translate(${Math.min((outroScrollPercentage / 3), 0)}vh, ${Math.min((outroScrollPercentage / 3), 0)}vw)`
        outroCat1El.style.opacity = `${100 + outroScrollPercentage * 0.5}%`
    
        outroCat2El.style.transform = `translate(${Math.min((outroScrollPercentage / 3), 0)}vh, ${-Math.min((outroScrollPercentage / 3), 0)}vw)`
        outroCat2El.style.opacity = `${100 + outroScrollPercentage * 0.5}%`
    
        outroCat3El.style.transform = `translate(${-Math.min((outroScrollPercentage / 3), 0)}vh, ${-Math.min((outroScrollPercentage / 3), 0)}vw)`
        outroCat3El.style.opacity = `${100 + outroScrollPercentage * 0.5}%`
    
        outroCat4El.style.transform = `translate(${-Math.min((outroScrollPercentage / 3), 0)}vh, ${Math.min((outroScrollPercentage / 3), 0)}vw)`
        outroCat4El.style.opacity = `${100 + outroScrollPercentage * 0.5}%`
    }
})

// Background Color on scroll
window.addEventListener('scroll', () => {
    const clientScrollTop = document.documentElement.scrollTop
    
    const htmlElement = document.documentElement
    const bodyElement = document.body

    const documentHeight = Math.max(
        htmlElement.clientHeight, htmlElement.scrollHeight, htmlElement.offsetHeight,
        bodyElement.scrollHeight, bodyElement.offsetHeight
    );

    const aboutSectionEl = document.querySelector('.about')
    const aboutRect = aboutSectionEl.getBoundingClientRect()
    const aboutScrollPercentage = Math.round(-aboutRect.top / aboutRect.height * 100)

    const fadeStartEl = document.querySelector('.about__faded--start')
    const fadeEndEl = document.querySelector('.about__faded--end')

    const projectsSectionEl = document.querySelector('.projects')
    const projectsRect = projectsSectionEl.getBoundingClientRect()
    const projectsScrollPercentageUp = Math.round(-projectsRect.top / aboutRect.height * 100)
    const projectsScrollPercentageDown = Math.round(-projectsRect.top / projectsRect.height * 100)

    const outroSectionEl = document.querySelector('.outro-1')
    const outroRect = outroSectionEl.getBoundingClientRect()
    const outroScrollPercentage = Math.round(-outroRect.top / outroRect.height * 100)


    const [red, green, blue] = [255, 255, 255]
    const [redBgColor, greenBgColor, blueBgColor] = [122, 157, 246]

    const increaseColor = (sectionScrollPercentage) => `
        ${Math.round(red - ((sectionScrollPercentage + 100) * ((red - redBgColor) / 100)))}, 
        ${Math.round(green - ((sectionScrollPercentage + 100) * ((green - greenBgColor) / 100)))}, 
        ${Math.round(blue - ((sectionScrollPercentage + 100) * ((blue - blueBgColor) / 100)))}
    `

    const decreaseColor = (sectionScrollPercentage) => `
        ${Math.round(redBgColor + ((sectionScrollPercentage) * ((red - redBgColor) / 100)))}, 
        ${Math.round(greenBgColor + ((sectionScrollPercentage) * ((green - greenBgColor) / 100)))}, 
        ${Math.round(blueBgColor + ((sectionScrollPercentage) * ((blue - blueBgColor) / 100)))}
    `

    const body = document.querySelector('body')

    if(clientScrollTop === 0) {
        body.style.backgroundColor = 'rgb(255,255,255)'
    }
    if(clientScrollTop === documentHeight - htmlElement.clientHeight) {
        body.style.backgroundColor = 'rgb(255,255,255)'
    }
    if (aboutScrollPercentage > -100 && aboutScrollPercentage < 100) {
        body.style.backgroundColor = aboutScrollPercentage < 0 ? `rgb(${increaseColor(aboutScrollPercentage)})` : `rgb(${decreaseColor(aboutScrollPercentage)})`

        if (aboutScrollPercentage < 0) {
            fadeStartEl.style.background = `linear-gradient(to left, rgba(${increaseColor(aboutScrollPercentage)}, 0.4), rgba(${increaseColor(aboutScrollPercentage)}, 1))`
            fadeEndEl.style.background = `linear-gradient(to right, rgba(${increaseColor(aboutScrollPercentage)}, 0.4), rgba(${increaseColor(aboutScrollPercentage)}, 1))`
        } else {
            fadeStartEl.style.background = `linear-gradient(to left, rgba(${decreaseColor(aboutScrollPercentage)}, 0.4), rgba(${decreaseColor(aboutScrollPercentage)}, 1))`
            fadeEndEl.style.background = `linear-gradient(to right, rgba(${decreaseColor(aboutScrollPercentage)}, 0.4), rgba(${decreaseColor(aboutScrollPercentage)}, 1))`
        }
        
    }
    if (projectsScrollPercentageUp > -100 && projectsScrollPercentageUp < 100) {
        body.style.backgroundColor = projectsScrollPercentageUp < 0 && `rgb(${increaseColor(projectsScrollPercentageUp)})`
    }
    if (projectsScrollPercentageUp > 0 && projectsScrollPercentageDown < 100) {
        body.style.backgroundColor = projectsScrollPercentageDown < 100 && `rgb(${decreaseColor(projectsScrollPercentageDown)})`
    }
    if (outroScrollPercentage > -100 && outroScrollPercentage < 100) {
        body.style.backgroundColor = outroScrollPercentage < 0 ? `rgb(${increaseColor(outroScrollPercentage)})` : `rgb(${decreaseColor(outroScrollPercentage)})`
    }
    
})

// Tabs Section
const tabsText = [
    "Hi there! I’m Carolina, a passionate Digital Product Designer who loves crafting intuitive and visually captivating experiences. Whether you’re here for inspiration or curiosity, I hope my work sparks joy and creativity!",
    "Hello, recruiters! I’m Carolina Valadão, a UX/UI Designer with a knack for blending creativity and user-centered solutions. My goal? To design experiences that engage and inspire. Let's connect! I'd love to contribute to your team!",
    "Hey, fellow designers! I’m Carolina, a UX/UI enthusiast with a love for elegant interfaces and seamless user journeys. I believe great design is where aesthetics meet functionality. Let’s exchange ideas and create something impactful!",
    "Hi, Product Managers! I thrive at the intersection of user needs and business goals. My focus is on delivering designs that balance usability, scalability, and impact, because great products start with great collaboration!",
    "Hello, Engineers! I design with {efficiency} && {collaboration} in mind. While (I’m ≠ coder), I value clean handoffs & seamless teamwork. Together, let’s debug ideas & ship great products!"
]

function selectTab(tabId) {
    const previousActiveTab = document.querySelector('.about__link--active')
    previousActiveTab.classList.remove('about__link--active')

    const selectedTab = (document.querySelector('.about__tabs')).children[tabId + 1]
    selectedTab.children[0].classList.add("about__link--active")

    const textElement = document.querySelector('.about__content')
    textElement.innerHTML = tabsText[tabId]
}

// Menu
function openMenu() {
    const body = document.querySelector('body')
    const menuEl = document.querySelector('.menu')

    body.style.overflow = 'hidden'
    menuEl.classList.add("menu--open")
}

function closeMenu() {
    const body = document.querySelector('body')
    const menuEl = document.querySelector('.menu')

    body.style.overflow = 'unset'
    menuEl.classList.remove("menu--open")
}