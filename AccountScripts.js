var Sdk = window.Sdk || {};
(
    function()
    {

        this.formOnSave = function(executionContext)
        {
            var eventArgs = executionContext.getEventArgs();
            if(eventArgs.getSaveMode() == 70)
            {
                eventArgs.preventDefault();
            }
        }

        this.OnLoad = function(executionContext)
        
        {
            var formContext = executionContext.getFormContext();

            var phoneNumber = formContext.getAttribute("telephone1").getValue();

            var expression = /^(\(\d{3}\)\s?|\d{3}-)\d{3}-\d{4}$/;

            if(! expression.test(phoneNumber))
            {
                formContext.getControl("telephone1").setNotification("Enter the US format phone number", "noti1");

                formContext.ui.setFormNotification("Info message", "INFO" ,"formnoti1");
            }
            else
            {
                formContext.getControl("telephone1").clearNotification("noti1");
                formContext.ui.clearFormNotification("formnoti1");
            }

        }
    }
).call(Sdk);

//Alert simple js with namespace notations

// var Sdk = window.Sdk || {};
// (
//     function()
//     {
//         this.OnLoad = function(executionContext)
//         {
//             var formContext = executionContext.getFormContext();

//             var phoneNumber = formContext.getAttribute('telephone1').getValue();

//             var expression = /^(\(\d{3}\)\s?|\d{3}-)\d{3}-\d{4}$/;

//             if(!expression.test(phoneNumber))
//             {
//                 alert("Enter valid US format phone number");
//             }
//         }
//     }
// ).call(Sdk);