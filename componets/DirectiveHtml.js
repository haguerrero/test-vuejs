let DirectiveHtml = {
    template: `<div>
        <h1 v-text="title"></h1>
        <p v-html="message"></p>
        <hr>
    </div>`,
    data() {
        return {
            title: 'Directivas v-html',
            message: '<b>Texto desde directive html</b>',
        }
    },

}