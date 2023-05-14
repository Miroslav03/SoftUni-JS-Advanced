function requestValidator(object) {

    const methodArr = [`GET`, `POST`, `DELETE`, `CONNECT`]
    const versionArr = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    const urlRegex = /[^A-Za-z0-9\.\*]+/g
    const messageRegex = /[\<\>\\\&\'\"]/g

    if (!methodArr.includes(object.method) || object.method == undefined) {
        throw new Error(`Invalid request header: Invalid Method`)
    }

    if (urlRegex.test(object.uri) || object.uri == undefined || object.uri == '') {
        throw new Error(`Invalid request header: Invalid URI`)
    }

    if (!versionArr.includes(object.version) || object.version == undefined) {
        throw new Error(`Invalid request header: Invalid Version`)
    }

    if (messageRegex.test(object.message) || object.message == undefined) {
        throw new Error('Invalid request header: Invalid Message')
    }



    return object;
}
requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
})

requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
})
requestValidator({
    method: 'POST',
    uri: 'home.bash',
    version: 'HTTP/2.0'
})   