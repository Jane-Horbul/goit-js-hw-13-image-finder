export default class PixabayApi {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchImages() {
        const API_KEY = '21053847-5c7f7edd087a11e0f877b9ef2';
        const BASE_URL = 'https://pixabay.com/api/';
        return fetch(`${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&page=${this.page}&per_page=12&image_type=photo&pretty=true`)
            .then(rawData => rawData.json())
            .then(data => {
                this.page += 1;

                return data.hits;
            });
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}