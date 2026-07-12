export function buildRoutePath(path) {
    const regex = /:([a-zA-Z]+)/g;
    const pathRegex = path.replaceAll(regex, "(?<$1>[a-zA-Z0-9\-_]+)");
    const regexFinal = new RegExp(`^${pathRegex}$`);

    return regexFinal;
}
    