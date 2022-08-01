const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholdeTYPO.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
  ];


urls.forEach(async (url) => {
    try {
    const result = await fetch(url);
    console.log(result);
    } catch (error) {
        console.log('WHOOOPS');
    }
});