import React, {useState} from "react";

const initialValues = [
    {
        key: '',
        nombre: '',
        apellido: '',
        edad: '',
        password: ''
    }
]

const FormularioComponent =({userAdd}) =>{
    //objeto values
    const [values, setValues]=useState(initialValues);
    // generamos la función de useState para values
    const {key, nombre, apellido, edad, password} = values;
    //creamos los atributos para values

    const handleInputValues = (e) =>{
        //para capturar eventos 
        //e = evento: = asignación ==comprobación ===asignacion y comprobación integer === integer
        const changeValues = {
            //método: mantenemos los valores, y cambiamos en caso de ingreso
            ...values,
            //la tarjeta name de formulario sea igual al value almacenado
            [e.target.name]:e.target.value
            //como comprobación en guardado
            //al generar un input comprueba que el ingreso sea acorde al atributo en
            //changeValues y va al siguiente hasta terminar todos los atributos
        
        }
        setValues(changeValues);
        //cuando esta cargado de datos los settea
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        //eliminamos todos los default
        userAdd(values);
        //tenemos que crear userAdd en UsuarioComponent y poner como parametro en FormularioComponent
    }


    return (
        <form onSubmit={handleSubmit}>
            {/*utilizamos su funcionalidad*/}

            <div className="form-group">
                <label>ID</label>
                <input
                    type="text"
                    className="form-control"
                    id="key"
                    placeholder="Key"
                    name="key"
                    value={key}
                    // L27 comprueba que nombre y valor sean iguales 
                    //todos los on son eventos y llamamos a las funciones creadas
                    onChange={handleInputValues}
                    //ponerlo para cada atributo
                />
                <br />
                <label>Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Nombre"
                    name="nombre"
                    value={nombre}
                    onChange={handleInputValues}
                />
                <br />
                <label>Apellido</label>
                <input
                    type="text"
                    className="form-control"
                    id="apellido"
                    placeholder="Apellido"
                    name="apellido"
                    value={apellido}
                    onChange={handleInputValues}
                />
                <br />
                <label>Edad</label>
                <input
                    type="text"
                    className="form-control"
                    id="edad"
                    placeholder="Edad"
                    name="edad"
                    value={edad}
                    onChange={handleInputValues}
                />
                <br />
                <label>password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputValues}

                />
                <br />
            </div>
            {/*ya esta creado en onSubmit handlesubmit userAdd*/}
            <button type="submit" className="btn btn-outline-primary" >Crear</button>
        </form>
    );
}

export default FormularioComponent;