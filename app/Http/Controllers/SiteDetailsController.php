<?php

namespace App\Http\Controllers;

use App\Models\SiteDetails;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\Storage;
use App\Traits\FileUploadTrait;

class SiteDetailsController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    use FileUploadTrait;

    public function index()
    {
        // Paginate the SiteDetails (you can adjust the number of items per page)
        $siteDetails = SiteDetails::paginate(10)->map(function ($site) {
            // Define columns that need asset URLs
            $imageColumns = [
                'main_image',
                'gallery_image_1',
                'gallery_image_2',
                'logo', // Add more image columns as needed
            ];

            // Dynamically generate full URLs for each image column
            foreach ($imageColumns as $column) {
                if ($site->$column) {
                    // Construct the asset URL for each image column
                    $site->{$column . '_url'} = asset('uploads/' . $site->$column);
                }
            }

            return $site;
        });

        // dd($siteDetails);

        return Inertia::render('Backend/SiteDetails/Index', compact('siteDetails'));
    }


    /**
     * Show the form for creating a new resource.
     */
    public function showOrCreate()
    {
        //     $siteDetail = SiteDetails::latest()->first();    

        // //   dd('zabeer');
        //   return Inertia::render('Backend/SiteDetails/CeateOrEdit',compact('siteDetail'));

        $heroSection = SiteDetails::first();

        if ($heroSection) {
            $heroSection->main_image_url = $heroSection->main_image ? asset('storage/' . $heroSection->main_image) : null;
            $heroSection->gallery_image_1_url = $heroSection->gallery_image_1 ? asset('storage/' . $heroSection->gallery_image_1) : null;
            $heroSection->gallery_image_2_url = $heroSection->gallery_image_2 ? asset('storage/' . $heroSection->gallery_image_2) : null;
            $heroSection->logo_url = $heroSection->logo ? asset('storage/' . $heroSection->logo) : null;
        }


        // Pass the campaign data to the view (if any)
        return Inertia::render('Backend/SiteDetails/CreateOrEdit', [
            'siteDetail' => $heroSection,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */


    /**
     * Display the specified resource.
     */
    public function show(SiteDetails $siteDetails)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SiteDetails $siteDetails)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function storeOrUpdate(Request $request)
    {

        // $validatedData = $request->validate([
        //     'hero_title' => 'nullable|string|max:255',
        //     'hero_description' => 'nullable|string|max:500',
        //     'card_text' => 'nullable|string|max:255',
        //     'card_btn' => 'nullable|string|max:255',
        //     'main_image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        //     'gallery_image_1' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        //     'gallery_image_2' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        //     'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        // ]);

        $heroSection = SiteDetails::first();

        if (!$heroSection) {
            $heroSection = new SiteDetails();
        }

        $heroSection->hero_title = $request->hero_title;
        $heroSection->hero_description = $request->hero_description;
        $heroSection->card_text = $request->card_text; 
        $heroSection->card_btn = $request->card_btn; 

        // Handle image uploads without deleting old ones if not provided
        if ($request->hasFile('main_image')) {
            if ($heroSection->main_image) {
                Storage::disk('public')->delete($heroSection->main_image); // Delete old image
            }
            $heroSection->main_image = $request->file('main_image')->store('images', 'public');
        }

        if ($request->hasFile('gallery_image_1')) {
            if ($heroSection->gallery_image_1) {
                Storage::disk('public')->delete($heroSection->gallery_image_1);
            }
            $heroSection->gallery_image_1 = $request->file('gallery_image_1')->store('images', 'public');
        }

        if ($request->hasFile('gallery_image_2')) {
            if ($heroSection->gallery_image_2) {
                Storage::disk('public')->delete($heroSection->gallery_image_2);
            }
            $heroSection->gallery_image_2 = $request->file('gallery_image_2')->store('images', 'public');
        }

        if ($request->hasFile('logo')) {
            if ($heroSection->logo) {
                Storage::disk('public')->delete($heroSection->logo);
            }
            $heroSection->logo = $request->file('logo')->store('logos', 'public');
        }

        $heroSection->save();

        return redirect()->route('siteDetails.showOrCreate');



    }








    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SiteDetails $siteDetails)
    {
        //
    }
}
