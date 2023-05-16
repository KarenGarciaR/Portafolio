let app = document.getElementById('typewriter');
/*conecta html con js*/
 
let typewriter = new Typewriter(app, {
  loop: true,
  /* hay loop*/
  delay: 75,
  /*Cada cuanto*/
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#aa77c3"> Estudiante de ingenieria en sistemas</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
