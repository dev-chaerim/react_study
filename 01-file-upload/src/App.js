
function App() {
  const onChange = (e) => {
    console.log(e.target.files[0]);
  }
  
  return (
    <div className="App">
      <input type="file" onChange={onChange} />

      <form method='post' action='/upload/simple' encType='multipart/form-data'>
        <input type='file' name='myphoto' />
        <input type='submit'/>
      </form>
    </div>
  );
}

export default App;
