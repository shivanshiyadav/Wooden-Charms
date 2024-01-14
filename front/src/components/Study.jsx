import React from 'react'

const Study = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <div className="card">

                            <div className="imgBx">
                                <img src="data:image/jpeg;base64,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" alt="nike-air-shoe" />
                            </div>

                            <div className="contentBx">

                                <h2>5 Seater Dining Table</h2>

                                <div className="size">
                                    <h3>Size :</h3>
                                    <span>90'</span>
                                    <span>72'</span>
                                    <span>21'</span>

                                </div>

                                <div className="color">

                                    <h3>Color :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <a href="#">Buy Now</a>
                            </div>

                        </div>

                        <div className="card">

                            <div className="imgBx">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAacGFKbmonSaJiisrQD031pv21_HxV6UsQ&usqp=CAU" alt="" /> </div>

                            <div className="contentBx">

                                <h2>5 Seater Dining Table</h2>

                                <div className="size">
                                    <h3>Size :</h3>
                                    <span>90'</span>
                                    <span>72'</span>
                                    <span>21'</span>

                                </div>

                                <div className="color">

                                    <h3>Color :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <a href="#">Buy Now</a>
                            </div>

                        </div>
                        <div className="card">

                            <div className="imgBx">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCAacGFKbmonSaJiisrQD031pv21_HxV6UsQ&usqp=CAU" alt="" />
                            </div>

                            <div className="contentBx">

                                <h2>5 Seater Dining Table</h2>

                                <div className="size">
                                    <h3>Size :</h3>
                                    <span>90'</span>
                                    <span>72'</span>
                                    <span>21'</span>

                                </div>

                                <div className="color">

                                    <h3>Color :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <a href="#">Buy Now</a>
                            </div>

                        </div>
                        <div className="card">

                            <div className="imgBx">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQSYktdFRZAf-V9_IezvbNwXK3NpmSORW1Jg&usqp=CAU" alt="" /> </div>

                            <div className="contentBx">

                                <h2>5 Seater Dining Table</h2>

                                <div className="size">
                                    <h3>Size :</h3>
                                    <span>90'</span>
                                    <span>72'</span>
                                    <span>21'</span>

                                </div>

                                <div className="color">

                                    <h3>Color :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <a href="#">Buy Now</a>
                            </div>

                        </div>
                        <div className="card">

                            <div className="imgBx">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQSYktdFRZAf-V9_IezvbNwXK3NpmSORW1Jg&usqp=CAU" alt="" /> </div>

                            <div className="contentBx">

                                <h2>5 Seater Dining Table</h2>

                                <div className="size">
                                    <h3>Size :</h3>
                                    <span>90'</span>
                                    <span>72'</span>
                                    <span>21'</span>

                                </div>

                                <div className="color">

                                    <h3>Color :</h3>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <a href="#">Buy Now</a>
                            </div>

                        </div>

                    </div>




                </div>
                <div className="col-md-2">

                </div>
            </div>

        </div>
    )
}

export default Study

