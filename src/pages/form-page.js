import { LitElement, html, css } from 'lit';

export class FormPage extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
      
    `,
  ];

  render() {
    return html` 
    <section class="root">
      <h2>Hi from Form Page!</h2>
    </section>`;
  }
}
customElements.define('form-page', FormPage);
