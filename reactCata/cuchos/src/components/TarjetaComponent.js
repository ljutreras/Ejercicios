import React from "react";

//llamamos a la función creada en UsuarioComponent que es 
// el objeto iterado USER
const TarjetaComponent =({user, tarjetaDelete}) =>{
    return(
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">
                    {user.nombre} {user.apellido}
                </h3>
                <p>Edad: {user.edad}</p>
                <hr />
                <div className="d-flex justify-content-end">
                    <button className="btn btn-sm btn-outline-primary me-2" >Editar</button>
                    <button className="btn btn-sm btn-outline-danger" 
                    //llamamos al objeto completo con su llave respectiva
                    onClick={()=>tarjetaDelete(user.key)} >
                        Eliminar
                    </button>

                </div>
            </div>
        </div>
    );
}

export default TarjetaComponent;