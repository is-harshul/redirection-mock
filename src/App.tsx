import { useState } from 'react';
import './App.css'
import { Button, Input } from '@chakra-ui/react'

function App() {

  const [inputVal, setInputVal] = useState<string | null>(null);

  const redirect = (status: string) => {
    window.location.href = inputVal ?? `https://mf-local.smallcase.com/paymentRedirect?status=${status}`;
  }

  return (
    <>
      <div>
        <h1>Redirection App</h1>
        <p style={{marginTop: 32}}>You can redirect to custom URL (Cta won't matter as you will add query params in URL):</p>
        <Input placeholder='https://site.com/paramname=value' onChange={(e) => setInputVal(e.target.value)} />
      </div>
      <div className="card">
        {inputVal ? 
          <Button colorScheme='green' onClick={() => window.location.href = inputVal}>Redirect to above URL</Button>
        : 
        <>
          <Button colorScheme='red' onClick={() => redirect('failure')}>Reject Payment</Button>
          <Button colorScheme='green' onClick={() => redirect('success')} style={{marginLeft: 32}}>Approve Payment</Button>
        </>
        }
      </div>
    </>
  )
}

export default App;
