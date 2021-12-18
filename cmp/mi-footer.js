class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
       Frias Flores Jasania Yolotzin.
      </p>`;
  }
}

customElements.define("mi-footer", MiFooter);
