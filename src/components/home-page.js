import { LitElement, html, css } from 'lit';
import { ApiCall } from '../apis';

export class HomePage extends LitElement {
  static properties = {
    arrayCharacters: {type: Array},
  };

  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  constructor() {
    super();
    this.arrayCharacters = [];
  }

  firstUpdated() {
    this.arrayCharacters = ApiCall();
  }

  render() {
    return html`
      <div>
        <h2>Hola</h2>
        
      </div>
    `;
  }
}
customElements.define('home-page', HomePage);
