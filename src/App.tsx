import './App.css'
import { Button } from '@chakra-ui/react'

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
        <Button colorScheme='red' onClick={() => redirect('failure')}>Reject Payment</Button>
        <Button colorScheme='green' onClick={() => redirect('success')} style={{marginLeft: 32}}>Approve Payment</Button>
      </div>
    </>
  )
}

export default App;
