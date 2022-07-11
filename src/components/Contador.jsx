import { useEffect, useState } from 'react';
import { getCharacter } from '../helpers/getCharacter';
import iconoVida from '../assets/Recursos/icono_de_vivo.png';
import statusMuerto from '../assets/Recursos/Icono_de_muerto.png';

export const Contador = ({ personaj }) => {
    const [personajes2, setPersonaje2] = useState([]);
    const getPer = async () => {
        const newPer = await getCharacter(personaj);
        setPersonaje2(newPer);
    }

    useEffect(() => {
        getPer();
    }, []);

    
    const count = [ personajes2.map(personaje => {
        return (            
            personaje.id
        )
    })];
    
   
    const countVivos = [ personajes2.map(personaje => {       
        switch(personaje.status){            
            case ("Alive"): return "alive";
            case ("Dead"): return "dead";
           default: return null;            
        }        
    })];

    const counts = countVivos[0].reduce((acc, value) => ({
        ...acc,
        [value]: (acc[value] || 0) + 1
     }), {});
  
    

    return (
        <div className="d-flex flex-row align-content-center m-1">
            <div className='d-flex flex-row align-items-center me-3 border border-2 rounded px-2'>
                <p className="fs-6 m-1">Total de personas</p>

                <h4 className="m-1">
                    {count[0].length}
                </h4>


            </div>
            <div className='d-flex flex-row align-items-center me-3 border border-2 rounded px-2'>
                <div className='d-flex flex-row me-2'>
                    <img src={iconoVida} alt="" />
                </div>
                <p className="fs-6 m-1">Personajes vivos</p>
                <h4 className="m-1">
                    {counts.alive }
                </h4>


            </div >
            <div className='d-flex flex-row align-items-center me-3 border border-2 rounded px-2'>
                <div className='d-flex flex-row me-2'>
                    <img src={statusMuerto} alt="" />
                </div>
                <p className="fs-6 m-1">Personajes muertos</p>
                <h4 className="m-1">
                    {counts.dead}
                </h4>
            </div>

        </div>
    )





}