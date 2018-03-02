function begin(){
    console.log("begin");
    return "hello, begin";
}


function upload(){
    console.log("upload");
    return "Hello, upload";
}

exports.begin = begin;
exports.upload = upload;