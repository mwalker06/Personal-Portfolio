/**
 * Title: footer.js
 * Author: Megan Walker
 * Date: 02/03/23
 * Description: footer template for personal portfolio
 * References: WEB 330 GitHub
 */
// create a web component inheriting from the HTMLElement class
class generateFooter extends HTMLElement {
  constructor() {
    super();
  }

  // connect the component when called
  connectedCallback() {
    var year = new Date().getFullYear();

    // the html to display when the tags are used
    this.innerHTML ='<footer><div class="footer-section links"><h2>Quick Links</h2><ul><li><a href="#">Events</a></li><li><a href="#">Adopt</a></li><li><a href="#">Get Directions</a></li></ul></div><br><div class="footer"><p>&copy; ' + year + ' Megan Walker All rights reserved.</p></div></footer>';
  }
}

customElements.define("generate-footer", generateFooter);
