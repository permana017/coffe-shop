import React from "react";
import Product from "src/sections/Product";
import Navbar from "src/sections/Navbar"
import Footer from "src/sections/Footer"




function ProductPage() {
    return(
        <div>
            <div className="md:mt-[129px]">
                <Navbar/>
            </div>
            <Product/>
            <Footer/>
        </div>
    )
}

export default ProductPage