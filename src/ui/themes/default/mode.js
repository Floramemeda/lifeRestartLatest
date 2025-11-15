export default class Mode extends ui.view.DefaultTheme.ModeUI {
    constructor() {
        super();
        this.btnCustom.on(Laya.Event.CLICK, this, ()=>$ui.switchView(UI.pages.TALENT));
        this.btnCelebrity.removeSelf();
    }
}