import { Fragment, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

//create menucard component
const MenuCard = () => {
  const [menu, setMenu] = useState({
    name: '',
    price: '',
    size: '',
    image: '',
  });

  const { name, price, size, image } = menu;

  const onChange = (e) => setMenu({ ...menu, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const newMenu = {
      name,
      price,
      size,
      image,
    };
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify(newMenu);
      const res = await axios.post('/menu', body, config);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Menu</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Add Menu
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Price'
            name='price'
            value={price}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Size'
            name='size'
            value={size}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Image'
            name='image'
            value={image}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input
          type='submit'
          className='m-5 bg-[#F5B449] hover:bg-[#CE3434] rounded-md shadow-xl shadow-gray-300 mb-3 w-32 h-[3rem] text-[#3C4048] text-3xl text-center'
          value='Add'
        />
      </form>
    </Fragment>
  );
};
