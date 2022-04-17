import { Button, Form, Input } from 'antd';
import React, { useState } from 'react'

export default function SingIn() {
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <Form 
      style={{width: '500px', margin: '15px 0px'}}
    >
      <Form.Item
        label='E-mail'
        name='email'
        rules={[
          {required: true, message: 'Please input your email!' },
          {type: 'email'}
        ]
        }
      >
          <Input value={inputEmail} onChange={ e => setInputEmail(e.target.value)} placeholder='E-mail'/>
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {min: 8, max: 24},
          {required: true, message: 'Please input your password!'}
        ]}
      >
          <Input.Password value={inputPassword} onChange={ e => setInputPassword(e.target.value)} placeholder='password'/>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit'>Sign-In</Button>        
      </Form.Item>
    </Form>
    </div>
  )
}
