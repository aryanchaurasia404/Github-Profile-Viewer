// script.js

const apiUrl = 'https://api.github.com/users/';
const username = 'aryanchaurasia404';
const token = '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';

fetch(`${apiUrl}${username}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('profile-picture').src = data.avatar_url;
        document.getElementById('username').textContent = data.login;
        document.getElementById('bio').textContent = data.bio;
    });

fetch(`${apiUrl}${username}/repos`)
    .then(response => response.json())
    .then(data => {
        const repositoryList = document.getElementById('repository-list');
        data.forEach(repo => {
            const listItem = document.createElement('li');
            listItem.textContent = repo.name;
            repositoryList.appendChild(listItem);
        });
    });

document.getElementById('search').addEventListener('input', event => {
    const searchTerm = event.target.value.toLowerCase();
    const repositoryList = document.getElementById('repository-list');
    const repositories = repositoryList.children;
    for (let i = 0; i < repositories.length; i++) {
        const repoName = repositories[i].textContent.toLowerCase();
        if (repoName.includes(searchTerm)) {
            repositories[i].style.display = 'block';
        } else {
            repositories[i].style.display = 'none';
        }
    }
});