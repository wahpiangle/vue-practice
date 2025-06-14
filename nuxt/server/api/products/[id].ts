export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    console.log(`Fetching product with ID: ${id}`);
    const products = [
        { id: '1', name: 'Product 1', price: 100 },
        { id: '2', name: 'Product 2', price: 200 },
        { id: '3', name: 'Product 3', price: 300 }
    ];

    const product = products.find(p => p.id === id);

    if (!product) {
        throw createError({ statusCode: 404, statusMessage: 'Product not found' });
    }

    return product;
});