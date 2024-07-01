import './style.css';
import {useDispatch} from 'react-redux';
import {setInfoBiblio, setInfoBook} from './reducers';
import Books from './componentes/Books';
import UpdateBooks from './componentes/UpdateBooks';

function App() {

  const biblio=[
    {
        "ISBN": 1213244,
        "id": 1,
        "name": "Habitos de ricos",
        "author": "Juan Diego Gomez",
		    "image": "../imagenes/ricos.png",
		    "eDate": 2016,
        "disp": 3,
        "medio": "Fisico",
        "body": "En 'Hábitos de ricos', Juan Diego Gómez comparte los principios y estrategias que pueden ayudarte a alcanzar la prosperidad financiera. Desde la mentalidad adecuada hasta la gestión eficiente del dinero, este libro ofrece consejos prácticos para transformar tus hábitos financieros y lograr la libertad económica."
    },
    {
        "ISBN": 2343423,
        "id": 2,
        "name": "Habitos atomicos",
        "author": "Maurice Leblanc",
		    "image": "../imagenes/habitos.png",
		    "eDate": 2015,
        "disp": 6,
        "medio": "Virtual",
        "body": "En 'Hábitos atómicos', James Clear explora el poder de los pequeños cambios recurrentes para transformar nuestras vidas. Basado en la idea de que los hábitos son la base del éxito, Clear nos guía a través de estrategias prácticas para construir hábitos duraderos y eliminar los no deseados. Con ejemplos convincentes y consejos accionables, este libro ofrece un enfoque claro y efectivo para alcanzar nuestras metas a través del poder de los hábitos"
    },
    {
        "ISBN": 3454575,
        "id": 3,
        "name": "Como ganar amigos e influir sobre las personas",
        "author": "Dale Carnegie",
		    "image": "../imagenes/influir.png",
		    "eDate": 2021,
        "disp": 7,
        "medio": "Fisico",
        "body": "Este clásico de autoayuda ofrece consejos prácticos sobre cómo mejorar las relaciones personales y tener un impacto positivo en los demás. Con ejemplos convincentes y principios atemporales, Dale Carnegie muestra cómo construir amistades duraderas y cómo influir en las personas de manera genuina y respetuosa."
    },
    {
        "ISBN": 2743742,
        "id": 4,
        "name": "Arsene Lupin - Caballero Ladron",
        "author": "James Clear",
		    "image": "../imagenes/lupin.png",
		    "eDate": 2004,
        "disp": 1,
        "medio": "Fisico",
        "body": "El ladrón caballero Arsène Lupin, conocido por sus ingeniosos robos y su carisma irresistible, se enfrenta a nuevos desafíos mientras desafía a la ley con su estilo único y su código de honor peculiar. En esta emocionante aventura, Lupin se enfrenta a enemigos formidables y resuelve misterios intrincados, demostrando una vez más por qué es uno de los personajes más fascinantes de la literatura criminal"
    }
  ];
  const disp = useDispatch();
  disp(setInfoBiblio(biblio));

 


  console.log(biblio);
  return (
    <div>
      <div className="teleprompter">
        <h1 className="pronter" >  FELIPE'S LIBRARY </h1><br/>
      </div>
      <div className="fondo">
        <br/>
        <label className="label" ><b> Search all</b></label>
        <input  width="80" type="text" id="buscar" list="busqueda" placeholder="Search for ISBN, Title, Author, Edition Date, Summary " required />
			<button type="submit"> SEARCH ALL </button> <br/><br></br>

        <label className="label" ><b> Search by title </b></label>
        <input width="15%" type="text" id="titulo" list="tit" placeholder="Search for Title " required />
        <button type="submit"> SEARCH </button>
        
        <label><b> Search by author </b></label>
        <input width="15%" type="text" id="author" list="auth" placeholder="Search for Author" required />
        <button type="submit"> SEARCH </button>
        
        <label><b> Search by ISBN </b></label>
        <input width="15%;" type="text" id="ISBN" list="num" placeholder="Search for ISBN " required />
        <button type="submit"> SEARCH </button>
        
        <datalist id="busqueda" >
          <option value="todos los libros"></option>
          <option value="libros disponibles"></option>
          <option value="libros en fisico"></option>
          <option value="libros virtuales"></option>
          
        </datalist>

        
        <datalist id="auth" >
        {biblio.map( 
          (d,i) =>(
          <option key={i} value={d.author}></option>
          ))}
        </datalist>
        <datalist id="num">
        {biblio.map( 
          (d,i) =>(
          <option key={i} value={d.ISBN}></option>
          ))}
        </datalist>
        <datalist id="tit">
        {biblio.map( 
          (d,i) =>(
          <option key={i} value={d.name}></option>
          ))}
        </datalist>
        
        
         
        <h2 style={{ textAlign: 'center' }}>ALL RESULTS</h2> <br/>
        <div className="book-images">
        {biblio.map( 
          (d,i) =>(
           <img key={i} src={d.image} alt={`Image ${i}`} onClick={() => disp(setInfoBook(d)) }/>
          ))}
        </div>
      </div>
      <Books/> 
      <UpdateBooks/>       
    </div>
    
  );
}

export default App;
