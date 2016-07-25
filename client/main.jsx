import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import Index from '../component/img/Index';


Meteor.startup(() => {
    render(<Index />,document.getElementById('component-test'));
});