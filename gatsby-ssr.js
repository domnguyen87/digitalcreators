import React from "react"
export const onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  pluginOptions
) => {
  setHeadComponents([
    <script
			key="tracking"
      src="https://cdnjs.cloudflare.com/ajax/libs/tracking.js/1.1.3/tracking-min.js"
      type="text/javascript"
      async
    />,
    <link key="1" rel="stylesheet" href="css/bootstrap.min.css" />,
    <link key="2" rel="stylesheet" href="css/all.min.css" />,
    <link key="3" rel="stylesheet" href="css/animate.min.css" />,
    <link key="4" rel="stylesheet" href="css/owl.carousel.min.css" />,
    <link key="5" rel="stylesheet" href="css/cubeportfolio.min.css" />,
    <link key="6" rel="stylesheet" href="css/jquery.fancybox.min.css"/>,
    <link key="7" rel="stylesheet" href="css/revolution/settings.css" />,
    <link key="8" rel="stylesheet" href="css/style.css" />,

  ])
  setPostBodyComponents([
    <script key="alertify1" src="js/jquery-3.1.1.min.js"/>,
    <script key="alertify2" src="js/propper.min.js"></script>,
    <script key="alertify3" src="js/bootstrap.min.js"></script>,
    <script key="alertify4" src="js/jquery.appear.js"></script>,
    <script key="alertify5" src="js/jquery.matchHeight-min.js"></script>,
    <script key="alertify6" src="js/owl.carousel.min.js"></script>,
    <script key="alertify7" src="js/jquery-countTo.js"></script>,
    <script key="alertify8" src="js/parallaxie.js"></script>,
    <script key="alertify9" src="js/jquery.cubeportfolio.min.js"></script>,
    <script key="alertify10" src="js/jquery.fancybox.min.js"></script>,
    <script key="alertify11" src="js/morphext.min.js"></script>,
    <script key="alertify12" src="js/particles.min.js"></script>,
    <script key="alertify13" src="js/revolution/jquery.themepunch.tools.min.js"></script>,
    <script key="alertify14" src="js/revolution/jquery.themepunch.revolution.min.js"></script>,
    <script key="alertify15" src="js/revolution/extensions/revolution.extension.actions.min.js"></script>,
    <script key="alertify16" src="js/revolution/extensions/revolution.extension.carousel.min.js"></script>,
    <script key="alertify17" src="js/revolution/extensions/revolution.extension.kenburn.min.js"></script>,
    <script key="alertify18" src="js/revolution/extensions/revolution.extension.layeranimation.min.js"></script>,
    <script key="alertify19" src="js/revolution/extensions/revolution.extension.migration.min.js"></script>,
    <script key="alertify20" src="js/revolution/extensions/revolution.extension.navigation.min.js"></script>,
    <script key="alertify21" src="js/revolution/extensions/revolution.extension.parallax.min.js"></script>,
    <script key="alertify22" src="js/revolution/extensions/revolution.extension.slideanims.min.js"></script>,
    <script key="alertify23" src="js/revolution/extensions/revolution.extension.video.min.js"></script>,
    <script key="alertify24" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB6YJu2gWq_4ABpOPGLy0c4JKg82U7a_JM"></script>,
    <script key="alertify25"src="/js/functions.js"></script>,
    <script
      key="1"
      src="../dom/"
      type="text/javascript"
    />,
    <script
      key="fun_javascript"
      dangerouslySetInnerHTML={{
        __html: `
        console.log('Happy Coding and Stay Safe!!')
      `,
      }}
    />,
  ])
}
