function getArticleGenerator(articles) {

    const area = document.getElementById('content');
    const arr = articles;

    function showNext() {
        if (arr[0] == undefined) {

        } else {
            const string = arr.shift()
            const article = document.createElement("article");
            article.innerHTML = string
            area.appendChild(article);
        }

    }
    return showNext
}
