import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { signOut } from '../../services/auth.js';

export default function Header() {
  const { user, setUser } = useUser();

  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <nav className="navbar">
      <div>
        <h1 className="titleHeader">Todos tus To-dos</h1>
      </div>
      <div className="userNav">
        {!user && (
          <div className="navButtons">
            <Link className="navSignUp" to="/auth/sign-up">
              <strong>Sign Up</strong>
            </Link>
            <Link className="navSignIn" to="/auth/sign-in">
              <strong>Sign In</strong>
            </Link>
          </div>
        )}
        {user && (
          <>
            <div>Hi {user.email}!</div>
            <button className="navSignOutButton" onClick={handleLogout}>
              Sign Out
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
