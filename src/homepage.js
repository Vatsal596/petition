import React from "react";
import { Link } from "react-router-dom";
import "./homepage.css";



function Homepage() {
    return (
        <div>
            <header class="header"><div class="header-bcg"></div>
                <div class="container">
                    <nav class="navbar navbar-expand-lg">
                        <a href="#" class="navbar-brand">
                            <img src="/images/logo.png" alt="" className="logo" />
                        </a>
                        <button type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler collapsed js-toggler">
                            <span class="navbar-toggler-icon first"></span> <span class="navbar-toggler-icon second"></span>
                            <span class="navbar-toggler-icon third"></span>
                        </button>
                        <div id="navbarToggler" class="collapse navbar-collapse">
                            <ul class="navbar-nav"><li class="navbar-nav-item nav-item">
                                <a href="/login" class="nav-link">Sign in</a></li>
                                <li class="navbar-nav-item nav-item"><a href="/register" class="nav-link">Join</a></li>
                                <li class="navbar-nav-item nav-item">
                                    <div class="nav-item-search">
                                        <div class="nav-item-search-icon">
                                            <img src="/images/search.svg" alt="" /></div>
                                        <input type="text" /></div></li></ul></div>
                        <button type="button" class="btn orange light">Contribute</button>
                    </nav>
                </div>
            </header>
            <section class="hero"><img src="/images/hero-map.svg" alt="" class="hero-bcg" />
                <div class="container"><h1>Make a Better World</h1>
                    <h6><span data-value="45219430" class="counter-value">45219612</span>
                        signatures
                    </h6>
                    <Link to="/start-petition" class="btn orange">
                        Start Petition
                    </Link>
                     <p>It's free. It's easy. And it results in real change.
                        <a href="">Read our success stories
                        </a>
                    </p>
                </div>
            </section>
            <section class="petitions"><div class="container">
                <h3>
                    Free Online Petitions
                </h3>
                <p>
                    Create a powerful online petition in just a few minutes. No technical knowledge is needed to start your online petition and make real change. Just click the button above and you'll be ready to start collecting signatures right away. iPetitions: The best online petition tools on the Internet.
                </p>
            </div>
            </section>

            {/* <section id="success-stories-section" class="stories">
                <div class="container">
                    <h2>Success Stories
                    </h2>
                    <div class="stories-wrap">
                        <div class="stories-current">
                            <div data-v-3d1a4f76="" dir="ltr" class="stories-current-wrap slick-slider slick-initialized">
                                <button data-v-21137603="" data-v-3d1a4f76="" type="button" data-role="none" class="slick-arrow slick-prev" style="display: block;">Previous
                                </button>
                                <div data-v-3d1a4f76="" class="slick-list">
                                    <div data-v-e4caeaf8="" data-v-3d1a4f76="" class="slick-track" style="width: 17346px; opacity: 1; transform: translate3d(-7434px, 0px, 0px);">
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="-1" aria-hidden="true" class="slick-slide slick-cloned" style="width: 826px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" tabindex="-1" class="stories-current-item" style="width: 100%; display: inline-block;">
                                                    <div data-v-e4caeaf8="" class="stories-current-item-img">
                                                        <a data-v-e4caeaf8="" href="/petition/keep-uperclassmen-on-campus" target="_blank">
                                                            <img data-v-e4caeaf8="" src="https://cdn.ipetitions.com/user-images/petitions/keep-uperclassmen-on-campus/GBePeP0TDOrj161vegwA_picture.JPG" alt="A Win for Auburn University's Upperclassmen" />
                                                        </a>
                                                    </div>
                                                    <span data-v-e4caeaf8="" class="stories-current-item-tag">Sign
                                                    </span>
                                                    <div data-v-e4caeaf8="" class="stories-current-item-content">
                                                        <a data-v-e4caeaf8="" href="/petition/keep-uperclassmen-on-campus" target="_blank">
                                                            <h3 data-v-e4caeaf8="">A Win for Auburn University's Upperclassmen
                                                            </h3>
                                                            <p data-v-e4caeaf8="">
                                                            </p>
                                                            <div data-v-e4caeaf8="" class="featured-item-content-nav stories-current-item-content-nav">
                                                                <div data-v-e4caeaf8="" class="featured-item-content-nav-supporters">
                                                                    <img data-v-e4caeaf8="" src="/images/users.svg" alt="" />
                                                                    <span data-v-e4caeaf8="">714 supporters
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="0" aria-hidden="true" class="slick-slide" style="outline: none; width: 826px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" tabindex="-1" class="stories-current-item" style="width: 100%; display: inline-block;">
                                                    <div data-v-e4caeaf8="" class="stories-current-item-img">
                                                        <a data-v-e4caeaf8="" href="/petition/cfinns" target="_blank">
                                                            <img data-v-e4caeaf8="" src="https://cdn.ipetitions.com/content/success-stories/ufGrZcFROSIzFoxeN6kp_amelia steeves.jpg" alt="Cystic Fibrosis Screening for Newborns in Nova Scotia" />
                                                        </a>
                                                    </div>
                                                    <span data-v-e4caeaf8="" class="stories-current-item-tag">Sign
                                                    </span>
                                                    <div data-v-e4caeaf8="" class="stories-current-item-content">
                                                        <a data-v-e4caeaf8="" href="/petition/cfinns" target="_blank">
                                                            <h3 data-v-e4caeaf8="">Cystic Fibrosis Screening for Newborns in Nova Scotia
                                                            </h3>
                                                            <p data-v-e4caeaf8="">
                                                            </p>
                                                            <div data-v-e4caeaf8="" class="featured-item-content-nav stories-current-item-content-nav">
                                                                <div data-v-e4caeaf8="" class="featured-item-content-nav-supporters">
                                                                    <img data-v-e4caeaf8="" src="/images/users.svg" alt=""/>
                                                                        <span data-v-e4caeaf8="">2044 supporters
                                                                        </span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="1" aria-hidden="true" class="slick-slide" style="outline: none; width: 826px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" tabindex="-1" class="stories-current-item" style="width: 100%; display: inline-block;">
                                                    <div data-v-e4caeaf8="" class="stories-current-item-img">
                                                        <a data-v-e4caeaf8="" href="/petition/savecardiffridingschool" target="_blank">
                                                            <img data-v-e4caeaf8="" src="https://cdn.ipetitions.com/content/success-stories/qM2u012WQZOTLPTPshA0_wiz  and barney.jpg" alt="Cardiff Riding School Stays Open!"/>
                                                        </a>
                                                    </div>
                                                    <span data-v-e4caeaf8="" class="stories-current-item-tag">Sign
                                                    </span>
                                                    <div data-v-e4caeaf8="" class="stories-current-item-content">
                                                        <a data-v-e4caeaf8="" href="/petition/savecardiffridingschool" target="_blank">
                                                            <h3 data-v-e4caeaf8="">Cardiff Riding School Stays Open!
                                                            </h3>
                                                            <p data-v-e4caeaf8="">
                                                            </p>
                                                            <div data-v-e4caeaf8="" class="featured-item-content-nav stories-current-item-content-nav">
                                                                <div data-v-e4caeaf8="" class="featured-item-content-nav-supporters">
                                                                    <img data-v-e4caeaf8="" src="/images/users.svg" alt="" />
                                                                    <span data-v-e4caeaf8="">2821 supporters
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="2" aria-hidden="true" class="slick-slide" style="outline: none; width: 826px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" tabindex="-1" class="stories-current-item" style="width: 100%; display: inline-block;">
                                                    <div data-v-e4caeaf8="" class="stories-current-item-img">
                                                        <a data-v-e4caeaf8="" href="/petition/justice-for-barry-town-united" target="_blank">
                                                            <img data-v-e4caeaf8="" src="https://cdn.ipetitions.com/content/success-stories/35.png" alt="Division One football for Barry Town United"/>
                                                        </a>
                                                    </div>
                                                    <span data-v-e4caeaf8="" class="stories-current-item-tag">Sign
                                                    </span>
                                                    <div data-v-e4caeaf8="" class="stories-current-item-content">
                                                        <a data-v-e4caeaf8="" href="/petition/justice-for-barry-town-united" target="_blank">
                                                            <h3 data-v-e4caeaf8="">Division One football for Barry Town United
                                                            </h3>
                                                            <p data-v-e4caeaf8="">
                                                            </p>
                                                            <div data-v-e4caeaf8="" class="featured-item-content-nav stories-current-item-content-nav">
                                                                <div data-v-e4caeaf8="" class="featured-item-content-nav-supporters">
                                                                    <img data-v-e4caeaf8="" src="/images/users.svg" alt="" />
                                                                    <span data-v-e4caeaf8="">1403 supporters
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="3" aria-hidden="true" class="slick-slide" style="outline: none; width: 826px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" tabindex="-1" class="stories-current-item" style="width: 100%; display: inline-block;">
                                                    <div data-v-e4caeaf8="" class="stories-current-item-img">
                                                        <a data-v-e4caeaf8="" href="/petition/no-methadone-in-our-backyards" target="_blank">
                                                            <img data-v-e4caeaf8="" src="https://cdn.ipetitions.com/user-images/petitions/no-methadone-in-our-backyards/COUay5u9QaeXJnkXzFET_methadone.jpg" alt="Plans To Build Methadone Clinic Across From Park Thwarted"/>
                                                        </a>
                                                    </div>
                                                    <span data-v-e4caeaf8="" class="stories-current-item-tag">Sign
                                                    </span>
                                                    <div data-v-e4caeaf8="" class="stories-current-item-content">
                                                        <a data-v-e4caeaf8="" href="/petition/no-methadone-in-our-backyards" target="_blank">
                                                            <h3 data-v-e4caeaf8="">Plans To Build Methadone Clinic Across From Park Thwarted
                                                            </h3>
                                                            <p data-v-e4caeaf8="">
                                                            </p>
                                                            <div data-v-e4caeaf8="" class="featured-item-content-nav stories-current-item-content-nav">
                                                                <div data-v-e4caeaf8="" class="featured-item-content-nav-supporters">
                                                                    <img data-v-e4caeaf8="" src="/images/users.svg" alt="" />
                                                                    <span data-v-e4caeaf8="">1492 supporters
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="4" aria-hidden="true" class="slick-slide" style="outline: none; width: 826px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" tabindex="-1" class="stories-current-item" style="width: 100%; display: inline-block;">
                                                    <div data-v-e4caeaf8="" class="stories-current-item-img">
                                                        <a data-v-e4caeaf8="" href="/petition/save-the-dump-art" target="_blank">
                                                            <img data-v-e4caeaf8="" src="https://cdn.ipetitions.com/user-images/petitions/save-the-dump-art/91GlTCWoTKW9TgOwv4Gi_Artwork.JPG" alt="Art at community recycling center saved"/>
                                                        </a>
                                                    </div>
                                                    <span data-v-e4caeaf8="" class="stories-current-item-tag">Closed
                                                    </span>
                                                    <div data-v-e4caeaf8="" class="stories-current-item-content">
                                                        <a data-v-e4caeaf8="" href="/petition/save-the-dump-art" target="_blank">
                                                            <h3 data-v-e4caeaf8="">Art at community recycling center saved
                                                            </h3>
                                                            <p data-v-e4caeaf8="">
                                                            </p>
                                                            <div data-v-e4caeaf8="" class="featured-item-content-nav stories-current-item-content-nav">
                                                                <div data-v-e4caeaf8="" class="featured-item-content-nav-supporters">
                                                                    <img data-v-e4caeaf8="" src="/images/users.svg" alt="" />
                                                                    <span data-v-e4caeaf8="">231 supporters
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="5" aria-hidden="true" class="slick-slide" style="outline: none; width: 826px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" tabindex="-1" class="stories-current-item" style="width: 100%; display: inline-block;">
                                                    <div data-v-e4caeaf8="" class="stories-current-item-img">
                                                        <a data-v-e4caeaf8="" href="/petition/petition-against-the-southern-leagues-decision" target="_blank">
                                                            <img data-v-e4caeaf8="" src="https://cdn.ipetitions.com/user-images/petitions/petition-against-the-southern-leagues-decision/pTk6DofHSG24prScuJCI_Dale.jpeg" alt="AFC Rushden &amp; Diamonds to Retire Jersey in Honor of Goalkeeper"/>
                                                        </a>
                                                    </div>
                                                    <span data-v-e4caeaf8="" class="stories-current-item-tag">Victory
                                                    </span>
                                                    <div data-v-e4caeaf8="" class="stories-current-item-content">
                                                        <a data-v-e4caeaf8="" href="/petition/petition-against-the-southern-leagues-decision" target="_blank">
                                                            <h3 data-v-e4caeaf8="">AFC Rushden &amp; Diamonds to Retire Jersey in Honor of Goalkeeper
                                                            </h3>
                                                            <p data-v-e4caeaf8="">
                                                            </p>
                                                            <div data-v-e4caeaf8="" class="featured-item-content-nav stories-current-item-content-nav">
                                                                <div data-v-e4caeaf8="" class="featured-item-content-nav-supporters">
                                                                    <img data-v-e4caeaf8="" src="/images/users.svg" alt=""/>
                                                                        <span data-v-e4caeaf8="">4138 supporters
                                                                        </span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="6" aria-hidden="true" class="slick-slide" style="outline: none; width: 826px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" tabindex="-1" class="stories-current-item" style="width: 100%; display: inline-block;">
                                                    <div data-v-e4caeaf8="" class="stories-current-item-img">
                                                        <a data-v-e4caeaf8="" href="/petition/save-hidden-hills-2" target="_blank">
                                                            <img data-v-e4caeaf8="" src="https://cdn.ipetitions.com/user-images/petitions/save-hidden-hills-2/AUHDQyvwQDm7RvN9E29h_image.jpg" alt="Elementary School Remains Open Thanks To Petition"/>
                                                        </a>
                                                    </div>
                                                    <span data-v-e4caeaf8="" class="stories-current-item-tag">Sign
                                                    </span>
                                                    <div data-v-e4caeaf8="" class="stories-current-item-content">
                                                        <a data-v-e4caeaf8="" href="/petition/save-hidden-hills-2" target="_blank">
                                                            <h3 data-v-e4caeaf8="">Elementary School Remains Open Thanks To Petition
                                                            </h3>
                                                            <p data-v-e4caeaf8="">
                                                            </p>
                                                            <div data-v-e4caeaf8="" class="featured-item-content-nav stories-current-item-content-nav">
                                                                <div data-v-e4caeaf8="" class="featured-item-content-nav-supporters">
                                                                    <img data-v-e4caeaf8="" src="/images/users.svg" alt=""/>
                                                                        <span data-v-e4caeaf8="">31 supporters
                                                                        </span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="7" aria-hidden="true" class="slick-slide" style="outline: none; width: 826px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" tabindex="-1" class="stories-current-item" style="width: 100%; display: inline-block;">
                                                    <div data-v-e4caeaf8="" class="stories-current-item-img">
                                                        <a data-v-e4caeaf8="" href="/petition/mimis-bakehouse" target="_blank">
                                                            <img data-v-e4caeaf8="" src="https://cdn.ipetitions.com/user-images/petitions/mimis-bakehouse/kChI9PRfQfyXNtMfA4CL_IMG_1645.JPG" alt="Bakery Gets Approval From City Council"/>
                                                        </a>
                                                    </div>
                                                    <span data-v-e4caeaf8="" class="stories-current-item-tag">Sign
                                                    </span>
                                                    <div data-v-e4caeaf8="" class="stories-current-item-content">
                                                        <a data-v-e4caeaf8="" href="/petition/mimis-bakehouse" target="_blank">
                                                            <h3 data-v-e4caeaf8="">Bakery Gets Approval From City Council
                                                            </h3>
                                                            <p data-v-e4caeaf8="">
                                                            </p>
                                                            <div data-v-e4caeaf8="" class="featured-item-content-nav stories-current-item-content-nav">
                                                                <div data-v-e4caeaf8="" class="featured-item-content-nav-supporters">
                                                                    <img data-v-e4caeaf8="" src="/images/users.svg" alt=""/>
                                                                        <span data-v-e4caeaf8="">2251 supporters
                                                                        </span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="8" aria-hidden="false" class="slick-slide slick-active slick-current" style="outline: none; width: 826px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" tabindex="-1" class="stories-current-item" style="width: 100%; display: inline-block;">
                                                    <div data-v-e4caeaf8="" class="stories-current-item-img">
                                                        <a data-v-e4caeaf8="" href="/petition/free-speech-at-ed" target="_blank">
                                                            <img data-v-e4caeaf8="" src="https://cdn.ipetitions.com/user-images/petitions/free-speech-at-ed/Dr0HtQzVRczN3iGL0Hwu_sociology-free-speech-2-580x350.jpg" alt="Free Speech at the University of Edinburgh"/>
                                                        </a>
                                                    </div>
                                                    <span data-v-e4caeaf8="" class="stories-current-item-tag">Sign
                                                    </span>
                                                    <div data-v-e4caeaf8="" class="stories-current-item-content">
                                                        <a data-v-e4caeaf8="" href="/petition/free-speech-at-ed" target="_blank">
                                                            <h3 data-v-e4caeaf8="">Free Speech at the University of Edinburgh
                                                            </h3>
                                                            <p data-v-e4caeaf8="">
                                                            </p>
                                                            <div data-v-e4caeaf8="" class="featured-item-content-nav stories-current-item-content-nav">
                                                                <div data-v-e4caeaf8="" class="featured-item-content-nav-supporters">
                                                                    <img data-v-e4caeaf8="" src="/images/users.svg" alt=""/>
                                                                        <span data-v-e4caeaf8="">1421 supporters
                                                                        </span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="9" aria-hidden="true" class="slick-slide" style="outline: none; width: 826px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" tabindex="-1" class="stories-current-item" style="width: 100%; display: inline-block;">
                                                    <div data-v-e4caeaf8="" class="stories-current-item-img">
                                                        <a data-v-e4caeaf8="" href="/petition/keep-uperclassmen-on-campus" target="_blank">
                                                            <img data-v-e4caeaf8="" src="https://cdn.ipetitions.com/user-images/petitions/keep-uperclassmen-on-campus/GBePeP0TDOrj161vegwA_picture.JPG" alt="A Win for Auburn University's Upperclassmen"/>
                                                        </a>
                                                    </div>
                                                    <span data-v-e4caeaf8="" class="stories-current-item-tag">Sign
                                                    </span>
                                                    <div data-v-e4caeaf8="" class="stories-current-item-content">
                                                        <a data-v-e4caeaf8="" href="/petition/keep-uperclassmen-on-campus" target="_blank">
                                                            <h3 data-v-e4caeaf8="">A Win for Auburn University's Upperclassmen
                                                            </h3>
                                                            <p data-v-e4caeaf8="">
                                                            </p>
                                                            <div data-v-e4caeaf8="" class="featured-item-content-nav stories-current-item-content-nav">
                                                                <div data-v-e4caeaf8="" class="featured-item-content-nav-supporters">
                                                                    <img data-v-e4caeaf8="" src="/images/users.svg" alt=""/>
                                                                        <span data-v-e4caeaf8="">714 supporters
                                                                        </span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="10" aria-hidden="true" class="slick-slide slick-cloned" style="width: 826px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" tabindex="-1" class="stories-current-item" style="width: 100%; display: inline-block;">
                                                    <div data-v-e4caeaf8="" class="stories-current-item-img">
                                                        <a data-v-e4caeaf8="" href="/petition/cfinns" target="_blank">
                                                            <img data-v-e4caeaf8="" src="https://cdn.ipetitions.com/content/success-stories/ufGrZcFROSIzFoxeN6kp_amelia steeves.jpg" alt="Cystic Fibrosis Screening for Newborns in Nova Scotia"/>
                                                        </a>
                                                    </div>
                                                    <span data-v-e4caeaf8="" class="stories-current-item-tag">Sign
                                                    </span>
                                                    <div data-v-e4caeaf8="" class="stories-current-item-content">
                                                        <a data-v-e4caeaf8="" href="/petition/cfinns" target="_blank">
                                                            <h3 data-v-e4caeaf8="">Cystic Fibrosis Screening for Newborns in Nova Scotia
                                                            </h3>
                                                            <p data-v-e4caeaf8="">
                                                            </p>
                                                            <div data-v-e4caeaf8="" class="featured-item-content-nav stories-current-item-content-nav">
                                                                <div data-v-e4caeaf8="" class="featured-item-content-nav-supporters">
                                                                    <img data-v-e4caeaf8="" src="/images/users.svg" alt=""/>
                                                                        <span data-v-e4caeaf8="">2044 supporters
                                                                        </span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="11" aria-hidden="true" class="slick-slide slick-cloned" style="width: 826px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" tabindex="-1" class="stories-current-item" style="width: 100%; display: inline-block;">
                                                    <div data-v-e4caeaf8="" class="stories-current-item-img">
                                                        <a data-v-e4caeaf8="" href="/petition/savecardiffridingschool" target="_blank">
                                                            <img data-v-e4caeaf8="" src="https://cdn.ipetitions.com/content/success-stories/qM2u012WQZOTLPTPshA0_wiz  and barney.jpg" alt="Cardiff Riding School Stays Open!"/>
                                                        </a>
                                                    </div>
                                                    <span data-v-e4caeaf8="" class="stories-current-item-tag">Sign
                                                    </span>
                                                    <div data-v-e4caeaf8="" class="stories-current-item-content">
                                                        <a data-v-e4caeaf8="" href="/petition/savecardiffridingschool" target="_blank">
                                                            <h3 data-v-e4caeaf8="">Cardiff Riding School Stays Open!
                                                            </h3>
                                                            <p data-v-e4caeaf8="">
                                                            </p>
                                                            <div data-v-e4caeaf8="" class="featured-item-content-nav stories-current-item-content-nav">
                                                                <div data-v-e4caeaf8="" class="featured-item-content-nav-supporters">
                                                                    <img data-v-e4caeaf8="" src="/images/users.svg" alt=""/>
                                                                        <span data-v-e4caeaf8="">2821 supporters
                                                                        </span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="12" aria-hidden="true" class="slick-slide slick-cloned" style="width: 826px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" tabindex="-1" class="stories-current-item" style="width: 100%; display: inline-block;">
                                                    <div data-v-e4caeaf8="" class="stories-current-item-img">
                                                        <a data-v-e4caeaf8="" href="/petition/justice-for-barry-town-united" target="_blank">
                                                            <img data-v-e4caeaf8="" src="https://cdn.ipetitions.com/content/success-stories/35.png" alt="Division One football for Barry Town United"/>
                                                        </a>
                                                    </div>
                                                    <span data-v-e4caeaf8="" class="stories-current-item-tag">Sign
                                                    </span>
                                                    <div data-v-e4caeaf8="" class="stories-current-item-content">
                                                        <a data-v-e4caeaf8="" href="/petition/justice-for-barry-town-united" target="_blank">
                                                            <h3 data-v-e4caeaf8="">Division One football for Barry Town United
                                                            </h3>
                                                            <p data-v-e4caeaf8="">
                                                            </p>
                                                            <div data-v-e4caeaf8="" class="featured-item-content-nav stories-current-item-content-nav">
                                                                <div data-v-e4caeaf8="" class="featured-item-content-nav-supporters">
                                                                    <img data-v-e4caeaf8="" src="/images/users.svg" alt=""/>
                                                                        <span data-v-e4caeaf8="">1403 supporters
                                                                        </span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="13" aria-hidden="true" class="slick-slide slick-cloned" style="width: 826px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" tabindex="-1" class="stories-current-item" style="width: 100%; display: inline-block;">
                                                    <div data-v-e4caeaf8="" class="stories-current-item-img">
                                                        <a data-v-e4caeaf8="" href="/petition/no-methadone-in-our-backyards" target="_blank">
                                                            <img data-v-e4caeaf8="" src="https://cdn.ipetitions.com/user-images/petitions/no-methadone-in-our-backyards/COUay5u9QaeXJnkXzFET_methadone.jpg" alt="Plans To Build Methadone Clinic Across From Park Thwarted"/>
                                                        </a>
                                                    </div>
                                                    <span data-v-e4caeaf8="" class="stories-current-item-tag">Sign
                                                    </span>
                                                    <div data-v-e4caeaf8="" class="stories-current-item-content">
                                                        <a data-v-e4caeaf8="" href="/petition/no-methadone-in-our-backyards" target="_blank">
                                                            <h3 data-v-e4caeaf8="">Plans To Build Methadone Clinic Across From Park Thwarted
                                                            </h3>
                                                            <p data-v-e4caeaf8="">
                                                            </p>
                                                            <div data-v-e4caeaf8="" class="featured-item-content-nav stories-current-item-content-nav">
                                                                <div data-v-e4caeaf8="" class="featured-item-content-nav-supporters">
                                                                    <img data-v-e4caeaf8="" src="/images/users.svg" alt=""/>
                                                                        <span data-v-e4caeaf8="">1492 supporters
                                                                        </span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="14" aria-hidden="true" class="slick-slide slick-cloned" style="width: 826px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" tabindex="-1" class="stories-current-item" style="width: 100%; display: inline-block;">
                                                    <div data-v-e4caeaf8="" class="stories-current-item-img">
                                                        <a data-v-e4caeaf8="" href="/petition/save-the-dump-art" target="_blank">
                                                            <img data-v-e4caeaf8="" src="https://cdn.ipetitions.com/user-images/petitions/save-the-dump-art/91GlTCWoTKW9TgOwv4Gi_Artwork.JPG" alt="Art at community recycling center saved"/>
                                                        </a>
                                                    </div>
                                                    <span data-v-e4caeaf8="" class="stories-current-item-tag">Closed
                                                    </span>
                                                    <div data-v-e4caeaf8="" class="stories-current-item-content">
                                                        <a data-v-e4caeaf8="" href="/petition/save-the-dump-art" target="_blank">
                                                            <h3 data-v-e4caeaf8="">Art at community recycling center saved
                                                            </h3>
                                                            <p data-v-e4caeaf8="">
                                                            </p>
                                                            <div data-v-e4caeaf8="" class="featured-item-content-nav stories-current-item-content-nav">
                                                                <div data-v-e4caeaf8="" class="featured-item-content-nav-supporters">
                                                                    <img data-v-e4caeaf8="" src="/images/users.svg" alt=""/>
                                                                        <span data-v-e4caeaf8="">231 supporters
                                                                        </span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="15" aria-hidden="true" class="slick-slide slick-cloned" style="width: 826px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" tabindex="-1" class="stories-current-item" style="width: 100%; display: inline-block;">
                                                    <div data-v-e4caeaf8="" class="stories-current-item-img">
                                                        <a data-v-e4caeaf8="" href="/petition/petition-against-the-southern-leagues-decision" target="_blank">
                                                            <img data-v-e4caeaf8="" src="https://cdn.ipetitions.com/user-images/petitions/petition-against-the-southern-leagues-decision/pTk6DofHSG24prScuJCI_Dale.jpeg" alt="AFC Rushden &amp; Diamonds to Retire Jersey in Honor of Goalkeeper"/>
                                                        </a>
                                                    </div>
                                                    <span data-v-e4caeaf8="" class="stories-current-item-tag">Victory
                                                    </span>
                                                    <div data-v-e4caeaf8="" class="stories-current-item-content">
                                                        <a data-v-e4caeaf8="" href="/petition/petition-against-the-southern-leagues-decision" target="_blank">
                                                            <h3 data-v-e4caeaf8="">AFC Rushden &amp; Diamonds to Retire Jersey in Honor of Goalkeeper
                                                            </h3>
                                                            <p data-v-e4caeaf8="">
                                                            </p>
                                                            <div data-v-e4caeaf8="" class="featured-item-content-nav stories-current-item-content-nav">
                                                                <div data-v-e4caeaf8="" class="featured-item-content-nav-supporters">
                                                                    <img data-v-e4caeaf8="" src="/images/users.svg" alt=""/>
                                                                        <span data-v-e4caeaf8="">4138 supporters
                                                                        </span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="16" aria-hidden="true" class="slick-slide slick-cloned" style="width: 826px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" tabindex="-1" class="stories-current-item" style="width: 100%; display: inline-block;">
                                                    <div data-v-e4caeaf8="" class="stories-current-item-img">
                                                        <a data-v-e4caeaf8="" href="/petition/save-hidden-hills-2" target="_blank">
                                                            <img data-v-e4caeaf8="" src="https://cdn.ipetitions.com/user-images/petitions/save-hidden-hills-2/AUHDQyvwQDm7RvN9E29h_image.jpg" alt="Elementary School Remains Open Thanks To Petition"/>
                                                        </a>
                                                    </div>
                                                    <span data-v-e4caeaf8="" class="stories-current-item-tag">Sign
                                                    </span>
                                                    <div data-v-e4caeaf8="" class="stories-current-item-content">
                                                        <a data-v-e4caeaf8="" href="/petition/save-hidden-hills-2" target="_blank">
                                                            <h3 data-v-e4caeaf8="">Elementary School Remains Open Thanks To Petition
                                                            </h3>
                                                            <p data-v-e4caeaf8="">
                                                            </p>
                                                            <div data-v-e4caeaf8="" class="featured-item-content-nav stories-current-item-content-nav">
                                                                <div data-v-e4caeaf8="" class="featured-item-content-nav-supporters">
                                                                    <img data-v-e4caeaf8="" src="/images/users.svg" alt=""/>
                                                                        <span data-v-e4caeaf8="">31 supporters
                                                                        </span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="17" aria-hidden="true" class="slick-slide slick-cloned" style="width: 826px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" tabindex="-1" class="stories-current-item" style="width: 100%; display: inline-block;">
                                                    <div data-v-e4caeaf8="" class="stories-current-item-img">
                                                        <a data-v-e4caeaf8="" href="/petition/mimis-bakehouse" target="_blank">
                                                            <img data-v-e4caeaf8="" src="https://cdn.ipetitions.com/user-images/petitions/mimis-bakehouse/kChI9PRfQfyXNtMfA4CL_IMG_1645.JPG" alt="Bakery Gets Approval From City Council"/>
                                                        </a>
                                                    </div>
                                                    <span data-v-e4caeaf8="" class="stories-current-item-tag">Sign
                                                    </span>
                                                    <div data-v-e4caeaf8="" class="stories-current-item-content">
                                                        <a data-v-e4caeaf8="" href="/petition/mimis-bakehouse" target="_blank">
                                                            <h3 data-v-e4caeaf8="">Bakery Gets Approval From City Council
                                                            </h3>
                                                            <p data-v-e4caeaf8="">
                                                            </p>
                                                            <div data-v-e4caeaf8="" class="featured-item-content-nav stories-current-item-content-nav">
                                                                <div data-v-e4caeaf8="" class="featured-item-content-nav-supporters">
                                                                    <img data-v-e4caeaf8="" src="/images/users.svg" alt=""/>
                                                                        <span data-v-e4caeaf8="">2251 supporters
                                                                        </span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="18" aria-hidden="true" class="slick-slide slick-cloned" style="width: 826px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" tabindex="-1" class="stories-current-item" style="width: 100%; display: inline-block;">
                                                    <div data-v-e4caeaf8="" class="stories-current-item-img">
                                                        <a data-v-e4caeaf8="" href="/petition/free-speech-at-ed" target="_blank">
                                                            <img data-v-e4caeaf8="" src="https://cdn.ipetitions.com/user-images/petitions/free-speech-at-ed/Dr0HtQzVRczN3iGL0Hwu_sociology-free-speech-2-580x350.jpg" alt="Free Speech at the University of Edinburgh"/>
                                                        </a>
                                                    </div>
                                                    <span data-v-e4caeaf8="" class="stories-current-item-tag">Sign
                                                    </span>
                                                    <div data-v-e4caeaf8="" class="stories-current-item-content">
                                                        <a data-v-e4caeaf8="" href="/petition/free-speech-at-ed" target="_blank">
                                                            <h3 data-v-e4caeaf8="">Free Speech at the University of Edinburgh
                                                            </h3>
                                                            <p data-v-e4caeaf8="">
                                                            </p>
                                                            <div data-v-e4caeaf8="" class="featured-item-content-nav stories-current-item-content-nav">
                                                                <div data-v-e4caeaf8="" class="featured-item-content-nav-supporters">
                                                                    <img data-v-e4caeaf8="" src="/images/users.svg" alt=""/>
                                                                        <span data-v-e4caeaf8="">1421 supporters
                                                                        </span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-e4caeaf8="" tabindex="-1" data-index="19" aria-hidden="true" class="slick-slide slick-cloned" style="width: 826px;">
                                            <div data-v-e4caeaf8="">
                                                <div data-v-e4caeaf8="" tabindex="-1" class="stories-current-item" style="width: 100%; display: inline-block;">
                                                    <div data-v-e4caeaf8="" class="stories-current-item-img">
                                                        <a data-v-e4caeaf8="" href="/petition/keep-uperclassmen-on-campus" target="_blank">
                                                            <img data-v-e4caeaf8="" src="https://cdn.ipetitions.com/user-images/petitions/keep-uperclassmen-on-campus/GBePeP0TDOrj161vegwA_picture.JPG" alt="A Win for Auburn University's Upperclassmen"/>
                                                        </a>
                                                    </div>
                                                    <span data-v-e4caeaf8="" class="stories-current-item-tag">Sign
                                                    </span>
                                                    <div data-v-e4caeaf8="" class="stories-current-item-content">
                                                        <a data-v-e4caeaf8="" href="/petition/keep-uperclassmen-on-campus" target="_blank">
                                                            <h3 data-v-e4caeaf8="">A Win for Auburn University's Upperclassmen
                                                            </h3>
                                                            <p data-v-e4caeaf8="">
                                                            </p>
                                                            <div data-v-e4caeaf8="" class="featured-item-content-nav stories-current-item-content-nav">
                                                                <div data-v-e4caeaf8="" class="featured-item-content-nav-supporters">
                                                                    <img data-v-e4caeaf8="" src="/images/users.svg" alt=""/>
                                                                        <span data-v-e4caeaf8="">714 supporters
                                                                        </span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button data-v-21137603="" data-v-3d1a4f76="" type="button" data-role="none" class="slick-arrow slick-next" style="display: block;">Next
                                </button>
                                <ul data-v-3d1a4f76="" class="slick-dots" style="display: block;">
                                    <li class="">
                                        <button>1
                                        </button>
                                    </li>
                                    <li class="">
                                        <button>2
                                        </button>
                                    </li>
                                    <li class="">
                                        <button>3
                                        </button>
                                    </li>
                                    <li class="">
                                        <button>4
                                        </button>
                                    </li>
                                    <li class="">
                                        <button>5
                                        </button>
                                    </li>
                                    <li class="">
                                        <button>6
                                        </button>
                                    </li>
                                    <li class="">
                                        <button>7
                                        </button>
                                    </li>
                                    <li class="">
                                        <button>8
                                        </button>
                                    </li>
                                    <li class="slick-active">
                                        <button>9
                                        </button>
                                    </li>
                                    <li class="">
                                        <button>10
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div class="stories-current-arrows">
                                <div class="stories-current-arrows-item prev">
                                    <img src="/images/arrow.svg" alt=""/>
                                </div>
                                <div class="stories-current-arrows-item next">
                                    <img src="/images/arrow.svg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section class="featured">
                <div class="container">
                    <h2>Featured Petitions</h2>
                    <div class="featured-items">
                        <div class="featured-item">
                            <div class="featured-item-img">
                                <img src="https://cdn.ipetitions.com/user-images/petitions/keeping-illinois-kids-safe/featured-c9ea72dc2d1160f31351653369510671.jpg" alt="Keeping Illinois kids safe" />
                                <div class="featured-item-img-sign"><a href="/petition/keeping-illinois-kids-safe?utm_source=ipetitions&amp;utm_medium=homepage&amp;utm_campaign=featured" target="_blank" class="btn">Sign</a>
                                </div>
                            </div>
                            <div class="featured-item-content">
                                <h4>Keeping Illinois kids safe</h4>
                                <p>Ensuring our kids come home from school everyday! </p>
                                <div class="featured-item-content-nav">
                                    <div class="featured-item-content-nav-supporters">
                                        <img src="/images/users.svg" alt="" />
                                        <span>64 supporters</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="featured-item">
                            <div class="featured-item-img">
                                <img src="https://cdn.ipetitions.com/user-images/petitions/unexplained-house-wmurdaugh-connections/featured-a4e92bc1f9eec42c3ac36d87d96a5440.jpg" alt="House fire " />
                                <div class="featured-item-img-sign">
                                    <a href="/petition/unexplained-house-wmurdaugh-connections?utm_source=ipetitions&amp;utm_medium=homepage&amp;utm_campaign=featured" target="_blank" class="btn">Sign</a>
                                </div>
                            </div>
                            <div class="featured-item-content">
                                <h4>House fire </h4>
                                <p>Murdaugh cronies appear to  squash investigation of deadly house fire, arson for insurance plot, all to help an old friend struggling financially.  A child nearly died. </p>
                                <div class="featured-item-content-nav">
                                    <div class="featured-item-content-nav-supporters">
                                        <img src="/images/users.svg" alt="" />
                                        <span>18 supporters</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="featured-item">
                            <div class="featured-item-img">
                                <img src="https://cdn.ipetitions.com/assets/v4/images/default/petitionsThumbs/23.jpg" alt="Do not deport Mehmet Aktas &amp; Najiba Aliyeva-Aktash!" />
                                <div class="featured-item-img-sign">
                                    <a href="/petition/do-not-deport-mehmet-aktas-najiba?utm_source=ipetitions&amp;utm_medium=homepage&amp;utm_campaign=featured" target="_blank" class="btn">Sign</a>
                                </div>
                            </div>
                            <div class="featured-item-content">
                                <h4>Do not deport Mehmet Aktas &amp; Najiba Aliyeva-Aktash!</h4>
                                <p>With this letter, we petition to honorable Prime Minister, CBSA, IRCC and every other authority related to this matter to keep the family of Mehmet &amp; Najiba in Canada.</p>
                                <div class="featured-item-content-nav">
                                    <div class="featured-item-content-nav-supporters">
                                        <img src="/images/users.svg" alt="" />
                                        <span>245 supporters</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="featured-item">
                            <div class="featured-item-img">
                                <img src="https://cdn.ipetitions.com/user-images/petitions/abolish-osha/featured-74345bd70b8bd96a76be99068a622155.jpg" alt="ABOLISH OSHA" />
                                <div class="featured-item-img-sign">
                                    <a href="/petition/abolish-osha?utm_source=ipetitions&amp;utm_medium=homepage&amp;utm_campaign=featured" target="_blank" class="btn">Sign</a>
                                </div>
                            </div>
                            <div class="featured-item-content">
                                <h4>ABOLISH OSHA</h4>
                                <p>Please sign this petition to hold the federal agents from OSHA accountable and reform/abolish the power and involvement of this federal agency.</p>
                                <div class="featured-item-content-nav">
                                    <div class="featured-item-content-nav-supporters">
                                        <img src="/images/users.svg" alt="" />
                                        <span>48 supporters</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="featured-item">
                            <div class="featured-item-img">
                                <img src="https://cdn.ipetitions.com/user-images/petitions/save-garth-olwg-care-home/featured-0442438a27e31283b6cc0adf5e78cbea.jpg" alt="Save Garth Olwg Care Home" />
                                <div class="featured-item-img-sign">
                                    <a href="/petition/save-garth-olwg-care-home?utm_source=ipetitions&amp;utm_medium=homepage&amp;utm_campaign=featured" target="_blank" class="btn">Sign</a>
                                </div>
                            </div>
                            <div class="featured-item-content">
                                <h4>Save Garth Olwg Care Home</h4>
                                <p>We call on Rhonda Cynon Taff Council to reverse their decision to repurpose the Care Home in Church Village forcing residents to relocate from our community, the community they call home </p>
                                <div class="featured-item-content-nav">
                                    <div class="featured-item-content-nav-supporters">
                                        <img src="/images/users.svg" alt="" />
                                        <span>309 supporters</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="" class="btn orange light featured-more">More</a>
                </div>
            </section>
            <section class="news">
                <img src="/images/hero-map.svg" alt="" class="news-bcg" />
                <div class="container">
                    <h2>iPetitions in the News</h2>
                    <div class="news-logos">
                        <div class="news-logo">
                            <img src="/images/cnn.png" alt="cnn" />
                        </div> <div class="news-logo">
                            <img src="/images/nyt.png" alt="nyt" />
                        </div> <div class="news-logo">
                            <img src="/images/ap.png" alt="associated Press" />
                        </div> <div class="news-logo">
                            <img src="/images/bbc.png" alt="bbc" />
                        </div>
                        <div class="news-logo">
                            <img src="/images/newsweek.png" alt="newsweek" />
                        </div>
                        <div class="news-logo">
                            <img src="/images/cbs.png" alt="cbs" />
                        </div>
                        <div class="news-logo">
                            <img src="/images/fox-news.png" alt="fox-news" />
                        </div>
                        <div class="news-logo">
                            <img src="/images/nbc-universal.svg" alt="nbc-universal" />
                        </div>
                        <div class="news-logo">
                            <img src="/images/lifeSite.png" alt="lifeSite" />
                        </div>
                        <div class="news-logo">
                            <img src="/images/usa-today.png" alt="usa-today" />
                        </div>
                        <div class="news-logo">
                            <img src="/images/unesco.png" alt="unesco" />
                        </div>
                    </div>
                </div>
            </section>
            <footer class="footer">
                <div class="container">
                    <div class="footer-description">
                        <div class="footer-logo">
                            <img src="/images/logo.png" alt="iPetitions" />
                        </div>
                        <p>
                            <span>
                                iPetitions
                            </span>
                            is a product of Angle Three Associates, LLC, a Delaware company.
                            All content Copyright iPetitions.
                        </p>
                    </div>
                    <ul class="footer-menu">
                        <li>
                            <a href="/faq">
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a href="/about">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/contact">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="/privacy">
                                Privacy
                            </a>
                        </li>
                        <li>
                            <a href="/terms-of-use">
                                Terms of Use
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Homepage;