import Article from '../views/ArticleView.js';

const articleController = () => {
    const articleContentLeft = document.querySelector('.article__content--leftTargeted');
    const articleContentRight = document.querySelector('.article__content--rightTargeted');
    const btnInfoLeft = document.querySelector('.btn--infoLeftClicked');
    const btnInfoRight = document.querySelector('.btn--infoRightClicked');
    const articleContentVisibility = 'article__content--visible';

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
