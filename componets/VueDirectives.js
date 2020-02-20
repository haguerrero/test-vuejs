Vue.component('vue-directives', {
    template: `<div>
        <p v-text="text"></p>
        <a v-bind:href="link.href" v-bind:title="link.title" v-text="link.text"></a>    
    </div>`,
    data() {
        return {
            text: 'Texto de prueba v-text',
            link: {
                text: 'Vuejs Home',
                href: 'https://es.vuejs.org/v2/api/#Directivas',
                title: 'Documentación de las Directivas de Vue'
            }
        }
    }
})