import { createChatBotMessage } from "react-chatbot-kit";
import PDFUpload from "./PDFUpload";

const config = {
  botName: "PDFBot",
  initialMessages: [
    createChatBotMessage("Hi! I'm PDFBot. Please upload a PDF file for processing."),
  ],
  widgets: [
    {
      widgetName: "pdfUpload",
      widgetFunc: (props) => <PDFUpload {...props} />,
    },
  ],
};

export default config;
