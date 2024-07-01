import '../style.css'
import {useSelector} from "react-redux";
function UpdateBooks(){

    const lst = useSelector(state => state.librosAPP.infoBiblio);
    console.log("Estoy en componente UpdateBooks");
    console.log(lst);
    return(
        <div>
            <div className="teleprompter">
			    <h1 >  FELIPE'S LIBRARY </h1><br/>
		    </div>
            <div>
                <h2 style={{ textAlign: 'center' }}> Create, update or delete a register </h2>
            </div>
            <div className="book-grid2" >
                
                
                    <form>
                        <label htmlFor="isbn"><b> ISBN </b> </label><br/>
                        <input type="text" id="isbn" name="isbn" placeholder="Ingrese ISBN " required/> <br/><br/>
                        <label htmlFor="titulo"><b> Titulo </b> </label><br/>
                        <input type="text" id="titulo" name="titulo" placeholder="Ingrese titulo " required/> <br/><br/>
                        <label htmlFor="autor"><b> Autor </b> </label><br/>
                        <input type="text" id="autor" name="autor" placeholder="Ingrese autor " required/> <br/><br/>
                        <label htmlFor="resumen"><b>Resumen</b></label><br/>
                        <textarea id="resumen" name="resumen" placeholder="Ingrese resumen"></textarea><br /><br />

                        <label htmlFor="disponibilidad"><b>Disponibilidad</b></label><br/>
                        <input type="text" id="disponibilidad" name="disponibilidad"  placeholder="Ingrese disponibilidad" /><br /><br />

                        
                        
                        <label htmlFor="fechaPublicacion"><b>Fecha de Publicación</b></label><br/>
                         <input type="date" id="fechaPublicacion" name="fechaPublicacion"  /><br/>

                        <label htmlFor="medio"><b>Medio</b></label><br/>
                        <select id="medio" name="medio" >
                            <option value="FISICO">Físico</option>
                            <option value="VIRTUAL">Virtual</option>
                        </select><br/>

                        <label htmlFor="img"><b>Link Imagen </b></label><br/>
                        <input type="text" id="img" name="img"  placeholder="Ingrese link de la imagen" /><br /><br />
                        
                        <br/><br/>
                        <button type="submit">Crear</button>
                        <button type="button" >Actualizar</button>
                        <button type="button" >Borrar</button>
                    </form>
              
                <div className="book-info">


                </div>
            </div>
        </div>

    );

}

export default UpdateBooks;