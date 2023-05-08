import React, { useState } from 'react'
import Header from '../Header'
import Board from '../Board'
import Model from '../Model'
import CreateForm from '../Form'

const Home = () => {
    const [open, modalopenclose] = useState<boolean>(false); // To open close modal

    const openModal = (command: boolean) => {
        modalopenclose(command)
    }

    return (
        <>
            <Header modalopenclose={openModal} />
            <Board />
            <Model visible={open} closeModal={openModal} showClose={true}>
                <CreateForm id='' modalopenclose={openModal} />
            </Model>
        </>
    )
}

export default Home
