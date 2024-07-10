import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { TfiLock } from 'react-icons/tfi';
import LayoutAdmin from '../../../../../layout/layout-admin';
import BreadcrumbAdmin from '../../../../../components/breadcrumb/breadcrumb-admin';
import OneButton from '../../../../../components/buttons/one-button';
import { changePasswordAdmin } from '../../../../../configs/redux/action/changePasswordAction';

const ChangePasswordAdmin = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const { error, message } = useSelector((state) => state.changePasswordData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(changePasswordAdmin(id, password, confPassword));
  };

  useEffect(() => {
    if (message) {
      Swal.fire({
        icon: 'success',
        title: 'Berhasil',
        text: 'Password updated successfully',
        showConfirmButton: false,
        timer: 1500,
      });
    }

    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Gagal',
        text: error,
        confirmButtonText: 'Ok',
      });
    }
  }, [message, error]);

  return (
    <LayoutAdmin>
      <BreadcrumbAdmin pageName="Change Password" />

      <div className="sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Change Password
              </h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="p-6.5">
                <div className="mb-4.5 ">
                  <div className="w-full mb-4">
                    <label className="mb-4 block text-black dark:text-white">
                      New Password <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Enter New Password"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                  <div className="w-full mb-4">
                    <label className="mb-4 block text-black dark:text-white">
                      Confirm New Password{' '}
                      <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Enter the new password"
                      value={confPassword}
                      required
                      onChange={(e) => setConfPassword(e.target.value)}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                    <TfiLock className="absolute right-4 top-4 text-xl" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row w-full gap-3 text-center">
                  <OneButton type="submit">
                    <span>Update Password</span>
                  </OneButton>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
};

export default ChangePasswordAdmin;
