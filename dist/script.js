function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} 


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: `menu-container ${props.showMenu}` }, /*#__PURE__*/
    React.createElement("div", { className: "overlay" }), /*#__PURE__*/
    React.createElement("div", { className: "menu-items" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "HOME")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "ABOUT")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PORTFOLIO")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTACT"))), /*#__PURE__*/




    React.createElement(SocialLinks, null))));



};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("nav", { id: "navbar" }, /*#__PURE__*/
    React.createElement("div", { className: "nav-wrapper" }, /*#__PURE__*/
    React.createElement("p", { className: "brand" }, "Anushka", /*#__PURE__*/

    React.createElement("strong", null, "Sax\xE9na")), /*#__PURE__*/

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' }, /*#__PURE__*/

    React.createElement("span", null))))));





};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return /*#__PURE__*/(
    React.createElement("header", { id: "welcome-section" }, /*#__PURE__*/
    React.createElement("div", { className: "forest" }), /*#__PURE__*/
    React.createElement("div", { className: "silhouette" }), /*#__PURE__*/
    React.createElement("div", { className: "moon" }), /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/
    React.createElement("span", { className: "line" }, "I do"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, "graphic design"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, /*#__PURE__*/
    React.createElement("span", { className: "color" }, "&"), " code.")), /*#__PURE__*/


    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: "#projects" }, "my portfolio"), /*#__PURE__*/
    React.createElement("a", { href: "#contact", className: "cta" }, "get in touch")))));






};


/***********************
  About Component
 ***********************/

const About = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "about" }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "Who's this guy?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "My name is Anushka."), /*#__PURE__*/
    React.createElement("p", null, "I am a web developer and UX designer based in the beautiful Uttar Pradesh , India."), /*#__PURE__*/



    React.createElement("p", null, "I really enjoy solving problems as well as making things pretty and easy to use. I can't stop learning new things; the more, the better. I also love photography, a hobby I'm taking along since the good old film cameras. Oh, and rice with milk; I have a passion for rice with milk!")), /*#__PURE__*/






    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "What does she do?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "I'm a programmer."), /*#__PURE__*/
    React.createElement("p", null, "For the front-end I usually work with Javascript, either standalone or including popular frameworks like ReactJS . I also make the web pretty by using Sass, CSS and, whenever needed, any of their friends: Bootstrap, Figma etc."), /*#__PURE__*/




    React.createElement("p", null, "For the back-end I also work with Javascript (NodeJS, Express, MongoDB, etc). But, of course, whenever the project requires PHP, I do PHP as well (Wordpress etc).")), /*#__PURE__*/




    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Also a designer."), /*#__PURE__*/
    React.createElement("p", null, "I feel comfortable working with many Adobe products. Photoshop, Illustrator, InDesign, Lightroom or Xd are some kind of industry standards and I love working with them. I'm not limited to them, though: Gimp, Inkscape or Figma are also very valid applications that I've been working with."), /*#__PURE__*/





    React.createElement("p", null, "User interfaces, brochures, books, branding... You name it! As I mentioned, creating pretty things is particularly important for me."))))));








};


/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node' };


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return /*#__PURE__*/(
    React.createElement("div", { className: "project" }, /*#__PURE__*/
    React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" }, /*#__PURE__*/
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })), /*#__PURE__*/

    React.createElement("div", { className: "project-details" }, /*#__PURE__*/
    React.createElement("div", { className: "project-tile" }, /*#__PURE__*/
    React.createElement("p", { className: "icons" },
    props.tech.split(' ').map((t) => /*#__PURE__*/
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children, /*#__PURE__*/
    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "View source ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" })), /*#__PURE__*/

    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Try it Live ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" }))))));





};



