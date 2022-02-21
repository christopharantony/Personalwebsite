function validater(){
    var checker=0
    var nameValue = $("#contactName").val()
    var nameRegex = /^[a-zA-Z]+(\s?[a-zA-Z]+)*$/
    var mailValue = $("#contactEmail").val()
    var mailRegex =/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    var numValue = $("#contactNumber").val()
    var numRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/
    var msgValue = $("#contactMessage").val()
    var msgRegex = /^\w(\w(\.{1}|\s{1})?)+\w$/

    nameChecker()
    mailChecker()
    numChecker()
    msgChecker()


    function nameChecker(){

        if(nameValue==""){
            $("#contactName1").show()
            $("#contactName1").text("Name is mandatory")
        }else if(nameValue.length<3||nameValue.length>20){
            $("#contactName1").show()
            $("#contactName1").text("Please enter a valid Name")
        }else if(!nameValue.match(nameRegex)){
            $("#contactName1").show()
            $("#contactName1").text("Only characters are allowed")
        }else{
            $("#contactName1").hide()
            checker+=1
        }
    }

    function mailChecker(){
        if(mailValue==""){
            $("#contactEmail1").show()
            $("#contactEmail1").html("Email ID is required")
        }else if(!mailValue.match(mailRegex)){
            $("#contactEmail1").show()
            $("#contactEmail1").html("Please enter a valid Email ID")
        }else{
            $("#contactEmail1").hide()
            checker+=1
        }

    }

    function numChecker(){
        if(numValue==""){
            $("#contactNumber1").show()
            $("#contactNumber1").text("This field is required")
        }else if(numValue.length!=10){
            $("#contactNumber1").show()
            $("#contactNumber1").text("Enter 10 digits")
        }else if(!numValue.match(numRegex)){
            $("#contactNumber1").show()
            $("#contactNumber1").text("Only Number are allowed")
        }else{
            $("#contactNumber1").hide()
            checker+=1
        }
    }

    function msgChecker(){
        if (msgValue=="" || !msgValue.match(nameRegex)){
            $("#contactMessage1").show()
            $("#contactMessage1").text("Please enter any message")
        }else if(msgValue.length<16){
            $("#contactMessage1").show()
            $("#contactMessage1").text("Please enter atleast 15 characters")

        }else if(!msgValue.match(msgRegex)){
            $("#contactMessage1").show()
            $("#contactMessage1").text("Invalid Message")
        }else{
            $("#contactMessage1").hide()
            checker+=1
        }
    }

    if (checker==4){
        return true
    }else{
        return false
    }

}


$("#contactForm").submit((e)=>{

  e.preventDefault()
  $.ajax({
      url:"https://script.google.com/macros/s/AKfycbyP0b-H7u8u6l1fkLhpbNTMPmEQCbWKitl8acz5xMSd6doRxAhoRcPoRMHTP60vWhny/exec",
      data:$("#contactForm").serialize(),
      method:"post",
      success:function (response){
          alert("Form submitted successfully")
          window.location.reload()
          //window.location.href="https://google.com"
      },
      error:function (err){
          alert("Something Error")

      }
  })
})
