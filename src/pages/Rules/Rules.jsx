import PdfViewer from "./PdfViewer";
import "./Rules.scss";

import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	"pdfjs-dist/build/pdf.worker.min.mjs",
	import.meta.url
).toString();

const Rules = () => {
	// return <PdfViewer file='/Rules.pdf' />;
};

export default Rules;
