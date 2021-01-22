import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'antd';

const ButtonPlus = () => {
    return (
    <>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <br />
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
    </>
    )
}

export default ButtonPlus;