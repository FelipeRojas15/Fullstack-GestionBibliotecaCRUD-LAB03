import {useSelector} from "react-redux";
import '../style.css'
function Books (){
    const lst = useSelector(state => state.librosAPP.infoBook);
    console.log("Estoy en componente books");
    console.log(lst);
    return(
        <div>
            <div className="teleprompter">
			    <h1 >  FELIPE'S LIBRARY </h1><br/>
		    </div>
            <div className="book-grid" >
    
                <div className="book-image2">
                    <img src={lst.image} alt={`Image ${lst.id}`}/>
                </div>
                <div className="book-info">
                    <h1>{lst.name}</h1>
                    <p><strong>Autor:</strong>{lst.author}</p>
                    <p><strong>Título:</strong> {lst.name}</p>
                    <p><strong>Fecha de Edición: </strong> {lst.eDate}</p>
                    <p><strong>Resumen: </strong> {lst.body}</p>
                    <p><strong>ISBN: </strong> {lst.ISBN}</p>
                    <p><strong>Disponibles: </strong> {lst.disp}</p>
                    <p><strong>Medio:</strong> {lst.medio}</p>
                    <a href="biblioteca.html"><b>Volver a la página principal</b></a>
                </div>
            </div>
        </div>

    );


}

export default Books; 