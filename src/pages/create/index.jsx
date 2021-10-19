import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import { Text, View } from "@tarojs/components";

import "./index.scss";

export default function Create() {
	const [index, setIndex] = useState(0);
	return (
		<View className="create-page">
			<View className="create-tab">
				<View className="create-tab-wrapper">
					<Text className="create-tab-item" onClick={() => setIndex(0)}>收入</Text>
					<Text className="create-tab-item" onClick={() => setIndex(1)}>支出</Text>
					<View className="create-tab-slider" style={{ transform: `translate3d(${index * 100}px,0,0)` }}></View>
				</View>
			</View>
		</View>
	);
}