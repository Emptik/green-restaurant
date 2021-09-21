export default class Article {
    constructor() {
        this.articleContentLeft = document.querySelector('.article__content--leftTargeted');
        this.articleContentRight = document.querySelector('.article__content--rightTargeted');
        this.btnViewMoreLeft = document.querySelector('.btn--infoLeftClicked');
        this.btnViewMoreRight = document.querySelector('.btn--infoRightClicked');
        this.articleContentVisibility = 'article__content--visible';
    }

    addEventHandler() {
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
