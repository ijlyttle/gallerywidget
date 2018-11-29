HTMLWidgets.widget({

  name: "gallerywidget",

  type: "output",

  factory: function(el, width, height) {

    return {
      renderValue: function(x) {

        // function to create style-string
        var makeStyle = function(x) {
          return 'background-image: url("' + x + '");';
        };

        // convert data to row-major format
        var data = HTMLWidgets.dataframeToD3(x.data);

        // for each row in x, add an <a> element
        for (var i = 0; i < data.length; i++) {

          var row = data[i];

          // create preview element
          var preview = document.createElement("a");
          preview.className = "gallerywidget-preview";
          preview.setAttribute("href", row.href);
          preview.setAttribute("style", makeStyle(row.image));

          // create text element
          var text = document.createElement("div");
          text.className = "gallerywidget-text";

          // create title, subtitle elements
          var title = document.createElement("div");
          title.className = "gallerywidget-title";
          title.textContent = row.title;

          var subtitle = document.createElement("div");
          subtitle.className = "gallerywidget-subtitle";
          subtitle.textContent = row.subtitle;

          // append title, subtitle to text
          text.appendChild(title);
          text.appendChild(subtitle);

          // append text to preview
          preview.appendChild(text);

          // append preview to enclosing element
          el.appendChild(preview);

          //console.log(preview);
        }

      },

      resize: function(width, height) {

      }

    };
  }
});
