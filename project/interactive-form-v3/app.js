//Set the focus property to true on the <input type="text"> element for the "Name" field.
var firstInput = document.querySelector('input'); 
firstInput.value = '';
firstInput.focus();

//The "Job Role" section has an <input type="text"> field where users can enter a custom job role.
var jobItem = document.querySelector('#title');
var fieldset = document.querySelector('fieldset');


var other = document.querySelector('option[value="other"]');

jobItem.addEventListener("change", () => {
    var textArea = document.createElement('input');
    var otherInput = document.querySelector('#other-title');
 if(jobItem.options[jobItem.selectedIndex].value == "other") {
        if (otherInput) {
            otherInput.remove();
        }
        textArea.setAttribute('id', 'other-title');
        textArea.style.display = 'block';
        textArea.style.width = "100%";
        textArea.placeholder = 'Your Job Role';
        fieldset.appendChild(textArea);
        textArea.focus();
    }
    else if (jobItem.options[jobItem.selectedIndex].value !== "other") {
        if (otherInput) {
            otherInput.remove();
        }
    }
});

//The options in the "Color" drop down menu are not available for each t-shirt design. So the user shouldn’t be able to see or choose a color option until they have chosen a design.

$("#colors-js-puns").hide();
$("#color").prepend(`<option value='select'>Please select a color...</option>`); 

 function shirtColorSelection(userDesign) {
        $('#color').val('select').show();
        $("#color > option").hide();
        $("#colors-js-puns").show();

        if (userDesign.val() == 'Select Theme') {
            $("#colors-js-puns").hide();
        }
        else if (userDesign.val() == 'js puns') {
            $("#color > option:contains(Puns)").show();
        } 
        else if (userDesign.val() == 'heart js') {
            $("#color > option:contains(JS shirt)").show();
        }
    }

    $('#design').change( function() {
        shirtColorSelection($(this));
    });

//The "Total: $" element below the "Register for Activities" section should update to reflect the sum of the cost of the user’s selected activities.
$(".activities").change ( () => {
  validate($(".activities")[0]); 

 var totalSum = 0;
  $(".activities input").attr("disabled", false);

 if ($("input[name='all']").prop("checked")) {
    totalSum += 200;
  }

if ($("input[name='js-frameworks']").prop("checked")) {
    totalSum += 100;
    $("input[name='express']").attr("disabled", true);
  } else if ($("input[name='express']").prop("checked")) {
      totalSum += 100;
      $("input[name='js-frameworks']").attr("disabled", true);
    }
if ($("input[name='js-libs']").prop("checked")) {
    totalSum += 100;
    $("input[name='node']").attr("disabled", true);
  } else if ($("input[name='node']").prop("checked")) {
      totalSum += 100;
      $("input[name='js-libs']").attr("disabled", true);
    }
  if ($("input[name='build-tools']").prop("checked")) {
    totalSum += 100;
  }
if ($("input[name='npm']").prop("checked")) {
    totalSum += 100;
  }
  $("#total").text(totalSum);
});

//Program the "I'm going to pay with" <select> element to listen for user changes. When a change is detected, hide all payment sections in the form’s UI except the selected one.

$('#paypal, #bitcoin').hide();

$('#payment').val("credit card");

$('#payment').change(function(){
	if ($('#payment option:selected').val() === "paypal") {
		$('#credit-card, #bitcoin').hide();
		$('#paypal').show();
	} else if ($('#payment option:selected').val() === "bitcoin") {
		$('#credit-card, #paypal').hide();
		$('#bitcoin').show();
	} else {
		$('#credit-card').show();
		$('#paypal, #bitcoin').hide();
	}
});

//Users shouldn’t be able to submit a form without the required information, or with invalid information.
$('#name').on('blur', function(){
    validateName($('#name'));
})

$('#mail').on('blur', function(){
    if($('#mail').val() === ''){
        $('#mail').attr('placeholder', "Email field cannot be empty");
    } 
     validateData($('#mail'), /^[a-z0-9_-]{3,16}$/);  // see the ) before the semicolon?
})

$('#cc-num').on('blur', function(){
    validateData($('#cc-num'), /^[a-z0-9_-]{6,18}$/);
})

$('#zip').on('blur', function(){
    validateData($('#zip'), /^#?([a-f0-9]{6}|[a-f0-9]{3})$/);
})

$('#cvv').on('blur', function(){
    validateData($('#cvv'), /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
})

$('.activities input').on('click', function(){
    validateCheckboxes();
});

//submit
document.getElementById("myForm").submit();