import { useState } from 'react';
import SearchBar from './SearchBar';
import SelectStatus from './SelectStatus';

function Explorer() {
   

    return (
        <div className='flex justify-evenly gap-5 text-white border-y-2 border-sky-700 mt-5 p-3'>
           <SearchBar />
           <SelectStatus/>
        </div>
        
    );
}

export default Explorer;