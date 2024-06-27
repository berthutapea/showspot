import React from 'react';
import { TfiLock } from 'react-icons/tfi';
import OneButton from '../../../../../components/buttons/one-button';
import Layout from '../../../../../layout';
import Breadcrumb from '../../../../../components/breadcrumb';

const ChangePassword = () => {
  return (
    <Layout>
      <Breadcrumb pageName="Change Password" />

      <div className="sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Change Password
              </h3>
            </div>
            <form>
              <div className="p-6.5">
                <div className="mb-4.5 ">
                  <div className="w-full mb-4">
                    <label className="mb-4 block text-black dark:text-white">
                      New Password <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="password"
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
                      placeholder="Enter Confirm New Password"
                      required
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
    </Layout>
  );
};

export default ChangePassword;
