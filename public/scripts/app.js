'use strict';

console.log('App.js is running!');

var app = {
  title: 'Indecision App Memes',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  // preventDefault stops full page refresh 
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {

    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

// empty options array fropm app and re render
var onRemoveAll = function onRemoveAll() {

  app.options = [];
  render();
};

var onMakedecision = function onMakedecision() {

  // multiply the length of the options array  and round down

  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var appRoot = document.getElementById('app');

var render = function render() {

  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: onMakedecision },
      'What should I do?'
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
