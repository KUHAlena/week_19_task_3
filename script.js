document.getElementById('createPost').addEventListener('click', function() {
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    createPost(title, body);
    });

function createPost(title, body) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            title: title,
            body: body
        })
    })
    .then(response => response.json())
    .then(post => {
        const postContainer = document.createElement('div');
        const postTitle = document.createElement('h2');
        const postBody = document.createElement('p');

        postTitle.textContent = post.title;
        postBody.textContent = post.body;

        postContainer.appendChild(postTitle);
        postContainer.appendChild(postBody);

        document.getElementById('posts').appendChild(postContainer);

        document.getElementById('title').value = '';
        document.getElementById('body').value = '';
    })
    .catch(error => console.error('Ошибка:', error));
}
