import React, { useState, useEffect } from "react";
import BackendLayout from "@/Layouts/Backend/BackendLayout";
import { useForm, usePage } from "@inertiajs/react";

function Edit() {
  const { props } = usePage();
  const { contentDetail } = props;

  const { data, setData, post, processing, errors } = useForm({
    content_title: contentDetail.content_title || "",
    content_description: contentDetail.content_description || "",
    id: contentDetail.id,
    icon_image: null,
  });

  const [preview, setPreview] = useState(contentDetail.icon_image_url || "");

  useEffect(() => {
    if (contentDetail.icon_image_url) {
      setPreview(contentDetail.icon_image_url);
    }
  }, [contentDetail.icon_image_url]);

  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setData("icon_image", file); // Update the form data with the new image

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result); // Update preview
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("contents.update", { id: contentDetail.id }));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Site Details</h1>
      
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded shadow"
        encType="multipart/form-data" // Ensure the form uses multipart encoding for file upload
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
          <div className="image-preview border p-2 rounded flex items-center justify-center">
            {preview ? (
              <>
                <img src={preview} alt="Preview" className="w-32 h-32 object-cover" />
                <label
                  htmlFor="image-upload"
                  className="block text-center text-gray-500 cursor-pointer p-2 border-dashed border-2 rounded-md bg-gray-100 hover:bg-gray-200 mt-2"
                >
                  Choose Image
                </label>
              </>
            ) : (
              <>
                <label
                  htmlFor="image-upload"
                  className="block text-center text-gray-500 cursor-pointer p-2 border-dashed border-2 rounded-md bg-gray-100 hover:bg-gray-200"
                >
                  Choose Image
                </label>
              </>
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
            {processing ? "Updating..." : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
}

Edit.layout = (page) => <BackendLayout>{page}</BackendLayout>;

export default Edit;
