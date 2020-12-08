let header = ["Country", "Year", "fertility", "life", "population", "child_mortality", "gdp", "region"];
var _DATA = null;
var data_loaded = false;

const main =
{
    load_csv: function (url) {
        $.ajax({
            type: "GET",
            url: url,
            dataType: "text",
            success: function (data) {
                main.parse_csv(data);
            }
        });
    },
    parse_csv: function (allText) {
        var lines = allText.split(/\r\n|\n/);
        lines.shift(); lines.pop();
        var data = [];
        lines.forEach(line => {
            let elements = line.split(";");
            let json = {}
            for (let j = 0; j < elements.length; j++) {
                if(header[j] === "Country" || header[j] === "region") 
                {
                    json[header[j]] = elements[j]
                }
                else {
                    json[header[j]] = Number(elements[j])
                }

            }
            data.push(json)
        });
        _DATA = data;
    },
    get_data: function () {
        if (data_loaded) {
            return _DATA;
        }
        return null;
    }
}