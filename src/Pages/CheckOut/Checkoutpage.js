import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Checkoutpage = () => {
  const course = useLoaderData();
  const { id,title} = course;
  
    return (
        <div style={{width:'50%',margin:'auto'}} className='bg-base-100'>
        
<div className="leading-loose">
  <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
    <p className="text-amber-500 font-medium text-center m-5">{title}</p>
    <p className="text-gray-800 font-medium">Customer information</p>
    <div className="">
      <label className="block text-sm text-gray-00" for="cus_name">Name</label>
      <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Your Name" aria-label="Name"></input>
    </div>
    <div className="mt-2">
      <label className="block text-sm text-gray-600" for="cus_email">Email</label>
      <input className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Your Email" aria-label="Email"></input>
    </div>
    <div className="mt-2">
      <label className=" block text-sm text-gray-600" for="cus_email">Address</label>
      <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Street" aria-label="Email"></input>
    </div>
    <div className="mt-2">
      <label className="hidden text-sm block text-gray-600" for="cus_email">City</label>
      <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="City" aria-label="Email"></input>
    </div>
    <div className="inline-block mt-2 w-1/2 pr-1">
      <label className="hidden block text-sm text-gray-600" for="cus_email">Country</label>
      <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Country" aria-label="Email"></input>
    </div>
    <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
      <label className="hidden block text-sm text-gray-600" for="cus_email">Zip</label>
      <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email"  name="cus_email" type="text" required="" placeholder="Zip" aria-label="Email"></input>
    </div>
    <p className="mt-4 text-gray-800 font-medium">Payment information</p>
    <div className="">
      <label className="block text-sm text-gray-600" for="cus_name">Card</label>
      <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Card Number MM/YY CVC" aria-label="Name"></input>
    </div>
    <div className="mt-4">
      <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded w-full" type="submit">$3.00</button>
    </div>
   <Link to= {`/course/${id}`}>
   <div className="mt-4">
      <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded w-full" type="submit">Go BAck</button>
    </div>
   </Link>
  </form>
</div>
        </div>
    );
};

export default Checkoutpage;