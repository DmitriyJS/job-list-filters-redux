import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

import { store } from 'store';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilters } from 'store/filters/filter-selector';
import { removeFilter, clearFilter } from 'store/filters/filter-actions';


const FilterPanel = () => {
  const dispatch = useDispatch()
  const currentFilters = useSelector(selectFilters)
  console.log(currentFilters, 222);

  if (currentFilters.length === 0) return null

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {/* <Badge variant="clearable">Frontend</Badge>
          <Badge variant="clearable">Backend</Badge>
          <Badge variant="clearable">React</Badge> */}
          {currentFilters.map(item => (
            <Badge onClear={() => dispatch(removeFilter(item))  } key = {item} variant="clearable">{item}</Badge>
          ))}
        </Stack>

        <button onClick={() => dispatch(clearFilter)} className='link'>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};