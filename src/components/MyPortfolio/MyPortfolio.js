import React from "react";

const MyPortfolio = () => {
  return (
    <div className="container max-w-7xl mx-auto px-12">
      <h1 className="text-center font-bold">imtiaz Rahman samir</h1>
      <p className="text-center font-bold"> Email: imtiazsamir416@gmail.com</p>
      <div>
        <div class="divider"></div>
        <h1 className="text-2xl font-bold mb-3">Education Background:</h1>
        <p>
          {" "}
          <span>Green University of Bangladesh(BSc in CSE)</span>{" "}
        </p>

        <div class="divider"></div>
        <h1 className="text-2xl font-bold">List of technologies:</h1>
        <ul className="list-disc list-inside ">
          <li>JavaScript</li>
          <li>ES6</li>
          <li>REST API</li>
          <li>React.js</li>
          <li>SPA</li>
          <li>React Hooks</li>
          <li>React Router</li>
          <li>HTML5</li>
          <li>CSS3 </li>
          <li>Bootstrap5 </li>
          <li>Tailwind Css </li>
        </ul>
      </div>
    </div>
  );
};

export default MyPortfolio;
