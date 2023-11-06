function getArticleGenerator(articles) {

    const arr = articles;
    const content = document.getElementById('content');

    function showNext() {
        for (const string of arr) {
            if (arr.lenght == 0) {
                return
            } else {
                const article = document.createElement('article')
                article.textContent = string
                arr.shift()
                return content.appendChild(article)
            }
        }
    }

    return showNext
}
