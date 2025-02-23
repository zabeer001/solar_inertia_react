import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import BackendLayout from '@/Layouts/Backend/BackendLayout';
import { Inertia } from '@inertiajs/inertia';

function CreateOrEdit({ siteDetail }) {
  const { data, setData, put, processing, errors } = useForm({
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
    const file = e.target.files[0];
    if (file) {
      // Basic file validation (e.g., size and type)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should be less than 5MB');
        return;
      }
      if (!file.type.startsWith('image/')) {
        alert('Only image files are allowed');
        return;
      }
      setData(e.target.name, file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", data); // Debugging
    
    const formData = new FormData();
    formData.append('avatar', data.avatar); // Append the file data (avatar)
    formData.append('_method', 'put'); // Spoof the PUT method
  
    if (siteDetail) {
      // Using POST to spoof PUT request with form data
      Inertia.post(`/admin/site-details/${1}`, formData, {
        forceFormData: true, // Ensure the form data is sent as multipart/form-data
      });
    } else {
      // Handle the case for creating a new record (if applicable)
      Inertia.post(route('site-details.store'), formData, {
        forceFormData: true,
      });
    }
  };
  


  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        {siteDetail ? 'Edit Site Details' : 'Create Site Details'}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow" encType="multipart/form-data">
        {/* Hero Title */}
        <div>
          <label className="block font-semibold">Hero Title:</label>
          <input
            type="text"
            name="hero_title"
            value={data.hero_title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            aria-label="Hero Title"
          />
          {errors.hero_title && <span className="text-red-500">{errors.hero_title}</span>}
        </div>

        {/* Hero Description */}
        <div>
          <label className="block font-semibold">Hero Description:</label>
          <textarea
            name="hero_description"
            value={data.hero_description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            aria-label="Hero Description"
          />
          {errors.hero_description && <span className="text-red-500">{errors.hero_description}</span>}
        </div>

        {/* Card Text */}
        <div>
          <label className="block font-semibold">Card Text:</label>
          <input
            type="text"
            name="card_text"
            value={data.card_text}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            aria-label="Card Text"
          />
          {errors.card_text && <span className="text-red-500">{errors.card_text}</span>}
        </div>

        {/* Card Button */}
        <div>
          <label className="block font-semibold">Card Button:</label>
          <input
            type="text"
            name="card_btn"
            value={data.card_btn}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            aria-label="Card Button"
          />
          {errors.card_btn && <span className="text-red-500">{errors.card_btn}</span>}
        </div>

        {/* Image Upload Fields */}
        <div>
          <label className="block font-semibold">Main Image:</label>
          <input
            type="file"
            name="main_image"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
            aria-label="Main Image"
          />
          {errors.main_image && <span className="text-red-500">{errors.main_image}</span>}
          {siteDetail?.main_image_url && (
            <img src={siteDetail.main_image_url} alt="Main Image Preview" className="w-20 mt-2" />
          )}
        </div>

        <div>
          <label className="block font-semibold">Gallery Image 1:</label>
          <input
            type="file"
            name="gallery_image_1"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
            aria-label="Gallery Image 1"
          />
          {errors.gallery_image_1 && <span className="text-red-500">{errors.gallery_image_1}</span>}
          {siteDetail?.gallery_image_1_url && (
            <img src={siteDetail.gallery_image_1_url} alt="Gallery Image 1 Preview" className="w-20 mt-2" />
          )}
        </div>

        <div>
          <label className="block font-semibold">Gallery Image 2:</label>
          <input
            type="file"
            name="gallery_image_2"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
            aria-label="Gallery Image 2"
          />
          {errors.gallery_image_2 && <span className="text-red-500">{errors.gallery_image_2}</span>}
          {siteDetail?.gallery_image_2_url && (
            <img src={siteDetail.gallery_image_2_url} alt="Gallery Image 2 Preview" className="w-20 mt-2" />
          )}
        </div>

        <div>
          <label className="block font-semibold">Logo:</label>
          <input
            type="file"
            name="logo"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
            aria-label="Logo"
          />
          {errors.logo && <span className="text-red-500">{errors.logo}</span>}
          {siteDetail?.logo_url && (
            <img src={siteDetail.logo_url} alt="Logo Preview" className="w-20 mt-2" />
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={processing}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            {processing ? (
              <span className="flex items-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Saving...
              </span>
            ) : (
              'Save'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

// Set Layout
CreateOrEdit.layout = (page) => <BackendLayout>{page}</BackendLayout>;

export default CreateOrEdit;