const posts = [
    {
        id: 1,
        postTitle: 'BMW',
        postDate: '4 july 2019',
        postTags: 'test',
        postImageUrl: 'https://via.placeholder.com/800x600',
        like: 20,
        postContent:
            'Commodo do minim esse laboris ut consectetur reprehenderit eu enim reprehenderit ullamco cillum et id. Consectetur deserunt et ipsum anim nisi labore laborum sit cillum nulla non. Anim duis elit tempor aliqua nisi anim tempor excepteur Lorem laborum. Laboris duis dolore eu occaecat est excepteur nostrud. Excepteur deserunt commodo excepteur irure magna eu sunt mollit elit in adipisicing. In duis et dolor nulla elit do sit aliquip minim pariatur incididunt. Mollit reprehenderit eiusmod velit cillum excepteur.',
    },
    {
        id: 2,
        postTitle: 'PORCHE',
        postDate: '4 july 2019',
        postTags: 'test',
        postImageUrl: 'https://via.placeholder.com/800x600',
        like: 20,
        postContent:
            'Commodo do minim esse laboris ut consectetur reprehenderit eu enim reprehenderit ullamco cillum et id. Consectetur deserunt et ipsum anim nisi labore laborum sit cillum nulla non. Anim duis elit tempor aliqua nisi anim tempor excepteur Lorem laborum. Laboris duis dolore eu occaecat est excepteur nostrud. Excepteur deserunt commodo excepteur irure magna eu sunt mollit elit in adipisicing. In duis et dolor nulla elit do sit aliquip minim pariatur incididunt. Mollit reprehenderit eiusmod velit cillum excepteur.',
    },
    {
        id: 3,
        postTitle: 'BENZ',
        postDate: '4 july 2019',
        postTags: 'test',
        postImageUrl: 'https://via.placeholder.com/800x600',
        like: 20,
        postContent:
            'Commodo do minim esse laboris ut consectetur reprehenderit eu enim reprehenderit ullamco cillum et id. Consectetur deserunt et ipsum anim nisi labore laborum sit cillum nulla non. Anim duis elit tempor aliqua nisi anim tempor excepteur Lorem laborum. Laboris duis dolore eu occaecat est excepteur nostrud. Excepteur deserunt commodo excepteur irure magna eu sunt mollit elit in adipisicing. In duis et dolor nulla elit do sit aliquip minim pariatur incididunt. Mollit reprehenderit eiusmod velit cillum excepteur.',
    },
    {
        id: 4,
        postTitle: 'SAIPA',
        postDate: '4 july 2019',
        postTags: 'test',
        postImageUrl: 'https://via.placeholder.com/800x600',
        like: 20,
        postContent:
            'Commodo do minim esse laboris ut consectetur reprehenderit eu enim reprehenderit ullamco cillum et id. Consectetur deserunt et ipsum anim nisi labore laborum sit cillum nulla non. Anim duis elit tempor aliqua nisi anim tempor excepteur Lorem laborum. Laboris duis dolore eu occaecat est excepteur nostrud. Excepteur deserunt commodo excepteur irure magna eu sunt mollit elit in adipisicing. In duis et dolor nulla elit do sit aliquip minim pariatur incididunt. Mollit reprehenderit eiusmod velit cillum excepteur.',
    },
    {
        id: 5,
        postTitle: 'IKA',
        postDate: '4 july 2019',
        postTags: 'test',
        postImageUrl: 'https://via.placeholder.com/800x600',
        like: 20,
        postContent:
            'Commodo do minim esse laboris ut consectetur reprehenderit eu enim reprehenderit ullamco cillum et id. Consectetur deserunt et ipsum anim nisi labore laborum sit cillum nulla non. Anim duis elit tempor aliqua nisi anim tempor excepteur Lorem laborum. Laboris duis dolore eu occaecat est excepteur nostrud. Excepteur deserunt commodo excepteur irure magna eu sunt mollit elit in adipisicing. In duis et dolor nulla elit do sit aliquip minim pariatur incididunt. Mollit reprehenderit eiusmod velit cillum excepteur.',
    },
    {
        id: 6,
        postTitle: 'HYUNDI',
        postDate: '4 july 2019',
        postTags: 'test',
        postImageUrl: 'https://via.placeholder.com/800x600',
        like: 20,
        postContent:
            'Commodo do minim esse laboris ut consectetur reprehenderit eu enim reprehenderit ullamco cillum et id. Consectetur deserunt et ipsum anim nisi labore laborum sit cillum nulla non. Anim duis elit tempor aliqua nisi anim tempor excepteur Lorem laborum. Laboris duis dolore eu occaecat est excepteur nostrud. Excepteur deserunt commodo excepteur irure magna eu sunt mollit elit in adipisicing. In duis et dolor nulla elit do sit aliquip minim pariatur incididunt. Mollit reprehenderit eiusmod velit cillum excepteur.',
    },
    {
        id: 7,
        postTitle: 'MAZDA',
        postDate: '4 july 2019',
        postTags: 'test',
        postImageUrl: 'https://via.placeholder.com/800x600',
        like: 20,
        postContent:
            'Commodo do minim esse laboris ut consectetur reprehenderit eu enim reprehenderit ullamco cillum et id. Consectetur deserunt et ipsum anim nisi labore laborum sit cillum nulla non. Anim duis elit tempor aliqua nisi anim tempor excepteur Lorem laborum. Laboris duis dolore eu occaecat est excepteur nostrud. Excepteur deserunt commodo excepteur irure magna eu sunt mollit elit in adipisicing. In duis et dolor nulla elit do sit aliquip minim pariatur incididunt. Mollit reprehenderit eiusmod velit cillum excepteur.',
    },
    {
        id: 8,
        postTitle: 'PEGUAT',
        postDate: '4 july 2019',
        postTags: 'test',
        postImageUrl: 'https://via.placeholder.com/800x600',
        like: 20,
        postContent:
            'Commodo do minim esse laboris ut consectetur reprehenderit eu enim reprehenderit ullamco cillum et id. Consectetur deserunt et ipsum anim nisi labore laborum sit cillum nulla non. Anim duis elit tempor aliqua nisi anim tempor excepteur Lorem laborum. Laboris duis dolore eu occaecat est excepteur nostrud. Excepteur deserunt commodo excepteur irure magna eu sunt mollit elit in adipisicing. In duis et dolor nulla elit do sit aliquip minim pariatur incididunt. Mollit reprehenderit eiusmod velit cillum excepteur.',
    },
    {
        id: 9,
        postTitle: 'LAMBORGINI',
        postDate: '4 july 2019',
        postTags: 'test',
        postImageUrl: 'https://via.placeholder.com/800x600',
        like: 20,
        postContent:
            'Commodo do minim esse laboris ut consectetur reprehenderit eu enim reprehenderit ullamco cillum et id. Consectetur deserunt et ipsum anim nisi labore laborum sit cillum nulla non. Anim duis elit tempor aliqua nisi anim tempor excepteur Lorem laborum. Laboris duis dolore eu occaecat est excepteur nostrud. Excepteur deserunt commodo excepteur irure magna eu sunt mollit elit in adipisicing. In duis et dolor nulla elit do sit aliquip minim pariatur incididunt. Mollit reprehenderit eiusmod velit cillum excepteur.',
    },
    {
        id: 10,
        postTitle: 'RENAULT',
        postDate: '4 july 2019',
        postTags: 'test',
        postImageUrl: 'https://via.placeholder.com/800x600',
        like: 20,
        postContent:
            'Commodo do minim esse laboris ut consectetur reprehenderit eu enim reprehenderit ullamco cillum et id. Consectetur deserunt et ipsum anim nisi labore laborum sit cillum nulla non. Anim duis elit tempor aliqua nisi anim tempor excepteur Lorem laborum. Laboris duis dolore eu occaecat est excepteur nostrud. Excepteur deserunt commodo excepteur irure magna eu sunt mollit elit in adipisicing. In duis et dolor nulla elit do sit aliquip minim pariatur incididunt. Mollit reprehenderit eiusmod velit cillum excepteur.',
    },
];

const getPosts = () => {
    return [...posts];
};

export default getPosts;
