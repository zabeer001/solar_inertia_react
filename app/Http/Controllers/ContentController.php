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

        return Inertia::render('Backend/contentDetails/Edit', [
            'contentDetail' => $content
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // dd($request->all());
        // Validate input
        $validatedData = $request->validate([
            'content_title' => 'required|string|max:255',
            'content_description' => 'required|string',
            'icon_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
    
        // Find the content by ID
        $content = Content::findOrFail($id);
    
        // Update content details
        $content->content_title = $validatedData['content_title'];
        $content->content_description = $validatedData['content_description'];
    
        $imagePath = $this->uploadImage($request, 'icon_image', $request->icon_image);
        $content->icon_image = !empty($imagePath) ? $imagePath : $request->icon_image;
    
        // Save changes
        $content->save();
    
        // Redirect or return response
        return redirect()->route('contents.index');
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
