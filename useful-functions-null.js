/**
 *  php isset()
 *
 *  @param  data    value
 *  @return         true / false
 *
 */
 function isset(data){
    if(data === "" || data === null || data === undefined){
        return false;
    }else{
        return true;
    }
};
