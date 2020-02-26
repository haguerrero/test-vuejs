let DirectiveFor = {
    template: `<div>
            <h1 v-text="title"></h1>
            <p>{{ message }}</p>
            <ul>
                <li v-for="(item, index) in list" :key="index">
                    {{ item }}
                </li>
            </ul>
            <ul>
                <li v-for="(item, index) in object_list" :key="index">
                    Nombre: {{ item.nombre }}</br>
                    Apellido: {{ item.apellido }}</br>
                    DNI: {{ item.dni }}
                    </br></br>
                </li>
            </ul>
    </div>
    `,
    data(){
        return{
            title: 'Directiva v-for',
            message: 'Texto desde la directiva v-for',
            list: ['rojo', 'amarillo', 'azul', 'blanco'],
            object_list: [{
                nombre: 'Hugo',
                apellido: 'Guerrero',
                dni: 05555555
            },
            {
                nombre: 'Ilse',
                apellido: 'Esteves',
                dni: 005555551
            },
            {
                nombre: 'Samantha',
                apellido: 'Guerrero',
                dni: 005555552
            },
            {
                nombre: 'Martín',
                apellido: 'Guerrero',
                dni: 005555553
            }
        ]
        }
    }
}