import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

export default class IWeb extends Component {
  render() {
    return (
	<WebView
        source={{uri: 'http://www.ilc2012.org/ilc60/index.php/th/2018-12-13-03-32-15'}}
        style={{marginTop: 20}}
      />
    );
  }
}