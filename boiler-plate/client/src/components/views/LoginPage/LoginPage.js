import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {loginUser} from '../../../_actions/user_actions'
import { withRouter } from 'react-router-dom'

function LoginPage(props) {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const dispatch = useDispatch();

    const emailHandler = (e) => {
        setEmail(e.currentTarget.value);
    }

    const pwdHandler = (e) => {
        setPwd(e.currentTarget.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let body = {
            email: email,
            password: pwd
        }

        dispatch(loginUser(body))
        .then(response => {
            console.log(response);
            if(response.payload.loginSuccess) {
                props.history.push('/');
            } else {
                alert('Error');
            }
        })
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: ' 100vh'}}>
            <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input type="email" value={email} onChange={emailHandler} />
                <label>Password</label>
                <input type="password" value={pwd} onChange={pwdHandler} />
                <br />
                <button>
                    Button
                </button>
            </form>
        </div>
    )
}

export default withRouter(LoginPage)
