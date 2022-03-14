import React from 'react'
import './src/styles/global.css';
import  WrapElement  from './src/components/wrap-page';

export const wrapPageElement = (apiContext, pluginOptions) => {
  console.log('apiContext', apiContext);
  console.log('pluginOptions', pluginOptions);
  return (<WrapElement {...apiContext.props}>{apiContext.element}</WrapElement>);
}