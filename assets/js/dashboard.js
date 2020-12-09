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
                            "type": "quantitative",
                            "title": "Mean of Child Mortality (Red)"
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
                            "axis": { "titleColor": "#000000" },
                            "title": "Mean of Life expectancy (Green)"
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
                            "type": "quantitative",
                            "title": "Mean of Child Mortality (Red)"
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
                            "axis": { "titleColor": "#000000" },
                            "title": "Mean of Fertility (Green)"
                        }
                    }
                }
            ],
            "resolve": { "scale": { "y": "independent" } }
        }
        vegaEmbed('#chart2', chartTwo);

        chartThree = {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "title": "Mean Fertility Against mean Population in South Asia over time",
            "width": 450,
            "height": 250,
            "data": {
                "url": "https://raw.githubusercontent.com/abazena/Lab-CW-2/main/data/gapminder.csv",
                "format": { "type": "dsv", "delimiter": ";" }
            },
            "encoding": { "x": { "field": "Year", "timeUnit": "year", "type": "ordinal" } },
            "layer": [{
                    "mark": { "color": "#176434", "type": "bar", "cornerRadiusEnd": 1 },
                    "encoding": {
                        "y": {
                            "field": "fertility",
                            "aggregate": "mean",
                            "type": "quantitative",
                            "title": "Mean of Fertility (Green)"
                        }
                    }
                },
                {
                    "mark": { "stroke": "#ecc616", "type": "line" },
                    "encoding": {
                        "y": {
                            "field": "population",
                            "aggregate": "mean",
                            "type": "quantitative",
                            "axis": { "titleColor": "#000000" },
                            "title": "Mean of Population (Yellow)"
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
            "title": "Mean Life Expectancy Against mean Population in South Asia over time",
            "width": 450,
            "height": 250,
            "data": {
                "url": "https://raw.githubusercontent.com/abazena/Lab-CW-2/main/data/gapminder.csv",
                "format": { "type": "dsv", "delimiter": ";" }
            },
            "encoding": { "x": { "field": "Year", "timeUnit": "year", "type": "ordinal" } },
            "layer": [{
                    "mark": { "color": "#176434", "type": "bar", "cornerRadiusEnd": 1 },
                    "encoding": {
                        "y": {
                            "field": "life",
                            "aggregate": "mean",
                            "type": "quantitative",
                            "title": "Mean of Life Expectancy (Green)"
                        }
                    }
                },
                {
                    "mark": { "stroke": "#ecc616", "type": "line" },
                    "encoding": {
                        "y": {
                            "field": "population",
                            "aggregate": "mean",
                            "type": "quantitative",
                            "axis": { "titleColor": "#000000" },
                            "title": "Mean of Population (Yellow)"
                        }
                    }
                }
            ],
            "transform": [{ "filter": { "field": "region", "equal": "South Asia" } }],
            "resolve": { "scale": { "y": "independent" } }
        }
        vegaEmbed('#chart4', chartFour);

        chartFive = {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "width": 500,
            "height": 450,
            "title": "Mean fertility Against mean gdp over time",
            "data": {
                "url": "https://raw.githubusercontent.com/abazena/Lab-CW-2/main/data/gapminder.csv",
                "format": { "type": "dsv", "delimiter": ";" }
            },
            "encoding": { "x": { "field": "Year", "timeUnit": "year", "type": "ordinal" } },
            "layer": [{
                    "mark": { "color": "#d33636", "type": "line", "cornerRadiusEnd": 4 },
                    "encoding": {
                        "y": {
                            "field": "fertility",
                            "aggregate": "mean",
                            "type": "quantitative",
                            "title": "Mean of Fertility (Red)"
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
                            "axis": { "titleColor": "#000000" },
                            "title": "Mean of GDP (Green)"
                        }
                    }
                }
            ],
            "resolve": { "scale": { "y": "independent" } }
        }
        vegaEmbed('#chart5', chartFive);

        chartSix = {
            "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
            "title": "Mean child mortality Against mean life expectancy over time",
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
                            "type": "quantitative",
                            "title": "Mean of Child Mortality (Red)"
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
                            "axis": { "titleColor": "#000000" },
                            "title": "Mean of Life expectancy (Green)"
                        }
                    }
                }
            ],

            // "transform": [{ "filter": { "field": "Country", "equal": "Russia" } }],
            "resolve": { "scale": { "y": "independent" } }
        }
        vegaEmbed('#chart6', chartSix);
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
                    "mark": { "color": "#176434", "type": "bar", "cornerRadiusEnd": 4 },
                    "encoding": {
                        "y": {
                            "field": "child_mortality",
                            "aggregate": "mean",
                            "type": "quantitative",
                            "scale": { "domain": [0, 120] },
                            "title": "Mean of Child Mortality (Green)"
                        }
                    }
                },
                {
                    "mark": { "stroke": "#ecc616", "type": "line" },
                    "encoding": {
                        "y": {
                            "field": "fertility",
                            "aggregate": "mean",
                            "type": "quantitative",
                            "scale": { "domain": [0, 6] },
                            "axis": { "titleColor": "#000000" },
                            "title": "Mean of Fertility (Yellow)"
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
            "title": "Mean child mortality Against mean life expectancy in Russia over time",
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
                            "type": "quantitative",
                            "title": "Mean of Child Mortality (Red)"
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
                            "axis": { "titleColor": "#000000" },
                            "title": "Mean of Life expectancy (Green)"
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
            "title": "Mean of fertility Against mean Gdp in the Middle East & North Africa region over time",
            "width": 500,
            "height": 450,
            "data": {
                "url": "https://raw.githubusercontent.com/abazena/Lab-CW-2/main/data/gapminder.csv",
                "format": { "type": "dsv", "delimiter": ";" }
            },
            "encoding": { "x": { "field": "Year", "timeUnit": "year", "type": "ordinal" } },
            "layer": [{
                    "mark": { "color": "#176434", "type": "bar", "cornerRadiusEnd": 1 },
                    "encoding": {
                        "y": {
                            "field": "fertility",
                            "aggregate": "mean",
                            "type": "quantitative",
                            "title": "Mean of Fertility (Green)"
                        }
                    }
                },
                {
                    "mark": { "stroke": "#ecc616", "type": "line" },
                    "encoding": {
                        "y": {
                            "field": "gdp",
                            "aggregate": "mean",
                            "type": "quantitative",
                            "axis": { "titleColor": "#000000" },
                            "title": "Mean of Gdp (Yellow)"
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