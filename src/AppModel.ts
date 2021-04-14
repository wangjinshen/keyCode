import { action, observable } from "mobx";
import APageModel from './abstract/APageModel';

export default class AppModule extends APageModel {
  @observable keyName = "";
  F1 = () => {
    this.setKeyName("F1");
    return true;
  };
  F2 = () => {
    this.setKeyName("F2");
    return true;
  };
  F3 = () => {
    this.setKeyName("F3");
    return true;
  };
  F4 = () => {
    this.setKeyName("F4");
    return true;
  };
  F5 = () => {
    this.setKeyName("F5");
    return true;
  };
  F6 = () => {
    this.setKeyName("F6");
    return true;
  };
  F7 = () => {
    this.setKeyName("F7");
    return true;
  };
  F8 = () => {
    this.setKeyName("F8");
    return true;
  };
  F9 = () => {
    this.setKeyName("F9");
    return true;
  };
  ctrl_Q = () => {
    this.setKeyName("ctrl+Q");
    return true;
  }

  @action
  setKeyName(value: string): void {
    this.keyName = value;
  }
}