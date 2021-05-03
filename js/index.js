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

let menu = document.getElementsByTagName("nav");
console.log(menu.childNodes);
for(let i = 0; i < 6; i++) {
  console.log(siteContent["nav"][`nav-item-${i+1}`])
  //menu.children[i].innerHTML = siteContent["nav"][`nav-item-${i+1}`];
}

let cta = document.getElementsByClassName("cta")
let title = cta[0].childNodes[1]
                  .firstChild
                  .nextSibling
                  .innerHTML = `DOM<br/>IS<br/>FUN`;
                  console.log(title);
let titleButton = cta[0].childNodes[1]
                        .firstChild
                        .nextSibling
                        .nextSibling
                        .nextSibling
                        .innerHTML = "Get Started";
console.log(titleButton);

let topContent = document.getElementsByClassName("top-content")[0].childNodes;
console.log(topContent);

let bottomContent = document.getElementsByClassName("bottom-content")[0].childNodes;
console.log(bottomContent);

const getContent = content => {
  console.log(content);
  let contentSlice = [...content];
  return contentSlice.filter(node => node.className === "text-content");
}

let resultTop    = getContent(topContent);
let resultBottom = getContent(bottomContent);


console.log(resultTop);

const contentKeys = Object.keys(siteContent["main-content"]);
console.log(contentKeys);

const contentKeyHelper = sectionTitle => {
  const section = Object.keys(siteContent[sectionTitle]);
  const sectionKeys = section.forEach(node => Object(node).split('-'))
  console.log(section);
  let ledger = [];
  const result = section.forEach(key => {
    ledger.push(key.split('-'));
  })


  return ledger;
}

const keyJoiner = val => val.join('-');

let mainContentKeys = contentKeyHelper("main-content");
console.log(mainContentKeys);

const contentOrganizer = (content, section) => {
  const keys = contentKeyHelper(section);
  let textContent = document.getElementsByClassName("text-content");
  console.log(textContent);

  


}

