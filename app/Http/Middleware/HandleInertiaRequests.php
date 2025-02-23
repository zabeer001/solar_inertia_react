<?php

namespace App\Http\Middleware;

use App\Models\SiteDetails;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Inertia\Inertia;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            // Synchronously share the app name (example)
            'appName' => config('app.name'),
            
            // Share the current authenticated user (auth)
            'auth' => [
                'user' => $request->user(),
            ],

            // Share siteDetails globally (this will be available in all components)
            'siteDetails' => SiteDetails::all()->map(function ($site) {
                // Dynamically generate full URLs for image columns
                // $imageColumns = ['main_image', 'gallery_image_1', 'gallery_image_2', 'logo'];
                $imageColumns = ['logo'];
                foreach ($imageColumns as $column) {
                    if ($site->$column) {
                        $site->{$column . '_url'} = asset('uploads/' . $site->$column);
                    }
                }
                return $site;
            }),
        ]);
    }
}
