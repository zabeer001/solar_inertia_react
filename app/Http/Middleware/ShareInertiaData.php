<?php

namespace App\Http\Middleware;

use App\Models\SiteDetails;
use Closure;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ShareInertiaData
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {
        // Fetch site details from the database
        $siteDetails = SiteDetails::first();
    
        // Prepare the data to be shared with Inertia
        $sharedData = [];
    
        if ($siteDetails) {
            // Add the logo URL to the shared data
            $sharedData['logo_url'] = $siteDetails->logo ? asset('uploads/' . $siteDetails->logo) : null;
        } else {
            // Fallback if no site details are found
            $sharedData['logo_url'] = null;
        }
    
        // Share the data with Inertia
        Inertia::share($sharedData);
    
        return $next($request);
    }
}
