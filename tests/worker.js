importScripts("../dist/type-master.iife.js");
let canvas = null;
self.onmessage = function(event) {
    var theObject = null; 
    var response = {sentType: "unknown", theData: theObject};
    if ( typeMaster.enhancedTypeOf(event.data) === 'object') {
        canvas = event.data.canvas;
    }

    if (event.data === 'send back Array object') {
        theObject = ["hello", "world"] 
        response.sentType = "Array";
    }
    if (event.data === 'send back Int8Array object') {
        theObject = new Int8Array([1, 2, 3, 4, 5]);
        response.sentType = "Int8Array";
    }
    if (event.data === 'send back Float32Array object') {
        theObject = new Float32Array([1.1, 2.2, 3.3, 4.4, 5.5]);
        response.sentType = "Float32Array";
    }
    if (event.data === 'send back Float64Array object') {
        theObject = new Float64Array([1.1, 2.2, 3.3, 4.4, 5.5]);
        response.sentType = "Float64Array";
    }
    if (event.data === 'send back Date object') {
        theObject = new Date();
        response.sentType = "Date";
    }
    if (event.data === 'send back Error object') {
        theObject = new Error("hello world");
        response.sentType = "Error";
    }
    if (event.data === 'send back SyntaxError object') {
        theObject = new SyntaxError("hello world");
        response.sentType = "SyntaxError";    
    }
    if (event.data === 'send back TypeError object') {
        theObject = new TypeError("hello world");
        response.sentType = "TypeError";
    }
    if (event.data === 'send back RangeError object') {
        theObject = new RangeError("hello world");
        response.sentType = "RangeError";
    }
    if (event.data === 'send back RegExp object') {
        theObject = /hello world/g;
        response.sentType = "RegExp";
    }
    if (event.data === 'send back Blob object') {
        theObject = new Blob(["hello world"], {type : 'text/plain'});
        response.sentType = "Blob";
    }
    if (event.data === 'send back File object') {
        theObject = new File(["hello world"], "hello.txt", {type : 'text/plain'});
        response.sentType = "File";
    }
    if (event.data === 'send back ArrayBuffer object') {
        theObject = new ArrayBuffer(8);
        response.sentType = "ArrayBuffer";
    }

    if (event.data === 'send back ImageData object') {
        if ( canvas === null ) {
            response.sentType = "ImageData";
            theObject = null; 
        } else {
            var context = canvas.getContext("2d");
            theObject = context.createImageData(100, 100);
            console.log(typeMaster.enhancedTypeOf(theObject));
            response.sentType = "ImageData";
        }
    }

    response.theData = theObject;
    self.postMessage(response);
};
