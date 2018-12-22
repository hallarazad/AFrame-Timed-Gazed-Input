# Timed Gaze Input Component for AFrame

Timed gaze input component to use with AFrame for interactions without controller. Works with all VR headsets that support AFrame.

### Live Demo
tiny.cc/hallar-webvr

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.8.0/aframe.min.js"></script> 
  <script src="https://unpkg.com/aframe-gaze-control-component/dist/aframe-gaze-control-component.min.js"></script>
</head>

<body>
  <a-scene>
    
    <a-box 
          material="color: #8C3CA4" 
          interactible
          dynamic-body
          functionName="EnablePhysics"
          position="-0.5 4.426 -4.573"
          scale="-0.680 0.680 0.680" ></a-box>
    
    <a-entity id="cameraRig" position="3 0 0">
        <a-entity position="0 0 0">
          <a-camera wasd-controls-enabled="false" position="0 0 0" look-controls>
            
            <a-entity geometry="primitive: ring; radiusInner: 0.015; radiusOuter: 0.02" 
                  cursor="fuse: true; fuseTimeout: 1500" 
                  scale="0.7 0.7 0.7" 
                  gaze-input-controller 
                  material="shader: flat; color: white"
                  position="0 0 -1" 
                  raycaster="objects: [interactible]; far: 50;"
                  animation__EnterAnimation="property: scale;
                                   startEvents: mouseenter, onGazeEnter;
                                   to: 1 1 1;
                                   dur: 300;"

                  animation__LeaveAnimation="property: scale;
                                   startEvents: mouseleave, onGazeLeave;
                                   from: 1 1 1;
                                   to: 0.7 0.7 0.7;
                                   dur: 200;">
          
              <a-circle id="gazeCircle" 
                        radius="0.01"
                        scale="0 0 0"
                        animation="property: scale;
                                   from: 0 0 0;
                                   to: 1.3 1.3 1.3;
                                   dur: 1500;
                                   startEvents: onGazeEnter, startAnimation;
                                   pauseEvents: onGazeLeave, pauseAnimation;
                                   resumeEvents: onGazeEnter
                                   restartEvents: onGazeEnter;
                                   "></a-circle>
              </a-entity>

          </a-camera>
        </a-entity>
      </a-entity> 
  </a-scene>
</body>
```
