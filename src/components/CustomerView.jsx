import React from 'react';
import { Link } from 'react-router-dom';




const CustomerView = () => {

    return (
        <>
            <div className="parent-bg flex justify-center  bg-slate-700">
                <div className="text-center border sm:w-96">
                    <div className="div bg-black text-white py-6">
                        <h1 className="text-2xl">Monarch Cafe Welcomes you!</h1>
                    </div>
                    {/* main section */}
                    <div className="center-content p-2 border-5 bg-white">
                        <div className="specials mb-12 bg-yellow">
                            <h2 className="text-xl font-semibold mb-4">Must check our Today's Specials:</h2>
                            {/* specials image */}
                            <img src="coffee-special.jpg" alt="Today's Special" className="specials-image w-full max-w-md mx-auto mb-6 rounded-lg shadow-lg" />

                            {/* today's special box */}
                            <div className="specials-list bg-[#D9D9D9] rounded-md py-2">
                                <p className='text-xl font-semibold'>Today's Special</p>
                                {/* item-1 */}
                                <div className="item flex flex-col gap-2 p-2 bg-white m-2 mb-4 rounded-md">
                                    <div className="name-details flex justify-between">
                                        <div className="name font-semibold">Mocha</div>
                                        <div className="details"><Link to="/view-item-details" className="text-blue-500 hover:underline">Details</Link></div>
                                    </div>
                                    <div className="rates  flex justify-between">
                                        <div><span className='font-semibold'>$50 </span><span className='text-sm'>(Small)</span></div>
                                        <div><span className='font-semibold'>$70 </span><span className='text-sm'>(Medium)</span></div>
                                        <div><span className='font-semibold'>$90 </span><span className='text-sm'>(Large)</span></div>

                                    </div>
                                </div>

                                {/* item-2 */}
                                <div className="item flex flex-col gap-2 p-2 bg-white m-2 mb-4 rounded-md">
                                    <div className="name-details flex justify-between">
                                        <div className="name font-semibold">Cheese Crossiants</div>
                                        <div className="details"><Link to="/view-item-details" className="text-blue-500 hover:underline">Details</Link></div>
                                    </div>
                                    <div className="rates  flex justify-between">
                                        <div><span className='font-semibold'>$50 </span><span className='text-sm'>(Small)</span></div>


                                    </div>
                                </div>


                            </div>
                        </div>

                        {/* other menu categories starts here */}
                        <div className="menu-categories-heading">
                            <h2 className="text-xl font-semibold mb-4 text-left">Menu Categories:</h2>
                        </div>

                        {/* each category box */}
                        <div className="each-category bg-[#D9D9D9] rounded-md my-4 py-2">
                            <p className='text-xl font-semibold'>Hot Beverages</p>
                            {/* item-1 */}
                            <div className="each-item flex flex-col gap-2 p-2 bg-white m-2 mb-4 rounded-md">
                                <div className="name-details flex justify-between">
                                    <div className="name font-semibold">Mocha</div>
                                    <div className="details"><Link to="/view-item-details" className="text-blue-500 hover:underline">Details</Link></div>
                                </div>
                                <div className="rates  flex justify-between">
                                    <div><span className='font-semibold'>$50 </span><span className='text-sm'>(Small)</span></div>
                                    <div><span className='font-semibold'>$70 </span><span className='text-sm'>(Medium)</span></div>
                                    <div><span className='font-semibold'>$90 </span><span className='text-sm'>(Large)</span></div>

                                </div>
                            </div>

                            {/* item-2 */}
                            <div className="item flex flex-col gap-2 p-2 bg-white m-2 mb-4 rounded-md">
                                <div className="name-details flex justify-between">
                                    <div className="name font-semibold">Cheese Crossiants</div>
                                    <div className="details"><Link to="/view-item-details" className="text-blue-500 hover:underline">Details</Link></div>
                                </div>
                                <div className="rates  flex justify-between">
                                    <div><span className='font-semibold'>$50 </span><span className='text-sm'>(Small)</span></div>


                                </div>
                            </div>


                        </div>

                        {/* each category box */}
                        <div className="each-category bg-[#D9D9D9] rounded-md my-4 py-2">
                            <p className='text-xl font-semibold'>Cold Beverages</p>
                            {/* item-1 */}
                            <div className="each-item flex flex-col gap-2 p-2 bg-white m-2 mb-4 rounded-md">
                                <div className="name-details flex justify-between">
                                    <div className="name font-semibold">Coke Lite</div>
                                    <div className="details"><Link to="/view-item-details" className="text-blue-500 hover:underline">Details</Link></div>
                                </div>
                                <div className="rates  flex justify-between">
                                    <div><span className='font-semibold'>$50 </span><span className='text-sm'>(Small)</span></div>
                                    <div><span className='font-semibold'>$70 </span><span className='text-sm'>(Medium)</span></div>
                                    <div><span className='font-semibold'>$90 </span><span className='text-sm'>(Large)</span></div>

                                </div>
                            </div>

                            

                        </div>


                    </div>
                    <footer className="footer bg-black text-white py-6">
                        
                        <p>Served with ❤️</p>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default CustomerView;
