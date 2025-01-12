
document.querySelectorAll('.details-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        const bookId = this.getAttribute('data-id');
        const detailsRow = document.querySelector(`.details-row[data-id="${bookId}"]`);

        if (this.checked) {
            // عرض صف التفاصيل
            detailsRow.style.display = "table-row";
        } else {
            // إخفاء صف التفاصيل
            detailsRow.style.display = "none";
        }
    });
});


 function loadPage() {

        
       
   $(".inputFormBody").toggle(); // تبديل حالة العرض للعنصر
  $("#btnloadForm").toggle();
		
			button.style.display="none";
        }

  const txtName =document.getElementById("fullName");

  function checkName()
{
   if(txtName.value == "")
   {
    return true;
   }
   var pos0 = txtName.value.search(/\s+/);
     if(pos0 == 0)
     {
       alert("'Name' error formate");
        return false;

     }
      
    var pos = txtName.value.search(/\W+\s\W+/);
   
    
    if (pos == 0) {
      return true;
     } 
     


      var pos1=txtName.value.search(/\W+/);
       if(pos1==0)
      {
        alert("Please enter the full name");
        return false;
      }

     
     else
     {
        alert("Name must be in Arabic only");
        txtName.focus();
        txtName.select();
        return false;
     }

}
const txtIdNumber = document.getElementById("idNumber");
function checkIDNumber()
{
  
  if(txtIdNumber.value == "")
  {
    alert("Please Enter ID Number");
    return false;
  }
 var pos = txtIdNumber.value.search(/[01]\d{10}$/);
 var pos1 = txtIdNumber.value.search(/00\d{9}$/);
 
if(pos ==0 && pos1 ==- 1)
    {
     return true;
    }
    else
    {
      txtIdNumber.focus();
      txtIdNumber.select();
      alert("ID Number is wrong");
      
      return false;
    }
 }

const txtPhoneNumber = document.getElementById("mobileNumber")
function checkPhone()
{
  if(txtPhoneNumber.value == "")
  {
    return true;
  }
    
      
  var pos = txtPhoneNumber.value.search(/[+]9639[^0127]\d{7}$/);
  var pos1 = txtPhoneNumber.value.search(/[+]963\d{7}$/);
  if (pos != 0 && pos1 !=0) 
   {
    txtPhoneNumber.focus();
    txtPhoneNumber.select();  
    alert("'Phone Number' Error Formate") 
      return false;
   } else
    {
   
       return true;
    }
}


const txtEmail = document.getElementById("email")
function checkEmail()
{

  if(txtEmail.value == "")
  {
    return true;
  }
 
  var pos  = txtEmail.value.search(/\w+@\w+.\w+/)
  if(pos !=0)
  {
    txtEmail.focus();
    txtEmail.select();
    alert(" 'Email' Error Formate")
    return false;
  }

return true;

}


function printBookDetails()
{
  
  var selectedVal;
  $(document).ready(function() {
  var selected = $('input[name="bookChoice"]:checked');

  if (selected.length > 0) {
     
    radCheckedVal = selected.val();
    bookCode = document.getElementById("isbnBook"+radCheckedVal).innerHTML;
    bookName =  document.getElementById("nameBook"+radCheckedVal).innerHTML;
    bookprice = document.getElementById("priceBook"+radCheckedVal).innerHTML; 
    alert(`رمز الكتاب: ${bookCode}\nالعنوان: ${bookName}\nالسعر: ${bookprice}`);                                       
  
   
    
  }
 else
      alert("You didn't choose any book");
  
});  
}

  
function checkInputs(e)
{
    e.preventDefault();
    if(checkName())
        if(checkIDNumber())
            if(checkPhone())
              if(checkEmail())
                  
                    printBookDetails(); 
                    
                else
                {
                    //  Erorr input
                }
            else
            {
            // Error input
            }
}

document.getElementById("submitButton").onclick = checkInputs;

	
	
  