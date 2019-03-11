class Typer{
  constructor(params = {debug = false,elem = null,typeText = null, repeat = 0, interval = 100, delay = 0, typingLine = true, deleteOnFinish = false, hideLineOnFinish = true} = {}){
    this.a = params;
    this.setValues(params);
    this.log('init');
    this.createElement();
    if(this.b)this.c = new Line(this.d);

    this.e = setInterval(() => {
      if(this.f) return;
      if(this.g >0 && this.h >= this.g ) {
        if(this.i && this.b){this.c.hide()}
        return;
      }
      if(this.j){
        if(this.k<this.l){
          this.k++;
          return;
        }
        else{
          this.k = 0;
          this.j=false;
        }
      }
      if(!this.m){
        if(this.n.length < this.o[this.p].length){
          this.n = this.o[this.p].substr(0,this.n.length+1);
        }
        else if(this.n.length >= this.o[this.p].length){
          if(this.h==this.g-1 && this.p == this.o.length-1 && !this.q){
            if(this.i && this.b){this.c.hide()}
            this.m = false;
            return;
          }
          else{
            this.m = true;
          }
          if(this.l > 0)this.j = true;
        }
      }
      else{
        if(this.n.length > 0){
          this.n = this.o[this.p].substr(0,this.n.length-1);
        }
        else if(this.n.length == 0){
          this.m = false;
          if(this.p < this.o.length-1) this.p++;
          else {
            this.h++;
            this.p=0;
          }
        }
      }
      this.r.innerHTML ='&#x200a;' +  this.n;
    }, this.e);
  }
  setValues(params){
    let {debug = false,elem = null,typeText = null, repeat = 0, interval = 100, delay = 0, typingLine = true, deleteOnFinish = false, hideLineOnFinish = true} = params;
    this.debug = debug;
    this.f=false;
    this.i = hideLineOnFinish;
    this.q = deleteOnFinish;
    this.d = (elem != null) ? document.querySelector(elem) : this.error('elem');
    this.o = (typeText != null) ? typeText : this.error('typeText', typeText);
    this.o = (typeof this.o === 'object') ? this.o : [this.o];
    this.g = repeat;
    this.e = (interval <= 0) ? this.error('divideByZero') : interval;
    this.l = delay/interval;
    this.b = typingLine;
    this.n = "";
    if(delay > 0){
      this.j = false;
    }
    this.k = 0;
    this.m = false;
    this.h = 0;
    this.p = 0;
  }
  error(code, text){
    const codeList={elem:`Please specify an valid element class name`,typeText:`The given text "${text}" can't be used`, divideByZero:`The interval param must be greater than 0`};
    if(codeList[code]) {throw new Error(codeList[code]);}
  }
  log(code){
    const logList = {init:'Typer was initialized with debug option. All warnings will be displayed in the console.'};
    if(this.debug && logList[code]) console.log(logList[code]);
  }
  createElement(){
    this.r = document.createElement('span');
    this.d.append(this.r);
  }
  pause(){
    this.f = true;
  }
  play(){
    this.f = false;
  }
  reload(){
    this.setValues(this.a);
  }
  destroy(){
    clearInterval(this.e);
    this.c.destroy();
    this.d.innerHTML = null;
  }
}
class Line{
  constructor(element){
    this.d = element;
    this.s = false
    this.createLine();
    this.t = false;
    this.e = setInterval(() => {
      if(this.s) return;
      if(this.t == false) {
        this.b.style.display = 'none';
        this.t = true;
      }else{
        this.b.style.display = 'inline-block';
        this.t = false;
      }
    }, 500);
  }
  hide(){
    this.s = true;
    this.t = true;
    this.b.style.display = 'none';
  }
  show(){
    this.b.style.display = 'inline-block';
    this.t = false;
    this.s = false;
  }
  createLine(){
    this.b = document.createElement("span");
    this.b.innerHTML = "│";
    this.d.appendChild(this.b);
  }
  destroy(){
    clearInterval(this.e);
    this.b = null;
  }
}
