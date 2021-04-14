import APage from './abstract/APage';
import AppModule from './AppModel';
import { observer } from "mobx-react";

interface AppProps {

}
interface AppState extends AppModule {
  keyName: string;
}
@observer
class App extends APage<AppProps, AppState>{
  creactModel() {
    return new AppModule()
  }
  componentDidMount() {
    this.mode.handleOnKey()
    //监听
  }
  public render() {
    let { keyName } = this.mode;
    return <div>你刚刚按下了: {keyName}</div>;
  }
}
export default App;
