import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import BackendLayout from "@/Layouts/Backend/BackendLayout";

function Edit({ contentDetail }) {
  console.log(contentDetail);
  
  const { data, setData, put, processing, errors } = useForm({
    icon_image: contentDetail?.icon_image || "",
    content_title: contentDetail?.content_title || "",
    content_description: contentDetail?.content_description || "",
  });

  const [imagePreview, setImagePreview] = useState(contentDetail?.icon_image_url || "");

  useEffect(() => {
    if (contentDetail?.icon_image_url) {
      setImagePreview(contentDetail.icon_image_url);
    }
  }, [contentDetail]);

  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setData(e.target.name, file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("content", contentDetail.id);
  
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
  
    put(route("contents.update", contentDetail.id), formData, {
      preserveScroll: true,
    });
  };
  

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Site Details</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow" encType="multipart/form-data">
        <div>
          <label className="block font-semibold">Content Title:</label>
          <input 
            type="text" 
            name="content_title" 
            value={data.content_title} 
            onChange={handleChange} 
            className="w-full p-2 border rounded" 
          />
          {errors.content_title && <span className="text-red-500">{errors.content_title}</span>}
        </div>

        <div>
          <label className="block font-semibold">Content Description:</label>
          <textarea 
            name="content_description" 
            value={data.content_description} 
            onChange={handleChange} 
            className="w-full p-2 border rounded" 
          />
          {errors.content_description && <span className="text-red-500">{errors.content_description}</span>}
        </div>

        <div className="form-group">
          <label className="block font-semibold">Icon Image:</label>
          <div className="image-preview border p-2 flex flex-col items-center">
            <label htmlFor="image-upload" className="cursor-pointer bg-gray-200 p-2 rounded">Choose File</label>
            <input 
              type="file" 
              name="icon_image" 
              id="image-upload" 
              onChange={handleFileChange} 
              className="hidden" 
            />
            {imagePreview && (
              <img 
                src={imagePreview} 
                alt="Image Preview" 
                className="w-20 mt-2" 
              />
            )}
          </div>
          {errors.icon_image && <span className="text-red-500">{errors.icon_image}</span>}
          {/* {contentDetail?.icon_image_url && <img src={contentDetail.icon_image_url} alt="Logo Preview" className="w-20 mt-2" />} */}

        </div>

        <div>
          <button 
            type="submit" 
            disabled={processing} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            {processing ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}

Edit.layout = (page) => <BackendLayout>{page}</BackendLayout>;

export default Edit;
