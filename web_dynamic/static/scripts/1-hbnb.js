// static/scripts/1-hbnb.js
$(document).ready(function () {
  const selectedAmenities = {};

  $('input[type="checkbox"][name="amenity"]').change(function () {
    const amenityId = $(this).attr('data-id');
    const amenityName = $(this).attr('data-name');

    if (this.checked) {
      selectedAmenities[amenityId] = amenityName;
    } else {
      delete selectedAmenities[amenityId];
    }

    const amenityList = Object.values(selectedAmenities).join(', ');
    $('.amenities h4').text(amenityList || '\u00A0');
  });
});
