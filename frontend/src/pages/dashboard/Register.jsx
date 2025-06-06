import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [inputs, setInputs] = useState({username:'', email: '', password: '' });
  const navigate = useNavigate();

	const queryClient = useQueryClient();
  

  const { mutate, isError, isPending, error } = useMutation({
    mutationFn: async ({username, email, password }) => {
      try {
        const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username, email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Signup failed');
      return data;
      } catch (error) {
        console.error(error);
				throw error;
      }
      
    },
   onSuccess: async () => {
			// toast.success("Account created successfully");
		await	queryClient.invalidateQueries({ queryKey: ["authUser"] });
     		navigate("/"); // Redirect to the home page
		}
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(inputs);
  };

  // best practice
  	const handleInputChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-3">Register</h3>
        {isError && <div className="alert alert-danger">{error.message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              id="name"
              placeholder='username'
              value={inputs.username}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
             placeholder='email'
              value={inputs.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder='password'
              value={inputs.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
             {
				isPending ? "Loading..." : "Register"
			}
          </button>
			{isError && <p className='text-red-500'>{error.message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
