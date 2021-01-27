console.log("app js is running");

const app = {
    title: "Indecision App",
    options: ["One", "Two"]
}

const onFormSubmit = (event) => {
    event.preventDefault();

    //console.log("form submitted!!")
    const option = event.target.elements.option.value;

    if(option){
        app.options.push(option);
        event.target.elements.option.value = "";
        renderAndShowFormData();
    }
}

//create "Remove All" button list
const onRemoveAll = () => {
    app.options = [];
    renderAndShowFormData();
}

var appRoot = document.getElementById("app");

const numbers = [55, 88, 100];

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option)
    //console.log(randomNum);
}

const renderAndShowFormData = () => {
    const template = (
        <div>
            <h2>Indecision app</h2>
            <p>This is JSX from app.js!</p>
            <p>{app.options.length > 0 ? "Here are your options" : "No Option"}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do</button>
            <button onClick={onRemoveAll}>Remove All</button>
            {/* {
                //boolean, undefined, null will not display
                    // [99, 98, 97, "Amrit", null, true, undefined]
                    [<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>]
            } */}
            
            {/* {
                numbers.map((item) => {
                    console.log(item);
                    return (<p key={item}>Number : {item}</p>)
                })
            } */}
            <ol>
                {                
                    app.options.map((itemElem) => <li key={itemElem}>{itemElem}</li>) 
                }
            </ol>
            
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button type="submit">Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot)
}

renderAndShowFormData();