let spinToggler = document.getElementById('toggleSpinning');
let caption = document.getElementById('buttonCaption');

chrome.storage.sync.get('spinning', function(data) {
    console.log("spinning state", data);
});

let spinningCaption = "don't you dare stop it";
let offCaption = "do it DO IT";

spinToggler.onchange = function(){
    if(this.checked) buttonCaption.innerHTML = spinningCaption;
    else buttonCaption.innerHTML = offCaption;
}