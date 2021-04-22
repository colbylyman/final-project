<template>
  <div id="app">
      <nav class="navbar navbar-expand-lg navbar-light navbar_color1">
        <div class="container navbar_color2">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" href="#"><router-link to="/"><img src="../public/colby_logo.png" class="navbar_logo"></router-link></a>
                <a class="nav-link" href="#"><router-link to="/"><i class="fas fa-house-user">Go Home</i></router-link></a>
                <a class="nav-link" href="#"><router-link to="/Calculatorpage"><i class="fas fa-calculator">Do Math</i></router-link></a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <!--
      <div id="intro" class="view">
        <div class="mask">
        </div>
      </div>
      -->

    <router-view />
      <footer class="footer mt-auto py-3 bg-light">
  <div class="container">
    <span class="text-muted"><a href="https://github.com/colbylyman/final-project">https://github.com/colbylyman/final-project</a> 10 hours</span>
  </div>
  </footer>
  </div>

</template>

<style>
/* Color scheme: https://paletton.com/#uid=7040u0knHs+edG7jrvYscpiuCk2 */
/* red: #e74c3c
 * blue: #277E8E
 */
/*
html,
body,
header,
#intro {
    height: 100%;
}

#intro {
    background: url("https://image.ibb.co/mjnygo/stars.png")no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
*/
body {
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  font-size: 13pt;
  margin: 0px 200px;
  background-color: #e3f9fa;
}

#header {
  /* Semi-circle */
  margin: 0 1em 1em 0;
  height: 100px;
  width: 200px;
  border-bottom-left-radius: 200px;
  border-bottom-right-radius: 200px;
  /* Fixed position */
  position: fixed;
  z-index: 10000;
  left: 50%;
  transform: translate(-50%, 0);
  /* Color and alignment */
  background: #e74c3c;
  text-align: center;
  box-shadow: 0 0 0 1em #FFF;
}

nav {
  display: flex;
  justify-content: center;
}

h1 {
  color: #fff;
  font-size: 18px;
}

h2 {
  font-size: 12px;
}

#header .fas {
  font-size: 25px;
  color: #fff;
  width: 50px;
}

.fas {
  color: #dd3c0e;
}

.fas:hover {
  color: black;
}

.pure-button-primary {
  background-color: #277E8E;
}

.navbar_color1 {
  background-color: #ffedd6;
}

.navbar_color2 {
  background-color: white;
  border: 2px solid grey;
  border-radius: 20px;
}

.navbar_logo {
  max-height: 2em;
  max-width: 2em;
}

</style>
