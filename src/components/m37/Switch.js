import React from 'react'
import M37Com1 from './M37Com1';
import M37Com2 from './M37Com2';
import M37Com3 from './M37Com3';
import M37Com4 from './M37Com4';
import M37Com5 from './M37Com5';

const Switch = ({ val }) => {
    switch (val) {
        case 'two': return <M37Com2 />
        case 'three': return <M37Com3 />
        case 'four': return <M37Com4 />
        case 'five': return <M37Com5 />
        default: <M37Com1 />
    }
}

export default Switch