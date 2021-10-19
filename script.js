function imageSwitch(target){
    if(target==2){
        document.getElementById("homeimg1").className = "w-25 d-none d-md-none img-fluid rounded-circle";
        document.getElementById("homeimg2").className = "w-25 d-none d-md-block img-fluid rounded-circle";
    }
    if(target==1){
        document.getElementById("homeimg2").className = "w-25 d-none d-md-none img-fluid rounded-circle";
        document.getElementById("homeimg1").className = "w-25 d-none d-md-block img-fluid rounded-circle";
    }
    
}