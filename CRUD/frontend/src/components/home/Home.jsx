import React from 'react'
import Main from '../template/Main'

export default props =>
    <Main icon="home" title="Início">
        <div className='display-4'>Bem Vindo!</div>
        <hr />
        <p className="mb-0">Clique em <strong>Usuários</strong> para cadastrar.</p>
    </Main>