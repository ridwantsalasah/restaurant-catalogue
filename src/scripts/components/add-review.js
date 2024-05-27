const cardReviewer = (reviewerData) => `
            <div class="item-review">
                <div class="item-reviewer">
                    <div class="reviewer-list">
                        <p>${reviewerData.name}</p>
                        <p>${reviewerData.date}</p>
                    </div>
                </div>
                <div class="description-review">
                    <p>${reviewerData.review}</p>
                </div>
            </div>
    `;

export default cardReviewer;
