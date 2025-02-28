<?php

namespace App\Http\Controllers;

use App\Models\Billing;
use App\Models\CampaignDetails;
use App\Models\SalesTracked;
use App\Models\SiteDetails;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BillingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($selectedPanels)
    {
   
        $siteDetails = SiteDetails::first();
        $campaignDetails = CampaignDetails::first();

        if ($siteDetails) {
            $siteDetails->main_image_url = $siteDetails->main_image ? asset('storage/' . $siteDetails->main_image) : null;
            $siteDetails->gallery_image_1_url = $siteDetails->gallery_image_1 ? asset('storage/' . $siteDetails->gallery_image_1) : null;
            $siteDetails->gallery_image_2_url = $siteDetails->gallery_image_2 ? asset('storage/' . $siteDetails->gallery_image_2) : null;

            $siteDetails->logo_url = $siteDetails->logo ? asset('storage/' . $siteDetails->logo) : null;
        }

        $sales_tracked_sum = SalesTracked::sum('panels_purchased');


        $remain_panel = $campaignDetails->no_solar_panels - $sales_tracked_sum;
        if ($remain_panel < 0) {
            $remain_panel = 0;
        }

        return Inertia::render('Frontend/Billing', compact('siteDetails', 'campaignDetails','selectedPanels','remain_panel'));
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
    public function solarBuy(Request $request)
    {

        return redirect()->route('frontend.billing');
    }
}
