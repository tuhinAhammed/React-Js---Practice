import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from "react-bootstrap/Button"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import './css/tuhin.css'
import Flex from './Layout/Flex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <p>ok</p>
     <Col xs={6} md={4}>
     <Image src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/444945078_969664407952363_3939432407956000662_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFQvaCXXtXjjJ8j35AdFynyTqBpK7jSRMFOoGkruNJEwYyrdiLY0wFHW2Lwapvu-jW-qNDbA_AtuueQ_ZvKm67o&_nc_ohc=NCn8U38wN6sQ7kNvgGgjVsv&_nc_ht=scontent.fdac14-1.fna&oh=00_AYAzedQquKc96Hvx6aCNoXVUxi5-gOQz9JCE9YzUdfVkWQ&oe=665A0456" roundedCircle />
        </Col>
<Flex className="flexCustom">
     <Button variant='success' className='tuhinButton'>Primary</Button>
     <Button variant='danger' className='tuhinButton'>Primary</Button>
</Flex>


    </>
  )
}

export default App
