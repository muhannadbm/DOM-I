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

var mynav = document.querySelector('.container header nav');


mynav.style.color = 'green';
var mya = document.createElement('a');
mya.textContent = 'Prepend list item'

mynav.appendChild(mya);

const mynavlinks = mynav.querySelectorAll('a')
mynavlinks.forEach(link => link.style.color = 'green')

const services = mynav.querySelector('a:nth-of-type(1)');
const product = mynav.querySelector('a:nth-of-type(2)');
const vision = mynav.querySelector('a:nth-of-type(3)');
const features = mynav.querySelector('a:nth-of-type(4)');
const about = mynav.querySelector('a:nth-of-type(5)');
const contact = mynav.querySelector('a:nth-of-type(6)');

services.textContent = siteContent["nav"]["nav-item-1"]
product.textContent = siteContent["nav"]["nav-item-2"]
vision.textContent = siteContent["nav"]["nav-item-3"]
features.textContent = siteContent["nav"]["nav-item-4"]
about.textContent = siteContent["nav"]["nav-item-5"]
contact.textContent = siteContent["nav"]["nav-item-6"]

const mydiv = document.querySelector('.cta')
const codeimg = mydiv.querySelector('#cta-img')
codeimg.src = siteContent["cta"]["img-src"]

const header = document.querySelector('.cta-text h1')
header.textContent = 'DOM'

var mybr = document.createElement('br');
header.appendChild(mybr);

var t = document.createTextNode("Is");      // Create a text node
header.appendChild(t);

var mybr = document.createElement('br');
header.appendChild(mybr);

var t = document.createTextNode("Awesome");      // Create a text node
header.appendChild(t);

const mybutton = document.querySelector('.cta-text button');

mybutton.textContent = 'Get Started'


const featuresheader = document.querySelector('.text-content h4')
featuresheader.textContent = siteContent["main-content"]["features-h4"]
const featuresp = document.querySelector('.text-content p')
featuresp.textContent = siteContent["main-content"]["features-content"]

const textconten1 = document.querySelector('.text-content:nth-of-type(2)')
const myheader1 = textconten1.querySelector('h4');
myheader1.textContent = siteContent["main-content"]["about-h4"]
const myp1 = textconten1.querySelector('p');
myp1.textContent = siteContent["main-content"]["about-content"]




const bottom = document.querySelector('.bottom-content')

const servicesheader = bottom.querySelector('.text-content:nth-of-type(1) h4');
servicesheader.textContent = siteContent["main-content"]["services-h4"]
const servicesp = servicesheader.nextElementSibling;
servicesp.textContent = siteContent["main-content"]["services-content"]


const Productheader = bottom.querySelector('.text-content:nth-of-type(2) h4');
Productheader.textContent = siteContent["main-content"]["product-h4"]
const Productp = Productheader.nextElementSibling;
Productp.textContent = siteContent["main-content"]["product-content"]


const visionheader = bottom.querySelector('.text-content:nth-of-type(3) h4');
visionheader.textContent = siteContent["main-content"]["vision-h4"]
const visionp = visionheader.nextElementSibling;
visionp.textContent = siteContent["main-content"]["vision-content"]



const midimage = document.querySelector('#middle-img')
midimage.src = siteContent["main-content"]["middle-img-src"]

const mycontact = document.querySelector('.contact')

mycontact.querySelector('h4').textContent = siteContent["contact"]["contact-h4"]
mycontact.querySelector('p:nth-of-type(1)').textContent = siteContent["contact"]["address"]

mycontact.querySelector('p:nth-of-type(2)').textContent = siteContent["contact"]["phone"]

mycontact.querySelector('p:nth-of-type(3)').textContent = siteContent["contact"]["email"]

const copy = document.querySelector('footer p')
copy.textContent = siteContent["footer"]["copyright"]

mycontact.querySelector('p:nth-of-type(1)').style.width = '22%'