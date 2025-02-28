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
    
        // Define the attributes that need to be modified
        $attributesToModify = ['icon_image']; // List the attributes that need to have the URL prefix
    
        // Modify the attributes dynamically based on the array
        $contentDetails = $contentDetails->map(function ($item) use ($attributesToModify) {
            foreach ($attributesToModify as $attribute) {
                if ($item->{$attribute}) {
                    // Prefix the value with the full URL path
                    $item->{$attribute} = url('uploads/' . $item->{$attribute});
                }
            }
            return $item;
        });
    
       
    
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
    public function update(Request $request)
    {
        // Validate the input
        $validatedData = $request->validate([
            'content_title' => 'required|string|max:255',
            'content_description' => 'required|string',
            'icon_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048', // Make icon_image optional during update
        ]);
    
        // Find the content by ID (don't create a new content, just update the existing one)
        $content = Content::where('id', $request->id)->first();
    
        // Update the content title and description
        $content->content_title = $validatedData['content_title'];
        $content->content_description = $validatedData['content_description'];
    
        // Handle the image upload if a new image is provided
        if ($request->hasFile('icon_image')) {
            // Call the uploadImage method to store the new image and get the image path
            $imagePath = $this->uploadImage($request, 'icon_image');
            $content->icon_image = $imagePath;
        }
    
        // Save the updated content to the database
        $content->save();
    
        // Redirect with a success message (you can customize this)
        return redirect()->route('contents.index')->with('success', 'Content updated successfully');
    }
    
    

    public function destroy(Content $content) 
    {
        try {
            if ($content->image) {
                $this->removeImage($content->image);
            }
    
            $content->delete();
    
            return redirect()->back()->with('success', 'Deleted Successfully!');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong!');
        }
    }
    
    



    /**
     * Remove the specified resource from storage.
     */
 
}
