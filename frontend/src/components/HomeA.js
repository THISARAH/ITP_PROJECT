import React, { Component } from 'react'
import NavBar from './NavBar'
import image from '../images/admin1.jpg'

export default class HomeA extends Component {
    render() {
        return (
            <div>
                <div className = "jumbotron" style={{paddingLeft:'50px', paddingRight:'50px', paddingTop: '10px', backgroundImage: `url(${image})`,backgroundRepeat:'no-repeat', backgroundSize:'cover', height:'1000px'}}>
                    <br/>
                    <NavBar/>
                    <br/><br/>
                    <div className="jumbotron" style={{backgroundColor:'rgba(255,255,255,0.7)', padding:'300px 50px 300px 50px'}}>
                        <div className="container">
                            <h1 style={{textAlign: 'center', fontSize:'60px'}}>Hotel Paradise <br/>Management</h1>
                        </div>
                    </div>
                </div>
                <div className="jumbotron" style={{paddingTop: '50px', paddingBottom: '50px', backgroundColor: 'white'}}>
                    <div class="container px-4">
                        <div class="row gx-5">
                            <div class="col">
                                <div class="p-3 border bg-light" >
                                    <div class="card" style={{width: 'auto'}}>
                                        <img src="https://gumlet.assettype.com/nationalherald%2F2019-01%2Fa5fae2ae-ba00-4326-9e44-b150c05f5930%2Fa_jumla_a_joke_or_a_masterstroke_jury_is_out_on_modi_governments_10_reservation.jpg?rect=0%2C0%2C622%2C350&auto=format%2Ccompress&fmt=webp&w=1200" class="card-img-top" alt="..." style={{height: '300px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Reservation Management</h5>
                                            <p class="card-text">All the reservation details</p>
                                            <a href="/hres" class="btn btn-primary">Go to Reservation Management</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3 border bg-light" >
                                    <div class="card" style={{width: 'auto'}}>
                                        <img src="https://ec.europa.eu/reform-support/sites/default/files/styles/oe_theme_medium_no_crop/public/2021-05/AdobeStock_268784201.jpeg?itok=Rq_-MWaq" class="card-img-top" alt="..." style={{height: '300px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Financial Management</h5>
                                            <p class="card-text">All the Financial details</p>
                                            <a href="/finance/incomeexpenditure" class="btn btn-primary">Go to Financial Management</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row gx-5">
                            <div class="col">
                                <div class="p-3 border bg-light" >
                                    <div class="card" style={{width: 'auto'}}>
                                        <img src="https://lh3.googleusercontent.com/proxy/gYveaQpVDvf9Apu0A7OifA5bMkmgcENzrfTEhTluyLCNHIB_ZJyvMuOA-bgcssH3cZTVHYReebg9D131-fAGbJpFu5tDpAgoA-BDTIqujkNEhTrSqtRk" class="card-img-top" alt="..." style={{height: '300px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Customer Management</h5>
                                            <p class="card-text">All the Customer details</p>
                                            <a href="/allCustomer" class="btn btn-primary">Go to Customer Management</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3 border bg-light" >
                                    <div class="card" style={{width: 'auto'}}>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg" class="card-img-top" alt="..." style={{height: '300px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Restaurant Management</h5>
                                            <p class="card-text">All the Restaurant details</p>
                                            <a href="/HomeRestaurant" class="btn btn-primary">Go to Restaurant Management</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row gx-5">
                            <div class="col">
                                <div class="p-3 border bg-light" >
                                    <div class="card" style={{width: 'auto'}}>
                                        <img src="https://www.workplacegroup.com/wp-content/uploads/2014/03/happy-employees.jpg" class="card-img-top" alt="..." style={{height: '300px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Employee Management</h5>
                                            <p class="card-text">All the Employee details</p>
                                            <a href="/Emp" class="btn btn-primary">Go to Employee Management</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3 border bg-light" >
                                    <div class="card" style={{width: 'auto'}}>
                                        <img src="https://finance.zohocorp.com/wp-content/uploads/2019/02/dropshipping-supplier-2x-1-1.png" class="card-img-top" alt="..." style={{height: '300px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Supplier Management</h5>
                                            <p class="card-text">All the Supplier details</p>
                                            <a href="/supplierH" class="btn btn-primary">Go to Supplier Management</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row gx-5">
                            <div class="col">
                                <div class="p-3 border bg-light" >
                                    <div class="card" style={{width: 'auto'}}>
                                        <img src="https://principallandscapes.com.au/wp-content/uploads/2010/04/V2A2055.jpg" class="card-img-top" alt="..." style={{height: '300px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Extra Facilities Management</h5>
                                            <p class="card-text">All the Extra Facilities details</p>
                                            <a href="/AllServices" class="btn btn-primary">Go to Extra Facilities Management</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="p-3 border bg-light" >
                                    <div class="card" style={{width: 'auto'}}>
                                        <img src="https://blog.edesk.com/resources/wp-content/uploads/2018/12/4-creative-ways-to-ultilize-negative-feedback-min.jpg" class="card-img-top" alt="..." style={{height: '300px'}}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Feedback Management</h5>
                                            <p class="card-text">All the Feedback details</p>
                                            <a href="/FeedbackHome" class="btn btn-primary">Go to Feedback Management</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}