const IMG_URL = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFivIOYWc2s2IDsK88UzVgYG8muqCUJoLLGDcnLxDoPU0hT9XZI78a5OUOq3P3NDHAinA&usqp=CAU`;

function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const data = [
  {
    id: "1",
    image: IMG_URL,
    name: "Product 1",
    price: 19.99,
    description: "Description of Product 1",
    rating: 4.5,
  },
  {
    id: "2",
    image: IMG_URL,
    name: "Product 2",
    price: 29.99,
    description: "Description of Product 2",
    rating: 3.8,
  },
  {
    id: "3",
    image: IMG_URL,
    name: "Product 3",
    price: 39.99,
    description: "Description of Product 3",
    rating: 4.2,
  },
  {
    id: "4",
    image: IMG_URL,
    name: "Product 4",
    price: 49.99,
    description: "Description of Product 4",
    rating: 4.0,
  },
  {
    id: "5",
    image: IMG_URL,
    name: "Product 5",
    price: 59.99,
    description: "Description of Product 5",
    rating: 4.8,
  },
  {
    id: "6",
    image: IMG_URL,
    name: "Product 6",
    price: 69.99,
    description: "Description of Product 6",
    rating: 4.6,
  },
  {
    id: "7",
    image: IMG_URL,
    name: "Product 7",
    price: 79.99,
    description: "Description of Product 7",
    rating: 4.3,
  },
  {
    id: "8",
    image: IMG_URL,
    name: "Product 8",
    price: 89.99,
    description: "Description of Product 8",
    rating: 4.7,
  },
  {
    id: "9",
    image: IMG_URL,
    name: "Product 9",
    price: 99.99,
    description: "Description of Product 9",
    rating: 4.1,
  },
  {
    id: "10",
    image: IMG_URL,
    name: "Product 10",
    price: 109.99,
    description: "Description of Product 10",
    rating: 4.9,
  },
];
