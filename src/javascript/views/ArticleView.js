export default class Article {
    constructor(
        articleContentLeft,
        articleContentRight,
        btnViewMoreLeft,
        btnViewMoreRight,
        articleContentVisibility,
    ) {
        this.articleContentLeft = articleContentLeft;
        this.articleContentRight = articleContentRight;
        this.btnViewMoreLeft = btnViewMoreLeft;
        this.btnViewMoreRight = btnViewMoreRight;
        this.articleContentVisibility = articleContentVisibility;
    }

    initializeEventHandler() {
        this.btnViewMoreLeft.addEventListener('click', () => {
            this.displayArticle(this.articleContentLeft);
        });

        this.btnViewMoreRight.addEventListener('click', () => {
            this.displayArticle(this.articleContentRight);
        });
    }

    displayArticle(articleContent) {
        articleContent.classList.toggle(this.articleContentVisibility);
    }
}
