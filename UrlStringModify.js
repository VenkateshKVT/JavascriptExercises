function stripUrlParams(url, paramsToStrip=[]) {
    let urlDomain = url.split('?');
    if(Array.isArray(urlDomain) && urlDomain.length == 1)
        return url;
    var parameters = urlDomain[1];
    var parameterList = parameters.split('&');
    // Remove Duplicates
    // parameterList = Array.from(new Set(parameterList));
    // console.log("After removing duplicates", parameterList);

    // Remove duplicates & repeated parameters; like a=2&a=4
    let paramsSet ={}
    parameterList.forEach(param => {
        let splitParam = param.split('=');
        paramsSet[splitParam[0]] = splitParam[1];
    });
    parameterList = [];
    for(let i in paramsSet) {
        parameterList.push(i + "=" + paramsSet[i]);
    }
    console.log("After removing repetaed params ", parameterList);
    // Remove unnecessary parameters
    
    let resultParams = [];
    for(let i=0; i<parameterList.length; i++) {
        let param = parameterList[i];
        let paramSplit = param.split('=');
        let key = paramSplit[0];
        console.log("Key ", key);
        if(paramsToStrip.indexOf(key) == -1)
            resultParams.push(parameterList[i])
    }


    resultParams = resultParams.join('&');
    return urlDomain[0]+'?'+resultParams;

}

console.log("O/P", stripUrlParams("https://edabit.com?a=1&b=2&c=3&a=4&b=2&d=4"));