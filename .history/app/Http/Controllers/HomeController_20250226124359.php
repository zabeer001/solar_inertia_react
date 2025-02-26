<?php

namespace App\Http\Controllers;

use App\Models\Home;
use App\Models\SiteDetails;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     */


    public function index(): Response
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

        return Inertia::render('Frontend/Home');
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
    public function show(Home $home)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Home $home)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Home $home)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Home $home)
    {
        //
    }
    public function checkBlade()
    {


        return view('zabeer');
    }
}
