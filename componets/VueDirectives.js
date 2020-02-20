Vue.component('vue-directives', {
    template: `<div>
        <h1 v-text="title"></h1>
        <p v-text="text"></p>
        <a v-bind:href="link.href" v-bind:title="link.title" v-text="link.text"></a>
        <directive-html></directive-html>    
    </div>`,
    data() {
        return {
            title: 'Directivas de Vue.js',
            text: 'Texto de prueba v-text',
            link: {
                text: 'Vuejs Home',
                href: 'https://es.vuejs.org/v2/api/#Directivas',
                title: 'Documentación de las Directivas de Vue'
            }
        }
    },
    components: {
        'directive-html': DirectiveHtml
    }
})