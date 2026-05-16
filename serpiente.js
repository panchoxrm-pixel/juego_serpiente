    const TAMANIO_CELDA = 25;
      
   // 1. Capturamos el canvas y su contexto de dibujo
    const canvas = document.getElementById("canvasJuego");
    const ctx = canvas.getContext("2d");

     const serpiente = [
      {x:0,y:8},
      {x:0,y:9},
      {x:0,y:10},
      {x:0,y:11},
      {x:0,y:12},
    ];
 
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
      pintarSerpiente();      
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

    function pintarParte(lineaX, lineaY, color){
      ctx.fillStyle = color;
      ctx.fillRect(lineaX * TAMANIO_CELDA, lineaY * TAMANIO_CELDA, TAMANIO_CELDA, TAMANIO_CELDA);
      ctx.strokeStyle = "black";
      ctx.strokeRect(lineaX * TAMANIO_CELDA, lineaY * TAMANIO_CELDA, TAMANIO_CELDA, TAMANIO_CELDA);
    }
     
    function pintarSerpiente(){
      for(let i = 0; i < serpiente.length; i ++){
        const parteActual = serpiente[i];
        if(i === 0){
          pintarParte(parteActual.x, parteActual.y, "lime");
        } else {
          pintarParte(parteActual.x, parteActual.y, "yellow");
        }       
      }
    }