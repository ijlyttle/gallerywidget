#' Create a gallerywidget
#'
#' @param data `data.frame` with columns `href`, `image`, `title`, `subtitle`,
#'  see **Details**
#'
#' @return object returned by [htmlwidgets::createWidget()]
#' @examples
#'   gallerywidget(data_htmlwidgets)
#' @export
#'
gallerywidget <- function(data) {

  x <- list(data = data)

  # create the widget
  htmlwidgets::createWidget("gallerywidget", x, width = "auto", height = "auto")
}
