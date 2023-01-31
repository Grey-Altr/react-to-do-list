import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import ItemForm from './ItemForm.js';
import ItemsList from './ItemsList.js';

export default function Items() {
  const { user } = useUser();

  if (!user) {
    return <Redirect to="/auth/sign-in" />;
  }
  return (
    <div className="itemContainer">
      <div>
        <ItemsList />
        <ItemForm />
      </div>
    </div>
  );
}
