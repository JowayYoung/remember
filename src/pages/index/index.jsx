import React, { useCallback } from "react";
import { View, Text, Button, Image } from "@tarojs/components";
import { useEnv, useModal, useNavigationBar, useToast } from "taro-hooks";

import "./index.scss";
import logo from "./hook.png";

const Index = () => {
	const env = useEnv();
	const [, { setTitle }] = useNavigationBar({ title: "Taro Hooks" });
	const [showModal] = useModal({
		confirmColor: "#8c2de9",
		confirmText: "支持一下",
		mask: true,
		showCancel: false,
		title: "Taro Hooks!"
	});
	const [showToast] = useToast({ mask: true });
	const handleModal = useCallback(() => showModal({ content: "不如给一个star⭐️!" }).then(() => showToast({ title: "点击了支持!" })), [showModal, showToast]);
	return (
		<View className="wrapper">
			<Image className="logo" src={logo} />
			<Text className="title">为Taro而设计的Hooks Library</Text>
			<Text className="desc">
        		目前覆盖70%官方API. 抹平部分API在H5端短板. 提供近30+Hooks!
        		并结合ahook适配Taro!
			</Text>
			<View className="list">
				<Text className="label">运行环境</Text>
				<Text className="note">{env}</Text>
			</View>
			<Button className="button" onClick={() => setTitle("Taro Hooks Nice!")}>设置标题</Button>
			<Button className="button" onClick={handleModal}>使用Modal</Button>
		</View>
	);
};

export default Index;