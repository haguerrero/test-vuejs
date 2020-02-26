let DirectiveIf = {
    template: `<div>
            <h1 v-text='title'></h1>
            <p v-if="mostrar">{{ message }}</p>
    </div>
    
    `,
    data() {
        return{
            title:'Directiva v-if',
            message:'Texto desde la directiva v-if',
            mostrar: true
        }
    }

}