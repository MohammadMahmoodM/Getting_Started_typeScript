 //Album: Write a function called make_album() that builds a Object describing a music album.
 // The function should take in an artist name and an album title, and it should return a Object
 // containing these two pieces of information. Use the function to make three dictionaries
 // representing different albums. Print each return value to show that Objects are storing
 // the album information correctly.
interface Album{
    artist_name: string,
    album_title: string,
}
function make_album( artist_name: string,  album_title: string): Album {
    return {
       'artist_name': artist_name,
       'album_title': album_title,
    }
}

console.log( make_album('ahmad', 'tum') );
console.log( make_album('Ali', 'ma') );
console.log( make_album('Usman', 'hum') );

//Album: Write a function called make_album() that builds a Object describing a music album.
 // The function should take in an artist name and an album title, and it should return a Object
 // containing these two pieces of information. Use the function to make three dictionaries
 // representing different albums. Print each return value to show that Objects are storing
 // the album information correctly.
//Add an optional parameter to make_album() that allows you
// to store the number of tracks on an album. If the calling line includes a value for the 
//number of tracks, add that value to the album’s Object. Make at least one new function call
// that includes the number of tracks on an album.

interface Album{
    artist_name: string,
    album_title: string,
    number?: number,
}
function make_album_number(artist_name, album_title, number?): Album{
    const album_name:Album ={
        artist_name: artist_name,
        album_title: album_title,
    }
    if(number !== undefined){
        album_name.number = number
    }
    return album_name;
}

console.log(make_album_number('A', 'B') );
console.log(make_album_number('A', 'B', 2) );
