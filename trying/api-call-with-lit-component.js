import { LitElement, html, css } from "lit";

export class ApiCallWithLitComponent extends LitElement {
  static properties = {
    arrayCharacters: { type: Array },
  };

  static styles = css`
    :host {
      display: block;
    }
  `;

  constructor() {
    super();
    this.arrayCharacters = [];
  }

  async firstUpdated() {
    try {
      const response = await fetch(
        // "https://rickandmortyapi.com/api/character/?page=2"
      );
      const data = await response.json();
      this.arrayCharacters = data.results;
      console.log(this.arrayCharacters);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  render() {
    return html``;
  }
}

customElements.define("api-call-with-lit-component", ApiCallWithLitComponent);

