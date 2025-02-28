const { searchPhotos, savePhoto, addPhotoTags, searchPhotosByTag } = require("../controllers/photoController");
const axiosInstance = require("../lib/axios");

jest.mock('../lib/axios.js', () => ({
    get: jest.fn(),
}));

describe('Photo Controllers Tests', () => {
    test("searchPhotos Should search for photos", async () => {
        const mockResponse = {
            "photos": [
                {
                    "imageUrl": "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2OTcxNTd8MHwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHx8fHwxNzM3MTc5ODUzfDA&ixlib=rb-4.0.3&q=85",
                    "description": null,
                    "altDescription": "orange flowers"
                },
                {
                    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2OTcxNTd8MHwxfHNlYXJjaHwyfHxuYXR1cmV8ZW58MHx8fHwxNzM3MTc5ODUzfDA&ixlib=rb-4.0.3&q=85",
                    "description": "You can help and support me via my description (Paypal) !\n\nInstagram : @clvmentm\nFacebook Page : www.facebook.com/CMReflections/\n\nIf you wish to buy it in full quality, email me on clementmreflections@gmail.com.",
                    "altDescription": "photo of pine trees"
                },
                {
                    "imageUrl": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2OTcxNTd8MHwxfHNlYXJjaHwzfHxuYXR1cmV8ZW58MHx8fHwxNzM3MTc5ODUzfDA&ixlib=rb-4.0.3&q=85",
                    "description": "Finding my roots",
                    "altDescription": "sun light passing through green leafed tree"
                },
                {
                    "imageUrl": "https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2OTcxNTd8MHwxfHNlYXJjaHw0fHxuYXR1cmV8ZW58MHx8fHwxNzM3MTc5ODUzfDA&ixlib=rb-4.0.3&q=85",
                    "description": null,
                    "altDescription": "white clouds during daytime"
                },
                {
                    "imageUrl": "https://images.unsplash.com/photo-1505142468610-359e7d316be0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2OTcxNTd8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHx8fHwxNzM3MTc5ODUzfDA&ixlib=rb-4.0.3&q=85",
                    "description": "Maldives",
                    "altDescription": "aerial photo of seashore"
                },
                {
                    "imageUrl": "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2OTcxNTd8MHwxfHNlYXJjaHw2fHxuYXR1cmV8ZW58MHx8fHwxNzM3MTc5ODUzfDA&ixlib=rb-4.0.3&q=85",
                    "description": "Flying through a storm into the sunset.",
                    "altDescription": "clouds during golden hour"
                },
                {
                    "imageUrl": "https://images.unsplash.com/photo-1529419412599-7bb870e11810?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2OTcxNTd8MHwxfHNlYXJjaHw3fHxuYXR1cmV8ZW58MHx8fHwxNzM3MTc5ODUzfDA&ixlib=rb-4.0.3&q=85",
                    "description": null,
                    "altDescription": "bed of orange flowers"
                },
                {
                    "imageUrl": "https://images.unsplash.com/photo-1495584816685-4bdbf1b5057e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2OTcxNTd8MHwxfHNlYXJjaHw4fHxuYXR1cmV8ZW58MHx8fHwxNzM3MTc5ODUzfDA&ixlib=rb-4.0.3&q=85",
                    "description": "Pooling Water",
                    "altDescription": "green leaf with water drops"
                },
                {
                    "imageUrl": "https://images.unsplash.com/photo-1508349937151-22b68b72d5b1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2OTcxNTd8MHwxfHNlYXJjaHw5fHxuYXR1cmV8ZW58MHx8fHwxNzM3MTc5ODUzfDA&ixlib=rb-4.0.3&q=85",
                    "description": "It was at 1pm a monday. I was on holliday and i wanted to make something cool for my day, so I saw the fog outside of my house and these kinde of orange / green trees. So I said why not go to this little path near my house, and this is how the photo was made!",
                    "altDescription": "road between yellow leaf trees at daytime"
                },
                {
                    "imageUrl": "https://images.unsplash.com/photo-1505820013142-f86a3439c5b2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2OTcxNTd8MHwxfHNlYXJjaHwxMHx8bmF0dXJlfGVufDB8fHx8MTczNzE3OTg1M3ww&ixlib=rb-4.0.3&q=85",
                    "description": "Not so tasty",
                    "altDescription": "red and white mushroom"
                }
            ]
        };

        axiosInstance.get.mockResolvedValue(mockResponse);

        const req = { query: { query: "nature" } };
        const res = { json: jest.fn(), status: jest.fn(() => res) };

        await searchPhotos(req, res);

        expect(axiosInstance.get).toHaveBeenCalledWith(
            "api/photos/search?query=nature"
        );
        expect(res.json).toHaveBeenCalledWith(mockResponse.data);
    });
});
