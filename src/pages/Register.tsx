import React, { useState } from 'react';
import Button from '../components/ui/Button';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // Add registration logic here
  };

  return (
    <div className="flex items-center justify-center h-screen bg-light dark:bg-dark">
      <div className="w-full max-w-sm p-8 bg-white dark:bg-secondary bg-opacity-80 dark:bg-opacity-80 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-accent dark:text-highlight">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-dark dark:text-light">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 p-2 border rounded-md dark:bg-gray-700 dark:text-light"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-dark dark:text-light">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2 border rounded-md dark:bg-gray-700 dark:text-light"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold text-dark dark:text-light">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-2 border rounded-md dark:bg-gray-700 dark:text-light"
              required
            />
          </div>
          <Button type="submit">Register</Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
