import './App.css';
import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment } from '@mui/material';
import CategoryBtn from './components/category'
import productsCardList from './components/productsCardList';
import popUpDescription from './components/popUpDescription';

function App() {

  const [products] = useState([
    {
      id: 1,
      name: 'blueJacket',
      category: 'Outer',
      price: '5.00$',
      imgUrl: './img/jacket.jpg',
      descirption: '깔끔한 청자켓으로 멋을 내보세요'
    },
    {
      id: 2,
      name: 'menToMen',
      category: 'MenClothing',
      price: '2.00$',
      imgUrl: './img/men-to-men.jpg',
      descirption: '꾸안꾸의 정석 맨투맨!'
    },
    {
      id: 3,
      name: 'neat',
      category: 'MenClothing',
      price: '2.50$',
      imgUrl: './img/neat.jpg',
      descirption: '단정하고 깔끔하게 보이는 공대오빠 픽'
    },
    {
      id: 4,
      name: 'overfitShirts',
      category: 'MenClothing',
      price: '5.00$',
      imgUrl: './img/overfit-shirts.jpg',
      descirption: '꾸미기 정말 좋은 룩'
    },
    {
      id: 5,
      name: 'canvas',
      category: 'Shoes',
      price: '6.00$',
      imgUrl: './img/shoes-canvas.jpg',
      descirption: '캔버스화의 표본'
    },
    {
      id: 6,
      name: 'blaus',
      category: 'WomanClothing',
      price: '2.90$',
      imgUrl: './img/woman-blaus.jpg',
      descirption: '더욱 여성스러운 이미지를 부각시켜주는 옷'
    },
    {
      id: 7,
      name: 'semiSuit',
      category: 'Suit',
      price: '9.90$',
      imgUrl: './img/suit-mansuit.jpg',
      descirption: '남자는 수트핏!'
    },
    {
      id: 8,
      name: 'shotPadding',
      category: 'Outer',
      price: '5.00$',
      imgUrl: './img/padding-shotpadding.jpg',
      descirption: '추운 겨울날 편한 숏패딩으로 겨울극복!!'
    }
  ]);

  const [filteredProduct, setFilteredProduct] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['WomanClothing', 'MenClothing',  'Outer', 'Shoes', 'Suit'];

  const onCategoryClick = (category) => {
    setSelectedCategory(category);
  
    const filtered = products.filter(product => product.category === category);
    setFilteredProduct(filtered);
  };

  const [selectedProduct, setSelectedProduct] = useState('');

  const onCardListClick = (products) => {
    setSelectedProduct(products);

    const fitleredProduct = products.filter(product => product.id)
  }

  return (
    <div className="App">
      <div className="nav-container">
        <div className="title-container"><h1>CustomShop</h1></div>
        <TextField
          variant="outlined"
          size="small"
          label="search"
          margin="normal"
          className="text-input"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon className="search-icon"/>
              </InputAdornment>
            ),
          }} 
        />
      </div>

      <div className="category-container">
        <CategoryBtn
          categories={categories}
          onCategoryClick={onCategoryClick}
          className="category-btn"
        />
      </div>

      <div className="products-container">
        <div className="title"><h2>Pick Your Clothes!</h2></div>
        <productsCardList 
          products={products}
          onCardListClick={onCardListClick}
          className="products-card-list"
          imgUrl={products.imgUrl}
        />
      </div>
    </div>
  );
}

export default App;
