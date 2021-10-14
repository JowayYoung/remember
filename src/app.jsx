import React, { useEffect } from "react";

import "./app.scss";

export default function App(props) {
	useEffect(() => console.log("加载完毕"), []);
	return props.children;
}