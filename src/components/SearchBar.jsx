import { useState } from "react";

const SearchBar = () => {
  const [searchData, setSearchData] = useState();
  function onchange(e) {
    setSearchData(e.target.value);
    console.log(searchData);
  }
  return (
    <div className="">
      <input type="text" onChange={onchange} placeholder="Search.." className="bg-white px-4"/>
    </div>
  );
};

export default SearchBar;

// import { useState } from 'react';

// function SearchBar({ onSearch }) {
//     const [query, setQuery] = useState('');

//     const handleChange = (event) => {
//         setQuery(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         onSearch(query);
//     };

//     return (
//         <form onSubmit={handleSubmit} className='flex gap-3'>
//             <input
//                 type="text"
//                 placeholder="Search..."
//                 value={query}
//                 onChange={handleChange}
//             />
//             <button type="submit">Search</button>
//         </form>
//     );
// }

// export default SearchBar;
