(function () {
    var oLi = document.getElementsByTagName('li');
    var liArr = Array.prototype.slice.call(oLi);
    liArr.forEach(function (ele, index) {
        
        ele.spec = getSpec(ele);
        ele.onmouseenter = function (e) {
            addClass(e, this, 'in');
        }
        ele.onmouseleave = function (e) {
            addClass(e, this, 'out');
        }
    });
    function getSpec (ele) {
        return {    
            w: ele.offsetWidth,
            h: ele.offsetHeight
        }
    }
    function addClass (e, ele, state) {
        var x = e.offsetX - ele.spec.w/2;
        var y = e.offsetY - ele.spec.h/2;
        var direction;
        var d = (Math.round((Math.atan2(y, x) * 180/Math.PI + 180) / 90) + 3) % 4;
        switch(d) {
            case 0 :
                direction = 'top';
                break;
            case 1 : 
                direction = 'right';
                break;
            case 2 :
                direction = 'bottom';
                break;
            case 3 :
                direction = 'left';
        }
        ele.className = state + '-' + direction;
    }
}());