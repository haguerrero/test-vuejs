let DirectiveShow = {
    template: `<div>
            <h1 v-text='title'></h1>
            <p v-show="mostrar">{{ message }}</p> 
    </div>
    `,
    data(){
        return{
            title: 'Directiva v-show',
            message: 'Texto desde la Directiva v-show, siempre que sea True',
            mostrar: true
        }
    }

}