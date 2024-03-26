import { useState } from 'react';
import SearchBar from './SearchBar';
import SelectStatus from './SelectStatus';

function Explorer() {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (query) => {
        // Perform search logic here using the query
        // For demonstration purposes, we'll just log the query
        console.log('Search query:', query);
        // Update searchResults state with the search results if needed
    };

    return (
        <div className='flex justify-evenly gap-5 text-white border-y-2 border-sky-700 mt-5 p-3'>
           <SearchBar onSearch={handleSearch} />
           <SelectStatus />
           <div  className='flex gap-4'>
            <h2>Last Event</h2>
            <p>theft/heatbeat/etc</p>
           </div>
        </div>
    );
}

export default Explorer;
