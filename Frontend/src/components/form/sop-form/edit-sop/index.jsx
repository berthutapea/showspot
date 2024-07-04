import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Editor } from 'react-draft-wysiwyg';
import {
  ContentState,
  convertFromHTML,
  EditorState,
  convertToRaw,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'draft-js/dist/Draft.css';
import LayoutAdmin from '../../../../layout/layout-admin';
import BreadcrumbAdmin from '../../../breadcrumb/breadcrumb-admin';
import OneButton from '../../../buttons/one-button';
import ThreeButton from '../../../buttons/three-button';
import { useDispatch, useSelector } from 'react-redux';
import {
  addSopProject,
  fetchSopProjects,
} from '../../../../configs/redux/action/sopProjectsAction';

export default function EditSop() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.sopProjectReducer);
  const error = useSelector((state) => state.sopProjectReducer);
  const sopProjectsData = useSelector((state) => state.sopProjectsData);

  console.log(sopProjectsData)
  const [form, setForm] = useState({
    title: sopProjectsData.sop_project_content,
    body: EditorState.createWithContent(
      ContentState.createFromBlockArray(convertFromHTML('dd'))
    ),
  });
  useEffect(() => {
    dispatch(fetchSopProjects());
  }, [dispatch]);

  const handleChange = (e) => {
    setForm((data) => ({ ...data, title: e.target.value }));
  };

  const onEditorStateChange = (body) => {
    setForm((data) => ({ ...data, body }));
  };

  const handleSave = () => {
    console.log(form);
    const { title } = form;
    const body = draftToHtml(convertToRaw(form.body.getCurrentContent()));
    dispatch(addSopProject({ title, body })).then(() => {
      navigate('/admin/sop-projects');
    });
  };

  return (
    <LayoutAdmin>
      <BreadcrumbAdmin pageName="Edit Sop" />
      <div className="sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div className="border-b border-stroke py-4 px-6.5">
              <h3 className="font-medium text-black">
                Please fill in to edit SOP
              </h3>
            </div>
            <div className="max-w-4xl mx-auto p-6">
              <div className="mb-4">
                <label className="mb-2.5 block text-black">
                  Title <span className="text-meta-1">*</span>
                </label>
                <input
                  className="border rounded-md w-full py-4 px-3 bg-transparent font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default"
                  placeholder="Enter title"
                  value={form.title}
                  onChange={handleChange}
                />
              </div>
              <label className="mb-2.5 block text-black">
                Content <span className="text-meta-1">*</span>
              </label>
              <div className="border rounded-md p-2 ">
                <Editor
                  editorState={form.body}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={onEditorStateChange}
                />
              </div>
              {error && (
                <p className="text-red-500 text-xs italic mt-4">{error}</p>
              )}
              <div className="flex flex-col md:flex-row w-full gap-3 text-center py-10">
                <OneButton onClick={handleSave} disabled={loading}>
                  <span>{loading ? 'Saving...' : 'Save'}</span>
                </OneButton>
                <Link to="/admin/sop-projects">
                  <ThreeButton>
                    <span>Back</span>
                  </ThreeButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
}
