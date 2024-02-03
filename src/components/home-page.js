import { LitElement, html, css } from 'lit';
import { ApiCall } from '../apis';
import {CardCharacter} from './card-character';

export class HomePage extends LitElement {
  static properties = {
    arrayCharacters: { type: Array },
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

  async firstUpdated() {
    this.arrayCharacters = await ApiCall();
  }

  render() {
    return html`
      <div>
        <h2>Hola</h2>
        ${this.arrayCharacters.map(
          (item) => html`<card-character .character=${item}></card-character>`
        )}
      </div>
    `;
  }
}
customElements.define('home-page', HomePage);
