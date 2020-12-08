header = ["Country", "Year", "fertility", "life", "population", "child_mortality", "gdp", "region"];
const main =
{
    load_csv: function (path) {
        var file = new File([""], path);
        let reader = new FileReader();
        reader.readAsText(file);

        reader.onload = function () {
            console.log(reader.result);
        };

        reader.onerror = function () {
            console.log(reader.error);
        };
    }
}