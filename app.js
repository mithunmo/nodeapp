module.exports = {
    foo: function () {
      // whatever
      return "foo";
    },
    bar: function () {
      // whatever

      return "bar";
    },
    prom: function(){
        var mypromise = new Promise( (resolve, reject) => {

            var x = Math.random()
            if (x < 0.5){
                reject("fail");
            }
            else{
                resolve("true");
            }

        });
        return mypromise;
        
    }

  };