/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "projects" }, /*#__PURE__*/
    React.createElement("div", { className: "projects-container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("h3", { className: "title" }, "My Works"), /*#__PURE__*/
    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Here's a list of ", /*#__PURE__*/
    React.createElement("u", null, "most"), " of the projects I've been working on . All of these were built during my college and Internship.",
    ' ', /*#__PURE__*/
    )), /*#__PURE__*/






    React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/
    React.createElement(Project, {
      title: "Quick Learnology.",
      img: 'https://quicklearnology.com/wp-content/uploads/2022/12/Modern-Minimalist-Simple-Technology-Youtube-Thumbnail.jpg',
      tech: "js css wordpress ml",
      link: "https://quicklearnology.com/",
      repo: "https://github.com/anushkasaxena01" }, /*#__PURE__*/

    React.createElement("small", null, "Built using Wordpress, PHP, CSS , JS , Machine Learning"), /*#__PURE__*/


    React.createElement("p", null, "This is a full-stack website that I made which lets the users learn for engineering, all notes are there which we learn our during engineering ")), /*#__PURE__*/




    React.createElement(Project, {
      title: "Crypto Stock Price Prediction.",
      img: 'https://cdn.britannica.com/36/241736-159-D40F2AEC/Abstract-cryptocurrency-with-gold-bitcoin-background.jpg',
      tech: "js node css",
      link: "https://yagoestevez-stock-price-checker.glitch.me/",
      repo: "https://github.com/anushkasaxena01/crypto-stock-prediction-with-python-doge-coin" }, /*#__PURE__*/

    React.createElement("small", null, "Built using Node, Express, MongoDB, JS + jQuery + Axios, CSS + Bootstrap and Pug."), /*#__PURE__*/


    React.createElement("p", null, "Another full-stack website to check the current value of any requested stock in the market.")), /*#__PURE__*/




    React.createElement(Project, {
      title: "Netflix Clone",
      img: 'https://img.hi.91mobiles.com/uploads/2022/04/Netflix-Plan-list.jpg',
      tech: "html css js",
      link: "https://anushkasaxena01.github.io/NetflixClone/",
      repo: "https://github.com/anushkasaxena01/NetflixClone" }, /*#__PURE__*/

    React.createElement("small", null, "Built using  JS , CSS, HTML."), /*#__PURE__*/
    React.createElement("p", null, "Netflix clone ")), /*#__PURE__*/




    React.createElement(Project, {
      title: "Apna Home",
      img: 'https://www.netsolutions.com/insights/wp-content/uploads/2021/06/ecommerce-website-design-creating-better-ui-ux-design.jpg',
      tech: "html css js",
      link: "https://anushkasaxena01.github.io/Apna-Home/",
      repo: "https://github.com/anushkasaxena01/Apna-Home" }, /*#__PURE__*/

    React.createElement("small", null, "Built using  JS , CSS, HTML."), /*#__PURE__*/
    React.createElement("p", null, "Ecommerce website linke Myntra ")), /*#__PURE__*/



    React.createElement(Project, {
      title: "Calculator.",
      img: 'https://s3-alpha.figma.com/hub/file/905678057/579ed270-9231-4782-830d-bcca23f15d69-cover.png',
      tech: "js react css",
      link: "https://anushkasaxena01.github.io/calculator.github.io/",
      repo: "https://github.com/anushkasaxena01/calculator.github.io" }, /*#__PURE__*/

    React.createElement("small", null, "Built using React and CSS."), /*#__PURE__*/
    React.createElement("p", null, "A project on which I built a virtual calculator with its usual features.")), /*#__PURE__*/

    
    React.createElement(Project, {
      title: "News Recommendation by MS Bot Framework.",
      img: 'https://www.indiablooms.com/life_pic/2016/news-1471859267.jpg',
      tech: "js node ",
      link: "https://github.com/anushkasaxena01/NewsRecommendationByMSBOT",
      repo: "https://github.com/anushkasaxena01/NewsRecommendationByMSBOT" }, /*#__PURE__*/

    React.createElement("small", null, "Built using Javascript Node JS and MS Bot Framework."), /*#__PURE__*/
    React.createElement("p", null, "An animated sign in form.")), /*#__PURE__*/


    React.createElement(Project, {
      title: "Sign In .",
      img: 'https://speckyboy.com/wp-content/uploads/2019/05/login-form-design-03.jpg',
      tech: "js html css",
      link: "https://anushkasaxena01.github.io/sign.github.io/",
      repo: "https://github.com/anushkasaxena01/sign.github.io" }, /*#__PURE__*/

    React.createElement("small", null, "Built using HTML Javascript and css."), /*#__PURE__*/
    React.createElement("p", null, "An animated sign in form.")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Frontend design for Codeven Solutions Startup.",
      img: 'https://www.mindinventory.com/blog/wp-content/uploads/2021/03/mobile-app-design-fundamentals-the-difference-between-UI-and-UX.webp',
      tech: "js sass",
      link: "https://anushkasaxena01.github.io/project_for_codvensolutions.github.io/",
      repo: "https://github.com/anushkasaxena01/project_for_codvensolutions.github.io" }, /*#__PURE__*/

    React.createElement("small", null, "Built using HTML , CSS & JS."), /*#__PURE__*/
    React.createElement("p", null, "Design for codven solutions.")), /*#__PURE__*/

    React.createElement(Project, {
      title: "My Photography Portfolio.",
      img: 'https://anushkasaxena01.github.io/Photography_portfolio.github.io/images/port-2.jpg',
      tech: "js HTML css",
      link: "https://anushkasaxena01.github.io/Photography_portfolio.github.io/",
      repo: "https://github.com/anushkasaxena01/Photography_portfolio.github.io" }, /*#__PURE__*/

    React.createElement("small", null, "Built using HTML , JS and CSS."), /*#__PURE__*/
    React.createElement("p", null, "Photography Portfolio"))))));



};



