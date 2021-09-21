import store from '../../store/main.js';

export default class Article {
    constructor() {
        this.article1 = document.getElementById('article1');
        this.article2 = document.getElementById('article2');
        this.articleContentVisibility = 'article__content--visible';
    }

    displayArticle() {
        const { buttonTarget } = store.modules.button;
        switch (buttonTarget.id) {
            case 'btnArticle1':
                this.article1.classList.toggle(this.articleContentVisibility);
                break;
            case 'btnArticle2':
                this.article2.classList.toggle(this.articleContentVisibility);
                break;
            default:
                break;
        }
    }
}
