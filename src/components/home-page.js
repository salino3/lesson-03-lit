import { LitElement, html, css } from 'lit';
import { ApiCall } from '../apis/apis-call';
import {CardCharacter} from './card-character';

export class HomePage extends LitElement {
  static properties = {
    arrayCharacters: { type: Array },
  };

  static styles = [
    css`
      :host {
        display: block;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      .list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
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
        <h2>Characters List</h2>
        <section class="list">
          ${this.arrayCharacters.map(
            (item) => html`<card-character .character=${item}></card-character>`
          )}
        </section>
      </div>
    `;
  }
}
customElements.define('home-page', HomePage);
