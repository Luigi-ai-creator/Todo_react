import React from 'react';

import { Button } from 'antd';
import { List } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const ListToDo = () => {
    return (
        <>
    <List
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item>
            {item}
            <Button type="primary">
                <CheckOutlined />
            </Button>
        </List.Item>
      )}
    />
  </>
    )
}

export default ListToDo;