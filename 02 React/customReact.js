// heres how react work under The hood 
// if you create an element using react or you may say js  to inject in the html 
// react will create a function which accepts the element and the container at which you are going to add element
// first react create a tree and add all the things in an object 
// That object contains type , attributes and text




function customRender(element,container){

    const newElement = document.createElement(element.type)
    newElement.innerHTML = element.insideText

    for (const prop in element.props) {
        
        newElement.setAttribute(prop,element.props[prop])

    }

    container.appendChild(newElement)
}


// This is the generated tree
const reactElement = {
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'main'
    },

    insideText:'Click here!'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)