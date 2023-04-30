let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Soy Estudiante de prepraratoria aprendiendo a programar en TecnolochicasPro2023.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
