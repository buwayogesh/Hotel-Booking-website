function signin(){
    document.querySelector('.container-md').remove();
    document.querySelector('.navbar').remove();
    document.querySelector(".container-fluid").style.backgroundImage = "none";

    const formcontainer = document.createElement('div')
    formcontainer.id = "signinform";
    formcontainer.className = "container-fluid d-flex justify-content-center align-items-center"
    formcontainer.style.height = "100vh"
    let html = '';
        html += buildLogIn();

    formcontainer.innerHTML = html;
    let signContainer = document.querySelector('.hero-bg-container');
    signContainer.appendChild(formcontainer)



}
function buildLogIn(){
    return`
    <div class="card mt-4" style="width: 20rem; border: none;">
        <form>
            <!-- Email input -->
            <div class="form-outline mb-2">
                <label class="form-label" for="form2Example1">Email address</label>
                <input type="email" id="form2Example1" class="form-control email" onfocus="hideErroremail()" style="border:2px solid black;"/>
                <span class="error-email" style="color:red"></span>
            </div>
    
            <!-- Password input -->
            <div class="form-outline mb-2">
                <label class="form-label" for="form2Example2">Password</label>
                <input type="password" id="form2Example2" class="form-control password" onfocus="hideErrorPass()" style="border:2px solid black;"/>
                <span class="error-password" style="color:red"></span>
            </div>
    
            <!-- Submit button -->
            <div class="submit-btn d-flex justify-content-center">
                <button type="button" onclick="login()" class="btn btn-primary btn-block mb-2 mt-2">Log In</button>
            </div>
        </form>
    </div>
    `
}
function hideErroremail(){
    document.querySelector('.error-email').innerHTML = "";
}
function hideErrorPass(){
    document.querySelector('.error-password').innerHTML = "";
}

function login(){

    let email = document.querySelector('.email').value;
    let password = document.querySelector('.password').value;

   if(!email){
    document.querySelector('.error-email').innerHTML = "Please Fill Your Email Adress";
   }
   if(!password){
    document.querySelector('.error-password').innerHTML = "Please Fill Your Password";
   }

    // document.querySelector("#signinform").remove();
}