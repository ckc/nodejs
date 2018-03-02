function route(handle, pathname){
    console.log("routing..");
    if (typeof handle[pathname]==='function'){
        return handle[pathname]();
    } else{
        console.log("Invaild " + pathname);
        return "404 not found";
    }
}

exports.route = route;