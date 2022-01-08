import {useState, useEffect} from 'react';

import './App.css';

import {WATCH_LIST} from './DATA';

/* Import Components */
import WatchListContainer from './components/WatchListContainer';
import WatchListItem from './components/WatchListItem';

const App = () => {
  const [watchList, setWatchList] = useState(WATCH_LIST);
  const [showAll, setShowAll] = useState(false);
  const [maxLength, setMaxLength] = useState(4);

  useEffect(() => {
    document.title = watchList.length.toString() + ' items in watch list';
  }, [])

  const moveItemUp = (index) => {
    const newIndex = index - 1;

    //Only moves item up if new index is greater or equal to 0
    if (newIndex >= 0) {
      setWatchList(watchList => {
        let data = [...watchList];
        const itemSelected = data[index];
        const itemToSwap = data[newIndex];

        //Move selected item to new index
        data[newIndex] = itemSelected;

        //Move item from new index to selected index
        data[index] = itemToSwap;
        
        return data;
      })  
    }
  }

  const moveItemDown = (index) => {
      const newIndex = index + 1;
      const maxIndex = watchList.length;

    // Only moves item down if array new index is less than or equal to the max index
    if (newIndex <= maxIndex) {
      setWatchList(watchList => {
        let data = [...watchList];
        const itemSelected = data[index];
        const itemToSwap = data[newIndex];

        //Move selected item to new index
        data[newIndex] = itemSelected;

        //Move item from new index to selected index
        data[index] = itemToSwap;
        
        return data;
      })  
    }
  }

  const handleShowAllClick = () => {
    //Set showAll to true
    setShowAll(true);

    //Update max index length to index length 
    setMaxLength(watchList.length);
  }


  return (
    <div className="App">
      <h4>Flopbuster Watch List</h4>
      <WatchListContainer>
      {/* Only show item if index less than max index*/}
          { watchList.map((item, index) => (
            index < maxLength
            ?
              <WatchListItem key={index} item={item} index={index} watchList={watchList} moveItemUp={moveItemUp} moveItemDown={moveItemDown} maxLength={maxLength}/>
            : ''
            

          ))
          }
      </WatchListContainer>
      <button className="btn btn-primary" onClick={handleShowAllClick} hidden={showAll}>Show All</button>
    </div>
  );
}

export default App;
