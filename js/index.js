const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let snippet = document.getElementById("cta-img");
snippet.setAttribute('src', siteContent["cta"]["img-src"])

let cta = document.getElementsByClassName("cta")
let title = cta[0].childNodes[1]
                  .firstChild
                  .nextSibling
                  .innerHTML = `DOM<br/>IS<br/>AWESOME`;
                  console.log(title);
let titleButton = cta[0].childNodes[1]
                        .firstChild
                        .nextSibling
                        .nextSibling
                        .nextSibling
                        .innerHTML = "Get Started";







const keyJoiner = val => val.join('-');
const contentKeyHelper = sectionTitle => {
  const section = Object.keys(siteContent[sectionTitle]);
  const sectionKeys = section.forEach(node => Object(node).split('-'))
  let ledger = [];
  const result = section.forEach(key => {
    ledger.push(key.split('-'));
  })

  return ledger;
}
let mainContentKeys = contentKeyHelper("main-content");
let navKeys = contentKeyHelper("nav");

const contentOrganizer = section => {
  const keys = contentKeyHelper(section);
  let textContent = document.getElementsByClassName("text-content");
  let article = [...textContent];
  let i = 0;
  let j = 0;

  if(section === "nav") return menuHandler();
  while(i < article.length) {
    if(keys[j][keys[j].length - 1] === "h4") {
      article[i].firstElementChild.innerHTML = siteContent[section][`${keys[j][0]}-h4`];
      article[i].lastElementChild.innerHTML = siteContent[section][`${keys[j][0]}-content`];
      i++;
    } else if(keys[j][1] === "img") {
      document.getElementById(`${keys[j][0]}-${keys[j][1]}`)
              .setAttribute("src", siteContent[section][keyJoiner(keys[j])])
    }
    j++;
  }

  return;
}

const menuHandler = () => {
  const menu = document.getElementsByTagName("nav");
  const navbar = [...menu[0].children];
  const length = navbar.length;

  for(let i = 0; i < length; i++) {
    navbar[i].innerHTML = siteContent["nav"][`nav-item-${i+1}`];
    console.log(`nav-item-${i+1}`)
  }

  return;
}

const organizerResult = contentOrganizer("main-content");
const navbarResult = contentOrganizer("nav");
console.log(navbarResult);

