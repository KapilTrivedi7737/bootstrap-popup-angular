var popupFunctionObject = (function() {
    return {
        showPopUp: function(id) {
            $("#myModal").modal({ show: true });
        },
        closePopUp: function() {
            $("#myModal").modal({ show: false });
        }
    }
})(popupFunctionObject || {})

var DocumentReady = (function() {
    return {
        init: function() {
            // Disable all transitions

        }
    }
})(DocumentReady || {})