import React, {useState} from "react";
import TarjetaComponent from "./TarjetaComponent";
import FormularioComponent from "./FormularioComponent";

//constante Array
const initialUsuario = [
    //{Objeto} {1,2,3} {llave: valor}
    {
        key: 1, 
        nombre: 'Michi',
        apellido: 'Parranda',
        edad: 18
    }
]

const UsuarioComponent = () =>{
    //en donde tenemos los componentnes van las funciones generales
    //get y set
    //useState también recorre a todos los usuarios []

    const [usuarios, setUsuarios] 
    //le damos la variable a useState
    = useState(initialUsuario);

    //creamos un metodo/funcion para ocupar en cualquier lugar

    const tarjetaDelete = (usuarioKey) =>{
        //nos falta usuarioKey, parametros utilizados dentro de la funcion en tarjetaDeleye

        //¿COMO SE ESCRIBE EN CASO DE QUE TENGAMOS BD?
        const changeUsuarios= usuarios.filter(usuario=>usuario.key !== usuarioKey);
        //usuarios.filter, utiliza otra variable usuario/u
        //falta funcion de filtro y condicion
        //usuario ==comparación
        //en la funcion de onClick utilizamos el parametro user.key
        //que hace referencia al parametro usuarioKey de tarjetaDelete
        setUsuarios(changeUsuarios)

    }

    const userAdd =(usuario) =>{
        
        const addUser = [
            ...usuarios,
            usuario

        ]
        setUsuarios(addUser);
    }


    //EXISTE UN SOLO RETURN al menos que utilicemos funciones if, else, etc
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-8 ">
                    <h1>Lista</h1>
                    {/*javaScript
                    traemos la lista a traves de la const de useState
                    con la función de recorrer
                    */}
                    {
                        usuarios.map(
                            //la variable y condicion llamamos al componente
                            user => <TarjetaComponent
                            // accedemos a traves de la llave de la variable de usuarios para el recorrido
                            key={user.key}
                            //a la variable user de izq, le asignamos =
                            //user de la derecha es el la variable de izq
                            //siendo el objeto iterado de la copia de InitialUsuario
                            //variable = {objeto recorrido} la variable se va a tarjeta component, funcion todo lo creado dentro de usuarioComponent
                            user={user}
                            tarjetaDelete={tarjetaDelete}

                            />
                        )
                    }

                </div>
                <div className="col">
                    <h1>Formulario</h1>
                    <FormularioComponent
                    //izq es para ingresarlo en FormularioComponennt, y derecha es la funcion de UsuarioComponent
                    userAdd={userAdd}
                    />


                </div>
            </div>
        </div>

    );
};

export default UsuarioComponent;