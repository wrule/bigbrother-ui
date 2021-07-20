import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';
import style from './app.module.scss';

@Component
export default class App extends Vue {
  public render(): VNode {
    return (
      <a-layout class={style['components-layout-demo-fixed']}>
        <a-layout-header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div class="logo" />
        </a-layout-header>
        <a-layout>
          <a-layout-sider
            width="200"
            style={{ padding: '0 50px', marginTop: '64px', backgroundColor: 'white' }}>
          </a-layout-sider>
          <a-layout-content
            style={{ padding: '0 50px', marginTop: '64px' }}>
            <div style={{ background: '#fff', padding: '24px', minHeight: '380px' }}>
              Content
            </div>
          </a-layout-content>
        </a-layout>
        <a-layout-footer style={{ textAlign: 'center' }}>
          BigBrother ©2021 Created by Jimao
        </a-layout-footer>
      </a-layout>
    );
  }
}
