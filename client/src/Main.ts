//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer
{
    protected createChildren(): void
    {
        super.createChildren();
        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        this.initLifecycle();
        await RES.loadConfig("resource/default.res.json", "resource/");
        await RES.loadConfig("resource/war.res.json", "resource/");
        await RES.loadConfig("resource/home.res.json", "resource/");
        await RES.loadConfig("resource/config.res.json", "resource/");
        await this.loadTheme();
        this.createGameScene();
    }

    private initLifecycle()
    {
        window.onerror = function(msg, url, line, col, error)
        {
            console.warn(error.stack);
        }

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            // egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            // egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }
    
    protected createGameScene(): void {
        war.WarDataMgr.Ins();
        LayerManager.Ins().initLayer(this);
        // ViewManager.Ins().open(home.MenuPanel);
        // let warData = new war.WarPanelData()
        // let warPanel = new war.WarPanel()
        // this.addChild(warPanel)
        // warPanel.initData(warData)
        // warPanel.initView();

        // this.testLb = new eui.Label();
        // this.testLb.y = this.testLb.x = 200;
        // this.testLb.textColor = 0xffffff;
        // this.testLb.text = "1111"
        // this.addChild(this.testLb);
        // let motion = new egret.Motion();
        // motion.addEventListener(egret.Event.CHANGE, this.OnMotionChange, this);
        // motion.start();

        // window.addEventListener('deviceorientation', this.oriListener, false);
        // window.addEventListener('MozOrientation', this.oriListener, false); //为firefox所用
        // window.addEventListener('devicemotion', this.oriListener, false);   //重力感应
        // window.addEventListener('deviceorientation', function(event) { 
        //     let alpha = event.alpha; 
        //     let beta = event.beta; 
        //     let gamma = event.gamma; 
        //     alert(1)
        // }, false);
        
        // 运用HTML5的deviceMotion，调用重力感应事件 
        // if(window["DeviceMotionEvent"] == true){ 
        //     // document.addEventListener('devicemotion', deviceMotionHandler, false) 
        //     alert(1)
        // }
        // else
        // {
        //     alert(2)
        // }
    }
    private testLb:eui.Label;

    private OnMotionChange(e:egret.MotionEvent)
    {
        this.testLb.text = `加速度：\nx:${e.acceleration.x}\ny:${e.acceleration.y}\nz:${e.acceleration.z}`;
    }

    private oriListener(e)
    {
        alert(e);
    }
}