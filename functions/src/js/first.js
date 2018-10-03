function addRestaurant() {
    var database = firebase.database();
    var restaurantRef = database.ref();

    restaurantRef.push().key;
}