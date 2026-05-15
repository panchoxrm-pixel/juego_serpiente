    const TAMANIO_CELDA = 25;   
   
   // 1. Capturamos el canvas y su contexto de dibujo
    const canvas = document.getElementById("canvasJuego");
    const ctx = canvas.getContext("2d");
 
    // Primera pintura del juego al cargar la página
    dibujarTodo();

    // =========================
    // FUNCIONES DE DIBUJO
    // =========================

    function limpiarCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function dibujarTodo() {
      limpiarCanvas();
      dibujarTablero();
    }

    function dibujarTablero() {
      ctx.lineWidth = 2;
      ctx.strokeStyle = "red" //coloca un color de línea, similar a fillStyle

      /*ctx.beginPath() //se invoca siempre para iniciar un trazo
      ctx.moveTo(x,y) //posición inicial de la figura, colocar cualquier valor
      ctx.lineTo(x,y) //dibuja una línea desde la ultima posicion del
      // graficador, en este caso lo que puso en moveTo, hasta la posicion que
      // recibe como parámetro, colocar cualquier valor
      ctx.stroke() //dibuja la línea*/
      
      for(let i = TAMANIO_CELDA; i < canvas.width; i += TAMANIO_CELDA){
        ctx.beginPath();
        ctx.moveTo(i,0);
        ctx.lineTo(i,canvas.height);
        ctx.stroke();
      }

      for(let i = TAMANIO_CELDA; i < canvas.height; i += TAMANIO_CELDA){
        ctx.beginPath();
        ctx.moveTo(0,i);
        ctx.lineTo(canvas.width,i);
        ctx.stroke();
      }

    }