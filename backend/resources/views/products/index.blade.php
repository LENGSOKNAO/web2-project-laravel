<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Products Dashboard</title>

    <!-- Basic CSS for layout and styling -->
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 0;
        }

        .container {
            width: 80%;
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

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        table th, table td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }

        table th {
            background-color: #3498db;
            color: white;
        }

        table td img {
            width: 80px;
            height: 80px;
            object-fit: cover;
            border-radius: 4px;
        }

     

        .actions a, .actions form button {
            padding: 8px 12px;
            background-color: #3498db;
            color: white;
            border-radius: 4px;
            text-decoration: none;
            font-size: 1rem;
            text-align: center;
        }

        .actions a:hover, .actions form button:hover {
            background-color: #2980b9;
        }

        /* Red delete button styling */
        .actions form button {
            background-color: #e74c3c;
            border: none;
        }

        .actions form button:hover {
            background-color: #c0392b;
        }

        .no-products {
            text-align: center;
            font-size: 1.2rem;
            color: #999;
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
        <h1>Products Dashboard</h1>

        <!-- Display validation errors -->
        @if($errors->any())
            <div>
                <ul>
                    @foreach($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif
         <!-- Create Button -->
        <div class="create-btn">
            <a href="{{ route('products.create') }}">Create Product</a>
        </div>

        <!-- Display all products -->
        @if($products->count() > 0)
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Sizes</th>
                        <th>Quantity</th>
                        <th>Main Image</th>
                        <th>description</th>
                        <th>Actions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($products as $product)
                        <tr>
                            <td>{{ $product->name }}</td>
                            <td>{{ $product->category }}</td>
                       
                            <td>${{ number_format($product->price, 2) }}</td>
                            <td>
                                @foreach($product->sizes as $size)
                                    {{ $size }},
                                @endforeach
                            </td>
                            <td>{{ $product->qty }}</td> 
                            <td><img src="{{ asset('storage/'.$product->image) }}" alt="{{ $product->name }}"></td>
                            <td>{{ $product->description }}</td>
                            <td class="actions ">
                                <a href="{{ route('products.edit', $product->id) }}">Edit</a>
                            </td>
                            <td class="actions ">
                                <form action="{{ route('products.destroy', $product->id) }}" method="POST" onsubmit="return confirm('Are you sure you want to delete this product?');">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit">Delete</button>
                                </form>

                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        @else
            <p class="no-products">No products available.</p>
        @endif
    </div>

</body>
</html>
