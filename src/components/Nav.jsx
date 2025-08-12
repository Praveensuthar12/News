import React from 'react'

const Nav = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">

                    <a className="navbar-brand" href="#">
                        <span className="badge bg-light text-danger fs-4">NewsAPI</span>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-
                        bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-
                        expanded="false" aria-label="Toggle navigation">

                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Business</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Entertainment</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">General</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Health</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Science</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Technology</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav