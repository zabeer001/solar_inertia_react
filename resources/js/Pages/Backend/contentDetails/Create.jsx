import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import BackendLayout from "@/Layouts/Backend/BackendLayout";

function CreateOrEdit({ contentDetail }) {
  const { data, setData, post, processing, errors } = useForm({
    icon_image: contentDetail?.icon_image || "",
    content_title: contentDetail?.content_title || "",
    content_description: contentDetail?.content_description || "",
  });

  const [preview, setPreview] = useState(contentDetail?.icon_image_url || "");

  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setData(e.target.name, file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("contents.store"));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        {contentDetail ? "Edit Site Details" : "Create Site Details"}
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded shadow"
        encType="multipart/form-data"
      >
        <div>
          <label className="block font-semibold">Content Title:</label>
          <input
            type="text"
            name="content_title"
            value={data.content_title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.content_title && (
            <span className="text-red-500">{errors.content_title}</span>
          )}
        </div>

        <div>
          <label className="block font-semibold">Content Description:</label>
          <textarea
            name="content_description"
            value={data.content_description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          {errors.content_description && (
            <span className="text-red-500">{errors.content_description}</span>
          )}
        </div>

        {/* Image Upload with Preview */}
        <div className="form-group">
          <label className="block font-semibold">Icon Image:</label>
          <div className="image-preview border p-2 rounded">
            {preview ? (
              <img src={preview} alt="Preview" className="w-32 h-32 object-cover" />
            ) : (
              <label
                htmlFor="image-upload"
                className="block text-center text-gray-500 cursor-pointer p-2 border-dashed border-2"
              >
                Choose File
              </label>
            )}
            <input
              type="file"
              name="icon_image"
              id="image-upload"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
          {errors.icon_image && <span className="text-red-500">{errors.icon_image}</span>}
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

CreateOrEdit.layout = (page) => <BackendLayout>{page}</BackendLayout>;

export default CreateOrEdit;