/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "contact" }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading-wrapper" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("p", { className: "title" }, "Want to ", /*#__PURE__*/
    React.createElement("br", null), "contact me?"), /*#__PURE__*/


    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Please, use the form below or send an email to ",
    '', /*#__PURE__*/
    React.createElement("span", { className: "mail" }, "anushkasaxena964", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-at at" }), "gmail", /*#__PURE__*/

    React.createElement("i", { className: "fas fa-circle dot" }), "com"), ":")), /*#__PURE__*/





    React.createElement(SocialLinks, null)), /*#__PURE__*/

    React.createElement("form", { id: "contact-form", action: "#" }, /*#__PURE__*/
    React.createElement("input", { placeholder: "Name", name: "name", type: "text", required: true }), /*#__PURE__*/
    React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true }), /*#__PURE__*/
    React.createElement("textarea", { placeholder: "Message", type: "text", name: "message" }), /*#__PURE__*/
    React.createElement("input", { className: "button", id: "submit", value: "Submit", type: "submit" })))));




};



/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("footer", null, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("h3", null, "THANKS FOR VISITING"), /*#__PURE__*/
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Anushka Sax\xE9na."), /*#__PURE__*/
    React.createElement(SocialLinks, null))));



};




/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "social" }, /*#__PURE__*/
    React.createElement("a", {
      href: "https://twitter.com/quicklearnology?s=09",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to my Twitter profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-twitter" })), /*#__PURE__*/

    React.createElement("a", {
      id: "profile-link",
      href: "https://github.com/anushkasaxena01",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to my GitHub Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-github" })), /*#__PURE__*/

    React.createElement("a", {
      href: "https://www.linkedin.com/in/anushka-saxena-2628381bb/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to my LinkedIn Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-linkedin" }))));



};



/***********************
  Main Component
 ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(About, null), /*#__PURE__*/
      React.createElement(Projects, null), /*#__PURE__*/
      React.createElement(Contact, null), /*#__PURE__*/
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));