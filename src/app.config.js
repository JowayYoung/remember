export default {
	pages: [
		"pages/stats/index",
		"pages/chart/index",
		"pages/plan/index",
		"pages/mine/index"
	],
	tabBar: {
		color: "#333",
		list: [{
			iconPath: "assets/icon/stats.png",
			pagePath: "pages/stats/index",
			selectedIconPath: "assets/icon/stats-active.png",
			text: "明细"
		}, {
			iconPath: "assets/icon/chart.png",
			pagePath: "pages/chart/index",
			selectedIconPath: "assets/icon/chart-active.png",
			text: "图表"
		}, {
			iconPath: "assets/icon/plan.png",
			pagePath: "pages/plan/index",
			selectedIconPath: "assets/icon/plan-active.png",
			text: "计划"
		}, {
			iconPath: "assets/icon/mine.png",
			pagePath: "pages/mine/index",
			selectedIconPath: "assets/icon/mine-active.png",
			text: "我的"
		}],
		selectedColor: "#3c9"
	},
	window: {
		backgroundTextStyle: "light", // 下拉加载样式
		navigationBarBackgroundColor: "#3c9", // 导航背景颜色
		navigationBarTextStyle: "white", // 导航标题颜色
		navigationBarTitleText: "记点" // 导航标题内容
	}
};