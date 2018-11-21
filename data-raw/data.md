Data
================

The purpose of this document is to create the package data.

``` r
library("jsonlite")
library("magrittr")
library("tibble")
library("devtools")
```

## Generate package-data

### htmlwidgets example

This data is manually scraped from the [htmlwidgets
gallery](http://gallery.htmlwidgets.org).

``` r
data_htmlwidgets <- 
  fromJSON("example.json") %>% 
  glimpse()
```

    ## Observations: 6
    ## Variables: 4
    ## $ href     <chr> "https://plot.ly/r", "https://rich-iannone.github.io/...
    ## $ image    <chr> "http://gallery.htmlwidgets.org/images/ropensci-plotl...
    ## $ title    <chr> "plotly", "DiagrammeR", "leaflet", "networkD3", "form...
    ## $ subtitle <chr> "Carson Sievert", "Rich Iannone", "Joe Cheng", "Chris...

## Write out package-data

``` r
use_data(data_htmlwidgets, overwrite = TRUE)
```

    ## Saving data_htmlwidgets as data_htmlwidgets.rda to /Users/ijlyttle/Documents/git/github/public_me/gallerywidget/data
