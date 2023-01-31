import React from 'react';
import { useState } from 'react';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { authUser } from '../../services/auth.js';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const { type } = useParams();
  const { user, setUser } = useUser();
  if (user) {
    return <Redirect to="/items" />;
  }
  const submitAuth = async () => {
    try {
      const newUser = await authUser(email, password, type);
      setUser(newUser);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="auth box">
      <div className="panel-heading">Welcome to your To-do List Manager</div>
      <div className="panel-tabs">
        <NavLink to="/auth/sign-in" activeClassName="is-active">
          Sign In
        </NavLink>
        <NavLink to="auth/sign-up" activeClassName="is-active">
          Sign Up
        </NavLink>
      </div>
      <div className="panel-block">
        <div className="field">
          <label>Email</label>
          <div>
            <input
              className="input"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div>
            <input
              className="input"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="control">
        <button onClick={submitAuth} className="button">
          Submit
        </button>
      </div>
    </div>
  );
}
