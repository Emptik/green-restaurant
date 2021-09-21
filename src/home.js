import Article from './components/article/ArticleView.js';

const initArticle = () => {
    const article = new Article();
    article.addEventHandler();
};

initArticle();
