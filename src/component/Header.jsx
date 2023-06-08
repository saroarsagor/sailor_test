export default function Header() {
    return (
        <>
            <span className="screen-darken"></span>
            <section className="top-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3>
                                <a href="" target="_blank">Get up to <b>40% off</b> new-season styles</a>
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="first-nav">
                <nav className="navbar navbar-expand-lg bg-white">
                    <div className="container">

        <span className="navbar-text">
          free returns standard shipping orders 999+
        </span>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link" href="#">my account</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">about us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">my wishlist</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">cart</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">log in</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    English
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Bangla</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="icofont-facebook"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="icofont-twitter"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="icofont-instagram"></i>
                                </a>
                            </li>
                        </ul>


                    </div>
                </nav>
            </section>
            <section className="middle-nav">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                            <div className="logo-box">
                                <img src="./assets/images/logo.png" alt="logo" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="search-box-flex">
                                <div className="search-box">
                                    <input type="text" className="form-control" placeholder="Search"/>
                                </div>
                                <div className="dropdown-box">
                                    <select className="form-select form-contol" aria-label="Default select example">
                                        <option selected>all categories</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="search-btn-box">
                                    <button className="btn search-btn">
                                        <i className="icofont-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                            <div className="support-icon-flex">
                                <div className="icon">
                                    <i className="icofont-ui-call"></i>
                                </div>
                                <div className="text">
                                    <p>call us now</p>
                                    <h5>+8801777702000</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">

                            <div className="icon-sets">
                                <ul className="nav justify-content-end">
                                    <li className="nav-item">
                                        <a className="nav-link" href="login.html"><i
                                            className="icofont-user-alt-7"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <i className="fa-regular fa-heart"></i>
                                        </a>
                                    </li>
                                    <li className="nav-item position-relative">
                                        <a className="nav-link" href="#"><i className="icofont-cart-alt"></i></a>
                                        <div className="shopping-bag-main">
                                            <div className="shopping-title">
                                                <h3>Shopping bag (5)</h3>
                                            </div>
                                            <div className="shopping-scrol" data-simplebar>

                                                <div className="card mb-3">
                                                    <div className="row g-0">
                                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                            <img src="./assets/images/products/1.jpg"
                                                                 className="img-fluid"
                                                                 alt=""/>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                                                            <div className="card-body">
                                                                <div className="products-namebox">
                                                                    <h3 className="name">mens shirt s/sleeve
                                                                        executive</h3>
                                                                    <h3 className="price">৳ 1250 </h3>
                                                                </div>
                                                                <div className="price-description">
                                                                    <h3>Qty: 1</h3>
                                                                    <h3>Color: TEAL,size: 15</h3>
                                                                </div>
                                                                <div className="remove-product w-100">
                                                                    <a href="#" className="remove-item">
                                                                        <i className="fa-regular fa-trash-can"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card mb-3">
                                                    <div className="row g-0">
                                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                            <img src="./assets/images/products/1.jpg"
                                                                 className="img-fluid"
                                                                 alt=""/>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                                                            <div className="card-body">
                                                                <div className="products-namebox">
                                                                    <h3 className="name">mens shirt s/sleeve
                                                                        executive</h3>
                                                                    <h3 className="price">৳ 1250 </h3>
                                                                </div>
                                                                <div className="price-description">
                                                                    <h3>Qty: 1</h3>
                                                                    <h3>Color: TEAL,size: 15</h3>
                                                                </div>
                                                                <div className="remove-product w-100">
                                                                    <a href="#" className="remove-item">
                                                                        <i className="fa-regular fa-trash-can"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card mb-3">
                                                    <div className="row g-0">
                                                        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                                            <img src="./assets/images/products/1.jpg"
                                                                 className="img-fluid"
                                                                 alt=""/>
                                                        </div>
                                                        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                                                            <div className="card-body">
                                                                <div className="products-namebox">
                                                                    <h3 className="name">mens shirt s/sleeve
                                                                        executive</h3>
                                                                    <h3 className="price">৳ 1250 </h3>
                                                                </div>
                                                                <div className="price-description">
                                                                    <h3>Qty: 1</h3>
                                                                    <h3>Color: TEAL,size: 15</h3>
                                                                </div>
                                                                <div className="remove-product w-100">
                                                                    <a href="#" className="remove-item">
                                                                        <i className="fa-regular fa-trash-can"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="amount-box">
                                                <h3 className="text-start"> subtotal </h3>
                                                <h3 className="text-end">৳ 1250 </h3>
                                            </div>
                                            <div className="button-sets">
                                                <a href="#" className="btn btn-outline-primary view-shopping">view
                                                    shopping
                                                    bag</a>
                                                <a href="#" className="btn btn-secondary checkout">checkout</a>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="final-nav">

                <nav id="navbar_main" className="mobile-offcanvas navbar navbar-expand-lg navbar-light bg-white">
                    <div className="container">
                        <div className="offcanvas-header">
                            <button className="btn-close float-end"></button>
                        </div>

                        <ul className="navbar-nav">
                            <li className="nav-item active"><a className="nav-link" href="#">fantastic friday </a></li>
                            <li className="nav-item"><a className="nav-link" href="#"> panjabi </a></li>
                            <li className="nav-item"><a className="nav-link" href="#"> men </a></li>
                            <li className="nav-item"><a className="nav-link" href="./shop.html"> women </a></li>
                            <li className="nav-item"><a className="nav-link" href="#"> accessories </a></li>
                            <li className="nav-item"><a className="nav-link" href="#"> kids </a></li>
                            <li className="nav-item"><a className="nav-link" href="#"> footwear </a></li>
                            <li className="nav-item"><a className="nav-link" href="#"> home & gift </a></li>

                            <li className="nav-item dropdown has-megamenu">
                                <a className="nav-link dropdown-toggle " href="#" data-bs-toggle="dropdown"> Mega
                                    menu </a>
                                <div className="dropdown-menu megamenu " role="menu">
                                    <div className="row g-3">
                                        <div className="col-xs-12 col-md-12 col-md-12 col-lg-12">
                                            <div className="menugrid-main">
                                                <div className="gridbox-single">
                                                    <div className="left-image-box">
                                                        <a href="#" className="">
                                                            <img src="./assets/images/l1.gif" alt=""
                                                                 className="img-fluid"/>
                                                        </a>
                                                    </div>
                                                    <div className="left-image-box">
                                                        <a href="#" className="">
                                                            <img src="./assets/images/l2.webp" alt=""
                                                                 className="img-fluid"/>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="gridbox-single">
                                                    <div className="col-megamenu">
                                                        <h6 className="title"><a href="#">Title Menu One</a></h6>
                                                        <ul className="list-unstyled">
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-megamenu">
                                                        <h6 className="title"><a href="#">Title Menu One</a></h6>
                                                        <ul className="list-unstyled">
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-megamenu">
                                                        <h6 className="title"><a href="#">Title Menu One</a></h6>
                                                        <ul className="list-unstyled">
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="gridbox-single">
                                                    <div className="col-megamenu">
                                                        <h6 className="title"><a href="#">Title Menu One</a></h6>
                                                        <ul className="list-unstyled">
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-megamenu">
                                                        <h6 className="title"><a href="#">Title Menu One</a></h6>
                                                    </div>
                                                    <div className="col-megamenu">
                                                        <h6 className="title"><a href="#">Title Menu One</a></h6>
                                                    </div>
                                                    <div className="col-megamenu">
                                                        <h6 className="title"><a href="#">Title Menu One</a></h6>
                                                    </div>
                                                    <div className="col-megamenu">
                                                        <h6 className="title"><a href="#">Title Menu One</a></h6>
                                                        <ul className="list-unstyled">
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="gridbox-single">
                                                    <div className="col-megamenu">
                                                        <h6 className="title"><a href="#">Title Menu One</a></h6>
                                                        <ul className="list-unstyled">
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="gridbox-single">
                                                    <div className="col-megamenu">
                                                        <h6 className="title"><a href="#">Title Menu One</a></h6>
                                                        <ul className="list-unstyled">
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                            <li><a href="#">Custom Menu</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="gridbox-single">
                                                    <a href="#" className="">
                                                        <img src="./assets/images/r1.webp" alt=""
                                                             className="img-fluid"/>
                                                    </a>
                                                </div>
                                                <div className="gridbox-single">
                                                    <a href="#" className="">
                                                        <img src="./assets/images/r2.webp" alt=""
                                                             className="img-fluid"/>
                                                    </a>
                                                </div>
                                            </div>


                                        </div>


                                    </div>
                                </div>
                            </li>
                            <li className="nav-item"><a className="nav-link special" href="#"> special offer </a></li>
                        </ul>


                    </div>
                </nav>
            </section>
        </>

    )
}
