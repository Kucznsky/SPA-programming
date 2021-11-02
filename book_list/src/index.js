import React from 'react';
import reactDom from 'react-dom';
import './index.css'

const books = [

{
  id: 1,
  author: 'J.R.R. Tolkien, Christopher Tolkien',
  title: 'Silmarillion',
  img: 'https://image.ceneostatic.pl/data/products/91982043/i-silmarillion-wersja-ilustrowana.jpg',
},
{
  id: 2,
  author: 'Andrzej Sapkowski',
  title: 'Krew elfów',
  img: 'https://image.ceneostatic.pl/data/products/33143711/i-wiedzmin-3-krew-elfow.jpg',
},
];

function BookList()
{
  return(  
    <section className='booklist'>
      {books.map((book) => {
        return (<Book key={book.id} {...book}></Book>);
      })}
    </section>
  );
}

const Book = (props) => 
{
  const {img, title, author} = props;
  return (
    <article className='book'>
      <img src={img} alt="Silmarillion"/>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
}

reactDom.render(<BookList/>, document.getElementById('root'))


