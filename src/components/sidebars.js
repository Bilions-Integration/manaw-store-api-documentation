export default [
  { name: 'Introduction', path: '/' },
  { name: 'Setup Credentials', path: '/page/setup-credential' },
  { name: 'PHP SDK', path: '/page/php-sdk' },
  { name: 'Node.js SDK', path: '/page/node-sdk' },
  { name: '' },
  {
    name: 'Product Category',
    path: null,
    sub_lists: [
      { name: 'Get category list', path: '/page/listing-category' },
      { name: 'Create new category', path: '/page/create-category' },
      { name: 'Update category', path: '/page/update-category' },
      { name: 'Delete category', path: '/page/delete-category' },
    ],
  },
  {
    name: 'Supplier',
    path: null,
    sub_lists: [
      { name: 'Get supplier list', path: '/page/listing-supplier' },
      { name: 'Create new supplier', path: '/page/create-supplier' },
      { name: 'Update supplier', path: '/page/update-supplier' },
      { name: 'Delete supplier', path: '/page/delete-supplier' },
    ],
  },
  {
    name: 'Customer',
    path: null,
    sub_lists: [
      { name: 'Get customer list', path: '/page/listing-customer' },
      { name: 'Create new customer', path: '/page/create-customer' },
      { name: 'Update customer', path: '/page/update-customer' },
      { name: 'Delete customer', path: '/page/delete-customer' },
    ],
  },
  {
    name: 'Product',
    path: null,
    sub_lists: [
      { name: 'Get product list', path: '/page/listing-foo' },
      { name: 'Create new product', path: '/page/create-foo' },
      { name: 'Update product', path: '/page/update-foo' },
      { name: 'Delete product', path: '/page/delete-foo' },
    ],
  },
]
