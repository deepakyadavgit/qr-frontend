import React from 'react';





const CustomerView = () => {

    return (
        <>
            <div className="parent-bg flex justify-center">
                <div className="text-center border sm:w-96">
                    <div className="div bg-black text-white py-6">
                        <h1 className="text-2xl">Monarch Cafe Welcomes you!</h1>
                    </div>
                    {/* main section */}
                    <div className="center-content p-2 border-5 ">
                        <div className="specials mb-12 bg-yellow">
                            <h2 className="text-xl font-semibold mb-4">Must check our Today's Specials:</h2>
                            {/* specials image */}
                            <img src="coffee-special.jpg" alt="Today's Special" className="specials-image w-full max-w-md mx-auto mb-6 rounded-lg shadow-lg" />

                            {/* today's special box */}
                            <div className="specials-list bg-[#D9D9D9] rounded-md py-2">
                                <p className='text-xl font-semibold'>Today's Special</p>
                                <div className="item p-2 bg-white m-2 mb-4 rounded-md">
                                    <div className="name-details flex justify-between">
                                        <div className="name">Mocha</div>
                                        <div className="details">Details</div>
                                    </div>
                                    <div className="rates  flex justify-between">
                                        <div>$50(small)</div>
                                        <div>$50(medium)</div>
                                        <div>$50(large)</div>
                                    </div>
                                </div>

                                <div className="item p-2 bg-white m-2 mb-4 rounded-md">
                                    <div className="name-details flex justify-between">
                                        <div className="name">Mocha</div>
                                        <div className="details">Details</div>
                                    </div>
                                    <div className="rates  flex justify-between">
                                        <div>$50(small)</div>
                                        <div>$50(medium)</div>
                                        <div>$50(large)</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* other menu categories starts here */}
                        <div className="menu-categories-heading">
                            <h2 className="text-xl font-semibold mb-4 text-left">Menu Categories:</h2>
                        </div>

                        {/* each category box */}
                        <div className="each-category-box bg-[#D9D9D9] rounded-md py-2 my-4">
                            <p className='text-xl font-semibold'>Hot Beverages</p>

                            <div className="item p-2 bg-white m-2 mb-4 rounded-md">
                                <div className="name-details flex justify-between">
                                    <div className="name">Mocha</div>
                                    <div className="details">Details</div>
                                </div>
                                <div className="rates  flex justify-between">
                                    <div>$50(small)</div>
                                    <div>$50(medium)</div>
                                    <div>$50(large)</div>
                                </div>
                            </div>

                            <div className="item p-2 bg-white m-2 mb-4 rounded-md">
                                <div className="name-details flex justify-between">
                                    <div className="name">Mocha</div>
                                    <div className="details">Details</div>
                                </div>
                                <div className="rates  flex justify-between">
                                    <div>$50(small)</div>
                                    <div>$50(medium)</div>
                                    <div>$50(large)</div>
                                </div>
                            </div>
                        </div>

                        <div className="each-category-box bg-[#D9D9D9] rounded-md py-2">
                            <p className='text-xl font-semibold'>Cold Beverages</p>

                            <div className="item p-2 bg-white m-2 mb-4 rounded-md">
                                <div className="name-details flex justify-between">
                                    <div className="name">Diet Coke</div>
                                    <div className="details">Details</div>
                                </div>
                                <div className="rates  flex justify-between">
                                    <div>$50(small)</div>
                                    <div>$70(medium)</div>
                                    <div>$100(large)</div>
                                </div>
                            </div>

                            <div className="item p-2 bg-white m-2 mb-4 rounded-md">
                                <div className="name-details flex justify-between">
                                    <div className="name">Mocha</div>
                                    <div className="details">Details</div>
                                </div>
                                <div className="rates  flex justify-between">
                                    <div>$50(small)</div>
                                    <div>$50(medium)</div>
                                    <div>$50(large)</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <footer className="footer bg-black text-white py-6">
                        <a href="#" className="mx-4">Submit Feedback</a>
                        <p>Served with ❤️</p>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default CustomerView;
