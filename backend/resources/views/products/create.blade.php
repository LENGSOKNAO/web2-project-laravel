<!-- resources/views/products/create.blade.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Product</title>

    <!-- Basic CSS for layout and styling -->
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
            color: #333;
        }

        form {
            display: flex;
            flex-direction: column;
        }

        label {
            font-size: 1.1rem;
            margin-bottom: 5px;
            color: #333;
        }

        input[type="text"], input[type="number"], input[type="file"], textarea, select {
            padding: 8px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 1rem;
        }

        button {
            background-color: #3498db;
            color: white;
            padding: 10px;
            font-size: 1.1rem;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        button:hover {
            background-color: #2980b9;
        }

        .image-preview img {
            width: 100px;
            height: 100px;
            object-fit: cover;
            margin-top: 10px;
        }

        .sizes {
            display: flex;
            flex-direction: column;
        }

        .sizes select {
            margin-bottom: 5px;
        }

        .error-list {
            color: red;
            font-size: 1rem;
            margin-bottom: 15px;
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
        <h1>Create Product</h1>

        <!-- Display validation errors -->
        @if($errors->any())
            <div class="error-list">
                <ul>
                    @foreach($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <div class="create-btn">
            <a href="{{ route('products.index') }}">Dashboard</a>
        </div>

        <!-- Product creation form -->
        <form action="{{ route('products.store') }}" method="POST" enctype="multipart/form-data">
            @csrf

            <!-- Name -->
            <label for="name">Name</label>
            <input type="text" name="name" value="{{ old('name') }}" required>

            <!-- Category -->
            <label for="category">Category</label>
            <select name="category[]" multiple required>
                <option value="men" {{ in_array('men', old('category', [])) ? 'selected' : '' }}>Men</option>
                <option value="women" {{ in_array('women', old('category', [])) ? 'selected' : '' }}>Women</option>
                <option value="kids" {{ in_array('kids', old('category', [])) ? 'selected' : '' }}>Kids</option>
                <option value="shoes" {{ in_array('shoes', old('category', [])) ? 'selected' : '' }}>Shoes</option>
                <option value="clothing" {{ in_array('clothing', old('category', [])) ? 'selected' : '' }}>Clothing</option>
                <option value="sport" {{ in_array('sport', old('category', [])) ? 'selected' : '' }}>Sport</option>
            </select>
            

            <!-- brand -->
            <label for="brand">brand</label>
            <input type="text" name="brand" value="{{ old('brand') }}" required>

            <!-- Price -->
            <label for="price">Price</label>
            <input type="number" name="price" value="{{ old('price') }}" step="0.01" required>

            <!-- Sizes (Multiple) -->
            <label for="sizes">Sizes</label>
            <select name="sizes[]" multiple required>
                <option value="S" {{ in_array('S', old('sizes', [])) ? 'selected' : '' }}>S</option>
                <option value="M" {{ in_array('M', old('sizes', [])) ? 'selected' : '' }}>M</option>
                <option value="L" {{ in_array('L', old('sizes', [])) ? 'selected' : '' }}>L</option>
                <option value="XL" {{ in_array('XL', old('sizes', [])) ? 'selected' : '' }}>Extra Large</option>
            </select>

            <!-- Image -->
            <label for="image">Image</label>
            <input type="file" name="image" required>

            <!-- Image Preview -->
            <div class="image-preview" id="imagePreview"></div>

            <!-- Additional Images -->
            <label for="images">Additional Images (optional)</label>
            <input type="file" name="images[]" multiple>

            
            <!-- Quantity -->
            <label for="qty">Quantity</label>
            <input type="number" name="qty" value="{{ old('qty') }}" required>

            <!-- Description -->
            <label for="description">Description</label>
            <textarea name="description">{{ old('description') }}</textarea>

            <button type="submit">Create Product</button>
        </form>
    </div>

    <!-- Javascript to show image preview -->
    <script>
        document.querySelector('input[name="image"]').addEventListener('change', function(e) {
            const preview = document.getElementById('imagePreview');
            preview.innerHTML = ''; // Clear previous preview

            if (e.target.files && e.target.files[0]) {
                const img = document.createElement('img');
                img.src = URL.createObjectURL(e.target.files[0]);
                preview.appendChild(img);
            }
        });
    </script>
</body>
</html>
