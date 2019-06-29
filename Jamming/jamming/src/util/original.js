const clientId = '7060b32ead31471081e8d692905725dd';
const redirectUri = 'http://localhost:3000/';
const clientSecret ='3912ecca81f347d39342fb77cae6b958'
let accessToken;

const Spotify = {

    // Gets access token from Spotify
    getAccessToken() {
        if(accessToken) {
            return accessToken;
        }

        const hasAccessToken = window.location.href.match(/access_token=([^&]*)/);
        const hasExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
        if (hasAccessToken && hasExpiresIn) {
            accessToken = hasAccessToken[1];
            const expiresIn = Number(hasExpiresIn[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {// can remove the else statement
            const accessUrl = `https://accounts.spotify.com/authorize?response_type=token&scope=playlist-modify-public&client_id=${clientId}&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }
    },
    
    
    search(term){
        const token = this.getAccessToken;
        const endpoint = `https://api.spotify.com/v1/search?type=track&q=${term.replace(' ', '%20')}`;
        const headers = {
            Authorization : `Bearer ${token}`
        }
        return fetch(endpoint, {
            headers:headers
        }).then(response =>{
            if(response.ok){
                return response.json();
            }
            else{
                console.log('somthing when worng')//later throw error
            }
        }).then( jsonResponse => {
            if(!jsonResponse.tracks) return [];
            return jsonResponse.tracks.items.map(track => {
                return{
                    ID : track.id,
                    Name: track.name,
                    Artist: track.artists[0].name,
                    Album: track.album.name,
                    URI: track.uri
                }
            })
            
        })
    },
    
    savePlaylist(playlistName, TrackURIs){
        if(!playlistName || !TrackURIs || !TrackURIs.length){
            return;
        }
        let userId = ''
        let playlistId= '';
        const headers = {
            Authorization : `Bearer ${this.getAccessToken}`
        }

        return fetch('https://api.spotify.com/v1/me',{
            headers:headers
        }).then(response => {
            if(response.ok){
                return response.json();
            }
            console.log('failed response from savelist')//later throw error
        }).then(jsonResponse => {
            userId = jsonResponse.id;
        }).then(() => {
            const createPlaylistTracksUrl = `https://api.spotify.com/v1/users/${userId}/playlists`;
            return fetch(createPlaylistTracksUrl,{
                method:'POST',
                headers:headers,
                body:JSON.stringify({
                   name:playlistName
                })
            })
            .then(response => {
                if(response.ok){
                    return response.json();
                }
                console.log('POST went WRONG');
            }).then(jsonResponse =>  playlistId = jsonResponse.id)
            .then(() => {
                const addPlaylistTracksUrl = `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`;
                return fetch(addPlaylistTracksUrl, {
                    method:'POST',
                    headers:headers,
                    body:JSON.stringify({
                       URIs:TrackURIs
                    })
                });
            })
            })
    }
  };
  
    // Uses access token to return a response from the Spoitify API using user serach term from SearchBar
    
    // Gets a user's ID from Spotify, creates a new playlist on user's account, and adds tracks to that playlist
export default Spotify;

