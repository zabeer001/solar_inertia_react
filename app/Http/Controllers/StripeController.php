<?php



namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\PaymentIntent;
use Stripe\Checkout\Session;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Log;
use App\Models\BillingInformation;
use App\Models\SalesTracked;

class StripeController extends Controller
{
    public function payment(Request $request)
    {
        // dd($request->all());
        session()->flash('success', true);

        // Create a new SalesTracked record with status "unpaid"
        $salesTracked = new SalesTracked();
        $salesTracked->f_name = $request->input('firstName') ?? 'Not Provided';
        $salesTracked->l_name = $request->input('lastName') ?? 'Not Provided';
        $salesTracked->panels_purchased = $request->input('panels_purchased');
        $salesTracked->country = $request->input('country') ?? 'Not Provided';
        $salesTracked->street = $request->input('address') ?? 'Not Provided';
        $salesTracked->town = $request->input('city') ?? 'Not Provided';
        $salesTracked->state = $request->input('state') ?? 'Not Provided';
        $salesTracked->zip_code = $request->input('zip') ?? 'Not Provided';
        $salesTracked->phone = $request->input('phone') ?? 'Not Provided';
        $salesTracked->email = $request->input('email') ?? 'Not Provided';
        $salesTracked->status = 'unpaid';
        $salesTracked->save();

        // Set the Stripe API key
        Stripe::setApiKey(config('stripe.sk'));

        // Define price (convert dollars to cents) and default product name
        $unitAmount = $request->amount * 100;
        $productName = 'Basic Plan';

        // Create the Stripe checkout session, including the sales tracked record ID in metadata
        $session = Session::create([
            'payment_method_types' => ['card'],
            'line_items' => [
                [
                    'price_data' => [
                        'currency' => 'usd',
                        'product_data' => [
                            'name' => $productName,
                        ],
                        'unit_amount' => $unitAmount,
                    ],
                    'quantity' => 1,
                ],
            ],
            'mode' => 'payment',
            'metadata' => [
                'sales_tracked_id' => $salesTracked->id,
            ],
            'success_url' => route('stripe.success') . '?session_id={CHECKOUT_SESSION_ID}',
            'cancel_url' => route('stripe.cancel') . '?sales_tracked_id=' . $salesTracked->id,
        ]);

        return Inertia::location($session->url);
    }

    public function success(Request $request)
    {
        
        // Flash success session message
        session()->flash('success', true);

        // Retrieve the session ID from the query parameters
        $sessionId = $request->query('session_id');
        if (!$sessionId) {
            return Inertia::location(route('frontend.billing'));
        }

        try {
            // dd("hi");
            // Set the Stripe API key and retrieve the session
            Stripe::setApiKey(config('stripe.sk'));
            $session = Session::retrieve($sessionId);

            // dd($session->metadata->sales_tracked_id);

            // Update the related SalesTracked record to "paid"
            if ($session->metadata->sales_tracked_id) {
                // dd("hi");

                $salesTracked = SalesTracked::find($session->metadata->sales_tracked_id);
                if ($salesTracked) {
                    $salesTracked->status = 'paid';
                    $salesTracked->save();
                }
            }
        } catch (\Exception $e) {
            Log::error("Error saving sales data: " . $e->getMessage());
            return redirect()->route('frontend.home.index')->with('error', 'Failed to process the payment.');
        }

        // Remove BillingInformation entry (optional, if you were saving it earlier)
        // BillingInformation::where('user_id', $user->id)->delete();  // Remove related BillingInformation data if needed

        return redirect()->route('frontend.home.index')->with('message', 'Payment successful!');
    }

    public function cancel(Request $request)
    {
        session()->flash('cancel', true);

        // Retrieve the sales_tracked_id from the query string if available
        $salesTrackedId = $request->query('sales_tracked_id');
        if ($salesTrackedId) {
            $salesTracked = SalesTracked::find($salesTrackedId);
            if ($salesTracked) {
                // Ensure the status remains "unpaid"
                $salesTracked->status = 'unpaid';
                $salesTracked->save();
            }
        }

        return redirect()->route('frontend.billing')->with('cancel', 'Payment Cancelled');
    }
}



