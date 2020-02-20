let DirectiveHtml = {
    template: `<div>
        <h1 v-text="title"></h1>
        <p v-text="message"></p>
    </div>`,
    data() {
        return {
            title: 'Directivas v-html',
            message: 'Texto desde directive html',
        }
    },

}