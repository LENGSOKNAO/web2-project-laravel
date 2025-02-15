<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Product</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 50%;
            margin: 30px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
        }
        label {
            font-weight: bold;
            display: block;
            margin-top: 10px;
        }
        input, select, textarea {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            margin-top: 15px;
            padding: 10px;
            width: 100%;
            background-color: #3498db;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #2980b9;
        }
        .image-preview {
            display: flex;
            gap: 10px;
            margin-top: 10px;
        }
        .image-preview img {
            width: 50px;
            height: 50px;
            object-fit: cover;
            border-radius: 4px;
        }
        .create-btn {
             margin-bottom: 20px; /* Add some space below the Create button */
        } 

       .create-btn a {
    padding: 10px 20px;
    background-color: #2ecc71; /* Green background */
    color: white;
    border-radius: 4px;
    font-size: 1rem;
    text-decoration: none;
    text-align: center;
    display: inline-block;
      }

.create-btn a:hover {
    background-color: #27ae60; /* Darker green on hover */
}

    </style>
</head>
<body>
    <div class="container">
        <h1>Edit Product</h1>
        <div class="create-btn">
            <a href="{{ route('products.index') }}">Dashboard</a>
        </div>
        <form action="{{ route('products.update', $product) }}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')
        
            <!-- Product Name -->
            <label for="name">Name</label>
            <input type="text" name="name" value="{{ $product->name }}" required>
        
            <!-- Category -->
            <label for="category">Category</label>
            <select name="category[]" multiple required>
                @php
                    $categories = explode(',', $product->category);
                @endphp
                <option value="men" {{ in_array('men', $categories) ? 'selected' : '' }}>Men</option>
                <option value="women" {{ in_array('women', $categories) ? 'selected' : '' }}>Women</option>
                <option value="kids" {{ in_array('kids', $categories) ? 'selected' : '' }}>Kids</option>
                <option value="shoes" {{ in_array('shoes', $categories) ? 'selected' : '' }}>Shoes</option>
                <option value="clothing" {{ in_array('clothing', $categories) ? 'selected' : '' }}>Clothing</option>
                <option value="sport" {{ in_array('sport', $categories) ? 'selected' : '' }}>Sport</option>
            </select>
        
            <!-- Brand -->
            <label for="brand">Brand</label>
            <input type="text" name="brand" value="{{ $product->brand }}" required>
        
            <!-- Price -->
            <label for="price">Price</label>
            <input type="number" name="price" value="{{ $product->price }}" step="0.01" required>
        
            <!-- Sizes -->
            <label for="sizes">Sizes</label>
            <select name="sizes[]" multiple required>
                <option value="S" {{ in_array('S', $product->sizes ? json_decode($product->sizes) : []) ? 'selected' : '' }}>Small</option>
                <option value="M" {{ in_array('M', $product->sizes ? json_decode($product->sizes) : []) ? 'selected' : '' }}>Medium</option>
                <option value="L" {{ in_array('L', $product->sizes ? json_decode($product->sizes) : []) ? 'selected' : '' }}>Large</option>
                <option value="XL" {{ in_array('XL', $product->sizes ? json_decode($product->sizes) : []) ? 'selected' : '' }}>Extra Large</option>
            </select>
        
            <!-- Main Image -->
            <label for="image">Image (Leave blank if no change)</label>
            <input type="file" name="image">
            <div class="image-preview">
                <img src="{{ asset('storage/'.$product->image) }}" alt="Current Image">
            </div>
        
            <!-- Additional Images -->
            <label for="images">Additional Images</label>
            <input type="file" name="images[]" multiple>
            <div class="image-preview">
                @foreach(json_decode($product->images) as $image)
                    <img src="{{ asset('storage/'.$image) }}" alt="Additional Image">
                @endforeach
            </div>
        
            <!-- Quantity -->
            <label for="qty">Quantity</label>
            <input type="number" name="qty" value="{{ $product->qty }}" required>
        
            <!-- Description -->
            <label for="description">Description</label>
            <textarea name="description">{{ $product->description }}</textarea>
        
            <button type="submit">Update Product</button>
        </form>
        
    </div>
</body>
</html>