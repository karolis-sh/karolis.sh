import React from 'react';
import {render} from 'react-dom';

import {init} from './config';
import {App} from './components';
import './index.css';


init();


render(<App />, document.getElementById('root'));
