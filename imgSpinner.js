let rotationStyle = `
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
`;

let staticStyle = `
<style id="linkedinSpinner" type="text/css">
</style>
`;

function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

document.head.append(htmlToElement(rotationStyle));
console.log("rotation css injected");