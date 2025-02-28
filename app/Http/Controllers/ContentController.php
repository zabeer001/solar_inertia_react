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
                    $item->{$attribute} = url('storage/' . $item->{$attribute});
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

        // dd($request);

        // Validate input
        $validatedData = $request->validate([
            'content_title' => 'nullable|string|max:255',
            'content_description' => 'nullable|string',
            'icon_image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $content = Content::where('id', $request->id)->first();
        $content->content_title = $request->content_title;
        $content->content_description = $request->content_description;

        if ($request->hasFile('icon_image')) {
            $file = $request->file('icon_image');
            $filename = time() . '_' . $file->getClientOriginalName();
            $image_path = $file->storeAs('content_images', $filename, 'public');
            $content->icon_image = $image_path;
        }
        $content->save();

        //$image_url = asset('storage/content_images/' . $content->icon_image);


        // Redirect with success message
        return redirect()->route('contents.index')->with('success', 'Content updated successfully');
    }



    /**
     * Remove the specified resource from storage.
     */
 
}
