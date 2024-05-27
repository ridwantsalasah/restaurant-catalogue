class SkipToMain extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <a href="#main-content-restaurant" class="skip-link-main">Skip to main content</a>
        `;
    }
}

customElements.define('skip-to-main', SkipToMain);
