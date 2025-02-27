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
        $sales = SalesTracked::all(); // You can add pagination if needed
        return Inertia::render('Backend/SalesTracked/Index', ['sales' => $sales]);
    }

    // Show the form to create new sales entry
    public function create()
    {
        return Inertia::render('Backend/SalesTracked/Create');
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

        SalesTracked::create($data);

        return redirect()->route('sales_tracked.index');
    }

    // Show the form to edit an existing sales entry
    public function edit(SalesTracked $salesTracked)
    {
        return Inertia::render('Backend/SalesTracked/SalesTrackedEdit', ['salesTracked' => $salesTracked]);
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

