import { React } from 'react';
import {LoadingBar} from 'react-redux-loading-bar';

export default function Loading() {
  return (
    <div className="sticky top-0 z-[100]">
      <LoadingBar />
    </div>
  );
}
