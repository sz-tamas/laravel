import React from 'react';
import { render } from 'react-dom';
import ExampleComponent from 'app/components/ExampleComponent';
import 'style/styles.scss';

import * from 'app/bootstrap'

render(
    <ExampleComponent />,
    document.getElementById('app'),
);