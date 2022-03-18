import React from 'react'
import './src/styles/global.css';
import  WrapElement  from './src/components/wrap-page';

import RootWrap from './src/components/wrap-root';

export const wrapRootElement = (props) => {
  return <RootWrap {...props}></RootWrap>
}

export const wrapPageElement = (apiContext, pluginOptions) => {
  return (<WrapElement {...apiContext.props}>{apiContext.element}</WrapElement>);
}