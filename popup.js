let spinToggler = document.getElementById('toggleSpinning');
let caption = document.getElementById('buttonCaption');

chrome.storage.sync.get('spinning', function(data) {
    console.log("spinning state", data);
});

let spinningCaption = "don't you dare stop it";
let offCaption = "do it DO IT";

let insertStyle = `
let rotationStyle = \`
<style id="linkedinSpinner" type="text/css">
    img {
        animation: rotation 2s infinite linear;
    }

    video {
        animation: rotation 2s infinite linear;
    }

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }
</style>
\`


function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

document.head.append(htmlToElement(rotationStyle));
`;

spinToggler.onchange = function(){
    if(this.checked) {
        buttonCaption.innerHTML = spinningCaption;
        chrome.tabs.executeScript({
          code: 'document.getElementById("linkedinSpinner").disabled = false'
        });
    }
    else {
        buttonCaption.innerHTML = offCaption;
        chrome.tabs.executeScript({
          code: 'document.getElementById("linkedinSpinner").disabled = true'
        });
    }
}