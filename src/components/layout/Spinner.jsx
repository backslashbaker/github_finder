import React from 'react';
import spinner from './assets/spinner2.gif'

function Spinner(props) {
    return (
        <div className={'w-100 mt-20'}>
            <img className={'text-center mx-auto'} width='180' src={spinner} alt={'loading...'} />

        </div>
    );
}

export default Spinner;