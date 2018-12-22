AFRAME.registerComponent('gaze-input-controller', {
        schema: {},
        
        init: function() {
          
          var cursor = this.el;
          var gazeCircle = document.querySelector("#gazeCircle");
          
          cursor.addEventListener('mouseenter', function(event) {
            
            //var tracedObj = event.detail.intersection.object;
            gazeCircle.emit("onGazeEnter");
            //console.log("This object was clicked: " + event.detail.intersection.point);
          
          });
          
          cursor.addEventListener('mouseleave', function(event) {
            
            gazeCircle.emit("startAnimation");
            gazeCircle.emit("pauseAnimation");
            cursor.emit("onGazeLeave");
            
          });
        }
      });
      
      
      AFRAME.registerComponent('interactible', {
        schema: {
          methodName: {type: 'string', default: 'None'}
        },
        
        init: function() {
          
          var el = this.el;
          
          el.addEventListener('click', function(event) {
            
         
            el.emit("onGazeComplete");
         
            var funcName = event.target.getAttribute('functionName');

            if(funcName) {
              

              var codeToExecute = "window."+funcName+"(event.target)";
              var tmpFunc = new Function(codeToExecute);
              tmpFunc();
            }

          });
          
        }
      });

      function EnablePhysics(el) {

        el.setAttribute('dynamic-body', "shape: box;");

        var cameraPosition = document.querySelector("#cameraRig").object3D.position;
        var boxPosition = el.object3D.position;

        var randX = randomXToY(-15, 15);
        var randY = randomXToY(0, 30);
        var randZ = randomXToY(-15, 15);
        
        var randomVector = new CANNON.Vec3(randX, randY, randZ);

        el.body.applyImpulse(
          randomVector,
          new CANNON.Vec3(0, 0, 0)
        );

        //new CANNON.Vec3(10, 18, 0)

      }

      function randomXToY(minVal,maxVal)
      {
        var randVal = minVal+(Math.random()*(maxVal-minVal));
        return Math.round(randVal);
      }

      