import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';
import style from './app.module.scss';

@Component
export default class App extends Vue {
  public render(): VNode {
    return (
      <a-layout class={style.layout}>
        <a-layout-header class={style.header}>
          <span>
            <span class={style.first_name}>Big</span>
            <span class={style.last_name}>Brother</span>
          </span>
          <a-input-search
            size="large"
            class={style.searcher}
            placeholder="输入任意关键字后回车搜索"
          />
        </a-layout-header>
        <a-layout class={style.body}>
          <a-layout-sider class={style.sider}>
            <a-menu class={style.menu}>
              <a-menu-item>项目</a-menu-item>
              <a-menu-item>探针</a-menu-item>
              <a-menu-item>Token</a-menu-item>
            </a-menu>
          </a-layout-sider>
          <a-layout-content class={style.content}>
            <router-view />
          </a-layout-content>
        </a-layout>
        <a-layout-footer class={style.footer}>
          <span>BigBrother ©2021 Created by Jimao</span>
        </a-layout-footer>
      </a-layout>
    );
  }
}
