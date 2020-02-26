Vue.component('hello-world', {
    template: ` <header>
                    <h1>{{ title }}</h1>
                    <h3>{{ message }}</h3>
                    <h6>{{ from }} </h6>
                    <hr>
                </header>`,
    data() {
        return {
            title: 'Hola Mundo',
            message: 'Bienvenidos al curso de Vue.js',
            from: 'Componente hello-world (HelloWorld.js)'
        }
    }
})