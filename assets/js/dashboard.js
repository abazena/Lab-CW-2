var _DATA = null;
$('#sidebarCollapse').on('click', function() {
    $('#sidebar').toggleClass('active');
});
const dashboard = {
    init: function() {
        try {
            _DATA = JSON.parse(localStorage.getItem("_DATA"));
        } catch (error) {
            console.log(error)
        }
    },
    initDashboardOne: function() {
        chartOne = {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "title": "Mean Child Mortality against mean Life expectancy over time",
            "width": 500,
            "height": 450,
            "data": {
                "url": "https://raw.githubusercontent.com/abazena/Lab-CW-2/main/data/gapminder.csv",
                "format": { "type": "dsv", "delimiter": ";" }
            },
            "encoding": {
                "x": {
                    "field": "Year",
                    "timeUnit": "year",
                    "type": "ordinal"
                }
            },
            "layer": [{
                    "mark": { "color": "#d33636", "type": "line" },
                    "encoding": {
                        "y": {
                            "field": "child_mortality",
                            "aggregate": "mean",
                            "type": "quantitative"
                        }
                    }
                },
                {
                    "mark": { "stroke": "#176434", "type": "line" },
                    "encoding": {
                        "y": {
                            "field": "life",
                            "aggregate": "mean",
                            "type": "quantitative",
                            "axis": { "titleColor": "#000000" }
                        }
                    }
                }
            ],
            "resolve": { "scale": { "y": "independent" } }
        }
        vegaEmbed('#chart1', chartOne);


        chartTwo = {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "width": 500,
            "height": 450,
            "title": "Mean child mortality Against mean fertility over time",
            "data": {
                "url": "https://raw.githubusercontent.com/abazena/Lab-CW-2/main/data/gapminder.csv",
                "format": { "type": "dsv", "delimiter": ";" }
            },
            "encoding": { "x": { "field": "Year", "timeUnit": "year", "type": "ordinal" } },
            "layer": [{
                    "mark": { "color": "#d33636", "type": "line", "cornerRadiusEnd": 4 },
                    "encoding": {
                        "y": {
                            "field": "child_mortality",
                            "aggregate": "mean",
                            "type": "quantitative"
                        }
                    }
                },
                {
                    "mark": { "stroke": "#176434", "type": "line" },
                    "encoding": {
                        "y": {
                            "field": "fertility",
                            "aggregate": "mean",
                            "type": "quantitative",
                            "scale": { "domain": [0, 6] },
                            "axis": { "titleColor": "#000000" }
                        }
                    }
                }
            ],
            "resolve": { "scale": { "y": "independent" } }
        }
        vegaEmbed('#chart2', chartTwo);

        chartThree = {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "title": "Mean child mortality Against mean fertility in America over time",
            "width": 450,
            "height": 250,
            "data": {
                "url": "https://raw.githubusercontent.com/abazena/Lab-CW-2/main/data/gapminder.csv",
                "format": { "type": "dsv", "delimiter": ";" }
            },
            "encoding": { "x": { "field": "Year", "timeUnit": "year", "type": "ordinal" } },
            "layer": [{
                    "mark": { "color": "#d33636", "type": "bar", "cornerRadiusEnd": 1 },
                    "encoding": {
                        "y": {
                            "field": "fertility",
                            "aggregate": "mean",
                            "type": "quantitative"
                        }
                    }
                },
                {
                    "mark": { "stroke": "#176434", "type": "line" },
                    "encoding": {
                        "y": {
                            "field": "population",
                            "aggregate": "mean",
                            "type": "quantitative",
                            "axis": { "titleColor": "#000000" }
                        }
                    }
                }
            ],
            "transform": [{ "filter": { "field": "region", "equal": "South Asia" } }],
            "resolve": { "scale": { "y": "independent" } }
        }
        vegaEmbed('#chart3', chartThree);


        chartFour = {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "title": "Mean child mortality Against mean fertility in America over time",
            "width": 450,
            "height": 250,
            "data": {
                "url": "https://raw.githubusercontent.com/abazena/Lab-CW-2/main/data/gapminder.csv",
                "format": { "type": "dsv", "delimiter": ";" }
            },
            "encoding": { "x": { "field": "Year", "timeUnit": "year", "type": "ordinal" } },
            "layer": [{
                    "mark": { "color": "#d33636", "type": "bar", "cornerRadiusEnd": 1 },
                    "encoding": {
                        "y": {
                            "field": "life",
                            "aggregate": "mean",
                            "type": "quantitative"
                        }
                    }
                },
                {
                    "mark": { "stroke": "#176434", "type": "line" },
                    "encoding": {
                        "y": {
                            "field": "population",
                            "aggregate": "mean",
                            "type": "quantitative",
                            "axis": { "titleColor": "#000000" }
                        }
                    }
                }
            ],
            "transform": [{ "filter": { "field": "region", "equal": "South Asia" } }],
            "resolve": { "scale": { "y": "independent" } }
        }
        vegaEmbed('#chart4', chartFour);
    },
    initDashboardTwo: function() {
        chartOne = {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "title": "Mean child mortality Against mean fertility in America over time",
            "width": 500,
            "height": 450,
            "data": {
                "url": "https://raw.githubusercontent.com/abazena/Lab-CW-2/main/data/gapminder.csv",
                "format": { "type": "dsv", "delimiter": ";" }
            },
            "encoding": { "x": { "field": "Year", "timeUnit": "year", "type": "ordinal" } },
            "layer": [{
                    "mark": { "color": "#d33636", "type": "bar", "cornerRadiusEnd": 4 },
                    "encoding": {
                        "y": {
                            "field": "child_mortality",
                            "aggregate": "mean",
                            "type": "quantitative",
                            "scale": { "domain": [0, 120] }
                        }
                    }
                },
                {
                    "mark": { "stroke": "#176434", "type": "line" },
                    "encoding": {
                        "y": {
                            "field": "fertility",
                            "aggregate": "mean",
                            "type": "quantitative",
                            "scale": { "domain": [0, 6] },
                            "axis": { "titleColor": "#000000" }
                        }
                    }
                }
            ],
            "transform": [{ "filter": { "field": "region", "equal": "America" } }],
            "resolve": { "scale": { "y": "independent" } }
        }
        vegaEmbed('#chart1', chartOne);


        chartTwo = {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "title": "Mean child mortality Against mean life in Russia over time",
            "width": 1100,
            "height": 300,
            "data": {
                "url": "https://raw.githubusercontent.com/abazena/Lab-CW-2/main/data/gapminder.csv",
                "format": { "type": "dsv", "delimiter": ";" }
            },
            "encoding": {
                "x": {
                    "field": "Year",
                    "timeUnit": "year",
                    "type": "ordinal"
                }
            },
            "layer": [{
                    "mark": { "color": "#d33636", "type": "line" },
                    "encoding": {
                        "y": {
                            "field": "child_mortality",
                            "aggregate": "mean",
                            "type": "quantitative"
                        }
                    }
                },
                {
                    "mark": { "stroke": "#176434", "type": "line" },
                    "encoding": {
                        "y": {
                            "field": "life",
                            "aggregate": "mean",
                            "type": "quantitative",
                            "axis": { "titleColor": "#000000" }
                        }
                    }
                }
            ],

            "transform": [{ "filter": { "field": "Country", "equal": "Russia" } }],
            "resolve": { "scale": { "y": "independent" } }
        }
        vegaEmbed('#chart2', chartTwo);



        chartThree = {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "title": "Mean child mortality Against mean fertility in America over time",
            "width": 500,
            "height": 450,
            "data": {
                "url": "https://raw.githubusercontent.com/abazena/Lab-CW-2/main/data/gapminder.csv",
                "format": { "type": "dsv", "delimiter": ";" }
            },
            "encoding": { "x": { "field": "Year", "timeUnit": "year", "type": "ordinal" } },
            "layer": [{
                    "mark": { "color": "#d33636", "type": "bar", "cornerRadiusEnd": 1 },
                    "encoding": {
                        "y": {
                            "field": "fertility",
                            "aggregate": "mean",
                            "type": "quantitative"
                        }
                    }
                },
                {
                    "mark": { "stroke": "#176434", "type": "line" },
                    "encoding": {
                        "y": {
                            "field": "gdp",
                            "aggregate": "mean",
                            "type": "quantitative",
                            "axis": { "titleColor": "#000000" }
                        }
                    }
                }
            ],
            "transform": [{ "filter": { "field": "region", "equal": "Middle East & North Africa" } }],
            "resolve": { "scale": { "y": "independent" } }
        }
        vegaEmbed('#chart3', chartThree);

    }
}