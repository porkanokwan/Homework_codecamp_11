import React, { Component } from "react";
import {Form, Input, Button} from 'antd';

class SignUps extends Component {
    state = {
        email: {
            value: '',
            error: {status: true, message: ''}
        },
        password: {
            value: '',
            error: {status: true, message: ''}
        },
        confirmPassword:{
            value: '',
            error: {status: true, message: ''}
        },
        isFormValid: false
    };
    
    onFinish = () => {
        console.log('Received values')
    }

    render() {
        let {email, password, confirmPassword} = this.state;
        return(
            <Form onFinish={this.onFinish}>
                <Form.Item 
                name="email" 
                label='E-mail'
                rules={[
                    {type: 'email', message: 'กรอกข้อมูลไม่ถูกต้อง'},
                    {required: true}
                ]}
                >
                    <Input  type="text" placeholder="อีเมล์" value={email.value} />
                </Form.Item>
                <Form.Item
                name="password"
                label="Password"
                rules={[
                    {min: 8, max: 12},
                    {required: true, message: 'คุณต้องกรอกไม่เกิน 8-12 ตัวอักษร'}
                ]}
                >
                    <Input.Password  value={password.value} placeholder="รหัสผ่าน"/>
                </Form.Item>
                <Form.Item
                name="confirmPassword"
                label="Confirm password"
                rules={[
                    {required: true, message: 'คุณกรอกรหัสผ่านไม่ตรง'},
                    ({getFieldValue}) => ({
                        validator(_,value) {
                            if(!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        }
                    })
                ]}
                >
                    <Input.Password  value={confirmPassword.value} placeholder="ยืนยันรหัสผ่าน"/>
                </Form.Item>
                    <Button htmlType='submit' disabled={!this.isFormValid}>Sign Up</Button>
            </Form>
        )
        
    }
}

export default SignUps;