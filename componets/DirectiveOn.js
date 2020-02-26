let DirectiveOn = {
    template: `
            <div>
                 <h1 v-text="title"></h1>
                <p v-text="message"></p>
                <button v-on:click="decirHola">Dar Click</button>
                </br></br>
                <button @click="comprarEntradas">Comprar entradas</button>
                <span v-text="entradas"></span>
            </div>
    
    `,
    data() {
        return {
            title: 'Directiva v-on',
            message: 'Texto desde la directiva v-on',
            text_alert: "Hola desde texto de data para un alert en methods",
            pelicula: 'Regreso al fututo I',
            entradas: 5

        }

    },
    methods: {
        decirHola: function(){
            alert(this.text_alert)
        },
        comprarEntradas: function(){
            if(this.entradas > 0) {
                this.entradas--
            }
            else{
                alert("Ya no hay disponibles mas entradas")
            }
            
        }
    }
}