import PropTypes from "prop-types";
import React from "react";
import {Dimensions, Platform, StyleSheet, Text} from "react-native";
import HTML from "react-native-render-html";
import {Content} from "native-base";

export default class DialogHtml extends React.PureComponent {
  static propTypes = {
    ...Text.propTypes,
    style: PropTypes.any,
    children: PropTypes.string.isRequired
  };

  static displayName = "DialogHtml";

  render() {
    const { style, children, ...otherProps } = this.props;
    return (
        <Content style={[styles.text, style]}>
            <HTML html={children}
                  imagesMaxWidth={Dimensions.get('window').width}
                  {...otherProps}/>
        </Content>
    );
  }
}

const styles = StyleSheet.create({
  text: Platform.select({
    ios: {
      textAlign: "center",
      color: "black",
      fontSize: 13,
      marginTop: 4,
      maxHeight: 400
    },
    android: {
      color: "#33383D",
      fontSize: 16,
      marginTop: 10,
      maxHeight: Dimensions.get('window').height - 100
    },
    web: {
      color: "#33383D",
      fontSize: 16,
      marginTop: 10
    }
  })
});

