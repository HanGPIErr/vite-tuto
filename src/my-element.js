import { LitElement, css, html } from "lit";
import litLogo from "./assets/lit.svg";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get properties() {
    return {
      /**
       * Copy for the read the docs hint.
       */
      docsHint: { type: String },

      /**
       * The number of times the button has been clicked.
       */
      count: { type: Number },
      /**
       * The URL of the current Pokemon's image.
       */
      imageUrl: { type: String },
      /**
       * The name of the current Pokemon.
       */
      pokemonName: { type: String },
      /**
       * Whether the user has lost at least once.
       */
      hasLost: { type: Boolean },
      totalPokemonCount: { type: Number },
      correctCount: { type: Number },
      incorrectCount: { type: Number },
    };
  }

  constructor() {
    super();
    this.docsHint = "Générer un pokemon aléatoire";
    this.count = 0;
    this.imageUrl = "";
    this.pokemonName = "";
    this.hasLost = false;
    this.totalPokemonCount = 0;
    this.correctCount = 0;
    this.incorrectCount = 0;
  }

  render() {
    return html`
      <slot></slot>
      <div class="card">
      <p class="read-the-docs">${this.docsHint}</p>
        <div class="mb-3">
          <img
            src=${this.imageUrl ? this.imageUrl : ""}
            alt=${this.pokemonName}
            width="100"
            height="100"
          />
        </div>
        <div>
          <button @click=${this._onClick} part="button">NEW POKEMON</button>
          <button @click=${this._onResetClick}>Reset</button>
        </div>
        ${this.hasLost
          ? html`
              <div>
                <p>Comment s'apelle ce pokemon ?</p>
                <p>${this.pokemonName}</p>
              </div>
            `
          : html`
              <div>
                <p>Essayez de deviner le nom de ce Pokemon !</p>
                <p>(En Anglais !)</p>
              </div>
            `}
        <div>
          <input type="text" id="pokemonNameInput" />
          <button type="submit" @click=${this._onValidateClick}>Valider</button>
        </div>

        <div>
          <label for="totalPokemonCountInput">Total D'essai: </label>
          <input
            type="number"
            id="totalPokemonCountInput"
            value=${this.totalPokemonCount}
            disabled
          />
        </div>
        <div>
          <label for="correctCountInput">Réponse correct : </label>
          <input
            type="number"
            id="correctCountInput"
            value=${this.correctCount}
            disabled
          />
        </div>
        <div>
          <label for="incorrectCountInput">Réponse incorrect : </label>
          <input
            type="number"
            id="incorrectCountInput"
            value=${this.incorrectCount}
            disabled
          />
        </div>

        <div>
          <button @click=${this._onCountResetClick}>Reset Compteur</button>
        </div>
        <div>
          <button @click=${this._onAllResetClick}>Reset Tout</button>
        </div>
        
      </div>
      
    `;
  }

  async _onClick() {
    this.count++;
    this.totalPokemonCount++;
    const pokemonNumber = Math.floor(Math.random() * 898) + 1;
    console.log("Pokemon number: ", pokemonNumber);
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + pokemonNumber
    );
    const data = await response.json();
    this.imageUrl = data.sprites.other["official-artwork"].front_shiny;
    this.pokemonName = data.name;
  }

  _onResetClick() {
    this.count = 0;
    this.imageUrl = "";
    this.pokemonName = "";
    this.hasLost = false;
    document.querySelector("#pokemonNameInput").value = "";
  }
  _onCountResetClick() {
    this.totalPokemonCount = 0;
    this.correctCount = 0;
    this.incorrectCount = 0;
  }

  _onAllResetClick() {
    this.count = 0;
    this.imageUrl = "";
    this.pokemonName = "";
    this.hasLost = false;
    this.totalPokemonCount = 0;
    this.correctCount = 0;
    this.incorrectCount = 0;
    document.querySelector("#pokemonNameInput").value = "";
  }
  _onValidateClick() {
    const input = this.shadowRoot.querySelector("#pokemonNameInput");
    const inputValue = input.value.trim().toLowerCase();
    if (inputValue === this.pokemonName.toLowerCase()) {
      alert("Félicitations, vous avez gagné !");
      this.hasLost = false;
      this.pokemonName = "";
      this.imageUrl = "";
      this.count = 0;
      this.correctCount++;
      input.value = "";
    } else {
      alert("Dommage, vous avez perdu !");
      this.hasLost = true;
      this.incorrectCount++;
    }
    this.totalPokemonCount++;
    this.requestUpdate();
  }

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      input[type="text"],
      button[type="submit"] {
        margin-top: 10px;
      }

      .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.lit:hover {
        filter: drop-shadow(0 0 2em #325cffaa);
      }

      .card {
        margin: 16px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url('./src/assets/bg-pokemon.jpg');
        background-size: cover;
        background-position: center;
        border-radius: 8px;
        box-shadow: 0 0 2em #000000aa;
       
        
      }

      .card > * {
        margin: 8px;
        
      }

      input[type="number"] {
        width: 50px;
      }

      .read-the-docs {
        color: #888;
      }

      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }
      a:hover {
        color: #535bf2;
      }

      h1 {
        font-size: 3.2em;
        line-height: 1.1;
      }

      button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
        margin: 8px;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      img {
        width: 200px;
        height: 200px;
        max-width: 100%;
        margin-top: 1rem;
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }
        button {
          background-color: #f9f9f9;
        }
      }
    `;
  }
}

window.customElements.define("my-element", MyElement);
