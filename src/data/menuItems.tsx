export type MenuCategory = 'Coffee' | 'Tea' | 'Pastries' | 'Sandwiches & Wraps';

export interface MenuItem {
  category: MenuCategory;
  name: string;
  price: number;
  description: string;
  contains: string[];
}

export const menuItems: MenuItem[] = [
  {
    category: 'Coffee',
    name: 'House Blend',
    price: 2.5,
    description: 'Our signature blend, a rich and smooth medium roast. Made with 100% Arabica beans.',
    contains: ['Caffeine'],
  },
  {
    category: 'Coffee',
    name: 'Latte',
    price: 3.5,
    description: 'Creamy and comforting, made with our house blend and hot, frothy milk.',
    contains: ['Caffeine', 'Dairy'],
  },
  {
    category: 'Coffee',
    name: 'Mocha',
    price: 4.0,
    description: 'A comforting latte with a dash of delicious cocoa.',
    contains: ['Caffeine', 'Dairy', 'Soy'],
  },
  {
    category: 'Coffee',
    name: 'Espresso',
    price: 2.0,
    description: 'A robust and energizing shot of coffee, perfect for a quick pick-me-up.',
    contains: ['Caffeine']
  },
  {
    category: 'Coffee',
    name: 'Caramel Macchiato',
    price: 4.5,
    description: 'Velvety and sweet, our house espresso topped with frothy milk and a drizzle of caramel.',
    contains: ['Caffeine', 'Dairy']
  },
  {
    category: 'Coffee',
    name: 'Cold Brew',
    price: 3.0,
    description: 'Smooth and refreshing, slow-steeped for over 12 hours.',
    contains: ['Caffeine']
  },
  {
    category: 'Tea',
    name: 'Chai Latte',
    price: 3.5,
    description: 'A spiced tea latte, aromatic and warming. ',
    contains: ['Caffeine', 'Dairy']
  },
  {
    category: 'Tea',
    name: 'Green Tea',
    price: 2.5,
    description: 'Refreshing and detoxifying, served hot or iced.',
    contains: ['Caffeine']
  },
  {
    category: 'Tea',
    name: 'Herbal Tea',
    price: 2.5,
    description: 'Check with us for our daily selection of soothing herbal teas.',
    contains: ['Caffeine (depending on variety)']
  },
  {
    category: 'Tea',
    name: 'Black Tea ',
    price: 2.5,
    description: 'Bold and robust, this classic brew can be served hot or iced.',
    contains: ['Caffeine']
  },
  {
    category: 'Tea',
    name: 'Matcha Latte',
    price: 4.0,
    description: 'A traditional Japanese green tea powder mixed with hot, frothy milk.',
    contains: ['Caffeine', 'Dairy']
  },
  {
    category: "Pastries",
    name: "Blueberry Muffin",
    price: 2.5,
    description: 'Bursting with blueberries, a delightful morning treat.',
    contains: ['Gluten', 'Dairy', 'Egg']
  },
  {
    category: "Pastries",
    name: "Chocolate Croissant ",
    price: 3.0,
    description: 'Buttery and flaky, filled with rich chocolate.',
    contains: ['Gluten', 'Dairy']
  },
  {
    category: "Pastries",
    name: "Cinnamon Roll",
    price: 3.5,
    description: 'Soft and sweet, glazed with icing.',
    contains: ['Gluten', 'Dairy']
  },
  {
    category: "Pastries",
    name: "Almond Croissant",
    price: 3.5,
    description: 'A classic pastry filled with almond cream and topped with sliced almonds.',
    contains: ['Gluten', 'Dairy', 'Nuts']
  },
  {
    category: "Pastries",
    name: "Lemon Poppyseed Muffin",
    price: 2.75,
    description: 'Zesty and moist, this muffin is a tangy delight.',
    contains: ['Gluten', 'Dairy', 'Egg']
  },
  {
    category: "Sandwiches & Wraps",
    name: "Chicken Caesar Wrap",
    price: 6.5,
    description: 'Grilled chicken, crisp romaine lettuce, Parmesan cheese, and Caesar dressing.',
    contains: ['Gluten', 'Dairy']
  },
  {
    category: "Sandwiches & Wraps",
    name: "Veggie Wrap",
    price: 6.0,
    description: 'A medley of fresh veggies with a hummus spread.',
    contains: ['Gluten']
  },
  {
    category: "Sandwiches & Wraps",
    name: "Ham and Cheese Sandwich",
    price: 5.5,
    description: 'Classic sandwich with ham and cheddar on rye bread.',
    contains: ['Gluten', 'Dairy']
  },
  {
    category: "Sandwiches & Wraps",
    name: "Turkey and Avocado Sandwich",
    price: 6.75,
    description: 'Smoked turkey breast, ripe avocado, lettuce, and tomato on whole grain bread.',
    contains: ['Gluten']
  },
  {
    category: "Sandwiches & Wraps",
    name: "Caprese Panini",
    price: 7.0,
    description: 'Fresh mozzarella, tomatoes, and basil with a drizzle of balsamic glaze.',
    contains: ['Gluten', 'Dairy']
  },

];