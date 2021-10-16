import React from "react"; // eslint-disable-line no-unused-vars
import { Image, Text, View } from "@tarojs/components";

import "./index.scss";
import ImgComing from "../../assets/img/coming.png";

export default function Chart() {
	return (
		<View className="chart-page">
			<Image className="chart-placeholder" src={ImgComing} />
			<Text>图表功能有助于分析你的消费观念</Text>
			<Text>正在努力开发中，敬请期待！！！</Text>
		</View>
	);
}