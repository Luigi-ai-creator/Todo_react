import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const ButtonPlus = () => {
    return (
    <>
        <Button type="primary">
            <PlusOutlined />
        </Button>
    </>
    )
}

export default ButtonPlus;