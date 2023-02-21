class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=fcdb2bfcdfaed7af723ea8764bec1190';

    getResource = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json();
    }

    getAllCharacters = async () => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?&${this._apiKey}`);
        return this._transformCharacter(res.data.results[0]);
    }

    _transformCharacter = (char) => {
        const description = (descr, num) => {
            if (descr) {
                return descr.slice(0, num) + '...';
            } else {
                return "Sorry, we don't have a description for this character.";
            }
        }
        return {
            id: char.id,
            name: char.name,
            description: description(char.description, 210),
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items,
        }
    }
}

export default MarvelService;