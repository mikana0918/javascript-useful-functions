//using example: formatDate('Sun May 11,2014');
//output: 2014-05-11
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

//FormatDate as YYYY/MM/DD HH:MM
function formatDate(date) {
    var d = new Date(date),
        minutes = d.getMinutes()
        hours = d.getHours();
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-')+' '+[hours, minutes].join(':');
}

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
