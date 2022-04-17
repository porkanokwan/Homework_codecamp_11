import React, { Component } from "react";

class SignUp extends Component {
    state = { formData: {
        email: {
            value: '',
            message: '',
            required: true
        },
        password: {
            value: '',
            message: '',
        },
        confirmPassword:{
            value: '',
            message: '',
        },
    }
    }

    checkEmail = (value) => {
        let message = '';
            if(value.required && value.value.length === 0 ){
                message = 'คุณต้องกรอกช่องนี้'
            }
        return {message};
    }

    checkPassword = (value) => {
        let messages = '';
        if(value.value.length < 8 || value.value.length > 12 ){
            messages = 'คุณต้องกรอกรหัสผ่านอย่างน้อย 8 ตัวอักษร'
        }
        return {messages}
    }

    confirmPassword = (confirmValue, passwordValue) => {
        let message1 = '';
        if(confirmValue.value != passwordValue.value){
            message1 = 'คุณกรอกรหัสผ่านไม่ตรงกัน'
        }   
        return {message1} 
    }   

    onChangeInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value.trim();
        const updateForm = {...this.state.formData}
        updateForm[fieldName].value = fieldValue;

       let {message} = this.checkEmail(updateForm.email)
       updateForm.email.message = message;

       let {messages} = this.checkPassword(updateForm.password)
        updateForm.password.message = messages;
       
        let {message1} = this.confirmPassword(updateForm.confirmPassword, updateForm.password)
        updateForm.confirmPassword.message = message1;

        this.setState({
            formData: updateForm
        }
        );
    }

    
    render() {
        const {email, password, confirmPassword} = this.state.formData;
        return(
            <div>
                    <input onChange={this.onChangeInput} name="email" placeholder="อีเมล์" value={email.value}/>
                    <p>{email.message}</p>
                    <input onChange={this.onChangeInput} name="password" type="password" value={password.value} placeholder="รหัสผ่าน"/>
                    <p>{password.message}</p>
                    <input onChange={this.onChangeInput} name="confirmPassword" type="password" value={confirmPassword.value} placeholder="ยืนยันรหัสผ่าน"/>
                    <p>{confirmPassword.message}</p>
                    <button onClick={this.fetchPost}> Sign Up </button>
            </div>
        )
        
    }
}

export default SignUp;