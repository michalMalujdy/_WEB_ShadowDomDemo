// The class that defines the custom shadow-dom-element
class ShadowDomElement extends HTMLElement {
    constructor() {
        super();
        this.createShadowTree();
    }

    createShadowTree() {
        var shadowRoot = this.attachShadow({ mode: 'open' });
        var styleElement = this.createStyleElement();
        var wrappingDiv = this.createWrappingDiv();
        var paragraphElement = this.createInnerParagraph();
        var imageElement = this.createImageElement();

        shadowRoot.appendChild(styleElement);
        shadowRoot.appendChild(wrappingDiv);
        wrappingDiv.appendChild(paragraphElement);
        wrappingDiv.appendChild(imageElement);
    }

    createStyleElement() {
        var styleElement = document.createElement('style');
        styleElement.textContent = this.getStyleSheet();
        return styleElement;
    }

    createWrappingDiv() {
        var wrappingDiv = document.createElement('div');
        wrappingDiv.setAttribute('class', 'wrapper');
        return wrappingDiv;
    }

    createInnerParagraph() {
        var paragraphElement = document.createElement('p');
        paragraphElement.innerHTML = this.getAttribute('text');
        return paragraphElement;
    }

    createImageElement() {
        var imageElement = document.createElement('img');
        imageElement.setAttribute('src', './img/shock.jpg');
        return imageElement;
    }

    getStyleSheet() {
        return `
            .wrapper {
                background-color: lightgrey;
                font-style: italic;
                padding: 10px;
                border-radius: 5px;
            }

            p {
                margin: 0px 0px 10px 0px;
            }
        `;
    }
}

// Register the shadow-dom-element in the DOM
customElements.define('shadow-dom-element', ShadowDomElement)