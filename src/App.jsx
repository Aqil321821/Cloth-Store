import './categories.styles.scss';

const App = () => {
  const categories = [
    { id: 1, title: 'Hats' },
    { id: 5, title: 'Jackets' },
    { id: 2, title: 'Sneakers' },
    { id: 3, title: 'Womens' },
    { id: 4, title: 'Mens' },
  ];

  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <div className='category-container' key={category.id}>
          {/* {img} */}
          <div className='category-body-container'>
            <h2>{category.title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
