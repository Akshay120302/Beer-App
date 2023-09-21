import React, { useState, useEffect } from 'react';
import logo from './images/Logo.jpg';
import axios from 'axios';
import './styles/Nav.css';

const BeerList = () => {
    const [beers, setBeers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get(`https://api.punkapi.com/v2/beers?beer_name=${search}`)
            .then((response) => {
                setBeers(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [search]);

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <>
            <div>

            <div className="nav">
                <img className="logo" src={logo} alt="" />
                <span className="title">Beer Search</span>
                <input className='searchbar' type="text"
                    placeholder="Search for beers"
                    value={search}
                    onChange={handleChange} />
            </div>

            <div className="navBar">
                <ul>

                    <li >Home</li>

                    <li >Group</li>

                    <li>Products</li>

                    <li>Tasks</li>
                    <li>Leader Board</li>
                </ul>
            </div>


            <br/>
                <div className="row">
                    {beers.map((beer) => (
                        <div key={beer.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                            <div className="card">
                                <img
                                    src={beer.image_url}
                                    className="card-img-top"
                                    alt={beer.name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{beer.name}</h5>
                                    <p className="card-text">{beer.tagline}</p>
                                    <p className="card-text">
                                        ABV: {beer.abv}%
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default BeerList;
