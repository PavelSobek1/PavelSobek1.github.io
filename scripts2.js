let barva = {color:`purple`,number:`10`,word:`cool`};
console.log (barva);
if (barva[`color`]===`purple` ){
    $(`#ONE`).css({background:`purple`}); 
};
if (barva[`number`] >= 100)
{console.log(`whoah, that's a big number`);} 
else {console.log(`just a regular number, please`)};

if (barva[`word`] === `cool`)
{$(`#THREE`).text(`Power of DOM`);}
else {$(`#FOUR`).$text(`Power of DOM`);
}






