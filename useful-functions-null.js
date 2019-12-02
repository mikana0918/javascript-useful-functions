/**
 *  php isset()
 *
 *  @param  data    value
 *  @return         true / false
 *
 */
 let isset = function(data){
    if(data === "" || data === null || data === undefined){
        return false;
    }else{
        return true;
    }
};
