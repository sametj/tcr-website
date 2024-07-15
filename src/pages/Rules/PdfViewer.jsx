import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const PdfViewer = ({ file }) => {
	const [numPages, setNumPages] = useState(null);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	return (
		<div className='rules-container'>
			<Document
				file={file}
				onLoadSuccess={onDocumentLoadSuccess}>
				{Array.from(new Array(numPages), (el, index) => (
					<Page
						className={"pdf-page"}
						key={`page_${index + 1}`}
						pageNumber={index + 1}
						width={window.innerWidth - 40}
					/>
				))}
			</Document>
		</div>
	);
};

export default PdfViewer;
