import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { FilterPanel } from 'components/FilterPanel';
import { JobList } from 'components/JobList';
import { TheHeader } from 'components/TheHeader';

import { addPosition } from 'store/positions/positions-actions';

import data from './mock/data.json'

function App() {
  const dispatch = useDispatch();
  console.log(data)
  useEffect(() => {
    dispatch(addPosition(data))
    console.log(data)
  })

  return (
    <>
     <TheHeader />
     <div className='container'>
      <FilterPanel />
      <JobList />
     </div>
    </>
  );
}

export default App;
