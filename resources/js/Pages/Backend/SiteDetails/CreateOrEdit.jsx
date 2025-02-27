import React from "react";
import { useForm } from "@inertiajs/react";
import BackendLayout from "@/Layouts/Backend/BackendLayout";

function CreateOrEdit({ siteDetail }) {
  const { data, setData, post, processing, errors } = useForm({
    main_image: siteDetail?.main_image || '',
    gallery_image_1: siteDetail?.gallery_image_1 || '',
    gallery_image_2: siteDetail?.gallery_image_2 || '',
    logo: siteDetail?.logo || '',
    hero_title: siteDetail?.hero_title || '',
    hero_description: siteDetail?.hero_description || '',
    card_text: siteDetail?.card_text || '',
    card_btn: siteDetail?.card_btn || '',
  });

  const handleChange = (e) => setData(e.target.name, e.target.value);
  const handleFileChange = (e) => setData(e.target.name, e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("siteDetails.storeOrUpdate"));
  };

  return (
    <div className=" mx-auto bg-white p-8 my-8 rounded-lg shadow-lg border">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        {siteDetail ? "Edit Site Details" : "Create Site Details"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hero Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Hero Title</label>
            <input type="text" name="hero_title" value={data.hero_title} onChange={handleChange} className="w-full p-3 border rounded focus:ring focus:ring-blue-300" />
            {errors.hero_title && <span className="text-red-500 text-sm">{errors.hero_title}</span>}
          </div>

          {/* Hero Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Hero Description</label>
            <textarea name="hero_description" value={data.hero_description} onChange={handleChange} className="w-full p-3 border rounded focus:ring focus:ring-blue-300"></textarea>
            {errors.hero_description && <span className="text-red-500 text-sm">{errors.hero_description}</span>}
          </div>

          {/* Card Text */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Card Text</label>
            <input type="text" name="card_text" value={data.card_text} onChange={handleChange} className="w-full p-3 border rounded focus:ring focus:ring-blue-300" />
            {errors.card_text && <span className="text-red-500 text-sm">{errors.card_text}</span>}
          </div>

          {/* Card Button */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Card Button</label>
            <input type="text" name="card_btn" value={data.card_btn} onChange={handleChange} className="w-full p-3 border rounded focus:ring focus:ring-blue-300" />
            {errors.card_btn && <span className="text-red-500 text-sm">{errors.card_btn}</span>}
          </div>
        </div>

        {/* File Uploads */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { name: "main_image", label: "Main Image", url: siteDetail?.main_image_url },
            { name: "gallery_image_1", label: "Gallery Image 1", url: siteDetail?.gallery_image_1_url },
            { name: "gallery_image_2", label: "Gallery Image 2", url: siteDetail?.gallery_image_2_url },
            { name: "logo", label: "Logo", url: siteDetail?.logo_url }
          ].map(({ name, label, url }) => (
            <div key={name} className="flex flex-col">
              <label className="block text-gray-700 font-medium mb-1">{label}</label>
              <input type="file" name={name} onChange={handleFileChange} className="w-full p-2 border rounded focus:ring focus:ring-blue-300" />
              {errors[name] && <span className="text-red-500 text-sm">{errors[name]}</span>}
              {url && <img src={url} alt={`${label} Preview`} className="w-24 h-24 object-cover mt-2 border rounded shadow-sm" />}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button type="submit" disabled={processing} className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-all disabled:opacity-50">
            {processing ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}

CreateOrEdit.layout = (page) => <BackendLayout>{page}</BackendLayout>;

export default CreateOrEdit;
