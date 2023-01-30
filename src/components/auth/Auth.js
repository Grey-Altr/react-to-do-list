import React from 'react';
import { useState } from 'react';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

  return <div>Welcome to your To-do List Manager</div>;
}
