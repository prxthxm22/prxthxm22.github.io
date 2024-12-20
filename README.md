<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pratham Shetty - Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="root"></div>
    <script src="index.js"></script>
</body>
</html>

/* styles.css */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background: #0a192f;
    color: #fff;
}

/* index.js */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

/* App.js */
import React from 'react';

const App = () => {
  return (
    <div className="portfolio">
      <header>
        <nav>
          <h1>Pratham Shetty</h1>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero">
          <h1>Hi, I'm Pratham Shetty</h1>
          <p>BCA Student | Web Developer</p>
        </section>

        <section id="about">
          <h2>About Me</h2>
          <p>I'm a second-year BCA student passionate about web development and creating modern, user-friendly applications.</p>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div>HTML5</div>
            <div>CSS3</div>
            <div>JavaScript</div>
            <div>React.js</div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Pratham Shetty. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

