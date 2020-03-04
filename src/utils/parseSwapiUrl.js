export default (url) => {
    const matches = url.match(/^https:\/\/swapi\.co\/api\/(\w+)\/(\d+)\/$/);
    const [match, resource, id] = matches;
    return [resource, id];
}