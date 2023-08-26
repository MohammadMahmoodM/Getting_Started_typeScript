function make_album(artist_name, album_title) {
    return {
        'artist_name': artist_name,
        'album_title': album_title,
    };
}
console.log(make_album('ahmad', 'tum'));
console.log(make_album('Ali', 'ma'));
console.log(make_album('Usman', 'hum'));
function make_album_number(artist_name, album_title, number) {
    var album_name = {
        artist_name: artist_name,
        album_title: album_title,
    };
    if (number !== undefined) {
        album_name.number = number;
    }
    return album_name;
}
console.log(make_album_number('A', 'B'));
console.log(make_album_number('A', 'B', 2));
