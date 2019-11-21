import { observable, action } from 'mobx'
import $ from 'jquery'

// import iconStore from './iconStore/index'

/**
 * 键盘事件方法return false则为取消默认行为
 */
class EventStore {
    @observable Esc = null
    @observable ArrowRight = () => {
        console.log('ArrowRight');
    }
    @observable ArrowLeft = () => {
        console.log('ArrowLeft');
    }
    @observable ArrowUp = () => {
        console.log('ArrowUp');
    }
    @observable ArrowDown = () => {
        console.log('ArrowDown');
    }
    @observable F1 = () => {
        console.log('F1');
    }
    @observable F2 = () => {
        console.log('F2');
    }
    @observable F3 = () => {
        console.log('F3');
    }
    @observable F4 = () => {
        console.log('F4');
    }
    @observable F5 = () => {
        console.log('F5');
    }
    @observable F6 = () => {
        console.log('F6');
    }
    @observable F7 = () => {
        console.log('F7');
    }
    @observable F8 = () => {
        console.log('F8');
    }
    @observable F9 = () => {
        console.log('F9');
    }
    @observable F10 = () => {
        console.log('F10');
    }
    @observable F11 = () => {
        console.log('F11');
    }
    @observable F12 = null
    @observable Tab = null
    @observable Enter = () => {
        console.log('Enter')
    }
    @action CtrlD = () => {
        console.log('Ctrl+D')
    }
    @observable Ctrl1 = () => {
        console.log('Ctrl1')
    }
    @observable Ctrl2 = () => {
        console.log('Ctrl2')
    }
    @observable Ctrl3 = () => {
        console.log('Ctrl3')
    }
    @observable Ctrl4 = () => {
        console.log('Ctrl4')
    }
    @observable Ctrl5 = () => {
        console.log('Ctrl5')
    }
    @observable Ctrl6 = () => {
        console.log('Ctrl6')
    }
    @observable Ctrl7 = () => {
        console.log('Ctrl7')
    }
    @observable Ctrl8 = () => {
        console.log('Ctrl8')
    }
    @observable Ctrl9 = () => {
        console.log('Ctrl9')
    }
    @observable Ctrla = () => {
        console.log('Ctrla')
    }
    @observable UpEnter = () => {
        console.log('UpEnter')
    }

    @action Escape = () => {

    }

    @action global_F12 = () => {

    }

    @action TabToNext = () => {

    }

    @action clearOnKey = () => {
        for (var key in this) {
            this.clearItem(key)
        }
    }

    @action clearItem = (key) => {
        this[key] = ['Esc', 'F12', 'Tab'].indexOf(key) >= 0 ? null : function () {
            console.log(key);
        }
    }

    @action CtrlD = () => {
        console.log('Ctrl+D')
    }

    @action CtrlArrowRight = () => {
        console.log('CtrlArrowRight');
    }

    @action CtrlArrowLeft = () => {
        console.log('CtrlArrowLeft');
    }

    //解决手机端滚动页面时触发点击事件
    // @action stopTouchendPropagationAfterScroll = () => {
    //     var locked = false;
    //     window.addEventListener('touchmove', function (ev) {
    //         locked || (locked = true, window.addEventListener('touchend', stopTouchendPropagation, true));
    //     }, true);

    //     function stopTouchendPropagation(ev) {
    //         ev.stopPropagation();
    //         window.removeEventListener('touchend', stopTouchendPropagation, true);
    //         locked = false;
    //     }
    // }

