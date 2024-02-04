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
      .rootCard {
        border: solid 2px;
        display: inline-block;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        min-width: 30px;
        max-width: min-content;
        white-space: nowrap;
        border-radius: 5px;
      }
      .rootCard h3 {
        line-height: 0.5px;
      }
      .infoValue {
        color: blue;
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
      <div class="rootCard">
        <h3>
          <span>ID: </span> <span class="infoValue">${this.character.id}</span>
        </h3>
        <h3>
          <span>Name: </span>
          <span class="infoValue">${this.character.name}</span>
        </h3>
      </div>
    `;
  }
}
customElements.define('card-character', CardCharacter);
