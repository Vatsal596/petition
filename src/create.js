import React from "react";
import "./create.css";

function Create() {
    return (
        <div>
            <header>
                <a href="/" class="logo"></a>


                <nav>
                    <ul class="userlinks">
                        <li class="login">Please <a href="/login">Sign In</a> or <a
                            href="/register">Join</a></li>
                    </ul>
                </nav>
                <div class="user_status">You are not logged in.</div>

                <ul class="social_links">
                    <li>FOLLOW US:</li>
                    <li><a class="icon-facebook" href="https://www.facebook.com/ipetitions" title="iPetitions on Facebook"
                        target="_blank"></a></li>
                    <li><a class="icon-twitter" href="https://twitter.com/ipetitions" title="iPetitions on Twitter"
                        target="_blank"></a></li>
                </ul>

            </header>


            <div id="content">

                <div id="createpet">

                    <div class="headline-wrapper">
                        <h1>Create a petition</h1>
                        <div class="headline">
                            <p>Create a powerful online petition in just minutes. Our system is flexible, customizable, and
                                easy to use. Best of all, it's free!</p>
                            <p>Start by filling out this form, and in a few minutes you'll be ready to collect thousands of
                                signatures.</p>
                        </div>
                    </div>


                    <div class="createpet_form">
                        {/* <fieldset> */}

                        <input type="hidden" name="jwt" value="9Uqn+DO3dyKcEvZqTYF703E3RW5TSzQ3TGZHZ3d3R01SV2h3bWdVbmp0UTZQclZydWR2RG1uakNEQ2JESTBTNjJpSGN4a3dTaFMxbDJ0dHluT1FNajUzQm53cWNNVjlrNHdLYmNBOFZNc2ZLZFBONXI2NjFIalUrK3o2VHhVTWpHaGRnMkg3Q1lJYWhEUWRrbm81VTFDY05xbGZUNmtuNU0zaG02bE56ajdOWnpGcVdQc2dteDBFMzFwaCt5SzZ5aW1BbWprVmZVMWhZeng4eTZ6QXVVOEZtdG5PQjlnWEN0VUZyZ2NhZk9YUC9qeDZLRHJDUnY1eGNUUVExSDJYYnA0cVMvbU5mOUlmWDJJYXpiazkzam5GaFZ0Nnl0YmVZQWc1Zld0a1A2c2wvMXlQRkZDSVgwRktJSUQ1OFFOa1NDM3BqMjFuYituQk9MSWEwMXFCUzRwSklHSTBkaDBWS3g3ZHNrekpjMmFjeS9FRk5UbmZTSnZQSm52QT0=" />

                        <section class="pet_title">

                            <label for="QuestionnaireForm_title" class="required">Petition title <span class="required">*</span></label>          <p><i>Something catchy and not too long</i></p>
                            <div>
                                <input name="QuestionnaireForm[title]" id="QuestionnaireForm_title" type="text" maxlength="150" />			  <div class="errorMessage" id="QuestionnaireForm_title_em_" style={{ display: "none" }}></div>          </div>
                        </section>

                        <section class="pet_title">
                            <label for="QuestionnaireForm_name" class="required">Web address <span class="required">*</span></label>          <p><i>Keep it short and include the most important words from your title</i></p>
                            <div class="pet_address">
                                https://www.ipetitions.com/petition/<span
                                    id="petition_url"></span> <a href="#"
                                        id="change_url"
                                        class="hidden"
                                        tabindex="-1">edit</a>


                                <input tabindex="-1" class="hidden" name="QuestionnaireForm[name]" id="QuestionnaireForm_name" type="text" maxlength="50" />			  <div class="errorMessage" id="QuestionnaireForm_name_em_" style={{ display: "none" }}></div>          </div>
                        </section>

                        <section class="pet_description">
                            <label for="QuestionnaireForm_body" class="required">Petition text <span class="required">*</span></label>          <p><i>Don't worry if you don't have final text ready now. You can always fine tune it later.</i>
                            </p>
                            <div>

                                <textarea class="wysiwyg" name="QuestionnaireForm[body]" id="QuestionnaireForm_body"></textarea>			  <div class="errorMessage" id="QuestionnaireForm_body_em_" style={{ display: "none" }}></div>          </div>
                        </section>




                        <section class="submit_btn buttons blue">
                            <input id="js-submit-petition-delayed-image" type="submit" name="yt0" value="PUBLISH PETITION" />
                            <div id="petition-creation" ></div>
                        </section>



                    </div>
                    <aside style=
                        {{
                            border: "none",
                            marginTop: "-130px"
                        }}
                    >
                        <h2>Create a Free Petition</h2>
                    </aside>
                    <aside>
                        <p>Your petition will do well here. Our petitions have collected millions of signatures, and have been
                            featured on CNN, BBC, Fox, and other news outlets.
                            We'll make sure your voice counts!</p>
                        <p>Want to see what your petition will look like? See a <a href="#" data-modal-id="sample_pet"
                            class="sample-petition-button">sample
                            petition</a>.</p>

                        <dl>
                            <dt><h3>Why choose iPetitions</h3></dt>
                            <dd class="icon-ok">Integrate with Facebook</dd>
                            <dd class="icon-ok">Filter duplicate signatures</dd>
                            <dd class="icon-ok">Access and download real-time data</dd>
                        </dl>
                    </aside>

                    <div id="sample_pet" class="modal" style={{display:"none"}}>
                        <h1>Sample Petition</h1>
                        <a class="close-modal">&#215;</a>
                    </div>
                </div>

            </div>
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

export default Create;

