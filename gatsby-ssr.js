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
  ])
  setPostBodyComponents([
    <script
			key="alertify"
      src="../js/"
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
