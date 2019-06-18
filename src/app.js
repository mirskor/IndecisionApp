console.log('App.js is running!');

const app = {
  title: 'Indecision App Memes',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
  // preventDefault stops full page refresh 
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {

    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
}

// empty options array fropm app and re render
const onRemoveAll = () => {

  app.options = [];
  render();
}

const onMakedecision = () => {

  // multiply the length of the options array  and round down

  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);

}


const appRoot = document.getElementById('app');


const render = () => {

  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>

      <button disabled={app.options.length === 0} onClick={onMakedecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>

      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>{option}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();