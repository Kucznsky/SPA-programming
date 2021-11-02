import React from 'react';
import reactDom from 'react-dom';
import './index.css'

const firstBook = {
  author: 'J.R.R. Tolkien, Christopher Tolkien',
  title: 'Silmarillion',
  img: 'https://image.ceneostatic.pl/data/products/91982043/i-silmarillion-wersja-ilustrowana.jpg',
}
function SomeBasicFunction()
{
  return(  
    <section className='booklist'>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}>
        <p>To od niego Tolkien zaczął tworzyć legendarium, których pisanie zajęło mu całe życie. Pierwsze wersje opowieści wchodzących w jego skład powstały w roku 1917 i były rozwijane z przerwami na Hobbita i Władcę Pierścieni, aż do śmierci pisarza w roku 1973. Książka została ukończona i wydana cztery lata po śmierci autora przez jego syna Christophera. Przed śmiercią autor chciał jeszcze przeredagować dzieło, ale nie zdążył.
            J.R.R. Tolkien zamierzał pierwotnie wydać Silmarillion krótko po wydaniu Hobbita, lecz książka została odrzucona przez wydawcę. Później, po opublikowaniu Władcy Pierścieni, fani domagali się poznania historii Dawnych Dni, lecz pisarz tak argumentował niechęć wydania Silmarillionu: „Zero hobbitów, wszędzie elfy i podniosła stylistyka…”.
        </p>
      </Book>
    </section>
  );
}

const Book = (props) => 
{
  const {img, title, author, children} = props;
  console.log(props);
  return (
    <article className='book'>
      <img src={img} alt="Silmarillion"/>
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
}

reactDom.render(<SomeBasicFunction/>, document.getElementById('root'))