// class StripeController extends Controller
// {
//     public function payment(Request $request)
//     {
//         session()->flash('success', true);

//         // Set the Stripe API key
//         Stripe::setApiKey(config('stripe.sk'));

//         // Define default price and product name
//         $unitAmount = $request->amount * 100;  // $5 in cents
//         $productName = 'Basic Plan';

//         // Create the checkout session
//         $session = Session::create([
//             'payment_method_types' => ['card'],
//             'line_items' => [
//                 [
//                     'price_data' => [
//                         'currency' => 'usd',
//                         'product_data' => [
//                             'name' => $productName,
//                         ],
//                         'unit_amount' => $unitAmount,
//                     ],
//                     'quantity' => 1,
//                 ],
//             ],
//             'mode' => 'payment',
//             'metadata' => [
//                 'user_id' => Auth::id(), // Associate with user
//             ],
//             'success_url' => route('stripe.success') . '?session_id={CHECKOUT_SESSION_ID}',
//             'cancel_url' => route('stripe.cancel'),
//         ]);

//         // Return the session URL to the frontend
//         return Inertia::location($session->url);

//     }


//     public function success(Request $request)
//     {
//         // Flash success session message
//         session()->flash('success', true);

//         // Retrieve session ID from query parameters
//         $sessionId = $request->query('session_id');
//         if (!$sessionId) {
//             return Inertia::location(route('frontend.billing'));
//         }

//         try {
//             // Set the Stripe API key
//             Stripe::setApiKey(config('stripe.sk'));

//             // Retrieve session from Stripe
//             $session = Session::retrieve($sessionId);

//             // Validate that the session belongs to the correct user
//             $user = Auth::user();
//             if (!$user || $session->metadata->user_id != $user->id) {
//                 return Inertia::location(route('frontend.billing'));
//             }

//             // Store payment data in the BillingInformation table
//             $billingData = new BillingInformation();
//             $billingData->user_id = $user->id;  // Associate billing record with the user
//             $billingData->amount = $session->amount_total / 100;  // Convert amount from cents to dollars
//             $billingData->status = 'paid';  // Mark as 'paid' after successful payment
//             $billingData->payment_method = 'card';  // Set the payment method as 'card' (or other if necessary)
//             $billingData->payment_session_id = $session->id;  // Store the Stripe session ID
//             $billingData->product_name = $session->line_items->data[0]->description ?? 'Unknown';  // Store product description or set 'Unknown'

//             // Add additional billing details if needed (for example, from shipping information)
//             $billingData->email = $session->customer_email ?? 'Not Provided';
//             $billingData->phone = $session->shipping->phone ?? 'Not Provided';
//             $billingData->zip_code = $session->shipping->address->postal_code ?? 'Not Provided';
//             $billingData->town_city = $session->shipping->address->city ?? 'Not Provided';
//             $billingData->street_address = $session->shipping->address->line1 ?? 'Not Provided';
//             $billingData->company_name = $session->shipping->address->line2 ?? 'Not Provided';
//             $billingData->last_name = $session->shipping->name ?? 'Not Provided';  // Assuming the full name is stored here
//             $billingData->first_name = $session->shipping->name ?? 'Not Provided';  // Extract first name if needed

//             // Save the billing information to the database
//             $billingData->save();
//         } catch (\Exception $e) {
//             // Handle any errors in saving billing data or Stripe operations
//             // Log the error for debugging
//             Log::error("Error saving billing data: " . $e->getMessage());

//             // Redirect to the dashboard with an error message
//             return redirect()->route('frontend.billing')->with('error', 'Failed to process the payment or save billing data.');
//         }

//         // Redirect to the dashboard after successful payment and billing data storage
//         return redirect()->route('frontend.billing')->with('message', 'Payment successful and billing information saved!');
//     }

//     public function cancel()
//     {
//         session()->flash('cancel', true);
//         return redirect()->route('frontend.billing')->with('cancel', 'Payment Cancelled');
//     }
// }
