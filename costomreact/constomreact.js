function costomRender(reactElement, mainContainer){
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.child;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);

    // mainContainer.append(domElement);

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.child;
    for (const prop in reactElement.props) {      
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    mainContainer.append(domElement);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    child: 'Click me to go to google'
}

const mainContainer = document.querySelector('#root')

costomRender(reactElement, mainContainer)