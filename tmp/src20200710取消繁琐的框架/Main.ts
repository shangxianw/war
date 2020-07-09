import DemoPanel = home.DemoPanel;
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
        applyMixins(DataBase, [DataBaseMixin]);
        applyMixins(UIBase, [DataBaseMixin, UIBaseMixin]);
        applyMixins(WItemRenderBase, [DataBaseMixin, UIBaseMixin]);
        GameUtils.main = this;
        LayerManager.Ins();
        NetManager.Ins();
        NetManager.Ins();
        // war.WarDataMgr.Ins();
        // SocketManager.Ins()
        // ViewManager.Ins().open(home.LoginPanel);
        // ViewManager.Ins().open(war.WarMatchPanel);
    }
}

function neww(cls:any):any
{
    return PoolManager.Ins().pop(cls);
}

function deletee<T>(cls:T)
{
    PoolManager.Ins().push(cls);
}

function removee<T>(cls:T)
{
    PoolManager.Ins().push(cls);
}
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        })
    });
}