function WebGLtest(){try{return!!window.WebGLRenderingContext&&!!document.createElement("canvas").getContext("experimental-webgl")}catch(e){return false}}if(!WebGLtest()){console.log("NO WEBGL");$("#logotitle").fadeOut();$(".overlay").fadeIn();$("#noWebGL").fadeIn();$("#noWebGL").html("<center>Houston we have a problem. <br/><br/>Polyfra.me projects rely on Javascript and webGL to function properly, it seems your browser is outdated and/or doesn't support WebGL.</br></br>For amazing 3D experiences, find out how to get WebGL over at <a href='http://get.webgl.org' class='warninglink'>http://get.webgl.org</a><br/><p>In the meantime, you can check out this youtube teaser:</p>"+'<iframe width="560" height="315" src="//www.youtube.com/embed/8G8d-umcvfg" frameborder="0" allowfullscreen></iframe></center>')}else{console.log("WEBGL ENABLED")}