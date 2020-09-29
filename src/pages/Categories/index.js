import React,{ useEffect, useState, memo } from 'react'
import {Link} from 'react-router-dom'
import api from '../../service/api'

function Categories() {

  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    api.get('/api_category.php')
    .then((response)=>{
        console.log(response.data.trivia_categories);
        setCategories(response.data.trivia_categories);
    })
  },[]);

  const itemList = categories.map( (category) =>(
    <li key={category.id}>
      <Link to={'questions/'+category.id}>{category.name}</Link>
    </li>
    
  ));

  return(
    <>
    <h1>Categories</h1>
    <ul>
      {itemList}
    </ul>
    </>
  );
}

export default memo(Categories);