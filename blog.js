$(`button`).on(`click`, (event) => {
    let temporary = $('input').val();
    $("#posts").append (`<div class="X">${temporary}</div>`)
})
    $(`button`).on(`click`, (event) => {
        let temporary = $('textarea').val();
        $("#posts").append (`<div class="X">${temporary}</div>`);

})
