window.onload=function () {
  render();
};
function render() {
    window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}
function phoneAuth(event) {
    //get the number
    var number=document.getElementById('number').value;
    //phone number authentication function of firebase
    //it takes two parameter first one is number,,,second one is recaptcha
    firebase.auth().signInWithPhoneNumber(number,window.recaptchaVerifier).then(function (confirmationResult) {
        //s is in lowercase
        window.confirmationResult=confirmationResult;
        coderesult=confirmationResult;
        console.log(coderesult);
        alert("Message sent");
    }).catch(function (error) {
        alert(error.message);
    });
}
function codeverify(event) {
    var code=document.getElementById('verificationCode').value;
    coderesult.confirm(code).then(function (result) {
        alert("Successfully registered");
        var user=result.user;
        sessionStorage.setItem("user", user);
        window.location.href = "/recordvoice.html";
        
        console.log(user);
    }).catch(function (error) {
        alert(error.message);
    });
}

var firebaseConfig = {
    apiKey: "AIzaSyDwA997ITDARiyS7-5fTuLcyIeQ23MCeYU",
    authDomain: "website-adcb6.firebaseapp.com",
    projectId: "website-adcb6",
    storageBucket: "website-adcb6.appspot.com",
    messagingSenderId: "42596076784",
    appId: "1:42596076784:web:2e7a650dcbd550f646c635",
    measurementId: "G-VZQC8QBEWR"
  };