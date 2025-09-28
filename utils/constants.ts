import { MaterialIcons } from '@expo/vector-icons';
export type Item = {
  id: string;
  title: string;
  image: string;
  color: string;
  style: string;
};

export const MOCK_ITEMS: Item[] = [
  {
    id: '1',
    title: 'Black Trousers',
    image:
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80',
    color: 'Black',
    style: 'Work',
  },
  {
    id: '2',
    title: 'Blue Shirt',
    image:
      'https://imgs.search.brave.com/wcA6MWkZtEyf6RruLaX3KXcjBLyuG3gbMHFqoZwxIM4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzMwMC8zMDAveGlm/MHEvc2hpcnQvYS9j/L3gvcy1zdDI3LXZl/Ym5vci1vcmlnaW5h/bC1pbWFncGd0eXdn/ZGZ5eGo0LmpwZWc_/cT05MA',
    color: 'Blue',
    style: 'Casual',
  },
  {
    id: '3',
    title: 'Brown Bag',
    image:
      'https://imgs.search.brave.com/9GV14nBDBi-JdhEEhFiEFKuVqtHweEaMWO2qEyz5y1M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kMWl0/MDljNHB1eWN5aC5j/bG91ZGZyb250Lm5l/dC83MDd4MTAwMC9j/YXRhbG9nL3Byb2R1/Y3QvSi9IL0pIMDAw/My1MSUdIVF9CUk9X/Tl8xLmpwZw',
    color: 'Brown',
    style: 'Leisure',
  },
  {
    id: '4',
    title: 'Green Dress',
    image:
      'https://imgs.search.brave.com/I0zdFhx3P7Pn86GoBUw-QtAFjIYrwScnvI7TkjtMmH4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzAw/NzAvODg1My83NjUx/L2ZpbGVzLzA1MDAy/LTAwMDM3MF8xLmpw/Zz92PTE3NTU1NDU0/MTYmd2lkdGg9ODg2/JmhlaWdodD0xMDAw',
    color: 'Green',
    style: 'Party',
  },
  {
    id: '5',
    title: 'Denim Shorts',
    image:
      'https://imgs.search.brave.com/dcBW60oe6G8IDVBZMwZMgGu7YMWjA5ZZVmCZk5-Pqzg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTc5/MTQ1Njg0L3Bob3Rv/L2JsdWUtZGVuaW0t/c2hvcnRzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1QSGdZ/LUUtc1h0T1BISi1a/MHVrV1FOMTl3Z3Uz/Y0phN1pjUnlBNnNy/NTlVPQ',
    color: 'Denim',
    style: 'Casual',
  },
  {
    id: '6',
    title: 'Striped Shirt',
    image:
      'https://imgs.search.brave.com/8oRjq98iUevdE74b0eDSfHwmco-cmNZ5nb5BCIa9CDg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFlZzBMbm9QTkwu/anBn',
    color: 'Striped',
    style: 'Work',
  },
  {
    id: '7',
    title: 'Sandals',
    image:
      'https://imgs.search.brave.com/P0SmKNrUAEtcXOCsYGnZboBnuqGX_Ib3bsMKCRbo_RI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzA4LzE0LzY5/LzM2MF9GXzcwODE0/Njk3NV9uZWlMWGxM/Y1RFRGk0RFFqdEhC/T3ljSEhEeGlPYU9y/SC5qcGc',
    color: 'Tan',
    style: 'Leisure',
  },
  {
    id: '9',
    title: 'Dangle Earrings',
    image:
      'https://imgs.search.brave.com/xzIG8eFgF2UYNy6WjdgRPDiTfu99gUUJBBQdRuWvi_s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/dHJ1ZXNpbHZlci5j/by5pbi9jZG4vc2hv/cC9maWxlcy9FUjE4/NjE5NUZHXzYwMHgu/anBnP3Y9MTc0NDYx/MDQ3Nw',
    color: 'Gold',
    style: 'Party',
  },
  {
    id: '10',
    title: 'White Shirt',
    image:
      'https://imgs.search.brave.com/Nk6sKBlyIGajp1yG5REC38w369t5mtIf_6GY--BFVC4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2VsZWN0ZWRob21t/ZS5pbi9jZG4vc2hv/cC9maWxlcy8yOTE0/MjA5MDRfZzQuanBn/P3Y9MTc0NjUxNzU4/NiZ3aWR0aD0xMDgw',
    color: 'White',
    style: 'Work',
  },
  {
    id: '13',
    title: 'Pleated Skirt',
    image:
      'https://imgs.search.brave.com/CUx5x3gVB35LxjrVM62Dhe7zBwCxRRW_K2MPkqb7CNQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nbGFtb3VyLmNv/bS9waG90b3MvNjhi/NzViOGI2Y2EwMWU4/Zjk4MDEyNzIyLzM6/NC93Xzc0OCxjX2xp/bWl0L1NhcHBoaXJl/JTIwcmluZyUyMCg1/NikucG5n',
    color: 'Cream',
    style: 'Party',
  },
  {
    id: '14',
    title: 'Maroon Tee',
    image:
      'https://imgs.search.brave.com/PwqVVrja8pN2d1ayAP829ypcJLrg6XAK8-Zj5sidSz8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9leHBs/b3Npb25zLWluLXRo/ZS1za3ktdXMubXlz/aG9waWZ5LmNvbS9j/ZG4vc2hvcC9maWxl/cy9FSVRTLUxpbm9T/a3ktTWFyb29udGVl/LnBuZz92PTE2OTQx/OTU5Nzcmd2lkdGg9/MTQ0NQ',
    color: 'Maroon',
    style: 'Casual',
  },
  {
    id: '15',
    title: 'Mule Heels',
    image:
      'https://imgs.search.brave.com/HDcx3EBieAPpIJT2BHkP-_mXPcit6bYH3aEsyQunl2g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFCUFJvTlh3aEwu/anBn',
    color: 'Beige',
    style: 'Party',
  },
];

export const OUTFITS = [
  {
    id: 'o1',
    title: 'Spring Leisure',
    items: ['11', '12', '7'],
    tags: ['Leisure', 'Green'],
  },
  {
    id: 'o2',
    title: 'Work Staples',
    items: ['1', '6', '10'],
    tags: ['Work', 'Smart'],
  },
  {
    id: 'o3',
    title: 'Weekend Party',
    items: ['4', '13', '15'],
    tags: ['Party', 'Statement'],
  },
];

export const ALL_FILTERS = {
  Style: ['Work', 'Casual', 'Leisure', 'Party'],
  Color: [
    'Black',
    'Blue',
    'Brown',
    'Green',
    'Denim',
    'Striped',
    'White',
    'Maroon',
    'Tan',
    'Beige',
    'Cream',
    'Gold',
  ],
};

export const STYLE_ICONS: Record<string, keyof typeof MaterialIcons.glyphMap> = {
  Work: 'work',
  Casual: 'weekend',
  Leisure: 'self-improvement',
  Party: 'celebration',
};