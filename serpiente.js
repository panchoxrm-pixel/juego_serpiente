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
      pintarParte(5,5);
      pintarParte(10,2);
      pintarParte(15,(canvas.height/TAMANIO_CELDA)-1);
      pintarParte((canvas.width/TAMANIO_CELDA)-1,14);
      pintarParte(0,19);
      pintarParte((canvas.width/TAMANIO_CELDA)-1,(canvas.height/TAMANIO_CELDA)-1);
    }

    function dibujarTablero() {
      
      ctx.lineWidth = 2;
      ctx.strokeStyle = "red"       
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

      function pintarParte(lineaX, lineaY){
        
        ctx.fillStyle = "yellow";
        ctx.fillRect(lineaX * TAMANIO_CELDA, lineaY * TAMANIO_CELDA, TAMANIO_CELDA, TAMANIO_CELDA);
        
        ctx.strokeStyle = "black";
        ctx.strokeRect(lineaX * TAMANIO_CELDA, lineaY * TAMANIO_CELDA, TAMANIO_CELDA, TAMANIO_CELDA);

      }