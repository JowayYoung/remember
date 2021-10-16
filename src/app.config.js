export default {
	pages: [
		"pages/stats/index",
		"pages/chart/index",
		"pages/create/index",
		"pages/todo/index",
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
			iconPath: "assets/icon/create.png",
			pagePath: "pages/create/index",
			selectedIconPath: "assets/icon/create-active.png",
			text: "记账"
		}, {
			iconPath: "assets/icon/todo.png",
			pagePath: "pages/todo/index",
			selectedIconPath: "assets/icon/todo-active.png",
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