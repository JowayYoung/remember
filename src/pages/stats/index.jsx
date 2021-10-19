import React, { useState } from "react"; // eslint-disable-line no-unused-vars
import { Picker, Text, View } from "@tarojs/components";
import Day from "dayjs";

import "./index.scss";
import STATS_LIST from "../../mocks/stats-list";
import { DAYS } from "../../utils/getting";

export default function Stats() {
	const [date, setDate] = useState(Day().format("YYYY-MM"));
	const onChange = e => setDate(e.detail.value);
	const statsDom = STATS_LIST.map(v => {
		const date = Day(v.date);
		const amount = v.list.reduce((t, w) => t + w.money, 0).toFixed(2);
		return (
			<View className="stats-detail-item">
				<View className="stats-detail-title">
					<Text>{date.format("MM-DD")} 星期{DAYS[date.day()]}</Text>
					<Text>{amount >= 0 ? "收入" : "支出"}：{amount}</Text>
				</View>
				<View className="stats-detail-list">
					{v.list.map(w => (
						<View className="stats-detail-data">
							<View className="stats-detail-type">
								<View className="stats-detail-icon one" />
								<Text className="stats-detail-mark">{w.bigType}-{w.smallType}</Text>
							</View>
							<Text className="stats-detail-money">{w.money}</Text>
						</View>
					))}
				</View>
			</View>
		);
	});
	return (
		<View className="stats-page">
			<View className="stats-summary">
				<View className="stats-summary-title">
					<Text className="stats-summary-title-item">日期</Text>
					<Text className="stats-summary-title-item">收入</Text>
					<Text className="stats-summary-title-item">支出</Text>
				</View>
				<View className="stats-summary-body">
					<Picker className="stats-summary-body-item" mode="date" fields="month" onChange={onChange}>
						<Text className="stats-summary-body-date">{date}</Text>
					</Picker>
					<Text className="stats-summary-body-item">99999.99</Text>
					<Text className="stats-summary-body-item">99999</Text>
				</View>
			</View>
			<View className="stats-detail">
				<View className="stats-detail-wrapper">{statsDom}</View>
			</View>
		</View>
	);
}