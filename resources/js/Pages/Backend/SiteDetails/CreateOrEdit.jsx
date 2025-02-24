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

  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  const handleFileChange = (e) => {
    setData(e.target.name, e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("siteDetails.storeOrUpdate"));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        {siteDetail ? "Edit Site Details" : "Create Site Details"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow" encType="multipart/form-data">
        <div>
          <label className="block font-semibold">Hero Title:</label>
          <input type="text" name="hero_title" value={data.hero_title} onChange={handleChange} className="w-full p-2 border rounded" />
          {errors.hero_title && <span className="text-red-500">{errors.hero_title}</span>}
        </div>

        <div>
          <label className="block font-semibold">Hero Description:</label>
          <textarea name="hero_description" value={data.hero_description} onChange={handleChange} className="w-full p-2 border rounded" />
          {errors.hero_description && <span className="text-red-500">{errors.hero_description}</span>}
        </div>

        <div>
          <label className="block font-semibold">Card Text:</label>
          <input type="text" name="card_text" value={data.card_text} onChange={handleChange} className="w-full p-2 border rounded" />
          {errors.card_text && <span className="text-red-500">{errors.card_text}</span>}
        </div>

        <div>
          <label className="block font-semibold">Card Button:</label>
          <input type="text" name="card_btn" value={data.card_btn} onChange={handleChange} className="w-full p-2 border rounded" />
          {errors.card_btn && <span className="text-red-500">{errors.card_btn}</span>}
        </div>

        <div>
          <label className="block font-semibold">Main Image:</label>
          <input type="file" name="main_image" onChange={handleFileChange} className="w-full p-2 border rounded" />
          {errors.main_image && <span className="text-red-500">{errors.main_image}</span>}
          {siteDetail?.main_image_url && <img src={siteDetail.main_image_url} alt="Main Image Preview" className="w-20 mt-2" />}
        </div>

        <div>
          <label className="block font-semibold">Gallery Image 1:</label>
          <input type="file" name="gallery_image_1" onChange={handleFileChange} className="w-full p-2 border rounded" />
          {errors.gallery_image_1 && <span className="text-red-500">{errors.gallery_image_1}</span>}
          {siteDetail?.gallery_image_1_url && <img src={siteDetail.gallery_image_1_url} alt="Gallery Image 1 Preview" className="w-20 mt-2" />}
        </div>

        <div>
          <label className="block font-semibold">Gallery Image 2:</label>
          <input type="file" name="gallery_image_2" onChange={handleFileChange} className="w-full p-2 border rounded" />
          {errors.gallery_image_2 && <span className="text-red-500">{errors.gallery_image_2}</span>}
          {siteDetail?.gallery_image_2_url && <img src={siteDetail.gallery_image_2_url} alt="Gallery Image 2 Preview" className="w-20 mt-2" />}
        </div>

        <div>
          <label className="block font-semibold">Logo:</label>
          <input type="file" name="logo" onChange={handleFileChange} className="w-full p-2 border rounded" />
          {errors.logo && <span className="text-red-500">{errors.logo}</span>}
          {siteDetail?.logo_url && <img src={siteDetail.logo_url} alt="Logo Preview" className="w-20 mt-2" />}
        </div>

        <div>
          <button type="submit" disabled={processing} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            {processing ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}

CreateOrEdit.layout = (page) => <BackendLayout>{page}</BackendLayout>;

export default CreateOrEdit;
