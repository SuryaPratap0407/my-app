import React from 'react'
import { Card} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Products({}) {
 
  return (
    <>
   
    <div className=' m-auto  row row-cols-2 row-cols-xs-1 row-cols-sm-3 row-cols-md-3 row-cols-lg-4  row-cols-xl-6 mt-2'>
    
    <Card  className="text-center  ">
    <Card.Img  variant="top" src="../assets/product-1.jpg" />
    <Card.Body> 
      <Card.Title className=' fw-bold'>Handset</Card.Title>
      <Card.Text className='text-center fw-bold'>
        $ 85.00
      </Card.Text>
      <div className='text-center'>
      <NavLink to="/product" className="btn btn-outline-dark my-2 ">Add TO Cart</NavLink>
      <NavLink  to="/cart" className="btn btn-outline-dark mx-1">Go To Cart</NavLink>
      </div>
    </Card.Body>
  </Card>


     <Card  className="text-center ">
    <Card.Img  variant="top" src="../assets/product-1.jpg" />
    <Card.Body> 
      <Card.Title className=' fw-bold'>Handset</Card.Title>
      <Card.Text className='text-center fw-bold'>
        $ 85.00
      </Card.Text>
      <div className='text-center'>
      <NavLink to="/product" className="btn btn-outline-dark my-2">Add TO Cart</NavLink>
      <NavLink  to="/cart" className="btn btn-outline-dark mx-1">Go To Cart</NavLink>
      </div>
    </Card.Body>
  </Card>
    <Card  className="text-center">
    <Card.Img  variant="top" src="../assets/product-1.jpg" />
    <Card.Body> 
      <Card.Title className=' fw-bold'>Handset</Card.Title>
      <Card.Text className='text-center fw-bold'>
        $ 85.00
      </Card.Text>
      <div className='text-center'>
      <NavLink to="/product" className="btn btn-outline-dark my-2">Add TO Cart</NavLink>
      <NavLink  to="/cart" className="btn btn-outline-dark mx-1 ">Go To Cart</NavLink>
      </div>
    </Card.Body>
  </Card>
    <Card  className="text-center ">
    <Card.Img  variant="top" src="../assets/product-1.jpg" />
    <Card.Body> 
      <Card.Title className=' fw-bold'>Handset</Card.Title>
      <Card.Text className='text-center fw-bold'>
        $ 85.00
      </Card.Text>
      <div className='text-center'>
      <NavLink to="/product" className="btn btn-outline-dark my-2">Add TO Cart</NavLink>
      <NavLink  to="/cart" className="btn btn-outline-dark mx-1">Go To Cart</NavLink>
      </div>
    </Card.Body>
  </Card>
    <Card  className="text-center ">
    <Card.Img  variant="top" src="../assets/product-1.jpg" />
    <Card.Body> 
      <Card.Title className=' fw-bold'>Handset</Card.Title>
      <Card.Text className='text-center fw-bold'>
        $ 85.00
      </Card.Text>
      <div className='text-center'>
      <NavLink to="/product" className="btn btn-outline-dark my-2">Add TO Cart</NavLink>
      <NavLink  to="/cart" className="btn btn-outline-dark mx-1">Go To Cart</NavLink>
      </div>
      
    </Card.Body>
  </Card>
    <Card  className="text-center ">
    <Card.Img  variant="top" src="../assets/product-1.jpg" />
    <Card.Body> 
      <Card.Title className=' fw-bold'>Handset</Card.Title>
      <Card.Text className='text-center fw-bold'>
        $ 85.00
      </Card.Text>
      <div className='text-center'>
      <NavLink to="/product" className="btn btn-outline-dark my-2">Add TO Cart</NavLink>
      <NavLink  to="/cart" className="btn btn-outline-dark mx-1">Go To Cart</NavLink>
      </div>
    </Card.Body>
  </Card>
    <Card  className="text-center ">
    <Card.Img  variant="top" src="../assets/product-1.jpg" />
    <Card.Body> 
      <Card.Title className=' fw-bold'>Handset</Card.Title>
      <Card.Text className='text-center fw-bold'>
        $ 85.00
      </Card.Text>
      <div className='text-center'>
      <NavLink to="/product" className="btn btn-outline-dark my-2">Add TO Cart</NavLink>
      <NavLink  to="/cart" className="btn btn-outline-dark mx-1">Go To Cart</NavLink>
      </div>
    </Card.Body>
  </Card>
    <Card  className="text-center ">
    <Card.Img  variant="top" src="../assets/product-1.jpg" />
    <Card.Body> 
      <Card.Title className=' fw-bold'>Handset</Card.Title>
      <Card.Text className='text-center fw-bold'>
        $ 85.00
      </Card.Text>
      <div className='text-center'>
      <NavLink to="/product" className="btn btn-outline-dark my-2">Add TO Cart</NavLink>
      <NavLink  to="/cart" className="btn btn-outline-dark mx-1 ">Go To Cart</NavLink>
      </div>
    </Card.Body>
  </Card>

  </div> 
  
  </>
  )
}

export default Products