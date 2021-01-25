import React from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
//import { InputMain } from '~/Components/InputMain';
import { getInput } from '~/store/todoData/actions';
import { useDispatch } from 'react-redux';

const ButtonPlus = () => {
    const dispatch = useDispatch();
    return (
    <>
        <Button type="primary" onClick={() => {
            dispatch(getInput());
        }}>
            <PlusOutlined />
        </Button>
    </>
    )
}

export default ButtonPlus;