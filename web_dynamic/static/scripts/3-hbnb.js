$(document).ready(function () {
  $.ajax({
    type: 'POST',
    ContentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({}),
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    success: function (data) {
      data.forEach(function (place) {
        const article = $('<article>');

        const titleBox = $('<div>').addClass('title_box');
        const placeName = $('<h2>').text(place.name);
        const priceByNight = $('<div>').addClass('price_by_night').text(`$${place.price_by_night}`);
        titleBox.append(placeName, priceByNight);

        const information = $('<div>').addClass('information');
        const maxGuest = $('<div>').addClass('max_guest').text(`${place.max_guest} Guest${place.max_guest !== 1 ? 's' : ''}`);
        const numberRooms = $('<div>').addClass('number_rooms').text(`${place.number_rooms} Room${place.number_rooms !== 1 ? 's' : ''}`);
        const numberBathrooms = $('<div>').addClass('number_bathrooms').text(`${place.number_bathrooms} Bathroom${place.number_bathrooms !== 1 ? 's' : ''}`);
        information.append(maxGuest, numberRooms, numberBathrooms);

        const description = $('<div>').addClass('description').html(place.description);
        article.append(titleBox, information, description);
        $('section.places').append(article);
      });
    },
    error: function () {
      console.error('Error fetching places');
    }
  });
});