    @action handleOnKey = () => {
        let timer = null
        $(document).on('keydown', event => {
            console.log(event)
            let returnVal = true
            // if (!iconStore.visible && !iconStore.sqAction && !iconStore.errVisible) {
            switch (event.keyCode) {
                case 40:
                    returnVal = this.ArrowDown(event)
                    break;
                case 39:
                    if (event.ctrlKey) {
                        returnVal = this.CtrlArrowRight(event)
                    } else {
                        returnVal = this.ArrowRight(event)
                    }
                    break;
                case 38:
                    returnVal = this.ArrowUp(event)
                    break;
                case 37:
                    if (event.ctrlKey) {
                        returnVal = this.CtrlArrowLeft(event)
                    } else {
                        returnVal = this.ArrowLeft(event)
                    }
                    break;
                case 112:
                    returnVal = this.F1(event)
                    break;
                case 113:
                    returnVal = this.F2(event)
                    break;
                case 114:
                    returnVal = this.F3(event)
                    break;
                case 115:
                    returnVal = this.F4(event)
                    break;
                case 116:
                    returnVal = this.F5(event)
                    break;
                case 117:
                    returnVal = this.F6(event)
                    break;
                case 118:
                    returnVal = this.F7(event)
                    break;
                case 119:
                    returnVal = this.F8(event)
                    break;
                case 120:
                    returnVal = this.F9(event)
                    // iconStore.isEnter = true
                    break;
                case 121:
                    returnVal = this.F10(event)
                    break;
                case 122:
                    returnVal = this.F11(event)
                    break;
                case 123:
                    returnVal = typeof this.F12 === 'function' ? this.F12(event) : this.global_F12(event)
                    break;
                case 9:
                    returnVal = typeof this.Tab === 'function' ? this.Tab(event) : this.TabToNext(event)
                    break;
                case 68:
                    if (event.ctrlKey) {
                        returnVal = this.CtrlD(event)
                    }
                    break;
                case 49:
                    if (event.ctrlKey) {
                        returnVal = this.Ctrl1(event)
                    }
                    break;
                case 50:
                    if (event.ctrlKey) {
                        returnVal = this.Ctrl2(event)
                    }
                    break;
                case 51:
                    if (event.ctrlKey) {
                        returnVal = this.Ctrl3(event)
                    }
                    break;
                case 52:
                    if (event.ctrlKey) {
                        returnVal = this.Ctrl4(event)
                    }
                    break;
                case 53:
                    if (event.ctrlKey) {
                        returnVal = this.Ctrl5(event)
                    }
                    break;
                case 54:
                    if (event.ctrlKey) {
                        returnVal = this.Ctrl6(event)
                    }
                    break;
                case 55:
                    if (event.ctrlKey) {
                        returnVal = this.Ctrl7(event)
                    }
                    break;
                case 56:
                    if (event.ctrlKey) {
                        returnVal = this.Ctrl8(event)
                    }
                    break;
                case 57:
                    if (event.ctrlKey) {
                        returnVal = this.Ctrl9(event)
                    }
                    break;
                case 65:
                    if (event.ctrlKey) {
                        returnVal = this.Ctrla(event)
                    }
                    break;
                case 13:
                    returnVal = this.Enter(event)
                    // iconStore.isEnter = true
                    break
                case 27:
                    returnVal = typeof this.Esc === 'function' ? this.Esc(event) : this.Escape(event)
                    // iconStore.isEnter = true
                    break;
            }
            // }
            //取消事件默认行为
            window.onhelp = function () { return false };
            if (returnVal === false) {
                if (event && event.preventDefault)
                    event.preventDefault();
                //IE中阻止函数器默认动作的方式
                else
                    window.event.returnValue = false;
                return false;
            }
        }).on('keydown.select', '.ant-select-selection[data-enter]:visible', event => {
            /**
             *  处理antd select回车下拉框隐藏
             */
            if (event.keyCode !== 13 || $('.ant-select-dropdown:visible').length
                || $(`style[data-id=${$(event.currentTarget).attr('aria-controls')}]`).length)
                return
            $(event.currentTarget).parent().removeClass('ant-select-open')
            $(document.body).append(`
                    <style type="text/css" data-id="enter-select">
                        .ant-select-dropdown{display: none!important;}
                        .ant-select-arrow .ant-select-arrow-icon svg{transform: rotate(0deg)!important;}
                    <\/style>
            `)
            event.currentTarget.click()
        }).on('keyup.select', '.ant-select-selection[data-enter]:visible', event => {
            /**
             *  清除antd select回车后下拉框隐藏样式
             */
            if (event.keyCode !== 13)
                return
            clearTimeout(timer)
            timer = setTimeout(() => {
                $(`style[data-id=enter-select]`).remove()
                timer = null
            }, 200)
        }).on('keyup.enter', '*[data-enter]:visible', event => {
            /**
             * 回车focus到下一个data-enter节点
             * 当节点存在data-query属性时，必须手动调用nextEnter方法
             */
            if (event.keyCode !== 13)
                return

            if (event.currentTarget.hasAttribute('data-query'))
                return;

            //当页面出现显示状态的modal层时，禁用data-enter事件
            if ($('*[data-alert]:visible').length)
                return;

            this.nextEnter(event)
        })
    }

    /**
     * 聚焦状态跳到下一个含有[data-key]的节点（已过滤含有disabled属性的节点）
     * @param event
     */






    /**
     * 以新窗口形式打开新路由页面 再跳转回原来的页面 下载
     * @param path
     */
    // @action openWindowDownload = (url, path) => {
    //     window.handleF12 = () => {
    //         window.location.reload()
    //     }
    //     window.open(url, `${location.pathname}#${path}`)
    // }

    /**
    * 以新窗口形式打开新路由页面
    * @param path
    */
    @action closeWindow = (history, isClosePrePage, reload) => {
        if (window.opener) {
            if (isClosePrePage && window.opener) {
                if (window.opener.opener && window.opener.opener.setLoadingHide) {
                    window.opener.opener.setLoadingHide()
                }
                reload && window.opener.opener.handleF12()
                window.close()
                window.opener.close()
            } else if (window.opener && window.opener.setLoadingHide) {
                window.opener.setLoadingHide()
                reload && window.opener.handleF12()
                window.close()
            }
        } else {
            history.go(-1)
        }
    }
}

export default new EventStore()