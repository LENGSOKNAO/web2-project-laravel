<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function show()
    {
        return response()->json(Product::all());
    }
    // Fetch all products
    public function index()
    {
        $products = Product::all();   
        return view('products.index', compact('products'));
    }

    public function create()
    {
        return view('products.create'); // The Blade view for creating a product
    }
    public function edit(Product $product)
    {
        return view('products.edit', compact('product'));
    } 
    
    // Store a new product
    public function store(Request $request)
    {
        // Validate the request data
        $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'sizes' => 'nullable|array',
            'image' => 'required|image ',
            'images.*' => 'nullable|image',
            'qty' => 'required|integer|min:0',
            'description' => 'nullable|string',
        ]);

        // Upload single image
        $imagePath = $request->file('image')->store('products', 'public');

        // Upload multiple images (if any)
        $imagePaths = [];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $imagePaths[] = $image->store('products', 'public');
            }
        }

        // Create product in the database
        $product = Product::create([
            'name' => $request->name,
            'category' => $request->category,
            'price' => $request->price,
            'sizes' => $request->sizes,
            'image' => $imagePath,
            'images' => $imagePaths,
            'qty' => $request->qty,
            'description' => $request->description,
        ]);

        // Return the created product as JSON response
       return redirect()->route('products.index')->with('success', 'Product created successfully!');
    }

    // Show a single product
  

    // Update a product
    public function update(Request $request, Product $product)
    {
        // Validate the request data
        $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'sizes' => 'nullable|array',
            'image' => 'nullable|image',  // Make image optional
            'images.*' => 'nullable|image',
            'qty' => 'required|integer|min:0',
            'description' => 'nullable|string',
        ]);
        
        // Update main image if provided
        if ($request->hasFile('image')) {
            $product->image = $request->file('image')->store('images', 'public');
        }
    
        // Handle additional images upload
        if ($request->hasFile('images')) {
            $imagePaths = [];
            foreach ($request->file('images') as $image) {
                $imagePaths[] = $image->store('images', 'public');
            }
            $product->images = $imagePaths; // Directly assign the array (will be cast to JSON automatically)
        }
    
        // Update other fields using fill method (ensures mass-assignment protection)
        $product->fill([
            'name' => $request->name,
            'category' => $request->category,
            'price' => $request->price,
            'sizes' => $request->sizes ?? [],
            'qty' => $request->qty,
            'description' => $request->description,
        ]);
    
        // Save the product
        $product->save();
        
        return redirect()->route('products.index')->with('success', 'Product updated successfully');
    }
    
    
    

    // Delete a product
    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        // Return success message
        return redirect()->route('products.index')->with('success', 'Product deleted successfully!');
    }
}
