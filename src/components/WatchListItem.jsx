const WatchListItem = ({item, index, watchList, moveItemDown, moveItemUp}) => {
    const firstIndex = 0;
    const lastIndex = watchList.length - 1;

    const WatchListStyle = {
        display: 'flex',
        justifyContent: 'space-between'
    }

    const getClassNames = () => {
        if (item.onSale) {
            return 'bg-success text-light p-3 rounded mb-2'
          } else {
            return 'bg-dark text-light p-3 rounded mb-2'
          }
    }
      /*Function for custom date format*/
      const getDateFormatLong = (d) => {
        return (new Date(d)).toLocaleDateString('en-us', { month: '2-digit', day: '2-digit', year: 'numeric', timeZone:'UTC'})
    }

    const handleUpArrowClick = () => {
        moveItemUp(index);
    }

    const handleDownArrowClick = () => {
        moveItemDown(index)
    }


    return (
        <div style={WatchListStyle}
        className={getClassNames()}
        >
        <div className="item-details">
          <div>{item.title}</div>
          <div>{'$' + item.price.toFixed(2)} {getDateFormatLong(item.dateAdded)}</div>
        </div>
        <div className="arrow-buttons">
          <i className="material-icons" hidden={firstIndex === index} onClick={handleUpArrowClick}>expand_less</i>
          <i className="material-icons" hidden={lastIndex === index} onClick={handleDownArrowClick}>expand_more</i>
        </div>
      </div>
    )
}

export default WatchListItem
