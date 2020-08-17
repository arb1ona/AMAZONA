import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signin } from '../actions/userActions';


function ProductsScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password))
    }
    const userSignin = useSelector(state => state.userSignin)
    const { loading, userInfo, error } = userSignin
    const dispatch = useDispatch();

    useEffect(() => {
        if (userInfo) {
            props.history.push("/")
        }
        return () => {
            //
        }
    }, [userInfo])

    return <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>Sign-In</h2>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>error...</div>}
                </li>
                <li>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}></input>
                </li>
                <li>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}></input>
                </li>
                <li>
                    <button type="submit" className="button-primary">Signin</button>
                </li>
                <li>New to Amazona?</li>
                <li>
                    <Link to="/register" className="button-secondary">Create your amazona account</Link>
                </li>
            </ul>

        </form>
    </div>
}

export default ProductsScreen;
