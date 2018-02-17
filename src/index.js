import React from "react";
import ReactDOM from "react-dom";

// IMPORTANT!!!! uncomment the lines below to make your tests work

const meInReact = React.createElement(
  "div",
  { className: "me" },
  React.createElement("h1", {}, "An Awesome Person"),
  React.createElement("p", {}, "Who is learning React"),
  React.createElement(
    "ul",
    { className: "my-interests" },
    React.createElement("li", {}, "JavaScript"),
    React.createElement("li", {}, "React"),
    React.createElement("li", {}, "Movies"),
    React.createElement("li", {}, "Ice cream")
  )
);

ReactDOM.render(meInReact, document.getElementById("global"));

export default meInReact;

// <div class="me">
//   <h1>An Awesome Person</h1>
//   <p>Who is learning React</p>
//
//   <ul class="my-interests">
//     <li>JavaScript</li>
//     <li>React</li>
//     <li>Movies</li>
//     <li>Ice cream</li>
//   </ul>
// </div>
//
//
// 4.	const list =
// 5.	React.createElement('div', {},
// 6.	React.createElement('h1', {}, 'My favorite ice cream flavors'),
// 7.	React.createElement('ul', {},
// 8.	[
// 9.	React.createElement('li', { className: 'brown' }, 'Chocolate'),
// 10.	React.createElement('li', { className: 'white' }, 'Vanilla'),
// 11.	React.createElement('li', { className: 'yellow' }, 'Banana')
// 12.	]
// 13.	)
// 14.	);
