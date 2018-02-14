import React from 'react'
import ReactDOM from 'react-dom'

import Family from './family'
import Member from './member'
import childrenWithProps from '../utils/reactUtils'

ReactDOM.render(
    <Family lastName='Chuque'>
        <Member name='Rafael'/>
    </Family>    
, document.getElementById('app'))

