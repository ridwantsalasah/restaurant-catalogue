class HeroElement extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="hero-restaurant">
                <div class="hero-desc-restaurant">
                    <h1 class="hero-title">Welcome to Hungry Eat</h1>
                    <p class="hero-desc">We Showing Recommendation Restaurants All Over the Country in Indonesia</p>
                    <button type="button" id="exp-btn">Explore More</button>
                </div>
            </div> 
        `;
    }
}

customElements.define('hero-element', HeroElement);
