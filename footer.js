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
    this.innerHTML ='<footer><div class="footer-section links"><h2>Quick Links</h2><ul><li><a href="https://github.com/mwalker06?tab=repositories">My Github Repositories</a></li><li><a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/">Bellevue Universities Web Development Degree</a></li><li><a href="#">Course YouTube Channel</a></li><li><a href="https://github.com/orgs/buwebdev/repositories">Course GitHub Repository</a></li></ul></div><br><div class="footer" id="copyright"><i>&copy; ' + year + ' Megan Walker All rights reserved.</i></div></footer>';
  }
}

customElements.define("generate-footer", generateFooter);
