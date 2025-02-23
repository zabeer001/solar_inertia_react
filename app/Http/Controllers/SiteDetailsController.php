<?php

namespace App\Http\Controllers;

use App\Models\SiteDetails;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;


class SiteDetailsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
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
    public function ceateOrEdit()
    {
        $siteDetail = SiteDetails::latest()->first();
   
        

       
        
    //   dd('zabeer');
      return Inertia::render('Backend/SiteDetails/CeateOrEdit',compact('siteDetail'));
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
    public function store(Request $request)
{
    $validated = $request->validate([
        'main_image' => 'nullable|file|mimes:jpg,jpeg,png|max:2048',
        'gallery_image_1' => 'nullable|file|mimes:jpg,jpeg,png|max:2048',
        'gallery_image_2' => 'nullable|file|mimes:jpg,jpeg,png|max:2048',
        'logo' => 'nullable|file|mimes:jpg,jpeg,png|max:2048',
        'hero_title' => 'nullable|string|max:255',
        'hero_description' => 'nullable|string',
        'card_text' => 'nullable|string',
        'card_btn' => 'nullable|string|max:255',
    ]);

    // Handle file uploads and move them to 'public/uploads'
    if ($request->hasFile('main_image')) {
        $validated['main_image'] = $request->file('main_image')->store('uploads', 'public');
    }
    if ($request->hasFile('gallery_image_1')) {
        $validated['gallery_image_1'] = $request->file('gallery_image_1')->store('uploads', 'public');
    }
    if ($request->hasFile('gallery_image_2')) {
        $validated['gallery_image_2'] = $request->file('gallery_image_2')->store('uploads', 'public');
    }
    if ($request->hasFile('logo')) {
        $validated['logo'] = $request->file('logo')->store('uploads', 'public');
    }

    // Save data to database
    $siteDetail = SiteDetails::create($validated);

    return redirect()->route('backend.siteDetails.index')
                     ->with('success', 'Site details stored successfully!');
}

public function update(Request $request, SiteDetails $siteDetails)
{
    dd($request);
    $validated = $request->validate([
        'main_image' => 'nullable|file|mimes:jpg,jpeg,png|max:2048',
        'gallery_image_1' => 'nullable|file|mimes:jpg,jpeg,png|max:2048',
        'gallery_image_2' => 'nullable|file|mimes:jpg,jpeg,png|max:2048',
        'logo' => 'nullable|file|mimes:jpg,jpeg,png|max:2048',
        'hero_title' => 'nullable|string|max:255',
        'hero_description' => 'nullable|string',
        'card_text' => 'nullable|string',
        'card_btn' => 'nullable|string|max:255',
    ]);

    // Handle file updates
    if ($request->hasFile('main_image')) {
        Storage::disk('public')->delete($siteDetails->main_image);
        $validated['main_image'] = $request->file('main_image')->store('uploads', 'public');
    }
    if ($request->hasFile('gallery_image_1')) {
        Storage::disk('public')->delete($siteDetails->gallery_image_1);
        $validated['gallery_image_1'] = $request->file('gallery_image_1')->store('uploads', 'public');
    }
    if ($request->hasFile('gallery_image_2')) {
        Storage::disk('public')->delete($siteDetails->gallery_image_2);
        $validated['gallery_image_2'] = $request->file('gallery_image_2')->store('uploads', 'public');
    }
    if ($request->hasFile('logo')) {
        Storage::disk('public')->delete($siteDetails->logo);
        $validated['logo'] = $request->file('logo')->store('uploads', 'public');
    }

    // Update existing data
    $siteDetails->update($validated);

    // Flash success message
    session()->flash('success', 'Site details updated successfully!');

    return back(); // Use back() to redirect to the same page (or any other appropriate redirect)
}


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SiteDetails $siteDetails)
    {
        //
    }
}
