  import './change-deck.css'

  const ChangeDeck = ({changeDeck}) =>{
    return(
        <button className='btn' onClick={ changeDeck}>
            Clique para tirar uma carta 
        </button>
    )
  }

  export default ChangeDeck