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
    this.innerHTML = `<div class="sidenav"><a href="/personal-portfolio/index.html">Home</a><a href="/personal-portfolio/about.html">About</a><a href="/personal-portfolio/resume.html">Resume</a><a href="/personal-portfolio/projects.html">Projects</a><a href="/personal-portfolio/database.html">Database Diagrams</a><a href="/personal-portfolio/api.html">API Unit Tests</a><a href="/personal-portfolio/bucketlist.html">Bucket List</a><div class="dropdown"><button class="dropbtn">Presentations <i class="fa fa-caret-down"></i></button><div class="dropdown-content"><a href="/personal-portfolio/web-430/walker-tech-value-stream.html">Tech Value Stream Presentation</a><a href="/personal-portfolio/web-430/walker-two-pizza-rule.html">Two-Pizza Rule Presentation</a><a href="/personal-portfolio/web-430/walker-automated-tests.html">Automated Tests Presentation</a><a href="/personal-portfolio/web-430/walker-ci.html">Continuous Integration Presentation</a><a href="/personal-portfolio/web-430/walker-pager-duties.html"> Pager Rotation Presentation</a><a href="/personal-portfolio/web-430/walker-change-approval.html"> Change Approval Presentation</a><a href="/personal-portfolio/web-430/walker-securing-repos"> Securing Repositories Presentation</a><a href="/personal-portfolio/web-430/walker-change-management.html"> Change Management Presentation</a></div></div></div>
    `;
  }
}

customElements.define("generate-nav", generateNav);
