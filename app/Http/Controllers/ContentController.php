<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Content;
use Illuminate\Support\Facades\Storage;

class ContentController extends Controller
{

    public function index(){

        $contentDetails = Content::all(); // Retrieve all content records from the database

        return Inertia::render('Backend/contentDetails/Index', [
            'siteDetails' => $contentDetails
        ]);
    }


    public function showOrCreate()
    {
        $contentSection = Content::first();
        if ($contentSection) {
            $contentSection->icon_image_url = $contentSection->icon_image ? asset('storage/' . $contentSection->icon_image) : null;
        }

        return Inertia::render('Backend/contentDetails/CreateOrEdit', [
            'contentDetail' => $contentSection,
        ]);
    }

    

    public function storeOrUpdate(Request $request)
    {

        // dd($request->all());

        $content = Content::first();

        if (!$content) {
            $content = new Content();
        }

        // Update or create new content with the provided values
        $content->content_title = $request->content_title;
        $content->content_description = $request->content_description;

        // Handle icon image upload without deleting the old one if not provided
        if ($request->hasFile('icon_image')) {
            if ($content->icon_image) {
                Storage::disk('public')->delete($content->icon_image); // Delete old icon image
            }
            $content->icon_image = $request->file('icon_image')->store('images', 'public');
        }

        // Save content
        $content->save();

        return redirect()->route('contentDetails.showOrCreate');
    }
}
