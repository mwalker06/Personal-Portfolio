/**
 * Title: header.js
 * Author: Megan Walker
 * Date: 02/03/23
 * Description: header template for personal portfolio
 * References: WEB 330 GitHub
 */
// create a web component inheriting from the HTMLElement class
class generateNav extends HTMLElement {
  constructor() {
    super();
  }

  // connect the component when called
  connectedCallback() {
    // the html to display when the tags are used
    this.innerHTML = `<div class="sidenav"><a href="../index.html">Home</a><a href="./about.html">About</a><a href="resume.html">Resume</a><a href="projects.html">Projects</a><a href="database.html">Database Diagrams</a><a href="api.html">API Unit Tests</a><a href="bucketlist.html">Bucket List</a><a href="web-430/walker-tech-value-stream.html">Tech Value Stream Presentation</a><a href="web-430/walker-two-pizza-rule.html">Two-Pizza Rule Presentation</a><a href="web-430/walker-automated-tests.html">Automated Tests Presentation</a></div>
    `;
  }
}

customElements.define("generate-nav", generateNav);
