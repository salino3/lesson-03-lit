import { LitElement, html, css } from 'lit';

export class CardCharacter extends LitElement {
  static properties = {
    character: { type: Object },
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
    this.character = {
      id: null,
      name: "",
    };
  }

  render() {
    return html`
      <div>
        <span>${this.character.id}</span>
        <span>${this.character.name}</span>
      </div>
    `;
  }
}
customElements.define('card-character', CardCharacter);
