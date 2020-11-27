function openit(id){
    var ids=['#mulsolwithsteps','#table','#areacal','#divide','#simpletrignocollapse','#factors','#integralcollapse','#differentiatecollapse','#partialdiffcollapse','#laplacecollapse','#matrixcollapse','#multiplematrixcollapse','#singlematrixcollapse','#about']
    for(i=0;i<ids.length;i++){
        if(ids[i]!=id){
            $(ids[i]).slideUp();
        }else{
            $(String(id)).slideToggle();
        }
    }
}
        $(document).ready(function (){
            $("#divideoption").click(function(){
                openit("#divide");
                closenav();
            });

            $("#aboutbutton").click(function(){
                openit("#about");
                closenav();
            });
            $("#factorsoption").click(function(){
                openit("#factors");
                closenav();
            });

            $("#tableoption").click(function(){
                openit("#table");
                closenav();

            });
//            matrix
            $("#matrixcollapsebtn").click(function(){
                openit("#matrixcollapse");
                closenav();
            });

            $("#differentiate").click(function () {
                openit("#differentiatecollapse");
                closenav();
            })

            $("#integrate").click(function () {
                openit("#integralcollapse");
                closenav();
            })
            $("#partialdiff").click(function () {
                openit("#partialdiffcollapse");
                closenav();
            })

            $("#laplace").click(function () {
                openit("#laplacecollapse");
                closenav();
            })
            $("#areacalbtn").click(function () {
                openit("#areacal");
                closenav();
            })

            $("#mulsolwithstepsbtn").click(function () {
                openit('#mulsolwithsteps')
                closenav();
            })

            $("#simpletrignocollapsebutton").click(function () {
                openit("#simpletrignocollapse");
                closenav();
            })


            $("#inverselaplacecollapsebutton").click(function(){
                $("#inverselaplacecollapse").slideToggle();
                $("#laplacecollapseit").slideUp();
            });
            $("#laplacecollapsebutton").click(function(){
                $("#inverselaplacecollapse").slideUp();
                $("#laplacecollapseit").slideToggle();
            });
            $("#diffsolvebutton").click(function () {
                diffsolve();
            })
            $("#solvepardiff").click(function () {
                partialdiffsolve();
            })

        });
