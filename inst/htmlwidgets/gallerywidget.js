HTMLWidgets.widget({

  name: "gallerywidget",

  type: "output",

  factory: function(el, width, height) {

    return {
      renderValue: function(x) {

        var data = HTMLWidgets.dataframeToD3(x.data);
        console.log(data);

        // for each row in x, add an <a> element
        for (var i = 0; i < data.length; i++) {

          var row = data[i];
          var a = document.createElement("a");

          a.setAttribute("href", row.href);

          console.log(a);
          el.appendChild(a);
        }

      },

      resize: function(width, height) {

      }

    };
  }
});
