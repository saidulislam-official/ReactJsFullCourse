const App = () => {
  const creator ="Allah";
  const userDetails = {
    username : 'saidul islam',
    group : 'science',
  }
  const proposal = [1,2,3,4]
  return (
    <>
      <h3><br /></h3>
      <h2> My Dear {creator} </h2>
      <p>
        {proposal[0]}. Please forgive me and give me whatever is good for me in duniya and akirah. Hey {creator} please help me to get out from sin. Hey {creator} give me what i want and what is good for me.
        <br /><br />
        {proposal[1]}. My Dear {creator}, Plz help me, i am broken. I can't live here without your help. plz help me. plz always with me. i need you deeply. Accept my Proposal and love me.
        <br /><br />
        In your favour <br />
        <span>{userDetails.username}</span>
      </p>
    </>
  )
}

export default App