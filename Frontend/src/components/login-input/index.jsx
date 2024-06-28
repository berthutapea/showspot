import React, { useState, useEffect } from 'react';
import { FiUser, FiLock } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../configs/redux/action/authAction';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function LoginInput() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Mengambil data dari state Redux
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };

  useEffect(() => {
    if (isSuccess && user) {
      // Determine where to redirect based on user role
      switch (user.role) {
        case 'admin':
          navigate('/admin/dashboard');
          break;
        case 'mentor':
          navigate('/mentor/dashboard');
          break;
        case 'student':
          navigate('/student/dashboard');
          break;
        default:
          navigate('/dashboard'); // Default fallback
          break;
      }
    }
  }, [isSuccess, user, navigate]);

  useEffect(() => {
    // Handle pesan kesalahan atau berhasil
    if (isError) {
      Swal.fire({
        icon: 'error',
        title: 'Login Gagal',
        text: message,
      });
    } else if (isSuccess && user) {
      Swal.fire({
        icon: 'success',
        title: 'Login Berhasil',
        text: message,
        timer: 1500,
      });
    }
  }, [isError, isSuccess, user, message]);

  return (
    <form onSubmit={handleLogin}>
      <div className="mb-8">
        <label className="mb-4 block font-medium text-accent">Username</label>
        <div className="relative">
          <input
            type="text"
            autoComplete="off"
            required
            placeholder="Masukkan username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-accent outline-none focus:border-primary focus-visible:shadow-none"
          />
          <FiUser className="absolute right-4 top-4 text-xl text-accent" />
        </div>
      </div>

      <div className="mb-6">
        <label className="mb-4 block font-medium text-accent">Password</label>
        <div className="relative">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Masukkan password"
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-accent outline-none focus:border-primary focus-visible:shadow-none"
          />
          <FiLock className="absolute right-4 top-4 text-xl text-accent" />
        </div>
      </div>

      <div className="mb-8">
        <input
          type="submit"
          value={isLoading ? 'Loading...' : 'Login'}
          className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-transparent hover:text-accent"
          disabled={isLoading}
        />
      </div>
    </form>
  );
}

export default LoginInput;