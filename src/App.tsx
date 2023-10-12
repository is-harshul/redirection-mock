import './App.css'

function App() {

  const redirect = (status: string) => {
    window.location.href = `https://mf-local.smallcase.com/paymentRedirect?status=${status}`;
  }

  return (
    <>
      <div>
        <h1>Billdesk Redirect</h1>
      </div>
      <div className="card">
        <button onClick={() => redirect('failure')}>
          Failure
        </button>
        <button onClick={() => redirect('success')} style={{marginLeft: 32}}>
          Success
        </button>
      </div>
    </>
  )
}

export default App;
