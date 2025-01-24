document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");

    // Load feed dynamically
    fetch("/api/feed/")
        .then(response => response.json())
        .then(data => {
            data.posts.forEach(post => {
                const postDiv = document.createElement("div");
                postDiv.innerHTML = `
                    <h3>${post.author}</h3>
                    <p>${post.content}</p>
                    <button onclick="likePost(${post.id})">Like (${post.likes})</button>
                    <button onclick="showComments(${post.id})">Comments (${post.comments.length})</button>
                `;
                content.appendChild(postDiv);
            });
        });
});

function likePost(postId) {
    fetch(`/api/like/${postId}/`, { method: "POST" })
        .then(response => response.json())
        .then(data => alert(data.message));
}

function showComments(postId) {
    // Show comments logic here
}
