<?php

namespace App\Http\Controllers;

use App\Models\CampaignDetails;
use App\Models\Content;
use App\Models\Home;
use App\Models\SalesTracked;
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
        // Retrieve the first SiteDetails record
        $siteDetails = SiteDetails::first();
        $campaignDetails = CampaignDetails::first();

        if ($siteDetails) {
            $siteDetails->main_image_url = $siteDetails->main_image ? asset('uploads/' . $siteDetails->main_image) : null;
            $siteDetails->gallery_image_1_url = $siteDetails->gallery_image_1 ? asset('uploads/' . $siteDetails->gallery_image_1) : null;
            $siteDetails->gallery_image_2_url = $siteDetails->gallery_image_2 ? asset('uploads/' . $siteDetails->gallery_image_2) : null;
            $siteDetails->logo_url = $siteDetails->logo ? asset('uploads/' . $siteDetails->logo) : null;
        }
        $homePageContents = Content::all();
        $sales_tracked_sum = SalesTracked::where('status', 'paid')->sum('panels_purchased');


        $remain_panel = $campaignDetails->no_solar_panels - $sales_tracked_sum;
        if ($remain_panel < 0) {
            $remain_panel = 0;
        }


        return Inertia::render('Frontend/Home', compact('siteDetails', 'campaignDetails', 'homePageContents', 'remain_panel','sales_tracked_sum'));
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
