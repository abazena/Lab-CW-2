var _DATA = null;
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