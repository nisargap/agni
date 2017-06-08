import React, { Component } from "react";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class BitcoinDonation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const styles = {
      bitcoindonate: {
        marginTop: "30px"
      },
      titleStyle: {
        fontFamily: "Quicksand, sans-serif",
        fontSize: "1.5em",
        fontWeight: "500",
        textAlign: "center",
        color: "#B573D0"
      },
      contentStyle: {
        margin: "0 auto",
        textAlign: "center"
      }
    }
    const actions = [
      <FlatButton
        label="Dismiss"
        primary={false}
        backgroundColor="#B573D0"
        hoverColor="#c0c0c0"
        labelStyle={{
          fontFamily: "Quicksand, sans-serif",
          color: "#FFF"
        }}
        onTouchTap={this.handleClose}
      />
    ];
    return (
      <div style={styles.bitcoindonate}>
        <img onClick={this.handleOpen} className="image-effects" src="https://blockchain.info/Resources/buttons/donate_64.png"/>
          <Dialog
            title="Show us some love by donating Bitcoin"
            actions={actions}
            titleStyle={styles.titleStyle}
            contentStyle={styles.contentStyle}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
          <img style={{ margin: "0 auto", textAlign: "center" }} src="https://blockchain.info/qr?data=185AoN9tJqugcNRu9k8FnVdBrhEZi8xiCg&size=200" />
          <h2>Send Bitcoin to:</h2>
          <span style={{ fontSize: "1.5em", wordWrap: "break-word"}}>185AoN9tJqugcNRu9k8FnVdBrhEZi8xiCg</span><br /><br />
          <a href="https://blockchain.info/address/185AoN9tJqugcNRu9k8FnVdBrhEZi8xiCg" target="_blank">Track the transaction</a>
          </Dialog>
      </div>
    )
  }
}
