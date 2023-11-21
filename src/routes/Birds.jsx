export default function Birds({search,
    closeHandler,
    likesCounter,
    birdsList,
    searchHandler,
}){
    return(
        <>
        <input type="text" onChange={searchHandler}/>
        <h1>Birds will be here</h1>
        <div className="cards">
        {birdsList
            .filter(bird => bird.name.toLowerCase().includes(search.toLowerCase()) )
            .map((bird) => (
              <Card key={bird.name} {...bird} onclick={() =>
                closeHandler(bird.name)} 
                addLikes={()=>likesCounter(bird.name, 'add')}
                removeLikes={()=>likesCounter(bird.name,'remove')}/>))}
  
          </div>
          </>
    )
};