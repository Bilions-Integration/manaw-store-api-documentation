export default [
  { name: "Introduction", path: "/" },
  { name: "Setup Credentials", path: "/page/setup-credential" },
  { name: "PHP SDK", path: "/page/php-sdk" },
  { name: "Node.js SDK", path: "/page/node-sdk" },
  { name: "" },
  {
    name: "Supplier",
    path: null,
    sub_lists: [
      { name: "Get supplier list", path: "/page/listing-supplier" },
      { name: "Create new supplier", path: "/page/create-supplier" },
      { name: "View supplier", path: "/page/view-supplier" },
      { name: "Update supplier", path: "/page/update-supplier" },
      { name: "Delete supplier", path: "/page/delete-supplier" },
    ],
  },
  {
    name: "Customer",
    path: null,
    sub_lists: [
      { name: "Get customer list", path: "/page/listing-customer" },
      { name: "Create new customer", path: "/page/create-customer" },
      { name: "View customer", path: "/page/view-customer" },
      { name: "Update customer", path: "/page/update-customer" },
      { name: "Delete customer", path: "/page/delete-customer" },
    ],
  },
  {
    name: "Account",
    path: null,
    sub_lists: [
      { name: "Get account list", path: "/page/listing-account" },
      { name: "Create new account", path: "/page/create-account" },
      { name: "View account", path: "/page/view-account" },
      { name: "Update account", path: "/page/update-account" },
      { name: "Delete account", path: "/page/delete-account" },
    ],
  },
  {
    name: "Product Category",
    path: null,
    sub_lists: [
      { name: "Get category list", path: "/page/listing-category" },
      { name: "Create new category", path: "/page/create-category" },
      { name: "View Product Category", path: "/page/view-category" },
      { name: "Update category", path: "/page/update-category" },
      { name: "Delete category", path: "/page/delete-category" },
    ],
  },
  {
    name: "Product",
    path: null,
    sub_lists: [
      { name: "Get product list", path: "/page/listing-product" },
      { name: "View Product", path: "/page/view-product" },
    ],
  },
  {
    name: "Single Product",
    path: null,
    sub_lists: [
      {
        name: "Create single product",
        path: "/page/create-single-product",
      },

      {
        name: "Update single product",
        path: "/page/update-single-product",
      },

      {
        name: "Delete single product",
        path: "/page/delete-single-product",
      },
    ],
  },
  {
    name: "Group Product",
    path: null,
    sub_lists: [
      {
        name: "Create group product",
        path: "/page/create-group-product",
      },
      {
        name: "Update group product",
        path: "/page/update-group-product",
      },
      {
        name: "Delete group product",
        path: "/page/delete-group-product",
      },
    ],
  },
  {
    name: "Sub Product",
    path: null,
    sub_lists: [
      {
        name: "Sub product listing",
        path: "/page/listing-sub-product",
      },
      {
        name: "Create sub product",
        path: "/page/create-sub-product",
      },
      {
        name: "Update sub product",
        path: "/page/update-sub-product",
      },
      {
        name: "Delete sub product",
        path: "/page/delete-sub-product",
      },
    ],
  },
  {
    name: "Single Product Option",
    path: null,
    sub_lists: [
      {
        name: "Product option list",
        path: "/page/listing-single-product-option",
      },
      {
        name: "Create product option",
        path: "/page/create-single-product-option",
      },
      {
        name: "Update product option",
        path: "/page/update-single-product-option",
      },
      {
        name: "Delete product option",
        path: "/page/delete-single-product-option",
      },
    ],
  },
  {
    name: "Single Product Option Item",
    path: null,
    sub_lists: [
      {
        name: "Option item list",
        path: "/page/listing-single-product-option-item",
      },
      {
        name: "Create option item",
        path: "/page/create-single-product-option-item",
      },
      {
        name: "Update option item",
        path: "/page/update-single-product-option-item",
      },
      {
        name: "Delete option item",
        path: "/page/delete-single-product-option-item",
      },
    ],
  },
];
