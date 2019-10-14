"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
App({
    onLaunch: function () { },
    onShow: function () {
        var self = this;
        wx.getLocation({
            success: function (locationInfo) {
                self.globalData.locationInfo = locationInfo;
            },
            fail: function (err) {
                console.debug('[srj][app.ts][wx.getLocation]fail: ', err);
            }
        });
        wx.getStorage({
            key: 'token',
            success: function () {
            },
            fail: function () {
            }
        });
    },
    onHide: function () { },
    onError: function (err) {
        console.error('[srj][app.ts][onError]app error: ', err);
    },
    globalData: {
        token: '',
        locationInfo: {}
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsR0FBRyxDQUFlO0lBRWhCLFFBQVEsZ0JBQUksQ0FBQztJQUViLE1BQU0sRUFBTjtRQUNFLElBQUksSUFBSSxHQUFpRCxJQUFJLENBQUM7UUFFOUQsRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNiLE9BQU8sWUFBQyxZQUFZO2dCQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7WUFDOUMsQ0FBQztZQUNELElBQUksWUFBQyxHQUFHO2dCQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMscUNBQXFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDNUQsQ0FBQztTQUNGLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsT0FBTztZQUNaLE9BQU87WUFFUCxDQUFDO1lBQ0QsSUFBSTtZQUVKLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTSxnQkFBSSxDQUFDO0lBQ1gsT0FBTyxZQUFDLEdBQUc7UUFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDRCxVQUFVLEVBQUU7UUFDVixLQUFLLEVBQUUsRUFBRTtRQUNULFlBQVksRUFBdUMsRUFBRTtLQUN0RDtDQUNGLENBQUMsQ0FBQyJ9