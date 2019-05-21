
function RemoteControl(){
    var state = 0;
    var mode;
    var temperature;
    
    this.toggle = function(){
        if (state == 0){
            state = 1;
            if (temperature == undefined){
                temperature = 26;
            }
        } else {
            state = 0;
        }
    }

    this.switchModes = function(_mode){
        mode = _mode;
    }

    this.increaseTemp = function(){
        if (state){
            if (temperature < 30){
                temperature++;    
            }
        } else {
            console.log("Switch ON the AC first");
        }
    }

    this.decreaseTemp = function(){
        if (state){
            if (temperature > 16){
                temperature--;    
            }
        } else {
            console.log("Switch ON the AC first");
        }
    }

    this.displayStats = function(){
        if (state){
            console.log("Current temperature is: " + temperature);
            if (mode){
                console.log("Current mode is: " + mode);
            } else {
                console.log("Mode is not set yet.");
            }
            
        } else {
            console.log("Switch ON the AC first");
        }
    }

    this.setTimer = function(timeout){
        if(typeof timeout == 'number' && state){
            setTimeout(function(){ 
                state = 0;
                console.log("AC is OFF now."); 
            }, timeout);
        } else {
            console.log("Switch ON the AC first");
        }
    }

    this.ACstate = function(){
        if (state){
            console.log('AC is on');
        } else {
            console.log('AC is off');
        }
    }
}

remoteControl = new RemoteControl();
remoteControl.toggle();
remoteControl.increaseTemp();
remoteControl.displayStats();
remoteControl.decreaseTemp();
remoteControl.displayStats();
remoteControl.setTimer(5000);
remoteControl.ACstate();