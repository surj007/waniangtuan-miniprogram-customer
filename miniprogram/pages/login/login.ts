//login.js
import { commonLoginService } from '../../services/login.service';
Page({
  data: {},
  bindGetUserInfo() {
    commonLoginService();
  }
})