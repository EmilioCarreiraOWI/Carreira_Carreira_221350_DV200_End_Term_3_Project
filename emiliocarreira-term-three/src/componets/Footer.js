import React from "react";
import 'bootstrap/dist/css/bootstrap.css';




function BasicFooter() {

    return(
        <footer class="bg-dark text-center text-white mt-5">
  
            <div class="container p-4 pb-0">
                
                <section class="mb-4">
                
                <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/EmilioCarreiraOWI/Carreira_Carreira_221350_DV200_End_Term_3_Project.git" role="button">
                    <i>Github</i>
                </a>

                <a class="btn btn-outline-light btn-floating m-1" href="https://drive.google.com/drive/folders/19DShEbLluF897zkaYhx2t56S5FGAczHW?usp=sharing" role="button"
                    ><i class="fab fa-twitter">Google Drive</i
                ></a>

                </section>
                
            </div>
            

            
            <div class="text-center p-3">
                © 2020 Copyright:
                <a class="text-white" href="https://mdbootstrap.com/"> MDBootstrap.com</a>
            </div>
            
        </footer>
    )
}

export default BasicFooter;