
function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src="media/images/homeHero.png" alt="Hero image" className='mb-5 home-hero'/>
                <h2 className='mt-5 text-dark'>Invest in Everything</h2>
                <p className='fs-5 mb-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more</p>
                <button style={{width: "25%", margin: "0 auto"}} className='btn fs-5'>Signup for free</button>
            </div>
        </div>
     );
}

export default Hero;