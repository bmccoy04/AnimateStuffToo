window.startup = (function(){
    function _go(){
        console.log("Go!");
    }
    return {
        go: _go
    }
})();