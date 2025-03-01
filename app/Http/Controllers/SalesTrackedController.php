<?php

namespace App\Http\Controllers;

use App\Models\SalesTracked;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SalesTrackedController extends Controller
{
    // Show all sales tracked data
    public function index()
    {
        $sales = SalesTracked::where('status', 'paid')->paginate(10);

        return Inertia::render('SalesTracked/Index', ['sales' => $sales]);
    }
    public function search(Request $request)
    {
        $search = $request->input('search');

        // Query the sales table with the search term
        $sales = SalesTracked::query()
            ->where('f_name', 'LIKE', "%{$search}%")
            ->orWhere('l_name', 'LIKE', "%{$search}%")
            ->orWhere('panels_purchased', 'LIKE', "%{$search}%")
            ->orWhere('country', 'LIKE', "%{$search}%")
            ->orWhere('phone', 'LIKE', "%{$search}%")
            ->orWhere('email', 'LIKE', "%{$search}%")
            ->paginate(10); // Adjust the pagination as needed


        return Inertia::render('Backend/SalesTracked/Index', [
            'sales' => $sales,
        ]);
    }



    // Show the form to create new sales entry
    public function create()
    {
        return Inertia::render('SalesTracked/Create');
    }

    // Store a new sales entry
    public function store(Request $request)
    {
        $data = $request->validate([
            'f_name' => 'required|string',
            'l_name' => 'required|string',
            'panels_purchased' => 'required|integer',
            'country' => 'required|string',
            'street' => 'required|string',
            'town' => 'required|string',
            'state' => 'required|string',
            'zip_code' => 'required|string',
            'phone' => 'required|string',
            'email' => 'required|email',
        ]);

        // Add default status
        $data['status'] = 'paid';

        SalesTracked::create($data);

        return redirect()->route('sales_tracked.index');
    }

    // Show the form to edit an existing sales entry
    public function edit(SalesTracked $salesTracked)
    {
        return Inertia::render('SalesTracked/Edit', ['salesTracked' => $salesTracked]);
    }

    // Update an existing sales entry
    public function update(Request $request, SalesTracked $salesTracked)
    {
        $data = $request->validate([
            'f_name' => 'required|string',
            'l_name' => 'required|string',
            'panels_purchased' => 'required|integer',
            'country' => 'required|string',
            'street' => 'required|string',
            'town' => 'required|string',
            'state' => 'required|string',
            'zip_code' => 'required|string',
            'phone' => 'required|string',
            'email' => 'required|email',
        ]);

        $salesTracked->update($data);

        return redirect()->route('sales_tracked.index');
    }

    // Delete a sales entry
    public function destroy(SalesTracked $salesTracked)
    {
        $salesTracked->delete();
        return redirect()->route('sales_tracked.index');
    }
}
