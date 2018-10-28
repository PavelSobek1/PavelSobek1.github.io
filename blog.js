$(`button`).on(`click`, (event) => {
    let title = $('input').val();
    let content = $('textarea').val();
    $("#posts").append (`<div class="post">
    <div class="title">${title}</div>
    <div class="content">${content}</div>
    </div>`);
})
let path = "posts/1";
let dataToSave = {
  title: "My first saved blog post",
  text: "Some hilarious content, which proves how awesome I am."
};
