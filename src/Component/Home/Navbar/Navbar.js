import React from 'react';

const Navbar = () => {
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light  py-3">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link ms-3 active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-3" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-3" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-2" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-3" href="#">Pricing</a>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;