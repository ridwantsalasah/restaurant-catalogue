class FooterBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div id="footer" class="footer-bar">
                <p>Ridhwan Tsalasah P&#169; 2024, Dicoding</p>
            </div>
        `;
    }
}

customElements.define('footer-bar', FooterBar);
