class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      if (message.includes("upload")) {
        this.actionProvider.handlePDFUpload();
      }
    }
  }
  
  export default MessageParser;
  