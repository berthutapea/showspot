import React, { forwardRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAutoFocus from '../../../../hooks/useAutoFocus';
import useInput from '../../../../hooks/useInput';

// eslint-disable-next-line react/display-name
const CommentInput = forwardRef(({ onChange, value }, ref) => (
  <textarea
    ref={ref}
    value={value}
    onChange={onChange}
    className="w-full h-24 border border-primary rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
    placeholder="Comment"
  />
));

export default function CommentsForm({ onCreateComment }) {
  const { hash } = useLocation();
  const commentFocus = useAutoFocus(hash);
  const [content, setContent, changeContent] = useInput();

  const handleOnCreateComment = async () => {
    await onCreateComment({ content });
    changeContent('');
  };

  return (
    <>
      <h1 className="font-semibold text-accent mb-2">Comment</h1>
      <>
        <CommentInput
          ref={commentFocus}
          value={content}
          onChange={setContent}
        />
        <div className="flex justify-end mb-2">
          <button
            type="button"
            className="btn bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleOnCreateComment}
          >
            Post Comment
          </button>
        </div>
      </>
      <div className="mt-2 text-sm">
        <Link className="text-primary hover:underline" to="/login">
          <strong>Login</strong>
        </Link>{' '}
        to post a comment
      </div>
    </>
  );
}
