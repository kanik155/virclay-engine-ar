var xrcontroller=pc.createScript("xrcontroller");xrcontroller.attributes.add("disableWorldTracking",{type:"boolean"}),xrcontroller.attributes.add("shadowmaterial",{type:"asset"}),xrcontroller.attributes.add("sceneRootEntity",{type:"entity"}),xrcontroller.prototype.initialize=function(){this.initXr(),this.app.scenes.list().length>1&&this.loadSpace(this.app.scenes.list()[1].name)},xrcontroller.prototype.loadSpace=function(t){let e=this.app.scenes.find(t);this.app.scenes.loadSceneHierarchy(e.url,((t,e)=>{t?console.error(t):e.reparent(this.sceneRootEntity)}))},xrcontroller.prototype.initXr=function(){const t=this.disableWorldTracking;this.shadowmaterial&&XRExtras.PlayCanvas.makeShadowMaterial({pc:pc,material:this.shadowmaterial});const e=XRExtras.PlayCanvas.findOneCamera(this.entity);XRExtras.Loading.showLoading({onxrloaded:(({pcCamera:e,pcApp:r},a)=>()=>{XR8.XrController.configure({disableWorldTracking:t}),XR8.PlayCanvas.runXr({pcCamera:e,pcApp:r},a)})({pcCamera:e,pcApp:this.app},[XRExtras.AlmostThere.pipelineModule(),XRExtras.Loading.pipelineModule(),XRExtras.RuntimeError.pipelineModule()])})};var taprecenter=pc.createScript("taprecenter");taprecenter.prototype.initialize=function(){this.app.touch.on(pc.EVENT_TOUCHSTART,(e=>{1===e.touches.length&&this.app.fire("xr:recenter")}))};