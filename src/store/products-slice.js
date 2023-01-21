import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	availableProductsCount: 17,
	availableProducts: [
		{
			id: 'p1',
			image: `${process.env.PUBLIC_URL + 'img/products/p1.jpg'}`,
			images: ['image1', 'image2', 'image3', 'image4'],
			title: 'Casual Shirt',
			availableSizes: ['L', 'XL', 'XXL'],
			availableColor: ['red', 'black', 'green'],
			summary: 'Men Slim Fit Checkered Spread Collar Casual Shirt',
			discription:
				'Surhi presents to you a new range of stylish and cool new shirts yet which are affordable for everyone. This fashionable and stylish Surhi men shirt makes your look cool and attractive. It is perfect for your summer attire.',
			price: 349,
			avgRating: 4.3,
			ratingsQuantity: 1024,
			reviewsQuantity: 342,
		},
		{
			id: 'p2',
			image:
				'https://rukminim1.flixcart.com/image/832/832/l0jwbrk0/t-shirt/t/n/1/-original-imagcapej87sqqkx.jpeg?q=70',
			title: 'Black T-Shirt',
			availableSizes: ['XS', 'S', 'M', 'ML', 'L'],
			price: 400,
		},
		{
			id: 'p3',
			image:
				'https://rukminim1.flixcart.com/image/832/832/l0jwbrk0/t-shirt/t/n/1/-original-imagcapej87sqqkx.jpeg?q=70',
			title: 'Black T-Shirt',
			availableSizes: ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'],
			price: 400,
		},
		{
			id: 'p4',
			image:
				'https://rukminim1.flixcart.com/image/832/832/l0jwbrk0/t-shirt/t/n/1/-original-imagcapej87sqqkx.jpeg?q=70',
			availableSizes: ['XS', 'L', 'XL', 'XXL'],
			title: 'Black T-Shirt',
			price: 400,
		},
		{
			id: 'p5',
			image:
				'https://rukminim1.flixcart.com/image/832/832/l0jwbrk0/t-shirt/t/n/1/-original-imagcapej87sqqkx.jpeg?q=70',
			availableSizes: ['XS', 'XXL'],
			title: 'Black T-Shirt',
			price: 400,
		},
		{
			id: 'p6',
			image:
				'https://rukminim1.flixcart.com/image/832/832/l0jwbrk0/t-shirt/t/n/1/-original-imagcapej87sqqkx.jpeg?q=70',
			availableSizes: ['XS', 'S', 'M', 'ML', 'L'],
			title: 'Black T-Shirt',
			price: 400,
		},
		{
			id: 'p7',
			image:
				'https://rukminim1.flixcart.com/image/832/832/l0jwbrk0/t-shirt/t/n/1/-original-imagcapej87sqqkx.jpeg?q=70',
			title: 'Black T-Shirt',
			availableSizes: ['M', 'ML', 'L', 'XXL'],
			price: 400,
		},
		{
			id: 'p8',
			image:
				'https://rukminim1.flixcart.com/image/832/832/l0jwbrk0/t-shirt/t/n/1/-original-imagcapej87sqqkx.jpeg?q=70',
			title: 'Black T-Shirt',
			availableSizes: ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'],
			price: 400,
		},
		{
			id: 'p17',
			image:
				'https://rukminim1.flixcart.com/image/832/832/l0jwbrk0/t-shirt/t/n/1/-original-imagcapej87sqqkx.jpeg?q=70',
			title: 'Black T-Shirt',
			availableSizes: ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'],
			price: 400,
		},
		{
			id: 'p9',
			image:
				'https://rukminim1.flixcart.com/image/832/832/l0jwbrk0/t-shirt/t/n/1/-original-imagcapej87sqqkx.jpeg?q=70',
			title: 'Black T-Shirt',
			availableSizes: ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'],
			price: 400,
		},
		{
			id: 'p10',
			image:
				'https://rukminim1.flixcart.com/image/832/832/l0jwbrk0/t-shirt/t/n/1/-original-imagcapej87sqqkx.jpeg?q=70',
			title: 'Black T-Shirt',
			availableSizes: ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'],
			price: 400,
		},
		{
			id: 'p11',
			image:
				'https://rukminim1.flixcart.com/image/832/832/l0jwbrk0/t-shirt/t/n/1/-original-imagcapej87sqqkx.jpeg?q=70',
			title: 'Black T-Shirt',
			availableSizes: ['XS', 'S', 'M', 'ML', 'L', 'XXL'],
			price: 400,
		},
		{
			id: 'p12',
			image:
				'https://rukminim1.flixcart.com/image/832/832/l0jwbrk0/t-shirt/t/n/1/-original-imagcapej87sqqkx.jpeg?q=70',
			title: 'Black T-Shirt',
			availableSizes: ['XS', 'S', 'M', 'XXL'],
			price: 400,
		},
		{
			id: 'p13',
			image:
				'https://rukminim1.flixcart.com/image/832/832/l0jwbrk0/t-shirt/t/n/1/-original-imagcapej87sqqkx.jpeg?q=70',
			title: 'Black T-Shirt',
			availableSizes: ['XS', 'M', 'ML', 'L', 'XXL'],
			price: 400,
		},
		{
			id: 'p14',
			image:
				'https://rukminim1.flixcart.com/image/832/832/l0jwbrk0/t-shirt/t/n/1/-original-imagcapej87sqqkx.jpeg?q=70',
			title: 'Black T-Shirt',
			availableSizes: ['XS', 'XXL'],
			price: 400,
		},
		{
			id: 'p15',
			image:
				'https://rukminim1.flixcart.com/image/832/832/l0jwbrk0/t-shirt/t/n/1/-original-imagcapej87sqqkx.jpeg?q=70',
			title: 'Black T-Shirt',
			availableSizes: ['XS', 'M', 'XXL'],
			price: 400,
		},
		{
			id: 'p16',
			image:
				'https://rukminim1.flixcart.com/image/832/832/l0jwbrk0/t-shirt/t/n/1/-original-imagcapej87sqqkx.jpeg?q=70',
			title: 'Black T-Shirt',
			availableSizes: ['XS', 'S', 'M'],
			price: 400,
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
