import React from 'react';
import WrapElement from './src/components/wrap-page';
import RootWrap from './src/components/wrap-root';

export const wrapRootElement = (props) => {
  return <RootWrap {...props}></RootWrap>
}

export const wrapPageElement = ({ element, props }) => {
  return (<WrapElement {...props } > { element } </WrapElement>);
};

export const onRenderBody= ({setHeadComponents,setHtmlAttributes,setBodyAttributes}) => {
  setBodyAttributes({
    className:'my-body-class-changed'
  });
  setHtmlAttributes({
    lang:'en'
  });
  setHeadComponents([
    <script key='my-script-2' src='www.xxx.com/a.js'></script>
  ])
}

export const onPreRenderHTML= (apiCallbackContext) => {
  const {getHeadComponents,replaceHeadComponents, pathname} = apiCallbackContext;
  const headComponents = getHeadComponents();
  console.log('pathname is ',pathname);
  replaceHeadComponents([...headComponents,<script key='scriptAdded' dangerouslySetInnerHTML={{ __html: 'console.log("Script added!")' }}></script>])
}

export const replaceRenderer = ({ replaceBodyHTMLString ,setBodyProps}) => {
  setBodyProps({
    body:'bodyProps'
  })
}