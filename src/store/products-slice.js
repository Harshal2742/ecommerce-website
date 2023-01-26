import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	availableProductsCount: 17,
	availableProducts: [
		{
			id: 'p1',
			brand:'LEWEL',
			name: 'Men Slim Fit Checkered Spread Collar Casual Shirt',
			category: 'Casual Shirt',
			image: 'p1',
			images: ['p1-image1', 'p1-image2', 'p1-image3', 'p1-image4'],
			availableSizes: ['L', 'XL', 'XXL'],
			availableColor: ['red', 'black', 'green'],
			discription:
				'Surhi presents to you a new range of stylish and cool new shirts yet which are affordable for everyone. This fashionable and stylish Surhi men shirt makes your look cool and attractive. It is perfect for your summer attire.',
			price: 349,
			avgRating: 4.3,
			ratingsQuantity: 1024,
			reviewsQuantity: 342,
		},
		{
			id: 'p2',
			image: 'p1',
			images: ['p1-image1', 'p1-image2', 'p1-image3', 'p1-image4'],
			name: 'Black T-Shirt',
			availableSizes: ['XS', 'S', 'M', 'ML', 'L'],
			price: 400,
			brand:'LEWEL',
		},
		{
			id: 'p3',
			image: 'p1',
			images: ['p1-image1', 'p1-image2', 'p1-image3', 'p1-image4'],
			name: 'Black T-Shirt',
			availableSizes: ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'],
			price: 400,
			brand:'LEWEL',
		},
		{
			id: 'p4',
			image: 'p1-image3',
			images: ['p1-image1', 'p1-image2', 'p1-image3', 'p1-image4'],
			availableSizes: ['XS', 'L', 'XL', 'XXL'],
			name: 'Black T-Shirt',
			price: 400,
			brand:'LEWEL',
		},
		{
			id: 'p5',
			image: 'p1',
			images: ['p1-image1', 'p1-image2', 'p1-image3', 'p1-image4'],
			availableSizes: ['XS', 'XXL'],
			name: 'Black T-Shirt',
			price: 400,
			brand:'LEWEL',
		},
		{
			id: 'p6',
			image: 'p1',
			images: ['p1-image1', 'p1-image2', 'p1-image3', 'p1-image4'],
			availableSizes: ['XS', 'S', 'M', 'ML', 'L'],
			name: 'Black T-Shirt',
			price: 400,
			brand:'LEWEL',
		},
		{
			id: 'p7',
			image: 'p1',
			images: ['p1-image1', 'p1-image2', 'p1-image3', 'p1-image4'],
			name: 'Black T-Shirt',
			availableSizes: ['M', 'ML', 'L', 'XXL'],
			price: 400,
			brand:'LEWEL',
		},
		{
			id: 'p8',
			image: 'p1',
			images: ['p1-image1', 'p1-image2', 'p1-image3', 'p1-image4'],
			name: 'Black T-Shirt',
			availableSizes: ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'],
			price: 400,
			brand:'LEWEL',
		},
		{
			id: 'p17',
			image: 'p1',
			images: ['p1-image1', 'p1-image2', 'p1-image3', 'p1-image4'],
			name: 'Black T-Shirt',
			availableSizes: ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'],
			price: 400,
			brand:'LEWEL',
		},
		{
			id: 'p9',
			image: 'p1',
			images: ['p1-image1', 'p1-image2', 'p1-image3', 'p1-image4'],
			name: 'Black T-Shirt',
			availableSizes: ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'],
			price: 400,
			brand:'LEWEL',
		},
		{
			id: 'p10',
			image: 'p1',
			images: ['p1-image1', 'p1-image2', 'p1-image3', 'p1-image4'],
			name: 'Black T-Shirt',
			availableSizes: ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'],
			price: 400,
			brand:'LEWEL',
		},
		{
			id: 'p11',
			image: 'p1',
			images: ['p1-image1', 'p1-image2', 'p1-image3', 'p1-image4'],
			name: 'Black T-Shirt',
			availableSizes: ['XS', 'S', 'M', 'ML', 'L', 'XXL'],
			price: 400,
			brand:'LEWEL',
		},
		{
			id: 'p12',
			image: 'p1',
			images: ['p1-image1', 'p1-image2', 'p1-image3', 'p1-image4'],
			name: 'Black T-Shirt',
			availableSizes: ['XS', 'S', 'M', 'XXL'],
			price: 400,
			brand:'LEWEL',
		},
		{
			id: 'p13',
			image: 'p1',
			images: ['p1-image1', 'p1-image2', 'p1-image3', 'p1-image4'],
			name: 'Black T-Shirt',
			availableSizes: ['XS', 'M', 'ML', 'L', 'XXL'],
			price: 400,
			brand:'LEWEL',
		},
		{
			id: 'p14',
			image: 'p1',
			images: ['p1-image1', 'p1-image2', 'p1-image3', 'p1-image4'],
			name: 'Black T-Shirt',
			availableSizes: ['XS', 'XXL'],
			price: 400,
			brand:'LEWEL',
		},
		{
			id: 'p15',
			image: 'p1',
			images: ['p1-image1', 'p1-image2', 'p1-image3', 'p1-image4'],
			name: 'Black T-Shirt',
			availableSizes: ['XS', 'M', 'XXL'],
			price: 400,
			brand:'LEWEL',
		},
		{
			id: 'p16',
			image: 'p1',
			images: ['p1-image1', 'p1-image2', 'p1-image3', 'p1-image4'],
			name: 'Black T-Shirt',
			availableSizes: ['XS', 'S', 'M'],
			price: 400,
			brand:'LEWEL',
		},
	],
	selectedSizes: [],
};

const productsSlice = createSlice({
	name: 'Products',
	initialState,
	reducers: {
		setFilteredProducts(state, action) {
			let filteredProducts = initialState.availableProducts;

			if (action.payload.selectedSizes.length !== 0) {
				filteredProducts = initialState.availableProducts.filter((product) => {
					return product.availableSizes.find((availableSize) =>
						action.payload.selectedSizes.find(
							(selectedSize) => selectedSize === availableSize
						)
					);
				});
			}

			state.availableProducts = filteredProducts;
			state.availableProductsCount = filteredProducts.length;
		},
	},
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;
