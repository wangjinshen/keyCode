import { action, observable } from "mobx";

export default abstract class APageModel {
    @observable F1 = (): boolean => {
        console.log("F1");
        return false;
    };
    @observable F2 = (): boolean => {
        console.log("F2");
        return false;
    };
    @observable F3 = (): boolean => {
        console.log("F3");
        return false;
    };
    @observable F4 = (): boolean => {
        console.log("F4");
        return false;
    };
    @observable F5 = (): boolean => {
        console.log("F5");
        return false;
    };
    @observable F6 = (): boolean => {
        console.log("F6");
        return false;
    };
    @observable F7 = (): boolean => {
        console.log("F7");
        return false;
    };
    @observable F8 = (): boolean => {
        console.log("F8");
        return false;
    };
    @observable F9 = (): boolean => {
        console.log("F9");
        return false;
    };
    @observable F10 = (): boolean => {
        console.log("F10");
        return false;
    };
    @observable ctrl_Q = (): boolean => {
        console.log("ctrl+Q");
        return false;
    };

    /**
     * 监听键盘事件
     */
    @action
    handleOnKey(): void {
        document.onkeydown = (e) => {
            console.log(e);

            const { keyCode } = e;
            /**
             * 页面中是否使用键盘事件
             *
             *  */
            let returnValue = false;
            //   执行
            switch (keyCode) {
                case 112:
                    returnValue = this.F1();
                    break;

                case 113:
                    returnValue = this.F2();
                    break;
                case 114:
                    returnValue = this.F3();
                    break;
                case 115:
                    returnValue = this.F4();
                    break;
                case 116:
                    returnValue = this.F5();
                    break;
                case 117:
                    returnValue = this.F6();
                    break;
                case 118:
                    returnValue = this.F7();
                    break;
                case 119:
                    returnValue = this.F8();
                    break;
                case 120:
                    returnValue = this.F9();
                    break;
                case 121:
                    returnValue = this.F10();
                    break;
                case 81:
                    returnValue = this.ctrl_Q();
                    break;
            }
            if (returnValue) {
                e.preventDefault();
            }
        };
    }
}