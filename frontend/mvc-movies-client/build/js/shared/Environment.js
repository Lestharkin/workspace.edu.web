export default class Environment {
    static getEndpointMovies = async () => {
        const env = await fetch('./js/env/env.json');
        const json = await env.json();
        const endpoint = json['movies'];
        return `${endpoint.protocol}://${endpoint.domain}/${endpoint.path}/${endpoint.version}/${endpoint.resource}`;
    };
    static getEndpointContactRegister = async () => {
        const env = await fetch('./js/env/env.json');
        const json = await env.json();
        const endpoint = json['contact/register'];
        return `${endpoint.protocol}://${endpoint.domain}/${endpoint.path}/${endpoint.version}/${endpoint.resource}`;
    };
}
