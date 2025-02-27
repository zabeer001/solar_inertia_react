<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Content;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;
use App\Traits\FileUploadTrait;

class ContentController extends Controller
{
    use FileUploadTrait;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contentDetails = Content::all(); // Retrieve all content records from the database

        return Inertia::render('Backend/contentDetails/Index', [
            'siteDetails' => $contentDetails
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        return Inertia::render('Backend/contentDetails/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $validatedData = $request->validate([
            'content_title' => 'required|string|max:255',
            'content_description' => 'required|string',
            'icon_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $content = new Content();
        $imagePath = $this->uploadImage($request, 'icon_image');

        $content->content_title = $validatedData['content_title'];
        $content->content_description = $validatedData['content_description'];
        $content->icon_image = $imagePath;


        $content->save();

        return redirect()->route('contents.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $content = Content::findOrFail($id);

        if ($content) {
            $content->icon_image_url = $content->icon_image ? asset('uploads/' . $content->icon_image) : null;
        }

        return Inertia::render('Backend/contentDetails/Edit', [
            'contentDetail' => $content
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        dd($request->all());
        // Validate input
        $validatedData = $request->validate([
            'content_title' => 'nullable|string|max:255',
            'content_description' => 'nullable|string',
            'icon_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
    
        // Find the content by ID
        $content = Content::findOrFail($id);
    
        // Handle image upload (if a new file is provided)
        if ($request->hasFile('icon_image')) {
            $imagePath = $this->uploadImage($request, 'icon_image', $request->file('icon_image'));
        } else {
            $imagePath = $content->icon_image; // Keep existing image
        }
    
        // Update content details
        $content->update([
            'content_title' => $validatedData['content_title'],
            'content_description' => $validatedData['content_description'],
            'icon_image' => $imagePath,
        ]);
    
        // Redirect with success message
        return redirect()->route('contents.index')->with('success', 'Content updated successfully');
    }
    
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $content = Content::findOrFail($id);

            // Check if the image exists in the 'uploads' folder and delete it
            if ($content->icon_image && Storage::exists('uploads/' . $content->icon_image)) {
                Storage::delete('uploads/' . $content->icon_image);
            }

            // Delete the content record
            $content->delete();

            return redirect()->route('contents.index')->with('success', 'Content deleted successfully!');
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return redirect()->route('contents.index')->with('error', 'Content not found!');
        } catch (\Exception $e) {
            Log::error('Error deleting content: ' . $e->getMessage());
            return redirect()->route('contents.index')->with('error', 'An unexpected error occurred!');
        }
    }
}
