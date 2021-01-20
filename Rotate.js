class Rotate {
    constructor(dom,json) {
        this.dom = document.querySelector(dom);
        this.json = json;
        this.angle = 0;
        this.time = json['time'] || 1000;
    }
    start(a,fn){
        console.log(fn)
        let _dom = this.dom;
        _dom.style.cssText = `-webkit-transform:rotateZ(${360-this.angle}deg)`;
        this.angle = 360/this.json.size*a;
        setTimeout(()=>{
        _dom.style.cssText=`-webkit-transform:rotateZ(${3600-this.angle}deg);-webkit-transition:-webkit-transform ${this.time}ms cubic-bezier(0.35, -0.005, 0.565, 1.005) 0s;`;
        },25);
        function endFn(){
            _dom.removeEventListener('webkitTransitionEnd',endFn);
            fn && fn();
        };
        _dom.addEventListener('webkitTransitionEnd',endFn);
    }
    reset(){
        this.angle = 0;
        return this
    }
};

export default Rotate