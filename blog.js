$(`button`).on(`click`, (event) => {
    let title = $('input').val();
    let content = $('textarea').val();
    $("#posts").append (`<div class="post">
    <div class="title">${title}</div>
    <div class="content">${content}</div>
    </div>`);
})
let path = "posts";
let dataToSave = {
  title: "Nový",
  text: "Post."
};
