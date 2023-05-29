import "./NotFound.css";

function NotFound(){
    return(
        <div className="primaryNotFoundContainer">
            <div className="notFoundContainer">
                <img src="https://autohub.ir/static/newapi/web/img/not_found.png" alt=""/>
                <h1>Aticulo no Encontrado</h1>
                <p>Prueba a buscar otra cosa :)</p>
            </div>
        </div>
    );
}

export {NotFound}