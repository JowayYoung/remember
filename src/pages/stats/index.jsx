import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import { Picker, Text, View } from "@tarojs/components";
import Day from "dayjs";
import { AtFab, AtActionSheet, AtActionSheetItem } from "taro-ui";

import "./index.scss";

export default function Stats() {
	const [date, setDate] = useState(Day().format("YYYY-MM"));
	const [visible, setVisible] = useState(false);
	const onChangeDate = e => setDate(e.detail.value);
	const onShowModal = () => setVisible(true);
	const onHideModal = () => setVisible(false);
	return (
		<View className="stats-page">
			<View className="stats-summary">
				<View className="stats-summary-title">
					<View className="stats-summary-title-item">日期</View>
					<View className="stats-summary-title-item">收入</View>
					<View className="stats-summary-title-item">支出</View>
				</View>
				<View className="stats-summary-body">
					<Picker className="stats-summary-body-item" mode="date" fields="month" onChange={onChangeDate}>
						<Text className="stats-summary-body-date">{date}</Text>
					</Picker>
					<View className="stats-summary-body-item">99999.99</View>
					<View className="stats-summary-body-item">99999</View>
				</View>
			</View>
			<View className="stats-detail"></View>
			<AtFab className="stats-btn" size="small" onClick={onShowModal}>
				<Text className="at-fab__icon at-icon at-icon-add"></Text>
			</AtFab>
			<AtActionSheet title="请选择记账类型" cancelText="取消" isOpened={visible} onCancel={onHideModal}>
				<AtActionSheetItem>收入</AtActionSheetItem>
				<AtActionSheetItem>支出</AtActionSheetItem>
			</AtActionSheet>
		</View>
	);
}