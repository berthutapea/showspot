import React from 'react';
import { FiUser, FiLock } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function LoginInput() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Logika login di sini, jika diperlukan
    navigate('/admin/dashboard');
  };
  return (
    <form>
      <div className="mb-8">
        <label className="mb-4 block font-medium text-accent">Username</label>
        <div className="relative">
          <input
            type="text"
            autoComplete="off"
            required
            placeholder="Masukkan username"
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
            placeholder="Masukkan password"
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-accent outline-none focus:border-primary focus-visible:shadow-none"
          />
          <FiLock className="absolute right-4 top-4 text-xl text-accent" />
        </div>
      </div>

      <div className="mb-8">
        <input
          onClick={handleLogin}
          type="submit"
          value="Login"
          href={'/admin/dashboard'}
          placeholder="Masukkan password"
          className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-transparent hover:text-accent"
        />
      </div>
    </form>
  );
}

export default LoginInput;
