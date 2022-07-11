import { useState } from 'react';
import busqueda from '../assets/Recursos/Icono_de_busqueda.png';


export const SearchPer = ({ onNewPer, personaj }) => {
    const [inputPersonajes, setInputPersonaje] = useState('');
    const onInputPersonaje = ({ target }) => {        
        setInputPersonaje(target.value);
    }
    const onSubmitt = (event) => {
        event.preventDefault();
        onNewPer(inputPersonajes.trim());
        setInputPersonaje('');
    }



    return (
        <div >            
            <form className="search d-flex flex-row align-items-center px-2 " onSubmit={onSubmitt} >
                <img className="lupa " src={busqueda} alt="" />
                <input
                    className="inSearch"
                    type="text"
                    placeholder="Buscar"
                    value={inputPersonajes}
                    onChange={onInputPersonaje}
                />

            </form>
        </div>
    )


}