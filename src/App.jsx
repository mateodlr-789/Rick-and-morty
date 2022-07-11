import { useState } from 'react';
import { Head, SearchPer, Element, Contador } from './components';
import camara from './assets/Recursos/camera-movie.png';
import './App.css';


export const App = () => {
    const [personajes, setPersonas] = useState(['']);
    const onAddPerson = (NewPer) => {
        if (personajes.includes(NewPer)) return;
        setPersonas([NewPer]);
    }




    return (
        <>
        <Head />
            <div className="bodyP">
                <div className="d-flex flex-row align-content-center m-1">
                    <img src={camara} alt="" />
                    <h1 className="m-0 ms-3">Personajes</h1>
                </div>
                <br />
                <div className='d-flex flex-row align-content-center m-1'>
                    {
                        personajes.map(personaj => {
                            return (
                                <Contador key={personaj}
                                    personaj={personaj} />
                            )
                        })
                    }
                    <SearchPer
                        onNewPer={(value) => onAddPerson(value)}
                    />
                </div>

                {
                    personajes.map(personaj => {
                        return (
                            <Element key={personaj}
                                personaj={personaj} />
                        )
                    })
                }


            </div>





        </>
    )
}
