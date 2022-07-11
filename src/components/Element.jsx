import { useEffect, useState } from 'react';
import { getCharacter } from '../helpers/getCharacter';
import statusVivo from '../assets/Recursos/icono_de_vivo.png';
import statusMuerto from '../assets/Recursos/Icono_de_muerto.png';
import React from "react";

export const Element = ({ personaj }) => {
    const [personajes, setPersonaje] = useState([]);
    const getPer = async () => {
        const newPer = await getCharacter(personaj);
        setPersonaje(newPer);
    }

    useEffect(() => {
        getPer();
    }, [])

    const renderElement = (personaje) => {
        switch (personaje.status) {
            case ("Alive"): return <img className="d-flex justify-content-center" src={statusVivo} alt="" />
            case ('Dead'): return <img className="d-flex justify-content-center" src={statusMuerto} alt="" />
            default: return <p className="d-flex justify-content-center">Unknown</p>
        }

    }



    const newFecha = (date) => {
        const unformateDate = new Date(date);
        const day = unformateDate.getDate();
        const month = unformateDate.getMonth() + 1;
        const year = unformateDate.getFullYear();
        return `${day}-${month}-${year}`
    }


    return (

        <div className="container mt-4 shadow p-3 mb-5 bg-body rounded-3 border border-1">
            <table className="table mt-4 rounded-3">
                <thead>
                    <tr className="list text-center ">
                        <th scope="col">Nombre</th>
                        <th scope="col">Vivo</th>
                        <th scope="col">Especie</th>
                        <th scope="col">Genero</th>
                        <th scope="col">Origen</th>
                        <th scope="col">Locaci&oacute;n</th>
                        <th scope="col">Capitulos</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {
                        personajes.map(personaje => {
                            return (
                                <tr key={personaje.id}>
                                    <td hidden>
                                        {personaje.id}
                                    </td>
                                    <td >
                                        {personaje.name}
                                    </td>
                                    <td >
                                        <div className="d-flex justify-content-center">
                                            {renderElement(personaje)}
                                        </div>


                                    </td>
                                    <td>
                                        {personaje.species}
                                    </td>
                                    <td>
                                        {personaje.gender}
                                    </td>
                                    <td>
                                        {personaje.origin}
                                    </td>
                                    <td>
                                        {personaje.location}
                                    </td>
                                    <td>
                                        {(personaje.episode).length}
                                    </td>
                                    <td>
                                        {newFecha(personaje.created)}
                                    </td>
                                    <td className="">
                                        <div className="ts d-flex justify-content-center align-items-center">
                                            <a href={personaje.image} type="button" target="_blank" >
                                                <img className="fotoAcciones " src={personaje.image} alt="" />
                                            </a>
                                            <p className="m-0">
                                                Acciones
                                            </p>
                                        </div>
                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

    )

}