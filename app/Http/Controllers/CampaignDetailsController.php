<?php

namespace App\Http\Controllers;

use App\Models\CampaignDetails;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CampaignDetailsController extends Controller
{
    public function storeOrUpdate(Request $request)
    {
        // Validate incoming data
        $data = $request->validate([
            'target' => 'required|numeric',
            'no_solar_panels' => 'required|integer',
            'energy_saved' => 'required|numeric',
        ]);

        // Check if a campaign already exists
        $campaign = CampaignDetails::first();
        if ($campaign) {
            // Update the existing campaign
            $campaign->update($data);
        } else {
            // Create a new campaign
            CampaignDetails::create($data);
        }

        // Redirect back to the campaign details page
        return redirect()->route('campaign.details');
    }

    public function showOrCreate(): Response
    {
        // Fetch the first campaign details if it exists
        $campaign = CampaignDetails::first();

        // Pass the campaign data to the view (if any)
        return Inertia::render('Backend/CampaignDetails/EntryForm', [
            'data' => $campaign,
        ]);
    }
}
