//index.js
import { testApi } from '../../api/test.api';

Page({
  // 一个页面只会调用一次，可以在onLoad的参数中获取打开当前页面路径中的参数
  onLoad() {},
  // 页面显示/切入前台时触发
  onShow() {},
  // 页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
  // 注意：对界面内容进行设置的 API 如wx.setNavigationBarTitle，请在onReady之后进行。
  onReady() {},
  // 页面隐藏/切入后台时触发
  // 如navigateTo或底部tab切换到其他页面，小程序切入后台等
  onHide() {},
  // 页面卸载时触发
  // 如redirectTo或navigateBack到其他页面时
  onUnload() {},
  data: {},
  getTest() {
    testApi();
  }
})