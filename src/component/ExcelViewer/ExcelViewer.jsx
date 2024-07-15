import React, { useState } from "react";
import * as XLSX from "xlsx";
import "./ExcelViewer.scss";

function ExcelViewer() {
	const [columns, setColumns] = useState([]);
	const [data, setData] = useState([]);

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.onload = (evt) => {
			const bstr = evt.target.result;
			const wb = XLSX.read(bstr, { type: "binary" });
			const wsname = wb.SheetNames[0];
			const ws = wb.Sheets[wsname];
			const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
			if (data.length > 0) {
				const columns = data[0].map((column) => ({
					name: column,
					selector: column,
				}));
				setData(data.slice(1));
				setColumns(columns);
			}
		};
		reader.readAsBinaryString(file);
	};

	return (
		<div style={{ width: "80%" }}>
			<input
				type='file'
				accept='.xlsx, .xls'
				onChange={handleFileChange}
			/>
			<table>
				<thead>
					<tr>
						{columns.map((col, index) => (
							<th key={index}>{col.name}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((row, index) => (
						<tr key={index}>
							{columns.map((col, colIndex) => (
								<td key={colIndex}>{row[colIndex]}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default ExcelViewer;
