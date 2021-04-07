export default class PixabayApi {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchImages() {
        const API_KEY = '20657531-55ab2713c33e5dcd49ca55cc6';
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