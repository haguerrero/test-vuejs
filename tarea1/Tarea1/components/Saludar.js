Vue.component('saludar-comp', {
    template: `<header @click="upps">
        <h1>{{ titulo }}</h1>,
        <button v-on:click.stop="saludar">Saludar</button>
    </header>`,
    data() {
        return {
            titulo: 'Hola Mundo',
            nombre: 'Hugo Guerrero',
            pais: 'Venezuela (refugiado en Perú)',
            clickAfuera: 'No hagas click en el botón'
        }
    },
    methods: {
        upps: function() {
            alert(this.clickAfuera)
        },
        saludar: function() {
            alert(`Hola mi nombre es ${this.nombre} y soy de ${this.pais}` )
        }

    }
})