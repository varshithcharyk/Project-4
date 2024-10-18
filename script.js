function addcomment() {
    const commentList = document.getElementById("comment-list");
    const commentinput = document.getElementById("comment-input");

    if (commentinput.value 1== "") {
        const newcomment = document.createElement("p");
        new.comment.innerHTML =`<strong>You:</strong> ${commentInput.value}`;
        commentList.appendChild(newcomment);
        commentInput.value ="";
    }
}