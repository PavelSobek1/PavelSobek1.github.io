let jmena = [`Jakub` , `Honza` , `Pavel`];
console.log(jmena);
jmena.forEach(name => {
$(`ul`).append(
`
<li>${name}</li>
`)
});
let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using javascript's jQuery framework. How awesome!"
  };
  console.log(additionalBlock);

  $('ul').append(
    `
    <h1>${additionalBlock["title"]}</h1>
    <div>${additionalBlock["text"]}</div>
    `
  );
    

