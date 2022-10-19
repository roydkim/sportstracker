import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
    return (
        <div>
            <form>
                <div class='container'>
                    <label for='user'>username</label>
                    <input type='text' placeholder='enter username' name='user' required></input>

                    <label for='pass'>password</label>
                    <input type='password' placeholder='enter password' name='pass'></input>

                    <label for='email'>email</label>
                    <input type='email' placeholder='enter email' name='email'></input>

                    <button type='submit'>login</button>
                </div>
                <p>
                    <Link className="App-link" to="/">return home</Link>
                </p>
            </form>
        </div>
    );
}

export default LoginPage;