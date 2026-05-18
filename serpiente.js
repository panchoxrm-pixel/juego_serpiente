    const TAMANIO_CELDA = 25;
    let intervaloSerpiente;
    let direccionActual = "derecha";
    let comida = null;
    let puntaje = 0;
      
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
      pintarComida();      
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

    function moverDerecha(){
      const cabezaActual = serpiente[0];
      const cabezaNueva = {
        x: cabezaActual.x + 1,
        y: cabezaActual.y
      }
      serpiente.unshift(cabezaNueva);
    }

    function moverIzquierda(){
      const cabezaActual = serpiente[0];
      const cabezaNueva = {
        x: cabezaActual.x - 1,
        y: cabezaActual.y
      }
      serpiente.unshift(cabezaNueva);
    }

    function moverArriba(){
      const cabezaActual = serpiente[0];
      const cabezaNueva = {
        x: cabezaActual.x,
        y: cabezaActual.y - 1
      }
      serpiente.unshift(cabezaNueva);
    }

    function moverAbajo(){
      const cabezaActual = serpiente[0];
      const cabezaNueva = {
        x: cabezaActual.x,
        y: cabezaActual.y + 1
      }
      serpiente.unshift(cabezaNueva);
    }

    function cambiarDireccion(direccion){
      direccionActual = direccion;
    }

    function iniciarJuego(){
      if (intervaloSerpiente) {
    clearInterval(intervaloSerpiente);
      }
      intervaloSerpiente = setInterval(moverSerpiente,1000);      
    }

    function pausarJuego(){
      clearInterval(intervaloSerpiente);
      intervaloSerpiente = null;
    }

    function moverSerpiente(){
      switch (direccionActual) {
        case "derecha": moverDerecha();          
          break;
        case "izquierda": moverIzquierda();          
          break;
        case "arriba": moverArriba();          
          break;
        case "abajo": moverAbajo();          
          break;
        default:
          break;
      }
      if(atraparComida() === true){
        let cmpPuntaje = document.getElementById("puntaje");
        cmpPuntaje.innerText = puntaje += 1;
        comida = null;
      } else {
        serpiente.pop();
      }
      dibujarTodo();
    }

    function pintarComida(){
     if (comida === null) {
      const limiteX = (canvas.width / TAMANIO_CELDA) - 1;  // 23
      const limiteY = (canvas.height / TAMANIO_CELDA) - 1; // 23
      comida = {
        x: Math.floor(Math.random() * (limiteX + 1)),
        y: Math.floor(Math.random() * (limiteY + 1))
      };
      }
      pintarParte(comida.x, comida.y, "orange");
    }

    function atraparComida(){
      let cabeza = serpiente[0];
      if(cabeza.x === comida.x && cabeza.y === comida.y){
        return true;
      } else {
        return false;
      }
    }