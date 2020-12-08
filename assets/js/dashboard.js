var _DATA = null;
$('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
});
const dashboard = 
{
    init: function()
    {
        try {
            _DATA = JSON.parse(localStorage.getItem("_DATA"));
        } catch (error) {
            console.log(error)
        }
        
    }
}