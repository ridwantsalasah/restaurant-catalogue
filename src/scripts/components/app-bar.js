class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div>
        <a class="logo" href="" alt="logo-restaurant">
          <p class="logo-name">Hungry Eat</p>
        </a>
      </div>
      <button type="button" class="hamburger" id="hamburger" aria-label="navigation-menu" tabindex="0">☰</button>
      <nav>
          <ul id="navigation-restaurant" class="nav-list">
              <li><a href="">Home</a></li>
              <li><a href="#/favorite" class="favorite-nav">Favorite</a></li>
              <li><a href="https://github.com/ridwantsalasah">About Us</a></li>
          </ul>
      </nav>
        `;
    }
}

customElements.define('app-bar', AppBar);
