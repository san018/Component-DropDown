import Component from '@ember/component';

export default Component.extend({
  count :  0,
  isOpen : false,
  btnVal : "DROPDOWN",
  keyUp(event)
  {
    //console.log(event.target);
    if(event.keyCode==40)
    {
      if(this.get('count') < 3)
      {
        this.set('count', this.get('count')+1);
      }
      console.log(this.count);
    }
    else if(event.keyCode==38)
    {
      if(this.get('count') > 1)
      {
        this.set('count', this.get('count')-1);
      }
      console.log(this.count);
    }
    if(event.keyCode==13)
    {
      var x = "OPTION" + this.get('count');
      //document.getElementById("stateId").innerHTML = "OPTION  " + optionNum;
      this.set('btnVal', x);
      this.set('count', 0);
      console.log(this.count);
    }
  },
  click(event)
  {
      console.log("Click");
      if(event.target.innerHTML != "DROPDOWN")
      {
        //console.log(event.target.innerHTML);
        var x = event.target.innerHTML;
        console.log(x);
        this.set("btnVal",x);
      }
      console.log(this.isOpen);
      if(this.isOpen)
      {
        this.set("isOpen", false);
      }
      else
      {
        this.set("isOpen", true);
      }
      console.log(this.isOpen);
      /*
      if(this.get('count') != 0)
      {
      var optionNum = this.get('count');
      document.getElementById("stateId").innerHTML = "OPTION  " + optionNum;
      document.getElementById("dropId").classList.toggle("show");
      }
      */
  },
  /*
  calcCount : computed("count" , function() {
    console.log("Computed property :", this.count);
     return this.count;
  }),

  actions:
  {
    drop()
    {
      //  document.getElementById("dropId").classList.toggle("show");
    }
  }
  */
});
