/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function login(){
        var loginButton = document.getElementById('loginButton');
        loginButton.addEventListener('click',function(){
            console.log('Login button clicked');
            
            }
        );
//        $("#loginButton").click(function(){
//            var username = $("#loginName").val();
//            var password = $("#loginPassword").val();
//            var xhr = new XMLHttpRequest();
//            if (username && password) {
////                $.post(
////                    '/login',
////                    {username: username, password:password},
////                    function () {
////                        window.location = "/profile";
////                    }
////                ).fail(function(res){
////                    alert("Error: " + res.getResponseHeader("error"));
////                });
//                xhr.open('POST', '/login',true);
//                xhr.onload = function(e){
//                  if (this.status === 200){
//                      console.log(this.responseText);
//                    }
//                };
//                
//                xhr.send(username,password);
//            } 
//            
//            else {
//                alert("A username and password is required");
//            }
//        });
    }

//        $("#signupButton").click(function(){
//        var username = $("#signupName").val();
//        var password = $("#signupPassword").val();
//        var confirmPassword = $("#signupConfirmPassword").val();
//        if (username && password) {
//            if (password === confirmPassword) {
//                $.post(
//                    '/signup',
//                    {username: username, password:password},
//                    function () {
//                        window.location = "/profile";
//                    }
//                ).fail(function(res){
//                    alert("Error: " + res.getResponseHeader("error"));
//                });
//            } else {
//                alert("Passwords don't match");
//            }   
//        } else {
//            alert("A username and password is required");
//        }
//    });


