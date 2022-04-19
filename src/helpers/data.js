const products = [
  {
    _id: "1",
    name: "Sony Camera",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

    price: 89.99,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: "2",
    name: "Head Phones",
    image:
      "https://images.unsplash.com/photo-1585298723682-7115561c51b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhZHBob25lc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

    price: 599.99,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: "3",
    name: "iPhone",
    image:
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGlwaG9uZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

    price: 929.99,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: "4",
    name: "Sony Playstation 5 Controller",
    image:
      "https://images.unsplash.com/photo-1606318801954-d46d46d3360a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYXklMjBzdGF0aW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

    price: 399.99,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: "5",
    name: "Laptop",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60",

    price: 49.99,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: "6",
    name: "Apple Watch",
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",

    price: 29.99,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: "7",
    name: "Smart Watch",
    image:
      "https://img-s2.onedio.com/id-61147156d1f96ea754c8bf14/rev-0/w-620/f-jpg/s-8004e8c15d104e6c94ce8512dad963b6844eee32.jpg",

    price: 29.99,
    rating: 3,
    numReviews: 11,
  },
  {
    _id: "8",
    name: "Walkie Talkie",
    image:
      "https://ae01.alicdn.com/kf/Ha9c85be6116049719aa3d6fd70ff3765q/ocuk-telefonu-Walkie-Talkie-oyuncaklar-elektronik-aletler-pil-kumandal-telsiz-kablosuz-walkie-talkie-interkom-konu.jpg_Q90.jpg_.webp",

    price: 19.99,
    rating: 4,
    numReviews: 26,
  },
  {
    _id: "9",
    name: "Washing Machine",
    image:
      "https://mcdn01.gittigidiyor.net/ps/beyazesya_1602827236.jpg",

    price: 89.99,
    rating: 4,
    numReviews: 18,
  },
  {
    _id: "10",
    name: "Filter Coffee Machine",
    image:
      "https://mcdn01.gittigidiyor.net/76480/764805761_0.jpg?1650013",

    price: 14.99,
    rating: 2,
    numReviews: 6,
  },
  {
    _id: "11",
    name: "Expresso Coffee Machine",
    image:
      "https://mcdn01.gittigidiyor.net/77201/772014690_0.jpg?1650013",

    price: 39.99,
    rating: 5,
    numReviews: 38,
  },
  {
    _id: "12",
    name: "Inox Tea Machine",
    image:
      "https://mcdn01.gittigidiyor.net/74206/742069203_0.jpg?1650012",

    price: 21.99,
    rating: 4,
    numReviews: 71,
  },
  {
    _id: "13",
    name: "Tea Machine",
    image:
      "https://mcdn01.gittigidiyor.net/76069/760695043_0.jpg?1650013",

    price: 34.99,
    rating: 5,
    numReviews: 96,
  },
  {
    _id: "14",
    name: "Airfryer Fried Machine",
    image:
      "https://mcdn01.gittigidiyor.net/77201/772014690_0.jpg?1650013",

    price: 19.99,
    rating: 5,
    numReviews: 41,
  },
  {
    _id: "15",
    name: "Siemens Multifunctional Coffee Machine",
    image:
      "https://mcdn01.gittigidiyor.net/54545/545450370_1.jpg?1650013",

    price: 32.99,
    rating: 5,
    numReviews: 121,
  },
  {
    _id: "16",
    name: "Lenovo Gearbest",
    image:
      "https://scontent.fesb9-1.fna.fbcdn.net/v/t1.6435-9/136047646_930358984370902_6618543844059539732_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=Em_lMdAjbQ8AX_YFuZs&_nc_ht=scontent.fesb9-1.fna&oh=00_AT_oZIrdql_I5DiT8FNpnprZdKgDjz69knBEMf0S5LCWnw&oe=6280A439",

    price: 24.99,
    rating: 4,
    numReviews: 16,
  },
  {
    _id: "17",
    name: "Air conditioning",
    image:
      "https://mcdn01.gittigidiyor.net/75828/758286506_0.jpg?1650014",

    price: 59.99,
    rating: 5,
    numReviews: 41,
  },
  {
    _id: "18",
    name: "Remote Controller",
    image:
      "https://ae01.alicdn.com/kf/HTB1rb7KXhrvK1RjSszeq6yObFXa3/S-per-mobil-Tablet-telefon-PC-Anti-h-rs-zl-k-h-rs-z-cihaz-cep.jpg_Q90.jpg_.webp",

    price: 12.99,
    rating: 3,
    numReviews: 11,
  },
];

export default products;

