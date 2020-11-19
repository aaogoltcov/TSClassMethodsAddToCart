import Cart from '../service/Cart';
import Movie from "../domain/Movie";
import Book from "../domain/Book";
import MusicAlbum from "../domain/MusicAlbum";

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('card should be filled', () => {
  const cart = new Cart();
  cart.add(new Movie(
    9999,
    'Мстители',
    'The Avengers',
    100,
    2012,
    'США',
    'Avengers Assemble',
    ['фантастика', 'боек', 'фэнтези', 'приключения'],
    '137'), 0);
  expect(cart.items).toEqual([
    {"author": "The Avengers",
      "city": "США",
      "count": 1,
      "genre": ["фантастика", "боек", "фэнтези", "приключения"],
      "id": 9999,
      "name": "Мстители",
      "price": 100,
      "tagline": "Avengers Assemble",
      "time": "137 мин. /2:17", "year": 2012
    }
    ]);
});

test('card should be price', () => {
  const cart = new Cart();
  cart.add(new Book(
    1001,
    'War and Piece',
    'Leo Tolstoy',
    2000,
    1225), 1);
  cart.add(new MusicAlbum(
    1008,
    'Meteora',
    'Linkin Park',
    900), 1);
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
  expect(cart.price(0)).toEqual(3100);
  expect(cart.price(0.15)).toEqual(2635);
});

test('card should be deleted one item', () => {
  const cart = new Cart();
  cart.add(new Book(
    1001,
    'War and Piece',
    'Leo Tolstoy',
    2000,
    1225), 1);
  cart.add(new MusicAlbum(
    1008,
    'Meteora',
    'Linkin Park',
    900), 1);
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
  cart.delete(9999)
  expect(cart.items.length).toEqual(3);
  cart.delete(9999)
  expect(cart.items.length).toEqual(2);
});
