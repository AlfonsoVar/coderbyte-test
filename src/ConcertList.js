import { useState } from 'react';
import Product from './components/Product';

const ConcertList = () => {
    // initial state, using property initializers

    //const [artist, setArtis] = useState('');
    const [state, setState] = useState('');

    return (
        <div className='app-container'>
            <div className='col col2' >
                <div className='ui unstackable items' >
                    <Product />
                </div>
            </div>
        </div>
    );
}

export default ConcertList;
