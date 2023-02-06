const btnEmpezar = document.getElementById('btnEmpezar');
const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');

 const CANTIDAD_NIVELES = 2;

class Juego {
    constructor(){
        this.inicializar();
        this.generarSecuencia();
        setTimeout(this.siguienteNivel, 500);
    }

    inicializar(){
        this.elegirColor = this.elegirColor.bind(this);
        this.siguienteNivel = this.siguienteNivel.bind(this);
        this.toggleBtnEmpezar();
        this.nivel = 1;
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde,
        };
    }

    toggleBtnEmpezar(){
        if(btnEmpezar.classList.contains('hide')){
            btnEmpezar.classList.remove('hide');
        } else {
            btnEmpezar.classList.add('hide');
        }
    }

    generarSecuencia(){
        this.secuencia = new Array(CANTIDAD_NIVELES).fill(0).map(n => Math.floor(Math.random() * 4));
        console.log(this.secuencia);
    }

    siguienteNivel(){
        this.subnivel = 0;
        this.iluminarSecuencia();
        this.agregarEventosClick();
    }

    tranformarNumeroAColor(numero){
        switch(numero){
            case 0:
                return 'celeste';
            case 1:
                return 'violeta';
            case 2:
                return 'naranja';
            case 3:
                return 'verde';
        }
    }

    tranformarColorANumero(color){
        switch(color){
            case 'celeste':
                return 0;
            case 'violeta':
                return 1;
            case 'naranja':
                return 2;
            case 'verde':
                return 3;
        }
    }

    agregarEventosClick(){
        this.colores.celeste.addEventListener('click', this.elegirColor);
        this.colores.violeta.addEventListener('click', this.elegirColor);
        this.colores.naranja.addEventListener('click', this.elegirColor);
        this.colores.verde.addEventListener('click', this.elegirColor);
    }

    eliminarEventosClick(){
        this.colores.celeste.removeEventListener('click', this.elegirColor);
        this.colores.violeta.removeEventListener('click', this.elegirColor);
        this.colores.naranja.removeEventListener('click', this.elegirColor);
        this.colores.verde.removeEventListener('click', this.elegirColor);
    }

    elegirColor(ev){
        var nombreColor = ev.target.dataset.color;
        var numeroColor = this.tranformarColorANumero(nombreColor);
        this.iluminarColor(nombreColor);
        
        if(this.secuencia[this.subnivel] === numeroColor){
            this.subnivel++;
            if(this.subnivel === this.nivel){
                this.nivel++;
                if(this.nivel === (CANTIDAD_NIVELES + 1)){
                    this.ganarJuego();
                } else {
                    setTimeout(this.siguienteNivel, 1000);
                }
            }
        } else {
            this.perderJuego();
        }
    }

    iluminarSecuencia(){
        for (let i = 0; i < this.nivel; i++) {
            console.log(this.secuencia[i]);
            const color = this.tranformarNumeroAColor(this.secuencia[i]);
            setTimeout(() => this.iluminarColor(color), 700 * i);
        }
    }

    iluminarColor(color){
        this.colores[color].classList.add('light');
        setTimeout(() => this.apagarColor(color), 350);
    }

    apagarColor(color){
        this.colores[color].classList.remove('light');
    }

    ganarJuego(){
        this.eliminarEventosClick();
        swal('Platzi', 'Felicitaciones, ganaste el juego.', 'succes')
            .then(() => {
                this.inicializar();
            })
    }

    perderJuego(){
        this.eliminarEventosClick();
        swal('Platzi', 'Lo siento perdiste.', 'error')
            .then(() => {
                this.inicializar();
            })
    }
}

function empezarJuego(){
    var juego = new Juego();
}