import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225), 1);
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900), 1);
cart.add(new Movie(
  9999,
  'Мстители',
  'The Avengers',
  100,
  2012,
  'США',
  'Avengers Assemble',
  ['фантастика', 'боек', 'фэнтези', 'приключения'],
  '137'), 2);

console.log(cart.items);
console.log(cart.price(0));
console.log(cart.price(0.15));
cart.delete(9999);
cart.delete(9999);
console.log(cart.items);
