import React from 'react';
import CommentsForm from '../comments-form';
import Comment from '../comment/comment';

export default function Comments() {
  return (
    <div className="mt-4 border border-primary rounded-lg">
      <div className="p-4">
        <CommentsForm />
        <Comment />
      </div>
    </div>
  );
}
