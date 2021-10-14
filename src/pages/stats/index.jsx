import React from "react"; // eslint-disable-line no-unused-vars
import { View } from "@tarojs/components";
import { AtButton } from "taro-ui";

import "./index.scss";

export default function Stats() {
	return (
		<View className="stats-page">
			<AtButton>按钮文案</AtButton>
			<AtButton type='primary'>按钮文案</AtButton>
			<AtButton type='secondary'>按钮文案</AtButton>
		</View>
	);
}