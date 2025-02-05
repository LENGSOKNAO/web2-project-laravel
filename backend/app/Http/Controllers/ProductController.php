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
    
    public function store(Request $request)
    {
        // Validate the request data
        $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|array|min:1',  // Make sure it's an array with at least one category
            'brand' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'sizes' => 'nullable|array',
            'image' => 'nullable|image',
            'images.*' => 'nullable|image',
            'qty' => 'required|integer|min:0',
            'description' => 'nullable|string',
        ]);
    
        // Upload single image
        $imagePath = $request->file('image') ? $request->file('image')->store('products', 'public') : null;
    
        // Upload multiple images (if any)
        $imagePaths = [];
        if ($request->hasFile('images')) {
            $images = is_array($request->file('images')) ? $request->file('images') : [$request->file('images')]; // Ensure it's an array
            foreach ($images as $image) {
                $imagePaths[] = $image->store('products', 'public');
            }
        }
    
        // Create product in the database
        $product = Product::create([
            'name' => $request->name,
            'category' => implode(',', $request->category),  // Join array into a string
            'brand' => $request->brand,  // Save brand
            'price' => $request->price,
            'sizes' => is_array($request->sizes) ? json_encode($request->sizes) : $request->sizes,  // Ensure sizes are stored as JSON if array
            'image' => $imagePath,
            'images' => !empty($imagePaths) ? json_encode($imagePaths) : '[]',  // Ensure images are stored as JSON if array
            'qty' => $request->qty,
            'description' => $request->description,
        ]);
    
        return redirect()->route('products.index')->with('success', 'Product created successfully!');
    }
    
    public function update(Request $request, Product $product)
    {
        // Validate the request data
        $request->validate([
            'name' => 'required|string|max:255',
            'category' => 'required|array|min:1',  // Ensure category is an array and at least one category is selected
            'brand' => 'required|string|max:255',
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
            $product->images = !empty($imagePaths) ? json_encode($imagePaths) : '[]'; // Assign as JSON
        }
    
        // Update other fields using fill method (ensures mass-assignment protection)
        $product->fill([
            'name' => $request->name,
            'brand' => $request->brand,
            'category' => implode(',', $request->category),  // Join array into a string
            'price' => $request->price,
            'sizes' => is_array($request->sizes) ? json_encode($request->sizes) : $request->sizes,  // Store sizes as JSON if array
            'qty' => $request->qty,
            'description' => $request->description,
        ]);
    
        // Save the product
        $product->save();
    
        return redirect()->route('products.index')->with('success', 'Product updated successfully!');
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
