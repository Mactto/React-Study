import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {registerUser} from '../../../_actions/user_actions';
import { withRouter } from 'react-router-dom'

function RegisterPage(props) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');
    const [cpwd, setCpwd] = useState('');
    const dispatch = useDispatch();

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value);
    }

    const onNameHandler = (e) => {
        setName(e.currentTarget.value);
    }

    const onPwdHandler = (e) => {
        setPwd(e.currentTarget.value);
    }

    const onCpwdHandler = (e) => {
        setCpwd(e.currentTarget.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (pwd !== cpwd) {
            return alert('비밀번호와 비밀번호 확인이 다릅니다.');
        }

        let body = {
            email: email,
            name: name,
            password: pwd,
        }

        dispatch(registerUser(body))
        .then(response => {
            console.log(response);
            if(response.payload.success) {
                props.history.push('/');
            } else {
                alert("Error");
            }
        })
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: ' 100vh'}}>
            <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input type="email" value={email} onChange={onEmailHandler} />
                <label>Name</label>
                <input type="password" value={name} onChange={onNameHandler} />
                <label>Password</label>
                <input type="password" value={pwd} onChange={onPwdHandler} />
                <label>Confirm Password</label>
                <input type="password" value={cpwd} onChange={onCpwdHandler} />
                <br />
                <button>
                    Button
                </button>
            </form>
        </div>
    )
}

export default withRouter(RegisterPage)
