//40.Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information
//Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly
//Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of
//tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.









interface Album {
    artist: string;
    title: string;
    num_tracks?: number;
}

function make_album(artist_name: string, album_title: string, num_tracks?: number): Album {
    let album: Album = {
        artist: artist_name,
        title: album_title
    };

    if (num_tracks !== undefined) {
        album.num_tracks = num_tracks;
    }

    return album;
}

// Creating album objects
const album1: Album = make_album('Artist1', 'Album1', 10);
const album2: Album = make_album('Artist2', 'Album2');
const album3: Album = make_album('Artist3', 'Album3', 12);

// Printing album information
console.log(album1);
console.log(album2);
console.log(album3);