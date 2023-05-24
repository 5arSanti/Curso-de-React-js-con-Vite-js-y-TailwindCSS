import "./TodoError.css";

function TodoError(){
    return(
        <div className="primaryErrorContainer">
            <div className="errorContainer">
                <img src="https://martinbrainon.com/inicio/wp-content/uploads/2017/04/false-2061132_1280.png" alt="EmptyTodos"/>
                <h1>Ocurrio un error</h1>
                <p>Lo estamos solucionando :)</p>
            </div>
        </div>
    );
}

export {TodoError}