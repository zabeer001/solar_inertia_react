import React from 'react';
import BackendLayout from '@/Layouts/Backend/BackendLayout';
import { useForm, usePage } from "@inertiajs/react";

function Edit() {
  const { props } = usePage();
  const { contentDetail } = props;

  const { data, setData, post, processing, errors } = useForm({
    content_title: contentDetail.content_title || "",
    content_description: contentDetail.content_description || "",
    icon_image: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('content.update', contentDetail.id), {
      data,
      _method: 'PUT', // Required for Laravel resource update
    });
  };

  return (
    <div>
      <h2>Edit Content</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input 
            type="text" 
            value={data.content_title} 
            onChange={(e) => setData("content_title", e.target.value)}
          />
          {errors.content_title && <p>{errors.content_title}</p>}
        </div>

        <div>
          <label>Description:</label>
          <textarea 
            value={data.content_description} 
            onChange={(e) => setData("content_description", e.target.value)}
          />
          {errors.content_description && <p>{errors.content_description}</p>}
        </div>

        <div>
          <label>Icon Image:</label>
          <input 
            type="file" 
            onChange={(e) => setData("icon_image", e.target.files[0])}
          />
          {errors.icon_image && <p>{errors.icon_image}</p>}
        </div>

        <button type="submit" disabled={processing}>Update</button>
      </form>
    </div>
  );
}

Edit.layout = (page) => <BackendLayout>{page}</BackendLayout>;

export default Edit;
