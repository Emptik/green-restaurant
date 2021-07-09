import Article from '../views/ArticleView.js';

const articleController = () => {
    const articleContentLeft = document.querySelector('.c-article__content--leftTargeted');
    const articleContentRight = document.querySelector('.c-article__content--rightTargeted');
    const btnInfoLeft = document.querySelector('.c-btn--infoLeftClicked');
    const btnInfoRight = document.querySelector('.c-btn--infoRightClicked');
    const articleContentVisibility = 'c-article__content--visible';

    const article = new Article(
        articleContentLeft,
        articleContentRight,
        btnInfoLeft,
        btnInfoRight,
        articleContentVisibility,
    );
    article.initializeEventHandler();
};

articleController();
