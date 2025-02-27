<?php

namespace App\Http\Controllers;

use App\Models\Billing;
use App\Models\SiteDetails;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BillingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
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

          return Inertia::render('Frontend/Billing',compact('siteDetails'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Billing $billing)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Billing $billing)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Billing $billing)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Billing $billing)
    {
        //
    }
}
